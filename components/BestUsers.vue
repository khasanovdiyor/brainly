<template>
  <div class="">
    <ul
      class="sm:border border-solid sm:rounded-lg px-2 md:px-6"
      id="container-list"
    >
      <div class="flex m-2">
        <img src="~/assets/images/crown.svg" class="w-6 h-6 mt-3 mr-3" />
        <p class="text-lg font-semibold text-center m-3">Лучшие помощники</p>
      </div>
      <User v-for="user in bestUsers" :key="user.username" :user="user" />

      <div
        v-if="isExistMore"
        class="bg-gray-200 rounded-full w-40 text-center mx-auto mb-6"
      >
        <button
          type="button"
          id="userprofiles1"
          class="text-sm font-semibold focus:outline-none p-1"
          @click="loadMore"
        >
          ПОКАЗАТЬ БОЛЬШЕ
        </button>
      </div>
    </ul>
  </div>
</template>

<script>
import User from "./User/User.vue";

export default {
  name: "BestUsers",
  components: { User },
  data() {
    return {
      bestUsers: [],
      isExistMore: false,
      nextPage: 1
    };
  },
  mounted() {
    this.loadMore();
  },
  methods: {
    loadMore() {
      this.$axios
        .get(`user-rating/?page=${this.nextPage}`)
        .then(res => {
          this.bestUsers = [...this.bestUsers, ...res.data.results];
          if (res.data.next != null) {
            this.isExistMore = true;

            this.nextPage++;
          } else {
            this.isExistMore = false;
          }
        })
        .catch(err => console.log(err));
    }
  }
};
</script>
