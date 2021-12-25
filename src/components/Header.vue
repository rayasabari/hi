<template>
  <header class="text-gray-300 w-full flex flex-col lg:flex-row justify-between">
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
    <nav
      :class="open == false ? 'hidden' : ''"
      class="lg:flex flex-col lg:flex-row lg:items-center lg:text-base py-4"
    >
      <ul class="flex flex-col lg:flex-row lg:items-center text-right text-gray-400 hover:text-gray-300">
        <li>
          <a href class="block px-6 py-2">Home</a>
        </li>
        <li>
          <a href class="block px-6 py-2">About</a>
        </li>
        <li>
          <a href class="block px-6 py-2">Portofolio</a>
        </li>
        <li>
          <a href class="block px-6 py-2">Contacts</a>
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
};
</script>

<style>
</style>