<template>
  <footer class="bg-gray-200 w-full py-10 px-5 sm:px-5 md:px-10 lg:px-40">
    <div class="container mx-auto">
      <div class="sm:flex justify-between items-start mb-10">
        <div class="w-24 md:w-32 mx-auto sm:mx-0 mb-10 sm:mr-5">
          <img class="w-full" src="~/assets/images/logo.png" alt="" />
        </div>
        <div class="inline-block mt-0 float-left w-1/2 sm:w-auto mb-5">
          <h2 class="font-bold text-lg mb-5 sm:mb-10">Информация</h2>
          <ul class="text-sm">
            <li>
              <nuxt-link to="/about" class="hover:underline font-semibold"
                >O нас</nuxt-link
              >
            </li>
          </ul>
        </div>
        <div class="inline-block">
          <h2 class="font-bold text-lg mb-5 sm:mb-10">Контакты</h2>
          <ul class="text-sm">
            <li class="flex mb-3 font-semibold">
              <div class="mr-2">
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
              </div>
              +998991234567
            </li>
            <li class="flex font-semibold mb-3">
              <div class="mr-2">
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              example@example.com
            </li>
            <li class="flex font-semibold">
              <div class="mr-2 w-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="text-transparent icon icon-tabler icon-tabler-brand-telegram"
                  width="100%"
                  height="100%"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#0F0F10"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
                </svg>
              </div>
              t.me/bilimuz
            </li>
          </ul>
        </div>
        <div class="flex mt-5 sm:mt-0">
          <div class="w-6 mr-5">
            <a href=""><img src="~/assets/images/facebook.svg" alt="" /></a>
          </div>
          <div class="w-6 mr-5">
            <a href="https://t.me/bilim_olish_uz"
              ><img src="~/assets/images/telegram.svg" alt=""
            /></a>
          </div>
          <div class="w-6 mr-5">
            <a href=""><img src="~/assets/images/twitter.svg" alt="" /></a>
          </div>
          <div class="w-6">
            <a href=""><img src="~/assets/images/instagram.svg" alt="" /></a>
          </div>
        </div>
      </div>
      <hr class="" />
      <span class="w-full text-center block mx-auto mt-5 text-sm text-gray-500"
        >Bilim.uz Copyright &copy; 2020
      </span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>
