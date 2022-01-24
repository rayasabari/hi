<template>
  <div class="text-gray-300">
    <SectionTitle :title="'PROJECTS'" :subYellow="'works'" :subGray="' & porto'" />
    <div class="h-screen flex items-center justify-center">coming soon...</div>
  </div>
</template>

<script>
import SectionTitle from "../components/SectionTitle.vue";
export default {
  components: {
    SectionTitle,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style>
</style>
