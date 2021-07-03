<template>
  <div @click.self="userModal = false">
    <QuestionModal v-if="questionModal" @close="questionModal = false" />
    <div class="fixed top-0 right-0 left-0 border-b bg-white z-30">
      <nav class="px-3 sm:px-10 h-16 flex justify-between">
        <div class="w-full lg:w-2/3 flex xl:w-full h-full items-center">
          <nuxt-link to="../question-list">
            <img
              src="~/assets/images/logo.png"
              alt="Bilim"
              class="fill-current md:w-32 logo-min-sm text-blue-600"
            />
            <img
              src="~/assets/images/bilim-sqr.gif"
              class="logo-max-sm w-10"
              alt=""
            />
          </nuxt-link>
          <div v-if="search" class="relative mx-5 md:mx-10 w-full">
            <input
              @click="() => (searchActive = true)"
              @keyup.enter="clickSearch"
              type="text"
              v-model="searchWord"
              class="
                relative
                z-40
                text-md
                justify-center
                w-full
                h-10
                sm:h-10
                bg-gray-200
                rounded-full
                px-5
                py-2
                focus:outline-none
                placeholder-gray-600
              "
              placeholder="Какой у тебя вопрос?"
            />
            <nuxt-link :to="`/search/${searchWord}`" ref="searchInput">
              <div
                class="
                  absolute
                  z-50
                  top-0
                  right-0
                  mt-1
                  mr-1
                  w-8
                  h-8
                  lg:w-8
                  lg:h-8
                  rounded-full
                  bg-gray-900
                  hover:bg-gray-500
                  items-center
                  flex
                "
              >
                <svg
                  class="
                    mx-auto
                    stroke-current
                    text-white
                    w-4
                    h-4
                    lg:w-5
                    lg:h-5
                  "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                >
                  <circle cx="11" cy="11" r="7"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
            </nuxt-link>

            <!-- <div
              v-if="searchActive"
              @click="() => (searchActive = false)"
              class="absolute w-full top-0 z-30 bg-white shadow-lg rounded px-3 py-5"
            >
              <ul class="flex flex-col w-full items-left mt-10">
                <li class="my-2"><a href="user/result">sudana</a></li>
              </ul>
            </div> -->
          </div>
        </div>

        <div class="lg:w-1/3 flex relative">
          <div v-if="search" class="h-full justify-end flex items-center">
            <div>
              <button
                @click="selfData = !selfData"
                class="
                  w-8
                  h-8
                  focus:outline-none
                  hover:bg-gray-300
                  rounded-full
                  flex
                  items-center
                  justify-center
                "
              >
                <div
                  class="
                    h-full
                    w-full
                    sm:h-full
                    sm:w-full
                    ml-auto
                    flex
                    items-center
                    fill-current
                    text-gray-900
                    stroke-current
                  "
                >
                  <img
                    v-if="$auth.user.image"
                    :src="$auth.user.image"
                    alt="user icon"
                    class="w-full object-cover rounded-full h-full"
                  />

                  <img
                    v-else
                    src="@/assets/images/profile-photo.png"
                    alt="user icon"
                    class="w-full rounded-full h-full"
                  />
                </div>
              </button>
              <div
                v-if="selfData"
                class="
                  md:absolute
                  dropdown-pos
                  z-30
                  bg-white
                  w-auto
                  shadow-xl
                  py-3
                  px-4
                  rounded-md
                "
              >
                <ul>
                  <li class="py-2 hover:underline border-b">
                    <nuxt-link
                      :to="`/user/${$auth.user.user_id}`"
                      class="text-blue-600"
                      >{{ $auth.user.username }}</nuxt-link
                    >
                  </li>
                  <li class="py-2 hover:underline border-b">
                    <nuxt-link to="/change-profile" class="text-blue-600"
                      >Редактировать профиль</nuxt-link
                    >
                  </li>
                  <!-- <li class="py-2 hover:underline border-b">
                    <a href="#" class="text-blue-600">Настройки</a>
                  </li> -->
                  <li
                    class="
                      py-2
                      text-blue-600
                      hover:underline
                      underline-blue
                      cursor-pointer
                    "
                    @click="logout()"
                  >
                    <span>Выйти</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="hidden mt-3 lg:block h-full flex ml-auto items-center">
            <button
              type="submit"
              @click="questionModal = true"
              class="
                h-8
                lg:h-10
                w-full
                focus:outline-none
                hover:bg-gray-300
                rounded-full
                flex
                items-center
                justify-center
                px-5
                border-solid border-2 border-gray-900
              "
            >
              <svg
                class="
                  w-4
                  h-4
                  lg:w-6
                  lg:h-6
                  fill-current
                  text-gray-900
                  stroke-current
                  mr-2
                "
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
      </nav>
    </div>
    <div
      class="fixed inset-0 bg-gray-900 bg-opacity-50 z-20 mt-16"
      v-if="searchActive"
      @click="() => (searchActive = false)"
    ></div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    parentData: {
      type: Boolean
    }
  },
  data() {
    return {
      search: true,
      selfData: this.parentData,
      userModal: false,
      searchActive: false,
      questionModal: false,
      searchWord: ""
    };
  },
  methods: {
    logout() {
      this.$auth.logout();
      this.$router.push("/");
    },
    clickSearch() {
      this.$refs.searchInput.$el.click();
    }
  },
  mounted() {
    console.log("user", this.$auth.user);
  }
};
</script>

<style>
.logo-max-sm {
  display: none;
}
@media screen and (max-width: 800px) {
  .logo-max-sm {
    display: inline-block;
  }
  .logo-min-sm {
    display: none;
  }
}
</style>
