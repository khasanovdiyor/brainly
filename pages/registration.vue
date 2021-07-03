<template>
  <div class="registration h-screen pt-10 pb-24 bg-gray-200">
    <h2 class="mx-auto sm:w-56 mb-10 text-4xl font-bold">Регистрация</h2>
    <div class="container mx-auto flex items-center">
      <div class="w-full max-w-sm mx-auto">
        <form
          @submit.prevent="registerUser"
          enctype="multipart/form-data"
          class="
            bg-white
            shadow-lg
            border
            rounded-xl
            px-8
            pt-8
            pb-8
            mb-4
            align-middle
          "
        >
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Имя пользователя
            </label>
            <input
              name="username"
              v-model.trim="$v.user.username.$model"
              v-debounce:500ms="checkUsername"
              class="
                shadow
                appearance-none
                border
                rounded
                w-full
                py-2
                px-3
                text-gray-700
                leading-tight
                focus:outline-none
                focus:shadow-outline
              "
              id="username"
              type="text"
              placeholder="Имя пользователя"
            />
            <div v-if="usernameCheck" class="text-red-600">
              {{ usernameCheck }}
            </div>
            <div
              v-if="!$v.user.username.required && $v.user.username.$dirty"
              class="text-red-600"
            >
              Это поле обязательно к заполнению
            </div>
            <div
              v-if="!$v.user.username.alphaNum && $v.user.username.$dirty"
              class="text-red-600"
            >
              Имя пользователя должно состоять из английских букв и цифр.
            </div>
            <div v-if="!$v.user.username.minLength" class="text-red-600">
              Имя пользователя должно содержать от
              {{ $v.user.username.$params.minLength.min }}
              {{ $v.user.username.$params.maxLength.max }} до символов
            </div>
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Электронная почта
            </label>
            <input
              name="email"
              v-model.trim="$v.user.email.$model"
              class="
                shadow
                appearance-none
                border
                rounded
                w-full
                py-2
                px-3
                text-gray-700
                leading-tight
                focus:outline-none
                focus:shadow-outline
              "
              type="email"
              placeholder="Электронная почта"
            />
            <div
              v-if="!$v.user.email.required && $v.user.email.$dirty"
              class="text-red-600"
            >
              Это поле обязательно к заполнению
            </div>
            <div v-if="!$v.user.email.email" class="text-red-600">
              Пожалуйста, напишите действующий адрес электронной почты
            </div>
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Пароль
            </label>
            <input
              name="password"
              v-model.trim="$v.user.password.$model"
              class="
                shadow
                appearance-none
                border
                rounded
                w-full
                py-2
                px-3
                text-gray-700
                leading-tight
                focus:outline-none
                focus:shadow-outline
              "
              id="password"
              type="password"
              placeholder="************"
            />
            <div
              v-if="!$v.user.password.required && $v.user.password.$dirty"
              class="text-red-600"
            >
              Это поле обязательно к заполнению
            </div>
            <div v-if="!$v.user.password.minLength" class="text-red-600">
              Пароль должен состоять не менее чем из
              {{ $v.user.password.$params.minLength.min }}
              символов
            </div>
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="confirmpassword"
            >
              Подтверждение пароля
            </label>
            <input
              name="confirmPassword"
              v-model.trim="$v.confirmPassword.$model"
              @focus="isConfirmOnFocus = true"
              @blur="isConfirmOnFocus = false"
              class="
                shadow
                appearance-none
                border
                rounded
                w-full
                py-2
                px-3
                text-gray-700
                leading-tight
                focus:outline-none
                focus:shadow-outline
              "
              id="confirmpassword"
              type="password"
              placeholder="************"
            />
            <div
              v-if="!$v.confirmPassword.required && $v.confirmPassword.$dirty"
              class="text-red-600"
            >
              Это поле обязательно к заполнению
            </div>
            <div
              v-if="
                user.password != confirmPassword &&
                isConfirmOnFocus &&
                confirmPassword.length > 0
              "
              class="text-red-600"
            >
              Подтверждение пароля должно совпадать с паролем
            </div>
          </div>
          <div class="flex items-center justify-between">
            <button
              class="
                bg-blue-500
                hover:bg-blue-700
                text-white
                font-bold
                py-2
                px-4
                rounded
                focus:outline-none
                focus:shadow-outline
              "
              type="submit"
            >
              Регистрация
            </button>
            <nuxt-link
              to="login"
              class="
                inline-block
                align-baseline
                font-bold
                text-sm text-blue-500
                hover:text-blue-800
              "
            >
              У вас уже есть аккаунт?
            </nuxt-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {
  required,
  email,
  minLength,
  maxLength,
  password,
  alphaNum
} from "vuelidate/lib/validators";
export default {
  auth: false,
  middleware: "redirectIfLoggedIn",
  data() {
    return {
      user: {
        username: "",
        email: "",
        password: ""
      },
      confirmPassword: "",
      usernameCheck: "",
      isConfirmOnFocus: false
    };
  },
  validations: {
    user: {
      username: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(20),
        alphaNum
      },
      password: {
        required,
        minLength: minLength(8)
      },
      email: {
        email,
        required
      }
    },
    confirmPassword: {
      required
    }
  },
  methods: {
    checkUsername() {
      this.$axios
        .post("username-check/", { username: this.user.username })
        .then(res => {
          if (res.data.status != 200) this.usernameCheck = res.data.data;
          else this.usernameCheck = "";
        })
        .catch(err => {});
    },
    registerUser() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        let loader = this.$loading.show();

        this.$axios
          .post("register/", this.user)
          .then(res => {
            this.$toast.success("Регистрация прошла успешно");
            this.user.username = "";
            this.user.password = "";
            this.user.email = "";
            setTimeout(() => {
              this.$router.push("/login");
            }, 500);
          })
          .catch(err => {
            console.log(err);
            this.$toast.error(
              err.response.data || "Произошла ошибка, попробуйте еще раз"
            );
          })
          .finally(() => loader.hide());
      }
    }
  }
};
</script>

<style></style>
