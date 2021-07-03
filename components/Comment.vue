<template>
  <div class="mt-6 mb-2 flex items-center">
    <a
      href=""
      class="inline-flex justify-center rounded-full w-6 h-6 mr-2 bg-gray-500"
      title="user-name"
    >
      <img
        :src="this.$auth.user.image"
        class="rounded-full object-cover"
        alt="avatar"
      />
    </a>
    <span class="text-sm">{{ comment }}</span>
  </div>
</template>

<script>
export default {
  props: {
    type: String,
    required: true
  },
  name: "Comment"
};
</script>
