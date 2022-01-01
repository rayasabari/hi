<template>
  <footer
    class="px-6 py-4 text-xs flex font-thin flex-col-reverse lg:flex-row lg:justify-between animate__animated animate__fadeIn fixed bottom-0 inset-x-0 bg-gray-900"
  >
    <div class="text-gray-500 m-auto lg:m-0 items-center flex font-light">
      Made with &nbsp;
      <font-awesome-icon :icon="['fas','heart']" />&nbsp; by Raya Sabari &copy; {{ year }}
    </div>
    <div
      class="text-gray-400 pb-3 lg:pb-0 flex w-40 lg:w-36 text-xl lg:text-base justify-between m-auto lg:m-0"
    >
      <a
        class="hover:text-yellow-300 transition duration-300"
        href="https://www.linkedin.com/in/rayasabari/"
      >
        <font-awesome-icon :icon="['fab','linkedin']" />
      </a>
      <a
        class="hover:text-yellow-300 transition duration-300"
        href="https://instagram.com/rayasabari"
      >
        <font-awesome-icon :icon="['fab','instagram']" />
      </a>
      <a
        class="hover:text-yellow-300 transition duration-300"
        href="https://www.facebook.com/rayasabari"
      >
        <font-awesome-icon :icon="['fab','facebook']" />
      </a>
      <a
        class="hover:text-yellow-300 transition duration-300"
        href="https://twitter.com/rayasabari"
      >
        <font-awesome-icon :icon="['fab','twitter']" />
      </a>
      <a class="hover:text-yellow-300 transition duration-300" href="https://github.com/rayasabari">
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