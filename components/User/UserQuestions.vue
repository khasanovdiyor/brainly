<template>
  <div class="ifanswer border-2 p-3 rounded-lg border-gray-200">
    <div class="flex items-center mb-2">
      <div class="mr-3">
        <nuxt-link
          :to="`/user/${question.user.id}`"
          href=""
          class="inline-flex justify-center rounded-full w-8 h-8 bg-gray-500"
          title="user-name"
        >
          <img
            v-if="question.user.profile.user_image"
            :src="question.user.profile.user_image"
            class="rounded-full object-cover"
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
        <div class="">
          <span class="font-bold text-xs">{{ question.user.username }}</span>
          <span class="text-gray-600 text-xs">спросил/а</span>
        </div>
        <div>
          <span class="text-xs text-gray-600"
            >{{ getAskedDate(question.asked_date) }} ◾</span
          >
          <span class="text-xs text-gray-600 font-semibold"
            ><nuxt-link
              :to="`/subject/${question.subject.slug}`"
              class="hover:underline mx-0.5"
              >{{ question.subject.name }}
            </nuxt-link>
          </span>
          <!-- <span class="text-xs text-gray-600 font-semibold"
                      >◾<a href="" class="hover:underline"> {{level}} </a>
                    </span> -->
        </div>
      </div>
      <div
        class="ml-auto cursor-pointer"
        v-if="this.$auth.user.user_id == question.user.id"
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
    <div class="mb-5">
      <nuxt-link :to="`/task/${question.id}`" class="hover:underline">
        <p>{{ question.text }}</p>
      </nuxt-link>
    </div>
    <Answered :answers="question.answers" />
    <delete-question-modal
      @close="showDeleteQuestion = false"
      v-if="showDeleteQuestion && $auth.user.user_id === question.user.id"
      :questionId="question.id"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      showDeleteQuestion: false
    };
  },
  props: {
    question: {
      type: Object,
      required: true
    },
    userId: {
      type: Number,
      required: true
    }
  },
  methods: {
    getAskedDate(timeAgo) {
      this.askedDate = this.$moment(timeAgo).fromNow();
      console.log(this.question);
      return this.askedDate;
    }
  }
};
</script>
