<template>
  <div class="text-gray-300 bg-yellow-30 animate__animated animate__fadeIn">
    <div class="flex flex-col items-center justify-center h-screen">
      <Glitch text="ABOUT"></Glitch>
      <div class="font-light">
        <router-link to="/" class="text-gray-300">home</router-link>
        <span class="text-gray-400">&nbsp;/ about</span>
      </div>
    </div>
    <div class="flex items-center justify-center h-screen">
      <div
        class="lg:w-7/12 w-72 font-thin text-sm lg:text-xl text-center text-gray-300 leading-10 lg:leading-10"
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
        <span class="font-light">UI/UX.</span>
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
};
</script>

<style>
</style>
