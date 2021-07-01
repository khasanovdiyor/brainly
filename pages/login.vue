<template>
  <div class="login bg-gray-200">
    <div class="container mx-auto h-screen flex items-center">
      <div class="w-full max-w-sm mx-auto">
        <form
          @submit.prevent="userLogin"
          method="post"
          class="bg-white shadow-xl rounded-xl px-8 pt-6 pb-8 mb-4 align-middle"
        >
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="username">
              Имя пользователя
            </label>
            <input
              name="username"
              v-model.trim="$v.login.username.$model"
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
            <p
              v-if="!$v.login.username.required && $v.login.username.$dirty"
              class="text-red-500 text-sm italic"
            >
              Пожалуйста, введите имя пользователя.
            </p>
          </div>
          <div class="mb-3">
            <label class="block text-gray-700 font-bold mb-2" for="password">
              Пароль
            </label>
            <input
              name="password"
              v-model.trim="$v.login.password.$model"
              class="
                shadow
                appearance-none
                border
                rounded
                w-full
                py-2
                px-3
                text-gray-700
                mb-3
                leading-tight
                focus:outline-none
                focus:shadow-outline
              "
              id="password"
              type="password"
              placeholder="******************"
            />
            <p
              v-if="!$v.login.password.required && $v.login.password.$dirty"
              class="text-red-500 text-sm italic"
            >
              Пожалуйста, введите пароль.
            </p>
          </div>
          <p
            v-if="isWrongLogin && login.username.length > 0"
            class="text-red-500 italic mb-3"
          >
            Неверное имя пользователя или пароль
          </p>
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
              Войти
            </button>
            <nuxt-link
              to="/registration"
              class="
                inline-block
                align-baseline
                font-bold
                text-sm text-blue-500
                hover:text-blue-800
              "
            >
              Еще нет учетной записи?
            </nuxt-link>
          </div>
          <!-- <div class="flex justify-end">
            <nuxt-link
              to="/reset-password"
              class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            >
              Забыл пароль?
            </nuxt-link>
          </div> -->
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { required, password } from "vuelidate/lib/validators";
export default {
  auth: false,
  data() {
    return {
      login: {
        username: "",
        password: ""
      },
      isWrongLogin: false
    };
  },
  validations: {
    login: {
      username: {
        required
      },
      password: {
        required
      }
    }
  },
  methods: {
    userLogin() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        let loader = this.$loading.show();
        let response = this.$auth
          .loginWith("local", { data: this.login })
          .then(res => {
            if (res.data.response == "user not found") {
              this.isWrongLogin = true;
            } else {
              this.isWrongLogin = false;
              this.$router.push("/question-list");
            }
          })
          .catch(err => {
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
