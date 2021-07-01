<template>
  <div
    class="bg-gray-400 bg-opacity-75 flex justify-center items-center fixed top-0 bottom-0 left-0 right-0"
  >
    <div class="sm:w-1/3 rounded-xl relative pt-5 pb-5 px-10 bg-white">
      <span class="font-bold text-lg mb-10 block"
        >Вы действительно хотите удалить этот вопрос?</span
      >
      <span v-if="error" class="text-red-600"
        >Непредвиденная ошибка. Повторите попытку позже.</span
      >
      <div class="flex justify-between">
        <button
          @click="$emit('close')"
          class="bg-gray-600 rounded-xl font-bold text-white py-2 px-4 w-1/3"
        >
          Нет
        </button>
        <button
          @click.prevent="deleteQuestion"
          class="bg-red-600 rounded-xl font-bold text-white px-4 py-2 w-1/3"
        >
          Да
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      error: false
    };
  },
  props: {
    questionId: {
      type: Number,
      required: true
    }
  },
  methods: {
    deleteQuestion() {
      const that = this;
      this.$axios
        .$delete(`question-delete/${this.questionId}/`)
        .then(res => {
          console.log(res);
          that.$emit("close");
          that.$router.go();
        })
        .catch(err => {
          this.error = true;
        });
    }
  }
};
</script>

<style></style>
