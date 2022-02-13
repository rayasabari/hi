<template>
  <footer
    class="fixed inset-x-0 bottom-0 flex flex-col-reverse px-6 py-4 text-xs font-thin bg-gray-900 bg-opacity-60 lg:flex-row lg:justify-between animate__animated animate__fadeIn 2xl:bg-transparent backdrop-blur 2xl:backdrop-blur-0"
  >
    <div class="flex items-center m-auto font-light text-gray-400 lg:m-0">
      &copy; {{ year }}. Built with &nbsp;
      <font-awesome-icon :icon="['fas','heart']" />&nbsp; from Indonesia
    </div>
    <div
      class="flex justify-between w-40 pb-3 m-auto text-xl text-gray-400 lg:pb-0 lg:w-36 lg:text-base lg:m-0"
    >
      <a
        class="transition duration-300 hover:text-yellow-300"
        href="https://www.linkedin.com/in/rayasabari/"
      >
        <font-awesome-icon :icon="['fab','linkedin']" />
      </a>
      <a
        class="transition duration-300 hover:text-yellow-300"
        href="https://instagram.com/rayasabari"
      >
        <font-awesome-icon :icon="['fab','instagram']" />
      </a>
      <a
        class="transition duration-300 hover:text-yellow-300"
        href="https://www.facebook.com/rayasabari"
      >
        <font-awesome-icon :icon="['fab','facebook']" />
      </a>
      <a
        class="transition duration-300 hover:text-yellow-300"
        href="https://twitter.com/rayasabari"
      >
        <font-awesome-icon :icon="['fab','twitter']" />
      </a>
      <a class="transition duration-300 hover:text-yellow-300" href="https://github.com/rayasabari">
        <font-awesome-icon :icon="['fab','github']" />
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>

<style>
</style>