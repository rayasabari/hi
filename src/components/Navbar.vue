<template>
  <header
    class="fixed inset-x-0 top-0 flex flex-col justify-between w-full text-gray-300 backdrop-filter backdrop-blur-sm lg:flex-row"
  >
    <div class="flex justify-center w-full lg:justify-start lg:pl-6">
      <div
        data-aos="fade"
        data-aos-duration="1000"
        class="z-10 flex items-center justify-between w-11/12 py-4 lg:w-auto"
      >
        <router-link
          exact
          active-class="text-gray-300"
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
            class="block px-6 py-5 text-2xl font-normal text-center text-gray-400 lg:py-2 lg:text-sm lg:font-light hover:text-gray-300"
          >{{menu.name}}</router-link>
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
      open: false,
      menus: [
        { name: "Hi", link: "/" },
        { name: "About", link: "/about" },
        { name: "Skills", link: "/skills" },
        { name: "Projects", link: "/projects" },
        { name: "Contacts", link: "/contacts" },
      ],
    };
  },
  methods: {},
};
</script>

<style>
</style>