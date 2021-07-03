<template>
  <!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
  <div class="relative bg-white overflow-hidden">
    <div class="max-w-screen-xl mx-auto max-h-screen xl">
      <div
        class="
          relative
          z-10
          pb-8
          bg-white
          sm:pb-16
          md:pb-20
          lg:max-w-2xl
          lg:w-full
          lg:pb-28
          xl:pb-32
          h-screen
        "
      >
        <svg
          class="
            hidden
            lg:block
            absolute
            right-0
            inset-y-0
            h-full
            w-48
            text-white
            transform
            translate-x-1/2
          "
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon points="50,0 50,0 100,100 0,100" />
        </svg>

        <main
          class="max-w-screen-xl px-10 sm:mt-12 sm:px-6 md:mt-0 lg:pt-0 lg:px-8"
        >
          <div class="sm:text-center lg:text-left sm:pt-20 pt-10 md:pt-40">
            <h2
              class="
                text-4xl
                leading-10
                font-extrabold
                text-gray-800
                sm:text-5xl
                sm:leading-none
                md:text-6xl
              "
            >
              Получите
              <br class="xl:hidden" />
              <span class="text-indigo-700">ответы на свои вопросы онлайн</span>
            </h2>
            <p
              class="
                mt-3
                text-base text-gray-600
                sm:mt-5
                sm:text-lg
                sm:max-w-xl
                sm:mx-auto
                md:mt-5
                md:text-xl
                lg:mx-0
              "
            >
              Получите ответы на свои вопросы и пополните свои знания вместе с
              нами!
            </p>
            <div
              class="
                sm:mt-20
                mt-10
                sm:mt-8
                sm:flex
                sm:justify-center
                lg:justify-start
              "
            >
              <div class="rounded-md mb-5 sm:mr-10">
                <nuxt-link
                  to="login"
                  class="
                    w-full
                    flex
                    items-center
                    justify-center
                    px-8
                    py-3
                    border border-transparent
                    text-base
                    leading-6
                    font-medium
                    rounded-md
                    text-white
                    bg-indigo-600
                    hover:bg-indigo-500
                    focus:outline-none
                    focus:border-indigo-700
                    focus:shadow-outline-indigo
                    transition
                    duration-1
                    ease-in-out
                    md:py-4
                    md:text-lg
                    md:px-8
                  "
                >
                  Войти
                </nuxt-link>
              </div>
              <div class="rounded-md">
                <nuxt-link
                  to="registration"
                  class="
                    w-full
                    flex
                    items-center
                    justify-center
                    px-8
                    py-3
                    border border-transparent
                    text-base
                    leading-6
                    font-medium
                    rounded-md
                    text-white
                    bg-indigo-600
                    hover:bg-indigo-500
                    focus:outline-none
                    focus:border-indigo-700
                    focus:shadow-outline-indigo
                    transition
                    duration-1
                    ease-in-out
                    md:py-4
                    md:text-lg
                    md:px-8
                  "
                >
                  Зарегистрироваться
                </nuxt-link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <div class="sm:mt-0 mt-20 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img
        class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
        src="https://images.unsplash.com/photo-1587355760421-b9de3226a046?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  auth: false,
  middleware: "redirectIfLoggedIn"
};
</script>

