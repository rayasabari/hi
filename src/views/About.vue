<template>
  <div class="text-gray-300">
    <SectionTitle :title="'ABOUT'" :subYellow="'intro'" :subGray="' & exp.'" />
    <Scroller :to="'#detailabout'" />
    <div
      id="detailabout"
      data-aos="fade" data-aos-duration="1000" data-aos-delay="200"
      class="flex items-center justify-center h-screen"
    >
      <div
        class="w-10/12 lg:w-6/12 font-light text-md lg:text-xl text-center text-gray-400 leading-10 lg:leading-extra-loose"
      >
        I am currently working as a
        <span class="font-normal text-gray-300">Full Stack Developer</span> at public appraiser company in Jakarta.
        I enjoy building and enhance the web apps using
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
