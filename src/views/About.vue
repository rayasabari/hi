<template>
  <div class="text-gray-300">
    <SectionTitle :title="'ABOUT'" :subYellow="'intro'" :subGray="'exp.'" />
    <Scroller :to="'#detailabout'" />
    <div
      id="detailabout"
      class="flex items-center justify-center h-screen animate__animated animate__fadeIn"
    >
      <div
        class="w-10/12 lg:w-6/12 font-light text-md lg:text-xl text-center text-gray-400 leading-10 lg:leading-extra-loose"
      >
        Hi, I am
        <span class="font-normal text-gray-300">Raya Sabari</span>, a
        <span class="font-normal text-gray-300">Full Stack Developer</span> from Jakarta. I am currently working at public appraiser company in Indonesia.
        I have a lot of experiences in
        <span
          class="font-normal text-gray-300"
        >Web Development</span> and I enjoy building the web apps using
        <Highlight>
          <a href="https://laravel.com/" target="_blank" class="flex items-center">
            <img src="../../public/images/laravel.svg" alt="Laravel Logo" class="w-5 h-5 mr-2" />Laravel
          </a>
        </Highlight>and
        <Highlight>
          <a href="https://vuejs.org/" target="_blank" class="flex items-center">
            <img src="../../public/images/vue.svg" alt="Vue.js Logo" class="w-5 h-5 mr-2" />Vue.js
          </a>
        </Highlight>.
        I also have a good taste in
        <span class="font-normal text-gray-300">UI/UX.</span>
      </div>
    </div>
  </div>
</template>

<script>
import Highlight from "../components/partials/Highlight.vue";
import Scroller from "../components/partials/Scroller.vue";
import SectionTitle from "../components/SectionTitle.vue";
export default {
  components: {
    Highlight,
    SectionTitle,
    Scroller,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style>
</style>
