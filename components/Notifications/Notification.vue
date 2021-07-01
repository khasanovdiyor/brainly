<template>
  <div :class="classMsg" class="rounded-lg p-5 text-white">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: "Notification",
  props: {
    classMsg: {
      type: String
    },
    message: {
      type: String
    }
  }
};
</script>

<style>
</style>