<template>
  <div
    class="bg-gray-400 bg-opacity-50 flex justify-center items-center fixed top-0 bottom-0 left-0 right-0"
  >
    <div class="sm:w-1/2 rounded-xl relative pt-5 pb-10 px-10 bg-white">
      <div class="flex justify-between">
        <span class="font-semibold text-4xl"> Удалить аккаунт</span>
        <span
          @click="$emit('close')"
          class="cursor-pointer bg-red-600 text-white block w-10 h-10 inline-flex items-center justify-center rounded-xl"
          >X</span
        >
      </div>
      <hr class="mt-5" />
      <div class="mt-5">
        <span
          >Удаление вашего аккаунта приведет к удалению всей вашей информации,
          вопросов и ответов.</span
        ><br />

        <div v-if="isError" class="text-red-600">
          Неверный пароль, напишите верно
        </div>
        <label for="" class="mt-5 mb-2 block text-sm text-gray-400">
          Для подтверждения введите свой пароль</label
        >
        <div class="sm:flex items-center justify-between">
          <div class="sm:w-1/2">
            <input
              type="password"
              v-model="password"
              class="py-2 w-full rounded-xl px-4 border-2 border-gray-400"
            />
          </div>
          <div class="sm:w-1/2 sm:flex justify-end">
            <button
              @click.prevent="deleteUser"
              class="bg-red-600 text-xl rounded-xl w-full sm:mt-0 mt-5 sm:w-3/4 py-2 text-white px-4"
            >
              Удалить аккаунт
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: "",
      isError: false
    };
  },
  methods: {
    deleteUser() {
      const formData = new FormData();
      formData.append("password", this.password);
      this.$axios
        .post("user-delete/", formData)
        .then(res => {
          console.log(res);
          this.$router.push("/");
        })
        .catch(err => {
          console.log(err);
          this.isError = true;
        });
      console.log(this.isWrongPassword, this.isError);
    }
  }
};
</script>
