<template>
  <div :class="{ 'bg-green-300': !error }">
    <TheHeader v-if="error" />
    <div v-if="error" class="flex justify-center items-center py-32">
      <div class="text-center">
        <span class="text-6xl block text-blue-400">
          {{ error.statusCode }} Error :(</span
        >
        <span class="text-blue-400 block text-6xl"> Page not found </span>
      </div>
    </div>
    <div v-if="!error" class="top-0 fixed w-full z-30">
      <nav
        class="sm:pr-10 min-w-10/12 w-full h-16 flex justify-between mx-auto bg-white"
      >
        <div class="flex justif-start items-center sm:pl-20 w-full">
          <nuxt-link
            :to="`/task/${this.$route.params.id}`"
            class="rounded-full block hover:bg-gray-100 cursor-pointer w-10 h-10 sm:mr-10"
          >
            <svg
              class="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </nuxt-link>
          <nuxt-link to="../question-list">
            <div
              class="w-full lg:w-4/6 xl:w-full h-full flex flex-2 items-center"
            >
              <img
                src="~/assets/images/logo.png"
                alt="Bilim"
                class="h-6 text-blue-600"
              />
            </div>
          </nuxt-link>
        </div>

        <div
          class="h-full flex justify-end flex-none text-white space-x-2 items-center"
        >
          <button
            type="submit"
            @click.prevent="submitAnswer"
            style="background-color: #60d399"
            class="h-8 bg-green-400 focus:outline-none text-xs font-semibold rounded-full flex items-center justify-center px-4"
          >
            ДОБАВИТЬ СВОЙ ​​ОТВЕТ
          </button>
        </div>
      </nav>
    </div>

    <div
      v-if="!error"
      class="sm:px-10 px-5 md:px-32 pb-40 pt-20 full-height lg:px-40 lg:flex justify-center pb-14"
      style="background-color: #ebf2f7"
    >
      <div class="lg:w-1/3 mr-10 h-lg" id="parent-question">
        <h2 class="font-semibold text-2xl mb-5">Задание</h2>
        <p class="text-base text-gray-800 leading-7" id="question">
          {{ question.text }}
        </p>
        <div v-if="question.image">
          <img :src="image" alt="question image" />
        </div>
      </div>

      <div class="lg:w-2/3 bg-white rounded-lg mt-5 trix-container">
        <client-only>
          <form
            enctype="multipart/form-data"
            class="border-8 unreset h-full rounded-lg overflow-hidden border-gray-400"
          >
            <vue-trix
              @trix-attachment-add="addImage"
              @trix-attachment-remove="removeImage"
              class="h-52 trix-answer"
              style="height: 24rem !important"
              v-model="content"
              localStorage
            />
          </form>
        </client-only>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // middleware({ redirect }) {
  //   // If the user is not authenticated
  //   if (!this.question) {
  //     return redirect("/question-list");
  //   }
  // },

  mounted() {
    this.loadQuestion();
  },
  data() {
    return {
      question: {
        slug: "",
        text: "",
        user: {
          username: "",
          profile: {}
        },
        subject: {},
        answers: []
      },
      isLong: false,
      content: "<h1>Ответ: </h1><br/><h1>Объяснение: <h1/>",
      files: [],
      error: false
    };
  },
  methods: {
    loadQuestion() {
      let loader = this.$loading.show();
      this.$axios
        .$get(`question-detail/${this.$route.params.id}/`)
        .then(res => {
          Object.assign(this.question, res);
          console.log(res);
        })
        .catch(err => {
          console.log(err);
          this.error = true;
          // if (err) {
          //   this.$router.push("/question-list");
          // }
        })
        .finally(() => loader.hide());
    },
    addImage(event) {
      this.files.push(event.attachment.file);
      console.log(this.files);
    },
    removeImage(event) {
      this.files = this.files.filter(function (file) {
        return file.name !== event.attachment.file.name;
      });
      console.log(this.files);
    },
    calculateLength() {
      const question = document.querySelector("#question");
      const parentQuestion = document.querySelector("#parent-question");
      console.log(question.innerText.length);

      if (question.innerText.length > 550) {
        this.isLong = true;
      }
    },
    submitAnswer() {
      let loader = this.$loading.show();
      const formData = new FormData();
      formData.append("question", this.question.id);
      formData.append("text", this.content);
      formData.append("length", this.files.length);
      for (var i = 0; i < this.files.length; i++) {
        formData.append("images" + i, this.files[i]);
      }
      this.$axios
        .post("answer-create/", formData)
        .then(() => {
          this.$toast.success("Успешно создан");
          setTimeout(() => this.$router.push("/question-list"), 500);
        })
        .catch(err => {
          this.$toast.error(
            err.response.data || "Произошла ошибка, попробуйте еще раз"
          );
        })
        .finally(() => loader.hide());
    }
  }
};
</script>
