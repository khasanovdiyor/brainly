<template>
  <div>
    <div
      class="fixed top-0 mx-auto w-full h-12 z-0 border-b border-gray-400 bg-white z-30"
    >
      <div class="px-5 mx-auto md:w-11/12 lg:w-4/5 flex items-center h-full">
        <img
          src="~/assets/images/logo.png"
          alt="Bilim"
          class="fill-current w-24"
        />
        <p class="ml-auto text-gray-600 font-bold">O HAC</p>
      </div>
    </div>

    <div
      class="main-div relative w-full h-screen"
      style="background-color: #53cf92"
    >
      <div class="">
        <img src="~/assets/images/map.svg" alt="map" class="w-full h-screen" />
      </div>
      <div
        class="w-full absolute top-64 md:px-8 md:left-11 lg:left-32 lg:px-5 md:w-11/12 lg:w-4/5 md:text-center lg:text-center my-2 text-white"
      >
        <h1 class="about-text text-5xl md:font-none lg:font-black">
          УМНЫЕ ВМЕСТЕ
        </h1>
        <p
          class="text-3xl md:font-bold lg:font-extrablack md:leading-none lg:leading-snug"
        >
          Никто не знает всего, но все знают одно. С ЗНАНИЕМ учащиеся объединяют
          свои сильные стороны и способности для совместного решения проблем.
        </p>
      </div>
    </div>
    <div class="main w-full bg-white">
      <div class="px-5 mx-auto md:w-11/12 lg:w-4/5 py-8">
        <h2 class="ourtitle text-3xl font-black" style="color: #7a8adb">
          НАШИ ЦЕННОСТИ
        </h2>
        <div class="sm:block md:flex lg:flex pt-8">
          <div class="text-black sm:w-full md:w-2/6 lg:w-2/6 mr-5">
            <h4 class="md:pt-4 lg:pt-0 text-2xl font-black text-gray-900">
              ЛЮБОПЫТНЫМ
            </h4>
            <p class="md:pt-0 lg:pt-3 text-gray-800 font-normal">
              Всегда задавайте вопросы. Всегда будьте любопытны. Всегда смотри.
              Нет границ, которые мы можем исследовать и знать. Мы надеемся
              увидеть, к чему нас может привести наш интерес.
            </p>
          </div>
          <div class="text-black sm:w-full md:w-2/6 lg:w-2/6">
            <h2 class="md:pt-4 lg:pt-0 text-2xl font-black text-gray-900">
              ПОМОЧЬ
            </h2>
            <p class="md:pt-0 lg:pt-3 text-gray-800 font-normal">
              Мы все одна семья. Придет время, которого все ждут, и каждому из
              нас потребуется небольшая помощь. Так что помогите, когда увидите,
              что кому-то нужны дополнительные руки.
            </p>
          </div>
          <div class="text-black sm:w-full md:w-2/6 lg:w-2/6 mr-5">
            <h2 class="md:pt-4 lg:pt-0 text-2xl font-black text-gray-900">
              ДЕЛАТЬ ДОБРА
            </h2>
            <p class="md:pt-0 lg:pt-3 text-gray-800 font-normal">
              Продолжайте идти. Иди дольше. Зарабатывать больше. Невозможно
              понять, чего мы можем достичь, если не будем всегда стремиться
              быть лучше и лучше в каждом начинании.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="section-div w-full" style="background: #7a8adb">
      <div
        class="px-5 mx-auto sm:flex md:block lg:block md:w-11/12 lg:w-4/5 py-20"
      >
        <div class="sm:block md:flex sm:w-1/2 md:w-full lg:w-full">
          <div
            class="border text-white sm:w-2/5 md:w-2/6 lg:w-2/6 border-white text-center p-8 rounded-lg m-2"
          >
            <span class="font-extrabold text-4xl">50+</span>
            <p>пользователи</p>
          </div>
          <div
            class="border text-blue-900 sm:w-2/5 md:w-2/6 lg:w-2/6 border-blue-900 text-center p-8 rounded-lg m-2"
          >
            <span class="font-extrabold text-4xl">5+</span>
            <p>нации</p>
          </div>
          <div
            class="border text-white sm:w-2/5 md:w-2/6 lg:w-2/6 border-white text-center p-8 rounded-lg m-2"
          >
            <span class="font-extrabold text-4xl">2</span>
            <p>страны</p>
          </div>
        </div>

        <div class="sm:block md:flex lg:flex sm:w-1/2 md:w-full lg:w-full">
          <div
            class="border sm:w-2/5 md:w-2/6 lg:w-2/6 text-blue-900 border-blue-900 text-center p-8 rounded-lg m-2"
          >
            <span class="font-extrabold text-4xl">5</span>
            <p>moderators</p>
          </div>
          <div
            class="border text-white sm:w-2/5 md:w-2/6 lg:w-2/6 border-white text-center p-8 rounded-lg m-2"
          >
            <span class="font-extrabold text-4xl">18 </span>
            <p>Члены команды</p>
          </div>
          <div
            class="border text-blue-900 sm:w-2/5 md:w-2/6 lg:w-2/6 border-blue-900 text-center p-8 rounded-lg m-2"
          >
            <span class="font-extrabold text-3xl">200+ </span>
            <p>ответил на вопросы</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  auth: false
};
</script>

<style></style>
