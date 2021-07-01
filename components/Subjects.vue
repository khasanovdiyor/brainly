<template>
  <div class="my-2 lg:w-2/12 lg:block hidden">
    <ul class="mt-2 font-bold text-sm">
      <li class="p-2 ml-3 pb-3">
        <p class="">Предметы</p>
      </li>
      <hr class="w-48 my-2 text-gray-900" />
      <li class="mb-2 ml-3 hover:bg-gray-200 rounded-md p-2 flex">
        <nuxt-link to="../question-list" class="flex">
          <img src="~/assets/images/grid.svg" alt="" class="w-5 h-5 mr-4" />
          <span>Все предметы</span>
        </nuxt-link>
      </li>
      <div>
        <li
          v-for="subject in subjects"
          :key="subject.slug"
          class="mb-2 ml-3 hover:bg-gray-200 rounded-md p-2 flex"
        >
          <nuxt-link :to="`/subject/${subject.slug}`" class="flex">
            <img :src="subject.logo" alt="" class="w-5 mr-4" />
            <span class="capitalize">{{ subject.name }}</span>
          </nuxt-link>
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Subjects",
  data() {
    return {
      subjects: []
    };
  },
  mounted() {
    this.$axios
      .get("subjects/")
      .then(res => {
        this.subjects = res.data.results;

        console.log(res);
      })
      .catch(err => console.log(err));
  }
};
</script>
