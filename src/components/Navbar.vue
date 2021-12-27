<template>
  <header class="text-gray-300 bg-gray-900 w-full flex flex-col lg:flex-row justify-between fixed z-10">
    <div class="flex items-center justify-between px-6 py-4 lg:w-auto animate__animated animate__fadeIn">
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
      :class="open == false ? 'hidden' : ''"
      class="lg:flex bg-transparent flex-col lg:flex-row lg:items-center lg:text-sm text-xl lg:py-4 font-light animate__animated animate__fadeIn"
    >
      <ul class="flex flex-col lg:flex-row lg:items-center text-right">
        <li>
          <router-link exact to="/" class="block px-6 pb-3 lg:py-2 text-gray-400 hover:text-gray-300">Home</router-link>
        </li>
        <li>
          <router-link to="/about" class="block px-6 pb-3 lg:py-2 text-gray-400 hover:text-gray-300">About</router-link>
        </li>
        <li>
          <router-link to="/skills" href class="block px-6 py-3 lg:py-2 text-gray-400 hover:text-gray-300">Skills</router-link>
        </li>
        <li>
          <router-link to="/projects" href class="block px-6 py-3 lg:py-2 text-gray-400 hover:text-gray-300">Projects</router-link>
        </li>
        <li>
          <router-link to="/contacts" href class="block px-6 py-3 lg:py-2 text-gray-400 hover:text-gray-300">Contacts</router-link>
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
    };
  },
  methods: {},
};
</script>

<style>
</style>