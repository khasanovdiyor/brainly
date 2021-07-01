<template>
  <div class="pt-16">
    <TheHeader />
    <QuestionModal v-if="question_modal" @close="question_modal = false" />
    <div class="w-full h-24 header-image"></div>
    <!-- end of header image -->

    <!-- main content -->
    <div
      class="container mx-auto justify-between md:mx-5 md:block lg:flex lg:px-0 xl:px-20"
    >
      <!-- left side -->
      <div
        class="flex-col items-center xs:p-10 sm:p-10 sm:w-block md:mx-auto md:p-0 lg:p-0 lg: xl:p-0"
        v-if="user.profile"
      >
        <!-- <div class=""> -->
        <div class="border-8 border-white mx-auto rounded-full w-32 h-32">
          <img
            v-if="user.profile.user_image"
            :src="user.profile.user_image"
            class="rounded-full w-full h-full"
            alt="profile photo"
          />
          <img
            v-else
            src="@/assets/images/profile-photo.png"
            class="rounded-full w-full h-full"
            alt="profile photo"
          />
        </div>
        <div class="pt-10 flex flex-col items-center">
          <span class="user-name block font-bold mx-auto text-lg mb-6">{{
            user.username
          }}</span>
          <span
            class="user-type block px-2 rounded-lg font-semibold bg-gray-200"
            >{{ user.profile.status }}</span
          >
        </div>
        <!-- stats -->
        <div class="flex my-6 w-full">
          <div class="mx-auto flex">
            <div class="flex flex-col items-center pr-5">
              <span class="block text-sm">Ответов</span>
              <span class="font-bold">{{ user.answers.length }}</span>
            </div>
            <div class="h-6 bg-gray-300 my-auto" style="width: 2px"></div>
            <div class="flex flex-col items-center w-40">
              <span class="block text-sm">Лучших Ответов</span>
              <span class="font-bold">{{ user.profile.best_answers }}</span>
            </div>
            <div class="h-6 bg-gray-300 my-auto" style="width: 2px"></div>
            <div class="flex flex-col items-center pl-5">
              <span class="block text-sm">Спасибо</span>
              <span class="font-bold">{{ user.profile.thanks }}</span>
            </div>
          </div>
        </div>
        <!-- end of stats -->
        <div
          v-if="this.$auth.user.user_id == this.$route.params.id"
          class="bg-gray-200 px-8 py-2 rounded-full xs:mx-auto sm:w-2/4 sm:mx-auto md:mx-auto md:w-2/5 lg:w-full lg:mx-0"
        >
          <nuxt-link
            to="/change-profile"
            class="sm:w-full md:w-full lg:w-full inline-block font-bold text-sm"
          >
            <img
              class="w-6 h-6 inline-block mr-2"
              src="~/assets/images/pencil.svg"
              alt=""
            />
            РЕДАКТИРОВАТЬ ПРОФИЛЬ</nuxt-link
          >
          <!-- </div> -->
        </div>

        <div class="mt-6 mb-2">
          <span class="font-bold text-sm block mb-4">Обо мне</span>
          <div class="border-t-2 border-gray py-4">
            <div class="flex items-center mb-3">
              <div class="w-4 mr-2">
                <img src="~/assets/images/bilim-sqr.gif" alt="" />
              </div>
              <span class="text-xs mr-2">Баллы:</span
              ><span class="text-xs font-bold">{{ user.profile.rating }}</span>
            </div>
            <div class="flex items-center mb-3">
              <div class="w-4 mr-2">
                <img src="~/assets/images/calendar.svg" alt="" />
              </div>
              <span class="text-xs mr-2">Присоединился:</span
              ><span class="text-xs font-bold">{{ getRegDate() }}</span>
            </div>
            <!-- <div class="flex items-center mb-3">
              <div class="w-4 mr-2">
                <img src="~/assets/images/warning.svg" alt="" />
              </div>
              <span class="text-xs mr-2">Предупреждений:</span
              ><span class="text-xs font-bold">{{this.$auth.user.user_id  }}</span>
            </div> -->
          </div>
        </div>
      </div>
      <!-- end of left side -->

      <!-- right side -->
      <div
        class="xs:p-10 sm:w-full sm:pb-10 sm:p-0 md:pb-10 md:pl-0 md:w-block lg:px-0 lg:w-2/3"
      >
        <div
          class="flex xs:justify-center sm:justify-center md:justify-center lg:justify-end"
        >
          <div
            role="button"
            @click="
              isAnswer = true;
              isQuestion = false;
            "
            :class="{ 'border-blue-400': isAnswer }"
            class="mr-8 py-4 font-bold border-t-2 border-white text-sm"
            id="answers"
          >
            Ответы {{ user.answers.length }}
          </div>
          <div
            role="button"
            @click="
              isQuestion = true;
              isAnswer = false;
            "
            :class="{ 'border-blue-400': isQuestion }"
            class="mr-8 py-4 font-bold border-t-2 border-white text-sm"
            id="questions"
          >
            Вопросы {{ user.questions.length }}
          </div>
          <!-- <div role="button" class="py-4 font-bold border-t-2 border-white text-sm" id="friends">
                    Друзья 0
                </div> -->
        </div>
        <div class="sm:w-full sm:p-10 md:p-10 md:px-0 lg:p-10">
          <div
            class="border-2 border-gray-200 block"
            style="height: 80%"
            id="content-wrapper"
            v-if="isAnswer && user.answers.length == 0"
          >
            <div class="mb-20" id="answers-content">
              <div class="ifnotanswer flex flex-col items-center my-32">
                <div class="flex flex-col items-center mt-5">
                  <div class="w-16 mb-5">
                    <svg
                      viewBox="0 0 512 512"
                      class="w-full text-gray-400"
                      fill="currentColor"
                      style="overflow: visible"
                      id="icon-answer"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>answer</title>
                      <path
                        d="M388.5 85.33h-265a38.16 38.16 0 0 0-38.17 38.16V388.5a38.16 38.16 0 0 0 38.17 38.17h265a38.16 38.16 0 0 0 38.17-38.17v-265a38.16 38.16 0 0 0-38.17-38.17zM234.67 362.67h-85.34a21.33 21.33 0 0 1 0-42.67h85.34a21.33 21.33 0 0 1 0 42.67zm128-85.34H149.33a21.33 21.33 0 1 1 0-42.66h213.34a21.33 21.33 0 1 1 0 42.66zm0-85.33H149.33a21.33 21.33 0 0 1 0-42.67h213.34a21.33 21.33 0 0 1 0 42.67z"
                      ></path>
                    </svg>
                  </div>
                  <span class="block text-gray-400 mb-5"
                    >У тебя пока нет ни одного ответа</span
                  >
                  <nuxt-link
                    to="bosh-menu"
                    class="bg-gray-200 font-bold text-xs py-2 px-4 rounded-full"
                  >
                    НАЙДИ ВОПРОС
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
          <div
            class="border-2 border-gray-200 block"
            style="height: 80%"
            v-if="isQuestion && user.questions.length == 0"
          >
            <div
              class="flex flex-col items-center my-32"
              id="questions-content"
            >
              <div class="w-16 mb-5">
                <svg
                  viewBox="0 0 512 512"
                  class="text-gray-400 w-full"
                  style="overflow: visible"
                  fill="currentColor"
                  id="icon-all_questions"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>all questions</title>
                  <path
                    d="M448 42.67H149.33A21.33 21.33 0 0 0 128 64v298.67A21.33 21.33 0 0 0 149.33 384H448a21.33 21.33 0 0 0 21.33-21.33V64A21.33 21.33 0 0 0 448 42.67zm-21.33 298.66h-256v-256h256v256z"
                  ></path>
                  <path
                    d="M362.67 426.67H85.33V149.33a21.33 21.33 0 0 0-42.66 0V448A21.33 21.33 0 0 0 64 469.33h298.67a21.33 21.33 0 1 0 0-42.66zm-67.84-159.79a21.33 21.33 0 1 0 0 42.67 21.33 21.33 0 0 0 0-42.67zm-42.67-85.76c25.17 0 12.16-34.35 45.44-34.35a21.33 21.33 0 0 1 24.96 21.34c0 25.38-45.44 32.42-45.44 64a16.64 16.64 0 0 0 16.64 17.49c17.07 0 14.93-12.8 21.33-21.33 6.4-8.54 47.58-25.39 47.58-59.1 0-33.7-33.28-51.84-66.56-51.84s-61.44 22.4-61.44 48a15.57 15.57 0 0 0 17.49 15.79z"
                  ></path>
                </svg>
              </div>
              <span class="block text-gray-400 mb-5"
                >У тебя пока нет ни одного вопроса</span
              >
              <button
                class="bg-gray-200 font-bold text-xs py-2 px-4 rounded-full"
              >
                ЗАДАЙ ВОПРОС
              </button>
            </div>
          </div>
          <div v-if="user.answers.length > 0 && isAnswer">
            <Answers
              class="mb-5"
              v-for="answer in user.answers"
              :key="answer.id"
              :userName="user.username"
              :answer="answer"
              :questions="user.questions"
            />
          </div>
          <div v-if="user.questions.length > 0 && isQuestion">
            <UserQuestions
              class="mb-5"
              v-for="question in user.questions"
              :key="question.id"
              :userName="user.username"
              :question="question"
            />
          </div>
        </div>
      </div>
      <!-- end of right side -->
    </div>
    <div
      @click="question_modal = true"
      class="self-end flex sticky lg:hidden items-center z-20 bottom-0 p-5"
    >
      <div
        class="capitilize cursor-pointer px-2 rounded-lg py-1 text-white bg-green-300 mr-2 text-xs"
      >
        ЗАДАЙ ВОПРОС
      </div>

      <div
        class="inline-flex cursor-pointer items-end justify-center text-white text-4xl bg-green-400 w-12 h-12 rounded-full"
      >
        +
      </div>
    </div>
    <TheFooter />
  </div>
</template>

<script>
export default {
  auth: false,
  data() {
    return {
      isAnswer: true,
      question_modal: false,
      isQuestion: false,
      dateOfReg: "",
      user: {
        questions: [],
        answers: [],
        profile: {}
      },
      showDeleteQuestion: false
    };
  },

  methods: {
    getRegDate() {
      this.dateOfReg = this.$moment(this.user.date_joined).format("LL");
      return this.dateOfReg;
    },
    getAskedDate() {
      this.timeAgo = this.$moment(this.user.question);
    },
    getUser() {
      let loader = this.$loading.show();
      this.$axios
        .$get(`user-detail/${this.$route.params.id}/`)
        .then(res => {
          this.user = res;
          console.log(res);
        })
        .catch(err => console.log(err))
        .finally(() => loader.hide());
    }
  },
  mounted() {
    this.getUser();
  }
};
</script>
