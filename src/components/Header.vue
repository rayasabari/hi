<template>
  <div class="text-gray-300 w-full flex flex-col lg:flex-row justify-between">
    <div class="flex items-center justify-between px-6 py-4 lg:w-auto">
      <a href="#" class="font-medium">RYSB</a>
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
    <div
      :class="open == false ? 'hidden' : ''"
      class="lg:flex flex-col lg:flex-row lg:items-center lg:text-base py-4"
    >
      <div class="flex flex-col lg:flex-row lg:items-center">
        <a href class="block px-6 py-2 text-gray-400 hover:text-gray-300">Home</a>
        <a href class="block px-6 py-2 text-gray-400 hover:text-gray-300">About</a>
        <a href class="block px-6 py-2 text-gray-400 hover:text-gray-300">Portofolio</a>
        <a href class="block px-6 py-2 text-gray-400 hover:text-gray-300">Contacts</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      open: false,
    };
  },
};
</script>

<style>
</style>