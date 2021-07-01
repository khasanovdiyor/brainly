<template>
  <div class="h-screen flex justify-center items-center">
    <div class="flex items-center flex-wrap px-6 justify-center">
      <div class="mr-10 font-bold size-12rem">404</div>
      <div>
        <h2 class="text-xl font-semibold">Page not found</h2>
        <p>Sorry, page you are looking for is not found.</p>
        <nuxt-link
          to="/question-list"
          class="mt-10 inline-block bg-blue-600 text-white border rounded-lg px-4 py-2 text-lg"
          >Go to home page</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.size-12rem {
  font-size: 12rem;
}
@media screen and (max-width: 450px) {
  .size-12rem {
    font-size: 8rem;
  }
}
</style>
