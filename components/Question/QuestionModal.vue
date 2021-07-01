<template>
  <div
    id="modal"
    class="bg-blue-200 fixed sm:px-10 md:px-24 px-5 top-0 bottom-0 right-0 left-0 pt-20 z-40"
    style="background-color: rgba(95, 185, 247, 0.9)"
  >
    <div
      id="popup"
      class="md:w-full lg:w-2/3 bg-white p-5 relative rounded-lg block mx-auto"
    >
      <span
        id="close-popup"
        class="cursor-pointer float-right"
        @click="$emit('close')"
      >
        <svg
          class="hover:text-black fill-current w-6 h-6 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path></svg
      ></span>
      <span class="font-bold mb-4 block text-base"
        >Ищешь ответ на вопрос, с которым нужна помощь?</span
      >
      <!-- FORM BOX -->
      <div>
        <form @submit.prevent="sendData" enctype="multipart/form-data">
          <div>
            <div class="h-48 lg:h-52 mt-6 mb-5">
              <textarea
                v-model="questionText"
                class="inline-block bg-gray-200 resize-none w-full h-full px-4 py-2 rounded-3xl placeholder-gray-500 focus:bg-white"
                placeholder="Запиши свой вопрос здесь (кратко и понятно - для отличного ответа)"
                name="savol"
              ></textarea>
            </div>
            <div class="inline-block">
              <label for="files" class="cursor-pointer">
                <svg
                  class="w-6 h-6 hover:bg-black rounded hover:fill-current hover:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                  ></path>
                </svg>
                <input
                  type="file"
                  id="files"
                  ref="files"
                  class="hidden"
                  multiple
                  @change="selectFiles"
                />
              </label>
            </div>
            <div>
              <ul>
                <li v-for="(file, index) in files" :key="index">
                  <span
                    @click="removeFiles(index)"
                    class="text-gray-600 hover:text-red-600 cursor-pointer"
                    >X</span
                  >
                  {{ file.name }}
                </li>
              </ul>
            </div>
            <div class="inline-block mr-5">
              <select
                v-model="selectSubject"
                style="
                  background-image: url(~/assets/images/dropdown-icon.svg);
                  background-size: 1.5rem;
                  background-position: right 1rem center;
                "
                class="bg-gray-200 w-48 px-4 py-2 rounded-full bg-right bg-gray-200 bg-no-repeat text-gray-800 appearance-none"
              >
                <option value="Выберите предмент" disabled>
                  Выберите предмент
                </option>
                <option
                  v-for="subject in subjects"
                  :key="subject.id"
                  :value="subject.id"
                  class="text-gray-800"
                >
                  {{ subject.name }}
                </option>
              </select>
            </div>
            <div class="sm:inline-block mt-5 sm:mt-0">
              <select
                placeholder="Viberi"
                v-model="selectPoint"
                style="
                  background-image: url(@/assets/images/dropdown-icon.svg);
                  background-size: 1.5rem;
                  background-position: right 1rem center;
                "
                class="bg-gray-200 w-20 mr-5 px-4 py-2 rounded-full bg-right bg-no-repeat text-gray-800 appearance-none"
              >
                <option v-for="point in points" :key="point" :value="point">
                  {{ point }}
                </option>
              </select>
            </div>

            <button
              type="submit"
              class="hover:bg-blue-600 block sm:inline-block mt-5 sm:mt-0 sm:float-right border-none uppercase rounded-3xl text-white text-sm bg-blue-400 font-bold px-5 py-2"
            >
              ЗАДАЙ ВОПРОС
            </button>
          </div>
        </form>
      </div>

      <!-- END OF FORM -->
    </div>
  </div>
</template>

<script>
export default {
  name: "QuestionModal",
  props: {
    defaultValue: {
      type: String
    }
  },
  data() {
    return {
      subjects: [],
      selectSubject: "Выберите предмент",
      selectPoint: 10,
      points: [
        10,
        15,
        20,
        25,
        30,
        35,
        40,
        45,
        50,
        55,
        60,
        65,
        70,
        75,
        80,
        85,
        90,
        95,
        100
      ],
      questionText: this.defaultValue,
      files: []
    };
  },
  methods: {
    selectFiles() {
      this.files = Array.from(this.$refs.files.files);
      console.log("this.files", this.files, "typeof", typeof this.files);
    },
    removeFiles(index) {
      console.log(files);
      this.files.splice(index, 1);
    },
    sendData() {
      const formData = new FormData();
      formData.append("text", this.questionText);
      formData.append("subject", this.selectSubject);
      formData.append("point", this.selectPoint);
      formData.append("length", this.files.length);
      // formData.append("image", this.file);
      for (var i = 0; i < this.files.length; i++) {
        formData.append("images" + i, this.files[i]);
      }
      this.$axios
        .post("question-create/", formData)
        .then(res => {
          this.$toast.success("Вопрос успешно создан");
          setTimeout(() => this.$router.go(), 500);
        })
        .catch(err => {
          this.$toast.error(
            err.response.data || "Произошла ошибка, попробуйте еще раз"
          );
        });
    }
  },
  mounted() {
    this.$axios
      .$get("subjects/")
      .then(res => {
        this.subjects = res.results;
        //this.subjects.push({ name: "Вибери предмет", slug: "select", id: 15 });
        this.subjects.slice().reverse();
        console.log(res);
      })
      .catch(err => console.log(err));
  }
};
</script>
