<template>
  <div class="text-gray-300">
    <div class="flex flex-col items-center justify-center h-screen">
      <div class="animate__animated animate__fadeInUp flex flex-col items-center">
        <Glitch text="ABOUT"></Glitch>
        <div class="font-light">
          <span to="/" class="text-yellow-300">me</span>
          <span class="text-gray-400"> & personal</span>
        </div>
      </div>
    </div>
    <div
      class="text-gray-400 w-full -mt-40 lg:-mt-32 flex justify-center items-center animate__animated animate__fadeInUp"
    >
      <a href="#detailabout" class="animate-ping-slow text-yellow-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
          />
        </svg>
      </a>
    </div>
    <div
      id="detailabout"
      class="flex items-center justify-center h-screen animate__animated animate__fadeIn"
    >
      <div
        class="w-72 lg:w-4/12 font-thin text-sm lg:text-lg text-center text-gray-300 leading-10 lg:leading-extra-loose"
      >
        I am currently working as a
        <span class="font-light">Senior Full Stack Developer</span> at
        <a
          href="https://kjpp.rhr.co.id"
          target="_blank"
          class="font-light hover:text-yellow-400"
        >KJPP RHR.</a>
        I enjoy building the web apps using
        <Highlight>
          <a href="https://laravel.com/" target="_blank">
            <font-awesome-icon class="mr-2 text-red-500" :icon="['fab','laravel']" />Laravel
          </a>
        </Highlight>and
        <Highlight>
          <a href="https://vuejs.org/" target="_blank">
            <font-awesome-icon class="mr-2 text-emerald-500" :icon="['fab','vuejs']" />Vue.js
          </a>
        </Highlight>.
        I am also experienced in using
        <Highlight>
          <a href="https://wordpress.com/" target="_blank">
            <font-awesome-icon class="mr-2 text-blue-400" :icon="['fab','wordpress']" />Wordpress
          </a>
        </Highlight>and have a good taste in
        <span class="font-light">UI Design.</span>
      </div>
    </div>
  </div>
</template>

<script>
import Glitch from "../components/partials/Glitch.vue";
import Highlight from "../components/partials/Highlight.vue";
export default {
  components: {
    Glitch,
    Highlight,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style>
</style>
