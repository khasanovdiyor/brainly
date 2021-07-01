<template>
  <div class="flex">
    <div class="self-start mr-4">
      <img src="~/assets/images/answered.svg" class="w-6 h-6" alt="" />
    </div>
    <div class="" v-if="answers.length > 0">
      <div
        v-for="answer in answers"
        :key="answer.user.user_id"
        class="inline-block"
      >
        <nuxt-link
          v-if="answer.user.profile"
          :to="`/user/${answer.user.id}`"
          class="inline-flex justify-center rounded-full w-6 h-6 bg-gray-500"
          :title="answer.user.username"
        >
          <img
            v-if="answer.user.profile.user_image"
            :src="answer.user.profile.user_image"
            class="overflow-hidden rounded-full"
            alt="profile-photo"
          />
          <img
            v-else
            src="@/assets/images/profile-photo.png"
            class="overflow-hidden rounded-full"
            alt="profile-photo"
          />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Answered",
  props: {
    answers: {
      type: Array,
      required: true
    }
  }
};
</script>
