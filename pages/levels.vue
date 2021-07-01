<template>
  <div>
    <TheHeader />
    <div class="md:block lg:flex md:px-20 lg:px-24 xl:px-32 my-24 w-full">
      <div class="layout-content w-3/5 w-full border mr-5 bg-gray-100">
        <div class="w-full flex h-auto border rounded-lg mb-3 bg-white">
          <div
            class="badge w-48 h-auto border bg"
            style="background-color: #ebf2f7"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 52 60"
              class="m-5 flex items-center"
            >
              <defs>
                <path
                  d="M50.45 13.83L27.5.4c-.94-.54-2.07-.54-3 0L1.56 13.84C.6 14.4 0 15.43 0 16.58v26.84c0 1.14.6 2.2 1.55 2.75L24.5 59.6c.47.27 1 .4 1.5.4s1.03-.14 1.5-.4l22.95-13.43c.96-.56 1.55-1.6 1.55-2.75V16.58c0-1.14-.6-2.2-1.55-2.75"
                  id="a"
                ></path>
                <path
                  d="M25.97 16.25l1.77 3.44 3.95.54c.37.06.53.5.25.77l-2.86 2.7.66 3.77c.07.37-.34.65-.68.48l-3.53-1.8-3.54 1.8c-.33.17-.74-.1-.67-.48L22 23.7 19.14 21c-.28-.25-.12-.7.26-.76l3.95-.55 1.77-3.45c.18-.33.68-.33.85 0z"
                  id="b"
                  fill="#FFF"
                ></path>
                <path
                  d="M41.5 44.13L26 52.83l-15.5-8.7c-.48-.27-1.1-.1-1.37.37-.27.48-.1 1.1.37 1.37l16 9 .12.04c.06.03.12.06.2.07h.38c.06 0 .12-.04.18-.06.04 0 .08 0 .12-.03l16-9c.48-.28.64-.9.37-1.37-.28-.48-.9-.64-1.37-.37z"
                  id="c"
                  fill="#FFF"
                ></path>
                <mask id="d" fill="#FFF">
                  <use xlink:href="#a"></use>
                </mask>
              </defs>
              <use fill="#53CF92" xlink:href="#a"></use>
              <path
                d="M50.45-14.17L27.5-27.6c-.94-.54-2.07-.54-3 0L1.56-14.16C.6-13.6 0-12.57 0-11.42v26.84c0 1.14.6 2.2 1.55 2.75L24.5 31.6c.47.27 1 .4 1.5.4s1.03-.14 1.5-.4l22.95-13.43c.96-.56 1.55-1.6 1.55-2.75v-26.84c0-1.14-.6-2.2-1.55-2.75"
                fill="#fff"
                opacity=".25"
                mask="url(#d)"
              ></path>
              <use xlink:href="#b" transform="translate(0 8)"></use>
              <use xlink:href="#c" mask="url(#d)"></use>
            </svg>
          </div>
          <div class="w-full">
            <div class="m-6">
              <h2 class="font-bold text-lg mb-3">новичок</h2>
              <div class="flex">
                <img
                  src="~/assets/images/bilim-sqr.gif"
                  class="w-5 h-5 mr-2 bg-green-200 rounded-full p-1"
                  alt=""
                />
                <span class="text-sm font-semibold">0</span>
              </div>
              <div class="mt-3">
                <h2>Новый Пользователь, у которого еще все впереди.</h2>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full flex h-auto border rounded-lg mb-3 bg-white">
          <div
            class="badge w-48 h-auto border bg"
            style="background-color: #ebf2f7"
          >
            <div class="brn-badge-container flex items-center h-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 52 60"
                class="m-5 flex"
              >
                <defs>
                  <path
                    d="M50.45 13.83L27.5.4c-.94-.54-2.07-.54-3 0L1.56 13.84C.6 14.4 0 15.43 0 16.58v26.84c0 1.14.6 2.2 1.55 2.75L24.5 59.6c.47.27 1 .4 1.5.4s1.03-.14 1.5-.4l22.95-13.43c.96-.56 1.55-1.6 1.55-2.75V16.58c0-1.14-.6-2.2-1.55-2.75"
                    id="a"
                  ></path>
                  <path
                    d="M25.97 16.25l1.77 3.44 3.95.54c.37.06.53.5.25.77l-2.86 2.7.66 3.77c.07.37-.34.65-.68.48l-3.53-1.8-3.54 1.8c-.33.17-.74-.1-.67-.48L22 23.7 19.14 21c-.28-.25-.12-.7.26-.76l3.95-.55 1.77-3.45c.18-.33.68-.33.85 0z"
                    id="b"
                    fill="#FFF"
                  ></path>
                  <path
                    d="M41.5 44.13L26 52.83l-15.5-8.7c-.48-.27-1.1-.1-1.37.37-.27.48-.1 1.1.37 1.37l16 9 .12.04c.06.03.12.06.2.07h.38c.06 0 .12-.04.18-.06.04 0 .08 0 .12-.03l16-9c.48-.28.64-.9.37-1.37-.28-.48-.9-.64-1.37-.37z"
                    id="c"
                    fill="#FFF"
                  ></path>
                  <mask id="d" fill="#FFF">
                    <use xlink:href="#a"></use>
                  </mask>
                </defs>
                <use fill="#53CF92" xlink:href="#a"></use>
                <path
                  d="M50.45-14.17L27.5-27.6c-.94-.54-2.07-.54-3 0L1.56-14.16C.6-13.6 0-12.57 0-11.42v26.84c0 1.14.6 2.2 1.55 2.75L24.5 31.6c.47.27 1 .4 1.5.4s1.03-.14 1.5-.4l22.95-13.43c.96-.56 1.55-1.6 1.55-2.75v-26.84c0-1.14-.6-2.2-1.55-2.75"
                  fill="#fff"
                  opacity=".25"
                  mask="url(#d)"
                ></path>
                <use xlink:href="#b" transform="translate(-9 8)"></use>
                <use xlink:href="#b" transform="translate(9 8)"></use>
                <use xlink:href="#c" transform="rotate(-120 26 30)"></use>
                <use xlink:href="#c" transform="rotate(120 26 30)"></use>
              </svg>
            </div>
          </div>
          <div class="w-full">
            <div class="m-6">
              <h2 class="font-bold text-lg mb-3">середнячок</h2>
              <div class="flex h-3">
                <img
                  src="~/assets/images/bilim-sqr.gif"
                  class="w-5 h-5 mr-2 bg-green-200 rounded-full p-1"
                  alt=""
                />
                <span class="text-sm font-semibold">100</span>
              </div>
              <div class="mt-3">
                <h2>
                  Этот статус получает Пользователь, который только включился в
                  игру и хочет помогать другим. Увидев человека с этим статусом,
                  представьте себе того, кто с улыбкой на лице поможет Вам с
                  домашними заданиями.
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full flex h-auto border rounded-lg mb-3 bg-white">
          <div
            class="badge w-48 h-auto border bg"
            style="background-color: #ebf2f7"
          >
            <div class="brn-badge-container h-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 52 60"
                class="m-5"
              >
                <defs>
                  <path
                    d="M50.45 13.83L27.5.4c-.94-.54-2.07-.54-3 0L1.56 13.84C.6 14.4 0 15.43 0 16.58v26.84c0 1.14.6 2.2 1.55 2.75L24.5 59.6c.47.27 1 .4 1.5.4s1.03-.14 1.5-.4l22.95-13.43c.96-.56 1.55-1.6 1.55-2.75V16.58c0-1.14-.6-2.2-1.55-2.75"
                    id="a"
                  ></path>
                  <path
                    d="M25.97 16.25l1.77 3.44 3.95.54c.37.06.53.5.25.77l-2.86 2.7.66 3.77c.07.37-.34.65-.68.48l-3.53-1.8-3.54 1.8c-.33.17-.74-.1-.67-.48L22 23.7 19.14 21c-.28-.25-.12-.7.26-.76l3.95-.55 1.77-3.45c.18-.33.68-.33.85 0z"
                    id="b"
                    fill="#FFF"
                  ></path>
                  <path
                    d="M41.5 44.13L26 52.83l-15.5-8.7c-.48-.27-1.1-.1-1.37.37-.27.48-.1 1.1.37 1.37l16 9 .12.04c.06.03.12.06.2.07h.38c.06 0 .12-.04.18-.06.04 0 .08 0 .12-.03l16-9c.48-.28.64-.9.37-1.37-.28-.48-.9-.64-1.37-.37z"
                    id="c"
                    fill="#FFF"
                  ></path>
                  <mask id="d" fill="#FFF">
                    <use xlink:href="#a"></use>
                  </mask>
                </defs>
                <use fill="#53CF92" xlink:href="#a"></use>
                <path
                  d="M50.45-14.17L27.5-27.6c-.94-.54-2.07-.54-3 0L1.56-14.16C.6-13.6 0-12.57 0-11.42v26.84c0 1.14.6 2.2 1.55 2.75L24.5 31.6c.47.27 1 .4 1.5.4s1.03-.14 1.5-.4l22.95-13.43c.96-.56 1.55-1.6 1.55-2.75v-26.84c0-1.14-.6-2.2-1.55-2.75"
                  fill="#fff"
                  opacity=".25"
                  mask="url(#d)"
                ></path>
                <use xlink:href="#b"></use>
                <use xlink:href="#b" transform="translate(9 13)"></use>
                <use xlink:href="#b" transform="translate(-9 13)"></use>
                <use xlink:href="#c" mask="url(#d)"></use>
                <use xlink:href="#c" transform="rotate(120 26 30)"></use>
                <use xlink:href="#c" transform="rotate(-120 26 30)"></use>
              </svg>
            </div>
          </div>
          <div class="w-full">
            <div class="m-6">
              <h2 class="font-bold text-lg mb-3">хорошист</h2>
              <div class="flex">
                <img
                  src="~/assets/images/bilim-sqr.gif"
                  class="w-5 h-5 mr-2 bg-green-200 rounded-full p-1"
                  alt=""
                />
                <span class="text-sm font-semibold">250</span>
              </div>
              <div class="mt-3">
                <h2>
                  Если вам нужна помощь от кого-то проверенного, от человека,
                  который помог многим людям, то от пользователя с этим статусом
                  можно ожидать самого лучшего: надежности, точности и увлечения
                  наукой.
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full flex h-auto border rounded-lg mb-3 bg-white">
          <div
            class="badge w-48 h-auto border bg"
            style="background-color: #ebf2f7"
          >
            <div class="brn-badge-container flex items-center h-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 52 60"
                class="m-5"
              >
                <defs>
                  <path
                    d="M50.45 13.83L27.5.4c-.94-.54-2.07-.54-3 0L1.56 13.84C.6 14.4 0 15.43 0 16.58v26.84c0 1.14.6 2.2 1.55 2.75L24.5 59.6c.47.27 1 .4 1.5.4s1.03-.14 1.5-.4l22.95-13.43c.96-.56 1.55-1.6 1.55-2.75V16.58c0-1.14-.6-2.2-1.55-2.75"
                    id="a"
                  ></path>
                  <path
                    d="M25.97 16.25l1.77 3.44 3.95.54c.37.06.53.5.25.77l-2.86 2.7.66 3.77c.07.37-.34.65-.68.48l-3.53-1.8-3.54 1.8c-.33.17-.74-.1-.67-.48L22 23.7 19.14 21c-.28-.25-.12-.7.26-.76l3.95-.55 1.77-3.45c.18-.33.68-.33.85 0z"
                    id="b"
                    fill="#FFF"
                  ></path>
                  <path
                    d="M41.5 44.13L26 52.83l-15.5-8.7c-.48-.27-1.1-.1-1.37.37-.27.48-.1 1.1.37 1.37l16 9 .12.04c.06.03.12.06.2.07h.38c.06 0 .12-.04.18-.06.04 0 .08 0 .12-.03l16-9c.48-.28.64-.9.37-1.37-.28-.48-.9-.64-1.37-.37z"
                    id="c"
                    fill="#FFF"
                  ></path>
                  <mask id="d" fill="#FFF">
                    <use xlink:href="#a"></use>
                  </mask>
                </defs>
                <use fill="#57b2f8" xlink:href="#a"></use>
                <path
                  d="M50.45-14.17L27.5-27.6c-.94-.54-2.07-.54-3 0L1.56-14.16C.6-13.6 0-12.57 0-11.42v26.84c0 1.14.6 2.2 1.55 2.75L24.5 31.6c.47.27 1 .4 1.5.4s1.03-.14 1.5-.4l22.95-13.43c.96-.56 1.55-1.6 1.55-2.75v-26.84c0-1.14-.6-2.2-1.55-2.75"
                  fill="#fff"
                  opacity=".25"
                  mask="url(#d)"
                ></path>
                <use xlink:href="#b" transform="translate(0 8)"></use>
                <use xlink:href="#c" mask="url(#d)"></use>
              </svg>
            </div>
          </div>
          <div class="w-full">
            <div class="m-6">
              <h2 class="font-bold text-lg mb-3">умный</h2>
              <div class="flex">
                <img
                  src="~/assets/images/bilim-sqr.gif"
                  class="w-5 h-5 mr-2 bg-green-200 rounded-full p-1"
                  alt=""
                />
                <span class="text-sm font-semibold">500</span>
              </div>
              <div class="mt-3">
                <h2>
                  Только пользователи, которые отличаются высокой активностью, а
                  также отличными отзывами от Пользователей, которые задают
                  вопросы, могут получить этот статус. Наши Пользователи
                  неоднократно признавали решение этого человека как лучшее, и
                  потому Вы можете рассчитывать на высокое качество решений.
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full flex h-auto border rounded-lg mb-3 bg-white">
          <div
            class="badge w-48 h-auto border bg"
            style="background-color: #ebf2f7"
          >
            <div class="brn-badge-container flex items-center h-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 52 60"
                class="m-5"
              >
                <defs>
                  <path
                    d="M50.45 13.83L27.5.4c-.94-.54-2.07-.54-3 0L1.56 13.84C.6 14.4 0 15.43 0 16.58v26.84c0 1.14.6 2.2 1.55 2.75L24.5 59.6c.47.27 1 .4 1.5.4s1.03-.14 1.5-.4l22.95-13.43c.96-.56 1.55-1.6 1.55-2.75V16.58c0-1.14-.6-2.2-1.55-2.75"
                    id="a"
                  ></path>
                  <path
                    d="M25.97 16.25l1.77 3.44 3.95.54c.37.06.53.5.25.77l-2.86 2.7.66 3.77c.07.37-.34.65-.68.48l-3.53-1.8-3.54 1.8c-.33.17-.74-.1-.67-.48L22 23.7 19.14 21c-.28-.25-.12-.7.26-.76l3.95-.55 1.77-3.45c.18-.33.68-.33.85 0z"
                    id="b"
                    fill="#FFF"
                  ></path>
                  <path
                    d="M41.5 44.13L26 52.83l-15.5-8.7c-.48-.27-1.1-.1-1.37.37-.27.48-.1 1.1.37 1.37l16 9 .12.04c.06.03.12.06.2.07h.38c.06 0 .12-.04.18-.06.04 0 .08 0 .12-.03l16-9c.48-.28.64-.9.37-1.37-.28-.48-.9-.64-1.37-.37z"
                    id="c"
                    fill="#FFF"
                  ></path>
                  <mask id="d" fill="#FFF">
                    <use xlink:href="#a"></use>
                  </mask>
                </defs>
                <use fill="#57b2f8" xlink:href="#a"></use>
                <path
                  d="M50.45-14.17L27.5-27.6c-.94-.54-2.07-.54-3 0L1.56-14.16C.6-13.6 0-12.57 0-11.42v26.84c0 1.14.6 2.2 1.55 2.75L24.5 31.6c.47.27 1 .4 1.5.4s1.03-.14 1.5-.4l22.95-13.43c.96-.56 1.55-1.6 1.55-2.75v-26.84c0-1.14-.6-2.2-1.55-2.75"
                  fill="#fff"
                  opacity=".25"
                  mask="url(#d)"
                ></path>
                <use xlink:href="#b" transform="translate(-9 8)"></use>
                <use xlink:href="#b" transform="translate(9 8)"></use>
                <use xlink:href="#c" transform="rotate(-120 26 30)"></use>
                <use xlink:href="#c" transform="rotate(120 26 30)"></use>
              </svg>
            </div>
          </div>
          <div class="w-full">
            <div class="m-6">
              <h2 class="font-bold text-lg mb-3">отличник</h2>
              <div class="flex">
                <img
                  src="~/assets/images/bilim-sqr.gif"
                  class="w-5 h-5 mr-2 bg-green-200 rounded-full p-1"
                  alt=""
                />
                <span class="text-sm font-semibold">1000</span>
              </div>
              <div class="mt-3">
                <h2>
                  Идеальный Пользователь! Проверен большим количеством
                  Пользователей, которые добавляли свои задания. Отвечает на
                  вопросы на высоком уровне!
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full flex h-auto border rounded-lg mb-3 bg-white">
          <div
            class="badge w-48 h-auto border bg"
            style="background-color: #ebf2f7"
          >
            <div class="brn-badge-container flex items-center h-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 52 60"
                class="m-5"
              >
                <defs>
                  <path
                    d="M50.45 13.83L27.5.4c-.94-.54-2.07-.54-3 0L1.56 13.84C.6 14.4 0 15.43 0 16.58v26.84c0 1.14.6 2.2 1.55 2.75L24.5 59.6c.47.27 1 .4 1.5.4s1.03-.14 1.5-.4l22.95-13.43c.96-.56 1.55-1.6 1.55-2.75V16.58c0-1.14-.6-2.2-1.55-2.75"
                    id="a"
                  ></path>
                  <path
                    d="M25.97 16.25l1.77 3.44 3.95.54c.37.06.53.5.25.77l-2.86 2.7.66 3.77c.07.37-.34.65-.68.48l-3.53-1.8-3.54 1.8c-.33.17-.74-.1-.67-.48L22 23.7 19.14 21c-.28-.25-.12-.7.26-.76l3.95-.55 1.77-3.45c.18-.33.68-.33.85 0z"
                    id="b"
                    fill="#FFF"
                  ></path>
                  <path
                    d="M41.5 44.13L26 52.83l-15.5-8.7c-.48-.27-1.1-.1-1.37.37-.27.48-.1 1.1.37 1.37l16 9 .12.04c.06.03.12.06.2.07h.38c.06 0 .12-.04.18-.06.04 0 .08 0 .12-.03l16-9c.48-.28.64-.9.37-1.37-.28-.48-.9-.64-1.37-.37z"
                    id="c"
                    fill="#FFF"
                  ></path>
                  <mask id="d" fill="#FFF">
                    <use xlink:href="#a"></use>
                  </mask>
                </defs>
                <use fill="#57b2f8" xlink:href="#a"></use>
                <path
                  d="M50.45-14.17L27.5-27.6c-.94-.54-2.07-.54-3 0L1.56-14.16C.6-13.6 0-12.57 0-11.42v26.84c0 1.14.6 2.2 1.55 2.75L24.5 31.6c.47.27 1 .4 1.5.4s1.03-.14 1.5-.4l22.95-13.43c.96-.56 1.55-1.6 1.55-2.75v-26.84c0-1.14-.6-2.2-1.55-2.75"
                  fill="#fff"
                  opacity=".25"
                  mask="url(#d)"
                ></path>
                <use xlink:href="#b"></use>
                <use xlink:href="#b" transform="translate(9 13)"></use>
                <use xlink:href="#b" transform="translate(-9 13)"></use>
                <use xlink:href="#c" mask="url(#d)"></use>
                <use xlink:href="#c" transform="rotate(120 26 30)"></use>
                <use xlink:href="#c" transform="rotate(-120 26 30)"></use>
              </svg>
            </div>
          </div>
          <div class="w-full">
            <div class="m-6">
              <h2 class="font-bold text-lg mb-3">ученый</h2>
              <div class="flex">
                <img
                  src="~/assets/images/bilim-sqr.gif"
                  class="w-5 h-5 mr-2 bg-green-200 rounded-full p-1"
                  alt=""
                />
                <span class="text-sm font-semibold">3000</span>
              </div>
              <div class="mt-3">
                <h2>
                  Если от отличника можно ожидать многого, то что может дать Вам
                  ученый? Эти люди очень активные, они с нами уже много месяцев.
                  Такой срок должен говорить сам за себя.
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full flex h-auto border rounded-lg mb-3 bg-white">
          <div
            class="badge w-48 h-auto border bg"
            style="background-color: #ebf2f7"
          >
            <div class="brn-badge-container flex items-center h-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 52 60"
                class="m-5"
              >
                <defs>
                  <path
                    d="M50.45 13.83L27.5.4c-.94-.54-2.07-.54-3 0L1.56 13.84C.6 14.4 0 15.43 0 16.58v26.84c0 1.14.6 2.2 1.55 2.75L24.5 59.6c.47.27 1 .4 1.5.4s1.03-.14 1.5-.4l22.95-13.43c.96-.56 1.55-1.6 1.55-2.75V16.58c0-1.14-.6-2.2-1.55-2.75"
                    id="a"
                  ></path>
                  <path
                    d="M25.97 16.25l1.77 3.44 3.95.54c.37.06.53.5.25.77l-2.86 2.7.66 3.77c.07.37-.34.65-.68.48l-3.53-1.8-3.54 1.8c-.33.17-.74-.1-.67-.48L22 23.7 19.14 21c-.28-.25-.12-.7.26-.76l3.95-.55 1.77-3.45c.18-.33.68-.33.85 0z"
                    id="b"
                    fill="#FFF"
                  ></path>
                  <path
                    d="M41.5 44.13L26 52.83l-15.5-8.7c-.48-.27-1.1-.1-1.37.37-.27.48-.1 1.1.37 1.37l16 9 .12.04c.06.03.12.06.2.07h.38c.06 0 .12-.04.18-.06.04 0 .08 0 .12-.03l16-9c.48-.28.64-.9.37-1.37-.28-.48-.9-.64-1.37-.37z"
                    id="c"
                    fill="#FFF"
                  ></path>
                  <mask id="d" fill="#FFF">
                    <use xlink:href="#a"></use>
                  </mask>
                </defs>
                <use fill="#fec83c" xlink:href="#a"></use>
                <path
                  d="M50.45-14.17L27.5-27.6c-.94-.54-2.07-.54-3 0L1.56-14.16C.6-13.6 0-12.57 0-11.42v26.84c0 1.14.6 2.2 1.55 2.75L24.5 31.6c.47.27 1 .4 1.5.4s1.03-.14 1.5-.4l22.95-13.43c.96-.56 1.55-1.6 1.55-2.75v-26.84c0-1.14-.6-2.2-1.55-2.75"
                  fill="#fff"
                  opacity=".25"
                  mask="url(#d)"
                ></path>
                <use xlink:href="#b" transform="translate(0 8)"></use>
                <use xlink:href="#c" mask="url(#d)"></use>
              </svg>
            </div>
          </div>
          <div class="w-full">
            <div class="m-6">
              <h2 class="font-bold text-lg mb-3">почетный грамотей</h2>
              <div class="flex">
                <img
                  src="~/assets/images/bilim-sqr.gif"
                  class="w-5 h-5 mr-2 bg-green-200 rounded-full p-1"
                  alt=""
                />
                <span class="text-sm font-semibold">5000</span>
              </div>
              <div class="mt-3">
                <h2>
                  Человек, который много-много месяцев качественно помогает
                  другим, добросовестный и очень хорошо решает задания и знает,
                  что делает. От этого Пользователя можно ожидать полного
                  решения с объяснением.
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full flex h-auto border rounded-lg bg-white">
          <div
            class="badge w-48 h-auto border bg"
            style="background-color: #ebf2f7"
          >
            <div class="brn-badge-container flex items-center h-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 52 60"
                class="flex m-5"
              >
                <defs>
                  <path
                    d="M50.45 13.83L27.5.4c-.94-.54-2.07-.54-3 0L1.56 13.84C.6 14.4 0 15.43 0 16.58v26.84c0 1.14.6 2.2 1.55 2.75L24.5 59.6c.47.27 1 .4 1.5.4s1.03-.14 1.5-.4l22.95-13.43c.96-.56 1.55-1.6 1.55-2.75V16.58c0-1.14-.6-2.2-1.55-2.75"
                    id="a"
                  ></path>
                  <path
                    d="M25.97 16.25l1.77 3.44 3.95.54c.37.06.53.5.25.77l-2.86 2.7.66 3.77c.07.37-.34.65-.68.48l-3.53-1.8-3.54 1.8c-.33.17-.74-.1-.67-.48L22 23.7 19.14 21c-.28-.25-.12-.7.26-.76l3.95-.55 1.77-3.45c.18-.33.68-.33.85 0z"
                    id="b"
                    fill="#FFF"
                  ></path>
                  <path
                    d="M41.5 44.13L26 52.83l-15.5-8.7c-.48-.27-1.1-.1-1.37.37-.27.48-.1 1.1.37 1.37l16 9 .12.04c.06.03.12.06.2.07h.38c.06 0 .12-.04.18-.06.04 0 .08 0 .12-.03l16-9c.48-.28.64-.9.37-1.37-.28-.48-.9-.64-1.37-.37z"
                    id="c"
                    fill="#FFF"
                  ></path>
                  <mask id="d" fill="#FFF">
                    <use xlink:href="#a"></use>
                  </mask>
                </defs>
                <use fill="#000" xlink:href="#a"></use>
                <path
                  d="M50.45-14.17L27.5-27.6c-.94-.54-2.07-.54-3 0L1.56-14.16C.6-13.6 0-12.57 0-11.42v26.84c0 1.14.6 2.2 1.55 2.75L24.5 31.6c.47.27 1 .4 1.5.4s1.03-.14 1.5-.4l22.95-13.43c.96-.56 1.55-1.6 1.55-2.75v-26.84c0-1.14-.6-2.2-1.55-2.75"
                  fill="#fff"
                  opacity=".25"
                  mask="url(#d)"
                ></path>
                <use xlink:href="#b" transform="translate(0 8)"></use>
                <use xlink:href="#c" mask="url(#d)"></use>
              </svg>
            </div>
          </div>
          <div class="w-full">
            <div class="m-6">
              <h2 class="font-bold text-lg mb-3">профессор</h2>
              <div class="flex">
                <img
                  src="~/assets/images/bilim-sqr.gif"
                  class="w-5 h-5 mr-2 bg-green-200 rounded-full p-1"
                  alt=""
                />
                <span class="text-sm font-semibold">8000</span>
              </div>
              <div class="mt-3">
                <h2>
                  Чтобы получить этот статус, нужно активно и качественно
                  помогать другим каждый день! Если профессор решил Ваше
                  задание, жмите "Спасибо" и отмечайте решение как лучшее.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- <div
        class="md:w-3/5 sm:w-3/5 sm:mx-auto md:mx-auto md:my-5 lg:my-0 lg:w-2/5"
      >
        <div class="text-center py-2 h-auto border rounded-lg">
          <p>Abbos-DEV-csdc-550</p>
          <p>Abbos-DEVELOPER-csdc-506</p>
          <p>Abbos-DEVELOPER-csdc-506</p>
          <p>Abbos-DEVELOPER-csdc-506</p>
          <p>Abbos-DEVELOPER-csdc-506</p>
          <p>Abbos-DEVELOPER-csdc-506</p>
          <p>Abbos-DEVELOPER-csdc-506</p>
        </div>
      </div> -->
    </div>
    <TheFooter />
  </div>
</template>

<script>
export default {};
</script>

<style></style>
