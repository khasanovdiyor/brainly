<template>
  <div>
    <TheHeader />
    <div class="py-10 flex justify-center sm:px-10 md:px-48 lg:px-64">
      <!-- left side -->
      <div class="max-w-2/3 lg:container-none xl:container mt-24">
        <!-- question content -->
        <div class="border-2 border-blue-100 rounded-lg p-6">
          <!-- profile  -->
          <div class="flex items-center mb-5">
            <div class="mr-3">
              <nuxt-link
                :to="`/user/${question.user.id}`"
                class="inline-flex justify-center"
                :title="question.user.username"
              >
                <img
                  v-if="question.user.profile.user_image"
                  :src="question.user.profile.user_image"
                  class="rounded-full w-8 h-8"
                  alt="profile photo"
                />
                <img
                  v-else
                  src="@/assets/images/profile-photo.png"
                  class="rounded-full w-8 h-8"
                  alt="profile photo"
                />
              </nuxt-link>
            </div>
            <div>
              <span class="font-bold">{{ question.user.username }}</span>
              <div>
                <span class="text-xs text-gray-500"
                  >{{ timeElapse(question.asked_date) }} ◾</span
                >
                <span class="text-xs text-gray-500">
                  <nuxt-link
                    :to="'/subject/' + question.subject.slug"
                    class="hover:underline mx-0.5"
                    >{{ question.subject.name }}
                  </nuxt-link>
                </span>
              </div>
            </div>
          </div>
          <!-- end of profile -->
          <div>
            <!-- question title -->
            <h2 class="text-2xl font-bold">{{ question.text }}</h2>
            <div
              class="px-24 bg-blue-100 py-5"
              v-if="question.images.length > 0"
            >
              <viewer>
                <img
                  v-for="(image, idx) in question.images"
                  :key="idx"
                  :src="image.images"
                  alt="question image"
                />
              </viewer>
            </div>
            <!-- question content -->

            <div class="my-4">
              <div class="h-full">
                <nuxt-link
                  :to="`/answers/${question.id}`"
                  id="ask-question"
                  class="py-1 w-full sm:w-72 md:mx-0 lg:h-10 focus:outline-none hover:bg-gray-300 rounded-full flex items-center justify-center px-5 border-solid border-2 border-gray-900"
                >
                  <svg
                    class="w-4 h-4 lg:w-6 lg:h-6 text-gray-900"
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
                  <span class="font-bold">
                    ДОБАВИТЬ ОТВЕТ
                    <span class="text-gray-500 ml-2"
                      >+{{ question.point }} Б.</span
                    >
                  </span>
                </nuxt-link>
              </div>
            </div>
            <hr class="block bg-gray-100 h-0.5" />
            <Comment
              v-for="help in question.helps"
              :key="help.question_id"
              :comment="help.text"
            />
            <div
              v-if="isError"
              class="inline-block text-white py-2 px-4 bg-red-600"
            >
              Комментарий должен содержать от 5 до 40 букв.
            </div>
          </div>
          <div class="mt-4 flex items-center">
            <div class="mr-3">
              <nuxt-link
                :to="`/user/${$auth.user.user_id}`"
                class="inline-flex justify-center rounded-full w-8 h-8 bg-gray-500"
                :title="$auth.user.username"
              >
                <img
                  v-if="$auth.user.image"
                  :src="$auth.user.image"
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
            <div class="w-full">
              <input
                @keypress.enter="insertValue"
                type="text"
                v-model="help"
                :placeholder="
                  'Спросите ' + question.user.username + ' о заданном вапросе'
                "
                :style="{ outlineColor: isError ? 'red' : 'black' }"
                class="focus:bg-white w-full px-4 py-2 rounded-3xl bg-gray-200"
              />
            </div>
          </div>
        </div>
        <div
          v-if="question.answers.length == 0"
          class="bg-gray-200 w-full h-24 rounded-lg flex justify-center items-center mt-10"
        >
          <div class="text-center text-gray-500 text-sm">
            <span class="">{{ question.user.username }} ждет твоего ответа</span
            ><br />
            <span class="">Ответь на вопрос и заработай баллы.</span>
          </div>
        </div>
        <!-- end of question content  -->

        <!-- Answers -->
        <div
          v-for="answer in question.answers"
          :key="answer.id"
          class="border-2 border-blue-100 rounded-lg mt-5 mb-10"
        >
          <div
            class="flex justify-between border-b-2 border-blue-100 px-6 pb-5 mt-5"
          >
            <h2 class="font-bold text-2xl mt-0">Ответ</h2>
            <div class="flex">
              <span>
                <svg
                  class="w-6 h-6 text-red-500 mr-2"
                  fill="currentColor"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </span>
              <span>{{ answer.thanks.length, }}</span>
              <div class="ml-10" v-if="answer.is_best">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="crown"
                  class="text-yellow-400 w-6"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                >
                  <path
                    fill="currentColor"
                    d="M528 448H112c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm64-320c-26.5 0-48 21.5-48 48 0 7.1 1.6 13.7 4.4 19.8L476 239.2c-15.4 9.2-35.3 4-44.2-11.6L350.3 85C361 76.2 368 63 368 48c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 15 7 28.2 17.7 37l-81.5 142.6c-8.9 15.6-28.9 20.8-44.2 11.6l-72.3-43.4c2.7-6 4.4-12.7 4.4-19.8 0-26.5-21.5-48-48-48S0 149.5 0 176s21.5 48 48 48c2.6 0 5.2-.4 7.7-.8L128 416h384l72.3-192.8c2.5.4 5.1.8 7.7.8 26.5 0 48-21.5 48-48s-21.5-48-48-48z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div class="flex items-center p-6 pb-0" v-if="answer.user.profile">
            <div class="mr-3">
              <nuxt-link
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
              <span class="font-bold">{{ answer.user.username }}</span>
              <div>
                <span class="text-xs text-gray-500">{{
                  answer.user.profile.status
                }}</span>
              </div>
            </div>
          </div>
          <div
            v-html="answer.text"
            class="unreset text-md leading-6 px-6 my-2"
          ></div>
          <!-- component -->
          <div class="px-24 bg-blue-100 py-5" v-if="answer.image">
            <viewer>
              <img :src="answer.image" alt="" />
            </viewer>
          </div>
          <div class="flex justify-between items-center mb-5 px-4 pr-6">
            <div
              class=""
              @click.once="
                thank(answer.id);
                loadQuestion();
              "
            >
              <span
                class="py-2 px-4 rounded-2xl hover:bg-red-200 inline-block cursor-pointer"
                :class="{ thank: isThanked }"
              >
                <div class="flex items-center">
                  <svg
                    class="w-6 h-6 text-red-500 mr-2 heart"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    ></path>
                  </svg>
                  <span class="text-red-500 font-bold"
                    >СПАСИБО {{ answer.thanks.length }}</span
                  >
                </div>
              </span>
            </div>
            <div
              v-if="!answer.is_best"
              class="cursor-pointer w-6"
              title="Best Answer"
              @click.once="
                giveBest(answer);
                loadQuestion();
              "
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="crown"
                class="text-gray-400 hover:text-yellow-400"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                stroke="currentColor"
                stroke-width="8"
              >
                <path
                  fill="currentColor"
                  d="M528 448H112c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm64-320c-26.5 0-48 21.5-48 48 0 7.1 1.6 13.7 4.4 19.8L476 239.2c-15.4 9.2-35.3 4-44.2-11.6L350.3 85C361 76.2 368 63 368 48c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 15 7 28.2 17.7 37l-81.5 142.6c-8.9 15.6-28.9 20.8-44.2 11.6l-72.3-43.4c2.7-6 4.4-12.7 4.4-19.8 0-26.5-21.5-48-48-48S0 149.5 0 176s21.5 48 48 48c2.6 0 5.2-.4 7.7-.8L128 416h384l72.3-192.8c2.5.4 5.1.8 7.7.8 26.5 0 48-21.5 48-48s-21.5-48-48-48z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <!-- end of Answer -->
      </div>
      <!-- end of left side -->

      <!-- end of right side -->
    </div>
    <TheFooter />
  </div>
</template>
<script>
export default {
  auth: false,
  components: {},
  mounted() {
    this.loadQuestion();
  },
  data() {
    return {
      isThanked: false,
      question: {
        slug: "",
        user: {
          username: "",
          profile: {}
        },
        subject: {},
        answers: [],
        images: []
      },
      isError: false,
      messages: [],
      help: ""
    };
  },

  methods: {
    loadQuestion() {
      let loader = this.$loading.show();
      this.$axios
        .get(`question-detail/${this.$route.params.id}/`)
        .then(res => {
          Object.assign(this.question, res.data);
          console.log(this.question);
          this.checkThank();
        })
        .finally(() => loader.hide());
    },
    checkThank() {
      let answers = this.question.answers;

      console.log(answers, this.$auth.user.user_id);
      for (let i = 0; i < answers.length; i++) {
        if (answers[i].thanks.find(x => x.user_id == this.$auth.user.user_id))
          this.isThanked = true;
        else this.isThanked = false;
      }
    },
    insertValue() {
      if (this.help.length > 4) {
        let that = this;
        this.$axios
          .post("help-create/", {
            question: this.question.id,
            text: this.help
          })
          .then(function (response) {
            that.loadQuestion();
          })
          .catch(function (error) {
            console.log(error);
          });

        this.messages.push(this.help);
        this.isError = false;
      } else {
        this.isError = true;
      }

      this.help = "";
    },

    timeElapse(timeAgo) {
      let timeElapsed = this.$moment(timeAgo).fromNow();
      return timeElapsed;
    },
    thank(id) {
      if (!this.isThanked) {
        this.$axios
          .post("thanks/", {
            thanks: 1,
            id: id
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
    giveBest(answer) {
      if (!answer.isBest) {
        this.$axios
          .post("best-create/", {
            is_best: true,
            answer_id: answer.id
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
  }
};
</script>

<style>
.thank {
  cursor: default;
}
.thank:hover {
  background-color: white;
}
.thank .heart {
  fill: #f56565;
}
</style>
