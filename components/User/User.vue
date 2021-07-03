<template>
  <li class="flex m-2" v-if="user.profile">
    <nuxt-link :to="`/user/${user.id}`" class="flex">
      <img
        v-if="user.profile.user_image"
        :src="user.profile.user_image"
        class="w-8 h-8 object-cover rounded-full mr-3"
      />
      <img
        v-else
        src="@/assets/images/profile-photo.png"
        class="w-8 h-8 rounded-full mr-3"
      />
      <span class="span1 text-md font-semibold text-gray-800"
        >{{ user.username }}
      </span>
    </nuxt-link>
    <span class="span2 ml-auto font-bold text-gray-800"
      >{{ user.profile.rating }} б</span
    >
  </li>
</template>

<script>
export default {
  name: "User",
  props: {
    user: {
      type: Object,
      required: true
    }
  }
};
</script>
