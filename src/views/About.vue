<template>
  <div class="text-gray-300">
    <SectionTitle :title="'ABOUT'" :subYellow="'bio'" :subGray="' & resume'" />
    <Scroller :to="'#detail-about'" />
    <div id="detail-about" class="flex items-center justify-center h-screen">
      <Section data-aos="fade" data-aos-duration="1000" data-aos-delay="200">
        I am currently working as a
        <span class="font-normal text-gray-300">Full Stack Developer</span> at public appraiser company in Jakarta.
        I enjoy building and enhance the web apps using
        <Highlight>
          <a href="https://laravel.com/" target="_blank" class="flex items-center">
            <img src="../../public/images/laravel.svg" alt="Laravel Logo" class="w-3 h-3 mr-2" />Laravel
          </a>
        </Highlight>and
        <Highlight>
          <a href="https://vuejs.org/" target="_blank" class="flex items-center">
            <img src="../../public/images/vue.svg" alt="Vue.js Logo" class="w-3 h-3 mr-2" />Vue.js
          </a>
        </Highlight>.
        I also have a good taste in
        <span class="font-normal text-gray-300">UI/UX.</span>
        <NavGuide :to="'/skills'" :position="''">my skills</NavGuide>
      </Section>
    </div>
  </div>
</template>

<script>
import Highlight from "../components/partials/Highlight.vue";
import NavGuide from "../components/partials/NavGuide.vue";
import Scroller from "../components/partials/Scroller.vue";
import Section from '../components/Section.vue';
import SectionTitle from "../components/SectionTitle.vue";
export default {
  components: {
    Highlight,
    SectionTitle,
    Scroller,
    NavGuide,
    Section,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style>
</style>
