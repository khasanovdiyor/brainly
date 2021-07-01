<template>
  <div>
    <TheHeader :parentData="this.parentData" />
    <QuestionModal v-if="question_modal" @close="question_modal = false" />
    <main class="flex flex-col" @click.self="parentData = false">
      <div class="md:px-10 w-full mt-24">
        <div class="w-full flex flex-wrap">
          <Subjects />

          <div
            class="my-2 bg-blue-100 sm:bg-white w-full lg:w-7/12 sm:px-2 md:px-6"
          >
            <div class="text-lg text-center my-5" v-if="questions.length == 0">
              <span class="text-4xl uppercase text-gray-400"
                >В этой теме нет вопросов, посмотрите другие</span
              >
            </div>
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
  // async asyncData({ params, $axios }) {
  //   const subject = await $axios.$get(`subjects/${params.slug}`);
  //   return { subject };
  // },
  auth: false,
  data() {
    return {
      user_dropdown: false,
      search_active: false,
      question_modal: false,
      parentData: false,
      questions: [],
      isExistMore: false,
      nextPage: 1
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
      this.$axios
        .$get(`subjects/${this.$route.params.slug}?page=${this.nextPage}`)
        .then(res => {
          this.questions = [...this.questions, ...res.results];
          if (res.next != null) {
            this.isExistMore = true;

            this.nextPage++;
          } else {
            this.isExistMore = false;
          }
        })
        .catch(err => console.log(err));
    }
  }
};
</script>
