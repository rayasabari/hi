<template>
  <header
    class="fixed inset-x-0 top-0 flex flex-col justify-between w-full text-gray-700 transition duration-500 bg-white dark:text-gray-300 bg-opacity-80 dark:bg-gray-900 dark:bg-opacity-60 backdrop-filter backdrop-blur lg:flex-row"
  >
    <div class="flex justify-center w-full lg:justify-start lg:pl-6">
      <div
        data-aos="fade"
        data-aos-duration="1000"
        class="z-10 flex items-center justify-between w-11/12 py-4 lg:w-auto"
      >
        <router-link
          exact
          active-class="dark:text-gray-300"
          to="/"
          class="text-2xl italic font-medium"
        >RYSB</router-link>
        <button @click="open = !open" class="block lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              :class="open == true ? 'hidden' : ''"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
            <path
              :class="open == false ? 'hidden' : ''"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
    <nav
      :class="open == false ? 'hidden' : 'bg-gray-900'"
      class="absolute flex flex-col items-center justify-center w-full h-screen text-xl font-light lg:flex animate__animated animate__fadeIn lg:w-auto lg:static lg:h-auto lg:flex-row lg:items-center lg:text-sm lg:py-4"
    >
      <ul class="flex flex-col lg:flex-row lg:items-center">
        <li v-for="(menu, index) in menus" :key="index" @click="open = false">
          <router-link
            :exact="menu.link == '/' ? true : false"
            :to="menu.link"
            class="block px-6 py-5 text-2xl font-medium text-center text-gray-400 duration-300 transitino lg:py-2 lg:text-sm hover:text-gray-300"
          >{{menu.name}}</router-link>
        </li>
        <li>
          <button
            @click="toogleDarkMode"
            class="block px-6 py-5 text-2xl font-normal text-center text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-300 lg:py-2 lg:text-sm lg:font-light"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                :class="darkMode === 'dark' ? '' : 'hidden'"
                fill-rule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clip-rule="evenodd"
              />
              <path
                :class="darkMode === 'dark' ? 'hidden': ''"
                d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
              />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      darkMode: "dark",
      open: false,
      menus: [
        // { name: "Hi", link: "/" },
        { name: "About", link: "/about" },
        { name: "Skills", link: "/skills" },
        { name: "Projects", link: "/projects" },
        { name: "Contacts", link: "/contacts" },
      ],
    };
  },
  mounted() {
    const currentMode = localStorage.getItem("darkMode");
    this.darkMode = currentMode === null ? "dark" : currentMode;
    this.setMode(this.darkMode);
  },
  methods: {
    toogleDarkMode() {
      this.darkMode = this.darkMode == "dark" ? "light" : "dark";
      localStorage.setItem("darkMode", this.darkMode);
      this.setMode(this.darkMode);
    },
    setMode(mode) {
      const html = document.querySelector("html");
      mode == "dark"
        ? html.classList.add("dark")
        : html.classList.remove("dark");
    },
  },
};
</script>

<style>
</style>