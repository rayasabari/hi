<template>
  <div class="text-gray-300">
    <SectionTitle :title="'ABOUT'" :subYellow="'bio'" :subGray="' & exp.'" />
    <Scroller :to="'#detail-about'" />
    <div id="detail-about" class="flex items-center justify-center h-screen">
      <div
        data-aos="fade"
        data-aos-duration="1000"
        data-aos-delay="200"
        class="w-10/12 font-light leading-10 text-center text-gray-400 lg:w-5/12 text-md lg:text-xl lg:leading-extra-loose"
      >
        I am currently working as a
        <span class="font-normal text-gray-300">Full Stack Developer</span> at public appraiser company in Jakarta.
        I enjoy building and enhance the web apps using
        <Highlight>
          <a href="https://laravel.com/" target="_blank" class="flex items-center">
            <img src="../../public/images/laravel.svg" alt="Laravel Logo" class="w-4 h-4 mr-2" />Laravel
          </a>
        </Highlight>and
        <Highlight>
          <a href="https://vuejs.org/" target="_blank" class="flex items-center">
            <img src="../../public/images/vue.svg" alt="Vue.js Logo" class="w-4 h-4 mr-2" />Vue.js
          </a>
        </Highlight>.
        I also have a good taste in
        <span class="font-normal text-gray-300">UI/UX.</span>
        <NavGuide :to="'/skills'" :position="''">my skills</NavGuide>
      </div>
    </div>
  </div>
</template>

<script>
import Highlight from "../components/partials/Highlight.vue";
import NavGuide from "../components/partials/NavGuide.vue";
import Scroller from "../components/partials/Scroller.vue";
import SectionTitle from "../components/SectionTitle.vue";
export default {
  components: {
    Highlight,
    SectionTitle,
    Scroller,
    NavGuide,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style>
</style>
