<template>
  <footer
    class="fixed inset-x-0 bottom-0 flex flex-col-reverse px-6 py-4 text-xs font-thin text-gray-500 transition duration-500 bg-gray-50 dark:text-gray-400 dark:bg-gray-900 dark:bg-opacity-60 dark:2xl:bg-opacity-0 bg-opacity-80 lg:flex-row lg:justify-between animate__animated animate__fadeIn 2xl:bg-transparent backdrop-blur 2xl:backdrop-blur-0"
  >
    <div class="flex items-center m-auto font-light transition duration-300 lg:m-0">
      &copy; {{ year }}. Built with &nbsp;
      <font-awesome-icon :icon="['fas','heart']" />&nbsp; from Indonesia
    </div>
    <div class="flex justify-between w-40 pb-3 m-auto text-xl lg:pb-0 lg:w-36 lg:text-base lg:m-0">
      <a
        aria-label="Linkedin"
        class="transition duration-300 hover:text-yellow-400 dark:hover:text-yellow-300"
        href="https://www.linkedin.com/in/rayasabari/"
      >
        <font-awesome-icon :icon="['fab','linkedin']" />
      </a>
      <a
        aria-label="Instagram"
        class="transition duration-300 hover:text-yellow-400 dark:hover:text-yellow-300"
        href="https://instagram.com/rayasabari"
      >
        <font-awesome-icon :icon="['fab','instagram']" />
      </a>
      <a
        aria-label="Facebook"
        class="transition duration-300 hover:text-yellow-400 dark:hover:text-yellow-300"
        href="https://www.facebook.com/rayasabari"
      >
        <font-awesome-icon :icon="['fab','facebook']" />
      </a>
      <a
        aria-label="Twitter"
        class="transition duration-300 hover:text-yellow-400 dark:hover:text-yellow-300"
        href="https://twitter.com/rayasabari"
      >
        <font-awesome-icon :icon="['fab','twitter']" />
      </a>
      <a
        aria-label="Github"
        class="transition duration-300 hover:text-yellow-400 dark:hover:text-yellow-300"
        href="https://github.com/rayasabari"
      >
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