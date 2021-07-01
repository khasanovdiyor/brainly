<template>
  <div class="">
    <TheHeader />
    <QuestionModal
      v-if="question_modal"
      @close="question_modal = false"
      :defaultValue="this.$route.params.word"
    />
    <div class="box-content w-3/5 mx-auto border-2 pb-8 rounded-lg my-24">
      <div class="text-lg text-center my-5" v-if="numOfResults == 0">
        <span class="text-4xl text-gray-400"
          >ДЛЯ ДАННОГО ЗАПРОСА НЕТ СОВПАДЕНИЙ</span
        >
      </div>
      <div v-if="numOfResults > 0">
        <div
          class="m-8 h-auto bg-white"
          v-for="question in questions"
          :key="question.id"
        >
          <h2 class="mb-2">Результаты поиска ({{ questions.length }})</h2>
          <div class="leading-10">
            <nuxt-link
              :to="`/task/${question.id}`"
              class="hover:underline leading-snug tracking-wide"
              ><h3>{{ question.text }}</h3></nuxt-link
            >
            <div class="flex items-center">
              <nuxt-link
                :to="`/task/${question.id}`"
                class="text-sm hover:underline font-bold text-blue-400 tracking-wide"
                >Посмотреть ответы ({{ question.answers.length }})</nuxt-link
              >
              <svg
                viewBox="0 0 512 512"
                class="ml-auto"
                width="24"
                height="24"
                style="overflow: visible"
                id="icon-heart"
                fill="#FF7968"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>heart</title>
                <path
                  d="M281.905 416.674c-14.635 13.398-37.094 13.313-51.628-.194l-2.112-1.935C127.403 322.604 61.573 262.406 64.069 187.305a105.899 105.899 0 0 1 44.91-83.038c47.188-31.777 110.766-22.57 147.016 21.292 36.199-43.95 99.85-53.169 147.015-21.292a105.897 105.897 0 0 1 44.91 83.038c2.689 75.101-63.335 135.299-164.095 227.627l-1.92 1.742z"
                ></path>
              </svg>
              <span class="text-red-700">{{ numOfThanks(question) }}</span>
            </div>

            <hr class="border" />
          </div>
        </div>
      </div>

      <div class="p-8" v-if="numOfResults > 0">
        <!-- The 'pagination' style using in containerClass comes from bootstrap -->
        <paginate
          :page-count="totalPages"
          :margin-pages="0"
          :page-range="5"
          :prev-text="prev"
          :next-text="next"
          :container-class="'pagination flex justify-between '"
          :page-class="'page-item'"
          :page-link-class="'page-link-item'"
          :prev-class="'ignore prev-item text-lg text-blue-400'"
          :prev-link-class="'prev-link-item'"
          :next-class="'ignore next-item text-lg text-blue-400'"
          :next-link-class="'next-link-item'"
          :disabled-class="'ignore disabled'"
          :click-handler="loadQuestion"
        ></paginate>
      </div>
      <div class="leading-10 mx-8">
        <p class="font-bold tracking-wide">
          Если не можешь найти нужное, задай свой вопрос
        </p>
        <textarea
          @click="question_modal = true"
          class="w-full resize-none h-20 my-4 rounded-xl px-2 bg-gray-100 cursor-pointer"
          :value="this.$route.params.word"
        />

        <div class="mt-3 lg:block h-full flex ml-auto items-center">
          <button
            type="submit"
            @click="question_modal = true"
            class="h-8 lg:h-10 focus:outline-none hover:bg-gray-300 rounded-full flex items-center justify-center px-5 border-solid border-2 border-gray-900"
          >
            <svg
              class="w-4 h-4 lg:w-6 lg:h-6 fill-current text-gray-900 stroke-current mr-2"
              width="27"
              height="27"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#b0b0b0"
              stroke-width="2"
              stroke-linecap="square"
              stroke-linejoin="round"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            <span class="font-bold text-sm"> ЗАДАЙ ВОПРОС </span>
          </button>
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
        class="inline-flex cursor-pointer items-end justify-center text-white text-4xl bg-green-400 w-12 h-12 rounded-full"
      >
        +
      </div>
    </div>

    <TheFooter />
  </div>
</template>

<script>
export default {
  data() {
    return {
      questions: [],
      numOfResults: null,
      prev: "&lt;",
      next: "&gt;",
      question_modal: false,
      totalPages: null
    };
  },
  mounted() {
    this.loadQuestion(1);
  },
  methods: {
    // clickCallback(pageNum) {

    //   console.log(pageNum);
    // },
    loadQuestion(pageNum) {
      this.$axios
        .$get(`questions/?page=${pageNum}&search=${this.$route.params.word}`) //http://localhost:8000/api/questions/?page=1&search=abdulla
        .then(res => {
          this.questions = res.results;
          this.numOfResults = res.count;
          this.totalPages = res.total_pages;
          console.log(res);
        });
    },
    numOfThanks(question) {
      let thanks = 0;
      for (let i = 0; i < question.answers.length; i++) {
        thanks += question.answers[i].thanks.length;
      }
      return thanks;
    }
  }
};
</script>

<style>
.active {
  text-decoration: underline;
}
</style>
