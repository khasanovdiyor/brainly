<template>
  <div
    class="max-w-4xl px-6 py-6 bg-white border-solid sm:border sm:rounded-lg mb-2"
  >
    <div class="flex justify-between items-center">
      <div class="flex items-center" :title="question.user.username">
        <nuxt-link to="user-profile" class="" v-if="question.user.profile">
          <img
            v-if="question.user.profile.user_image"
            class="mr-4 sm:mx-4 w-8 h-8 object-cover rounded-full block"
            :src="question.user.profile.user_image"
            alt="avatar"
          />
          <img
            v-else
            class="mr-4 sm:mx-4 w-8 h-8 object-cover rounded-full block"
            src="@/assets/images/profile-photo.png"
            alt="avatar"
          />
        </nuxt-link>
        <h3 class="text-gray-700 font-bold">
          <nuxt-link
            :to="currentSubjectLink"
            :id="question.subject.slug"
            class="hover:underline cursor-pointer subject"
            >{{ question.subject.name }}</nuxt-link
          >
          ▪ <span> {{ timeElapse() }}</span>
        </h3>
      </div>
      <div
        class="pr-2 h-5 text-gray-900 font-normal rounded-full bg-gray-300 flex items-center justify-center"
      >
        <img
          src="~/assets/images/bilim-sqr.gif"
          alt="bilim"
          class="w-5 rounded-full"
        />
        <span class="font-semibold">
          +{{ question.point }} <span class="hidden md:inline">б.</span>
        </span>
      </div>
    </div>
    <div class="mt-2">
      <nuxt-link :to="'/task/' + question.id">
        <p class="mt-2 sm:mx-16 text-gray-600 hover:underline">
          {{ question.text }}
        </p>
      </nuxt-link>
    </div>
    <div
      class="flex sm:pl-16 items-center mt-4"
      :class="{
        'justify-between': question.answers.length > 0,
        'justify-end': question.answers.length === 0
      }"
    >
      <Answered
        v-if="question.answers.length > 0"
        :answers="question.answers"
      />
      <div class="flex">
        <nuxt-link
          :to="answerLink"
          class="focus:outline-none hover:bg-gray-300 rounded-full flex items-center justify-center px-4 border-solid border-2 border-gray-900 uppercase text-sm"
        >
          <span> Ответить </span>
        </nuxt-link>
        <div
          class="ml-4 cursor-pointer"
          v-if="this.$auth.user.is_admin"
          @click="showDeleteQuestion = true"
        >
          <svg
            class="w-6 h-6 text-gray-400 hover:text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            ></path>
          </svg>
        </div>
      </div>
    </div>
    <delete-question-modal
      @close="showDeleteQuestion = false"
      v-if="showDeleteQuestion"
      :questionId="question.id"
    />
  </div>
</template>

<script>
export default {
  name: "Question",
  props: {
    question: {
      type: Object,
      default() {
        return {
          answers: []
        };
      }
    }
  },
  data() {
    return {
      showDeleteQuestion: false,
      timeElapsed: "",
      askedTime: this.question.asked_date,
      currentSubjectLink: `/subject/${this.question.subject.slug}`,
      answerLink: `/answers/${this.question.id}`
    };
  },
  methods: {
    timeElapse() {
      let timeElapsed = this.$moment(this.askedTime).fromNow();
      return timeElapsed;
    }
  }
};
</script>
