<template>
  <footer
    class="px-6 py-4 text-xs flex flex-col-reverse lg:flex-row lg:justify-between animate__animated animate__fadeIn"
  >
    <div
      class="text-gray-500 m-auto lg:m-0 items-end flex font-light"
    >&copy; {{ year }}. RYSB - All Rights Reserved.</div>
    <div
      class="text-gray-400 pb-3 lg:pb-0 flex w-40 lg:w-36 text-xl lg:text-base justify-between m-auto lg:m-0"
    >
      <a class="hover:text-gray-300" href="https://www.linkedin.com/in/rayasabari/">
        <font-awesome-icon :icon="['fab','linkedin']" />
      </a>
      <a class="hover:text-gray-300" href="https://instagram.com/rayasabari">
        <font-awesome-icon :icon="['fab','instagram']" />
      </a>
      <a class="hover:text-gray-300" href="https://www.facebook.com/rayasabari">
        <font-awesome-icon :icon="['fab','facebook']" />
      </a>
      <a class="hover:text-gray-300" href="https://twitter.com/rayasabari">
        <font-awesome-icon :icon="['fab','twitter']" />
      </a>
      <a class="hover:text-gray-300" href="https://github.com/rayasabari">
        <font-awesome-icon :icon="['fab','github']" />
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      year: null,
    };
  },
  mounted() {
    this.getYear();
  },
  methods: {
    getYear() {
      this.year = new Date().getFullYear();
    },
  },
};
</script>

<style>
</style>