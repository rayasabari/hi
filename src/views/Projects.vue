<template>
  <div class="text-gray-300">
    <SectionTitle :title="'PROJECTS'" :subYellow="'works'" :subGray="' & porto'" />
    <Scroller :to="'#detail-projects'" />
    <div id="detail-projects" class="flex items-center justify-center h-screen">coming soon...</div>
  </div>
</template>

<script>
import Scroller from '../components/partials/Scroller.vue';
import SectionTitle from "../components/SectionTitle.vue";
export default {
  components: {
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
