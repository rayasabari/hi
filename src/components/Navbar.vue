<template>
  <header
    class="text-gray-300 backdrop-filter backdrop-blur-sm w-full flex flex-col lg:flex-row justify-between fixed top-0 inset-x-0"
  >
    <div
      class="flex items-center justify-between px-6 py-4 lg:w-auto animate__animated animate__fadeIn z-10"
    >
      <router-link exact active-class="text-gray-300" to="/" class="font-bold italic text-2xl">RYSB</router-link>
      <button @click="open = !open" class="block lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
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
    <nav
      :class="open == false ? 'hidden' : 'bg-gray-900'"
      class="lg:flex flex w-full lg:w-auto h-screen absolute lg:static items-center justify-center lg:h-auto flex-col lg:flex-row lg:items-center lg:text-sm text-xl lg:py-4 font-light animate__animated animate__fadeIn"
    >
      <ul class="flex flex-col lg:flex-row lg:items-center">
        <li v-for="(menu, index) in menus" :key="index" @click="open = false">
          <router-link
            :exact="menu.link == '/' ? true : false"
            :to="menu.link"
            class="block px-6 py-4 lg:py-2 text-gray-400 hover:text-gray-300 text-center"
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