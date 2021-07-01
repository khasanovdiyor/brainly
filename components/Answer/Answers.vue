<template>
  <div class="ifanswer border-2 p-3 rounded-lg border-gray-200">
    <div class="flex items-center mb-2">
      <div class="mr-3">
        <nuxt-link
          v-if="answer.user.profile"
          :to="`/user/${answer.user.id}`"
          class="inline-flex justify-center rounded-full w-8 h-8 bg-gray-500"
          title="user-name"
        >
          <img
            v-if="answer.user.profile.user_image"
            :src="answer.user.profile.user_image"
            class="rounded-full"
            alt="profile photo"
          />
          <img
            v-else
            src="@/assets/images/profile-photo.png"
            class="rounded-full"
            alt="profile photo"
          />
        </nuxt-link>
      </div>
      <div>
        <div class="flex items-center">
          <span class="font-bold text-xs">{{ answer.user.username }}</span>
          <span class="ml-2 text-gray-600 text-xs">спросил/а</span>
          <nuxt-link
            :to="`/task/${answer.question_id}`"
            class="ml-2 border-b border-white hover:border-gray-600 font-bold text-xs text-gray-600 w-28 inline-block truncate overflow-hidden whitespace-nowrap overflow-ellipsis"
          >
            {{ question.text }}
          </nuxt-link>
        </div>
        <div>
          <span class="text-xs text-gray-600"
            >{{ getAskedDate(answer.answered_date) }} ◾</span
          >
          <span class="text-xs text-gray-600 font-semibold"
            ><nuxt-link
              :to="`/subject/${answer.subject.slug}`"
              class="hover:underline mx-0.5"
              >{{ answer.subject.name }}
            </nuxt-link>
          </span>
        </div>
      </div>
    </div>
    <span
      v-if="answer.is_best"
      class="my-2 px-2 rounded-lg bg-red-200 inline-block"
    >
      <img
        src="~/assets/images/excellent.svg"
        class="w-4 mr-2 inline-block"
        alt=""
      />
      <span class="font-bold text-sm">Лучший ответ</span>
    </span>
    <div>
      <nuxt-link :to="`/task/${answer.question_id}`" class="hover:underline">
        <div v-html="answer.text"></div>
      </nuxt-link>
    </div>
    <div class="flex mt-5 justify-between">
      <span class="flex items-center mr-5">
        <img
          src="~/assets/images/heart.svg"
          class="w-4 mr-2 inline-block"
          alt=""
        />
        <span class="font-bold" style="color: #687b8c">{{
          answer.thanks.length
        }}</span>
      </span>
      <div
        class="ml-4 cursor-pointer"
        v-if="this.$auth.user.is_admin"
        @click="showDeleteAnswer = true"
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
    <AnswerDeleteModal
      @close="showDeleteAnswer = false"
      v-if="showDeleteAnswer"
      :answerId="answer.id"
    />
  </div>
</template>

<script>
export default {
  props: {
    answer: {
      type: Object,
      user: {}
    }
  },
  data() {
    return {
      askedDate: "",
      question: {},
      showDeleteAnswer: false
    };
  },
  methods: {
    getAskedDate(timeAgo) {
      this.askedDate = this.$moment(timeAgo).fromNow();
      return this.askedDate;
    }
  },
  mounted() {
    this.$axios
      .$get(`question-detail/${this.answer.question_id}/`)
      .then(res => {
        this.question = res;
        console.log(res);
      })
      .catch(err => console.log(err));
  }
};
</script>

<style></style>
