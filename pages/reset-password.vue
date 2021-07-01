<template>
  <div class="flex flex-col">
    <!-- <TheHeader :search="false" /> -->
    <!-- <QuestionModal v-if="questionModal" @close="questionModal = false" /> -->

    <div
      class="reset-password lg:px-56 w-full sm:px-16 px-5 md:flex items-start pt-32"
    >
      <div class="md:w-1/3 sm:mr-10 sm:w-1/2 w-full">
        <div class="border-2 border-grey-300 rounded-lg p-5">
          <span class="font-bold">Не помнишь пароль?</span>
          <div>
            <form action="">
              <input
                type="email"
                placeholder="Почта"
                class="inline-block w-full mt-5 mb-3 bg-gray-200 rounded-full px-4 py-2"
              />
              <button
                class="text-white bg-blue-400 rounded-full px-4 py-2 uppercase"
              >
                Напомнить пароль
              </button>
            </form>
          </div>
          <div>
            <span class="mt-3 block"
              >или вернуться на
              <nuxt-link to="login" class="text-blue-400 hover:underline"
                >страница входа</nuxt-link
              ></span
            >
          </div>
        </div>
      </div>
      <div class="md:w-2/3 w-full">
        <h1
          class="uppercase text-blue-300 sm:text-5xl w-full text-3xl font-bold"
        >
          мы поможем!
        </h1>
      </div>
    </div>
    <!-- <div
      @click="questionModal = true"
      class="self-end question-mobile sticky flex items-center z-20 bottom-0 p-5"
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
    </div> -->
  </div>
</template>

<script>
export default {
  auth: false,
  data() {
    return {
      questionModal: false
    };
  }
};
</script>

<style>
</style>
