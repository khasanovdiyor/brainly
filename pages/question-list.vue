<template>
  <div>
    <TheHeader :search="true" />
    <QuestionModal v-if="question_modal" @close="question_modal = false" />
    <main class="flex flex-col">
      <div class="md:px-10 w-full mt-24">
        <div class="w-full flex flex-wrap">
          <Subjects />
          <div
            class="my-2 bg-blue-100 sm:bg-white w-full lg:w-7/12 sm:px-2 md:px-6"
          >
            <!-- component -->
            <Question
              v-for="question in questions"
              :key="question.id"
              :question="question"
              :subject="question.subject"
            />
            <div class="flex my-5" v-if="isExistMore">
              <button
                @click="loadMoreQuestions"
                class="px-4 py-2 mx-auto border-2 border-black rounded-xl"
              >
                Показать больше
              </button>
            </div>
          </div>
          <div class="my-2 h-auto px-2 md:px-6 lg:px-0 w-full lg:w-3/12">
            <BestUsers />
          </div>
        </div>
      </div>

      <div
        @click="question_modal = true"
        class="self-end flex sticky lg:hidden items-center z-20 bottom-0 p-5"
      >
        <div
          class="capitilize px-2 rounded-lg py-1 text-white bg-green-300 mr-2 text-xs"
        >
          ЗАДАЙ ВОПРОС
        </div>

        <div
          class="inline-flex items-end justify-center text-white text-4xl bg-green-400 w-12 h-12 rounded-full"
        >
          +
        </div>
      </div>
    </main>

    <TheFooter />
  </div>
</template>
<script>
export default {
  data() {
    return {
      user_dropdown: false,
      search_active: false,
      question_modal: false,
      questions: [],
      nextPage: 1,
      isExistMore: true
    };
  },
  mounted() {
    this.loadMoreQuestions();
  },
  methods: {
    closeDropdown() {
      this.user_dropdown = false;
    },
    loadMoreQuestions() {
      let loader = this.$loading.show();
      this.$axios
        .get(`questions/?page=${this.nextPage}`)
        .then(res => {
          this.questions = [...this.questions, ...res.data.results];
          if (res.data.next != null) {
            this.isExistMore = true;

            this.nextPage++;
          } else {
            this.isExistMore = false;
          }
        })
        .catch(err => console.log(err))
        .finally(() => loader.hide());
    }
  }
};
</script>
