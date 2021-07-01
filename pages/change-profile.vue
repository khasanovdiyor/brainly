<template>
  <div>
    <TheHeader :user_drop="user_dropdown" />
    <!-- <Notification  :message="message" :classMsg="classMsg" /> -->
    <div @click="user_dropdown = false" class="bg-gray-100 pt-32 change-max">
      <div class="w-full md:w-3/4 mx-auto p-10 md:rounded-3xl bg-white md:flex">
        <div class="md:w-2/3 mb-10">
          <h1 class="font-semibold text-lg mb-4">Редактировать профиль</h1>
          <hr class="mb-5" />
          <div class="">
            <form method="post" enctype="multipart/form-data">
              <div>
                <input
                  type="text"
                  v-model.trim="$v.username.$model"
                  v-debounce:500ms="checkUsername"
                  placeholder="Введите новое имя пользователя"
                  class="w-2/3 mb-2 text-sm bg-gray-100 p-2 rounded-lg"
                />

                <div v-if="isUserTaken" class="text-red-600">
                  Такое имя пользователя уже существует
                </div>
                <div
                  v-if="!$v.username.required && $v.username.$dirty"
                  class="text-red-600"
                >
                  Это поле обязательно к заполнению
                </div>
                <div
                  v-if="!$v.username.alphaNum && $v.username.$dirty"
                  class="text-red-600"
                >
                  Имя пользователя должно состоять из английских букв и цифр.
                </div>
                <div
                  v-if="$auth.user.username == username"
                  class="text-red-600"
                >
                  Имя пользователя должно отличаться от вашего старого
                </div>
                <div v-if="!$v.username.minLength" class="text-red-600">
                  Имя пользователя должно содержать от
                  {{ $v.username.$params.minLength.min }}
                  {{ $v.username.$params.maxLength.max }} до символов
                </div>
                <button
                  type="submit"
                  @click="updateUsername()"
                  class="bg-blue-500 hover:bg-blue-600 text-white py-1 mb-5 px-2 rounded-lg mt-2"
                >
                  Изменит имя пользователя
                </button>
                <p
                  class="text-green-400"
                  v-if="submitStatus === 'OK' && SuccessUsername"
                >
                  Имя пользователя успешно изменено
                </p>
                <p class="text-red-600" v-if="submitStatus === 'ERROR'">
                  Пожалуйста, заполните форму правильно.
                </p>
                <p class="text-red-600" v-if="errorUsername">
                  Произошла непредвиденная ошибка, попробуйте еще раз
                </p>
                <p class="text-green-400" v-if="submitStatus === 'PENDING'">
                  Отправка...
                </p>
              </div>
              <div>
                <input
                  type="password"
                  v-model.trim="$v.currentPassword.$model"
                  placeholder="Введите текущий  пароль"
                  class="w-2/3 mb-2 text-sm bg-gray-100 p-2 rounded-lg"
                />
                <div
                  v-if="
                    !$v.currentPassword.required && $v.currentPassword.$dirty
                  "
                  class="text-red-600"
                >
                  Это поле обязательно к заполнению
                </div>
                <input
                  type="password"
                  v-model.trim="$v.newPassword.$model"
                  placeholder="Введите новый пароль"
                  class="w-2/3 mb-2 text-sm bg-gray-100 p-2 rounded-lg"
                />
                <div
                  v-if="!$v.newPassword.required && $v.newPassword.$dirty"
                  class="text-red-600"
                >
                  Это поле обязательно к заполнению
                </div>
                <div v-if="!$v.newPassword.minLength" class="text-red-600">
                  Пароль должен состоять не менее чем из
                  {{ $v.newPassword.$params.minLength.min }}
                  символов
                </div>
                <input
                  type="password"
                  v-model="$v.confirmNewPassword.$model"
                  @focus="isConfirmOnFocus = true"
                  @blur="isConfirmOnFocus = false"
                  placeholder="Подтвердите новый пароль"
                  class="w-2/3 mb-2 text-sm bg-gray-100 p-2 rounded-lg"
                />
                <div
                  v-if="
                    !$v.confirmNewPassword.required &&
                    $v.confirmNewPassword.$dirty
                  "
                  class="text-red-600"
                >
                  Это поле обязательно к заполнению
                </div>
                <div
                  v-if="
                    newPassword != confirmNewPassword &&
                    isConfirmOnFocus &&
                    confirmNewPassword.length > 0
                  "
                  class="text-red-600"
                >
                  Подтверждение пароля должно совпадать с паролем
                </div>
                <br />
                <button
                  type="submit"
                  @click.prevent="updatePass()"
                  class="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded-lg mt-2"
                >
                  Изменит пароль
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="md:w-1/3 md:ml-5">
          <div class="flex bg-purple-100 p-2">
            <div class="w-16 mr-2">
              <img
                v-if="$auth.user.image"
                :src="$auth.user.image"
                alt="profile photo"
                class="w-full"
              />
              <img
                v-else
                src="@/assets/images/profile-photo.png"
                alt="profile photo"
                class="w-full"
              />
            </div>

            <div class="">
              <span class="text-xs font-semibold">Здравствуйте, </span
              ><span class="text-xs font-semibold">{{
                $auth.user.username
              }}</span
              ><br />
              <span class="text-xs"
                >У Вас
                <span class="text-yellow-600 font-semibold text-lg">{{
                  $auth.user.rating
                }}</span>
                б
                <a href="#" class="text-blue-600 font-semibold hover:underline"
                  >хотите больше?</a
                ></span
              >
            </div>
          </div>
          <span class="text-xs font-semibold"
            >{{ requiredPoint }} б
            <span class="font-semibold text-lg ml-2">до статуса</span>
            <nuxt-link
              to="/levels"
              href=""
              class="text-green-400 font-semibold text-lg hover:underline"
              ><span class=" ">{{ nextLevel }}</span></nuxt-link
            >
          </span>
          <div class="mt-10">
            <label
              for="file"
              class="w-full block cursor-pointer"
              :class="{ danger: isFileEmpty }"
            >
              Выберите аватар чтобы отправить
              <input
                type="file"
                id="file"
                ref="file"
                class="w-full pt-2"
                @change="selectFile"
              />
            </label>
            <div v-if="fileValidation()" class="text-red-600">
              Изображение должно быть в формате pdf, jpeg, jpg или gif и
              размером менее 5 МБ.
            </div>
            <button
              type="submit"
              @click.prevent="updateUserImage()"
              class="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded-lg mt-2"
            >
              Изменит аватар
            </button>
          </div>

          <div class="mt-24">
            <button
              @click="showDeleteUser = true"
              class="flex items-center hover:bg-gray-300 bg-gray-100 p-1 mb-2 rounded-md text-xs text-gray-400"
            >
              <div class="inline-block">
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </div>
              Я хочу удалить свой аккаунт
            </button>
          </div>
        </div>
      </div>
    </div>
    <delete-user-modal v-if="showDeleteUser" @close="showDeleteUser = false" />
    <TheFooter />
  </div>
</template>

<script>
import {
  required,
  minLength,
  maxLength,
  password,
  alphaNum
} from "vuelidate/lib/validators";

export default {
  auth: false,
  data() {
    return {
      isConfirmOnFocus: false,
      user_dropdown: false,
      username: "",
      file: "",
      email: "",
      newPassword: "",
      confirmNewPassword: "",
      currentPassword: "",
      nextLevel: "",
      requiredPoint: 0,
      errorFile: false,
      successPass: false,
      errorPass: false,
      successUsername: false,
      errorUsername: false,
      message: "",
      isUserTaken: false,
      isFileEmpty: false,
      errorFileTypeSize: false,
      users: [],
      showDeleteUser: false,
      submitStatus: ""
    };
  },
  validations: {
    username: {
      required,
      alphaNum,
      minLength: minLength(4),
      maxLength: maxLength(20)
    },
    currentPassword: {
      required
    },
    newPassword: {
      required,
      minLength: minLength(8)
    },
    confirmNewPassword: {
      required
    },
    file: {
      required
    }
  },
  mounted() {
    this.levelCheck();
  },

  methods: {
    selectFile() {
      this.file = this.$refs.file.files[0];
      this.isFileEmpty = false;
    },
    fileValidation() {
      var filePath = this.file.value;
      // Allowing file type
      var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

      if (!allowedExtensions.exec(filePath) && this.file.size > 5242880) {
        //check if the image is bigger than 5MB
        this.errorFile = true;
        filePath = "";
        return true;
      } else return false;
    },
    updateUsername() {
      const formData = new FormData();
      formData.append("username", this.username);
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        let loader = this.$loading.show();
        this.$axios
          .post("user-update/", formData)
          .then(res => {
            this.successUsername = true;
          })
          .catch(err => {
            this.errorUsername = true;
          })
          .finally(() => loader.hide());
        this.submitStatus = "PENDING";
        setTimeout(() => {
          this.submitStatus = "OK";
        }, 500);
      }
    },
    updateUserImage() {
      if (this.file == "") {
        this.isFileEmpty = true;
      } else {
        let loader = this.$loading.show();
        const formData = new FormData();
        formData.append("user_image", this.file);
        if (this.fileValidation()) {
          this.errorFileTypeSize = true;
        } else {
          this.$axios
            .post("user-update/", formData)
            .then(res => {
              this.successFileSubmit = true;
            })
            .catch(err => {
              this.errorFileSubmit = true;
            })
            .finally(() => loader.hide());
        }
      }
    },
    updatePass() {
      const formData = new FormData();
      formData.append("old_password", this.currentPassword);
      formData.append("new_password", this.newPassword);
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        let loader = this.$loading.show();
        this.$axios
          .post("change-password/", formData)
          .then(res => {
            this.SuccessPass = true;
          })
          .catch(err => {
            console.log(err);
            this.ErrorPass = true;
          })
          .finally(() => loader.hide());
        this.submitStatus = "PENDING";
        setTimeout(() => {
          this.submitStatus = "OK";
        }, 500);
      }
    },
    checkUsername() {
      this.$axios
        .$get("users/")
        .then(res => {
          this.users = res.results;
        })
        .catch(err => {});
      const exist = element => element.username === this.username;
      this.isUserTaken = this.users.some(exist);
    },
    levelCheck() {
      let point = this.$auth.user.rating;
      let level = this.$auth.user.status;
      if (level == "новичок") {
        this.requiredPoint = 100 - point;
        this.nextLevel = "середнячок";
      } else if (level == "середнячок") {
        this.requiredPoint = 300 - point;
        this.nextLevel = "хорошист";
      } else if (level == "хорошист") {
        this.requiredPoint = 500 - point;
        this.nextLevel = "умный";
      } else if (level == "умный") {
        this.requiredPoint = 1000 - point;
        this.nextLevel = "отличник";
      } else if (level == "отличник") {
        this.requiredPoint = 3000 - point;
        this.nextLevel = "ученый";
      } else if (level == "ученый") {
        this.requiredPoint = 5000 - point;
        this.nextLevel = "почетный грамотей";
      } else if (level == "почетный грамотей") {
        this.requiredPoint = 8000 - point;
        this.nextLevel = "профессор";
      }
    },
    noScroll() {
      if (this.showDeleteUser) {
        window.scrollTo(0, 0);
      }
    }
  }
};
</script>

<style></style>
