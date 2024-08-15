<template>
  <div class="text-gray-300 bg-yellow-30">
    <section-title :title="'404'" :subYellow="'page'" :subGray="' not found'" />
  </div>
</template>

<script>
import SectionTitle from '../components/SectionTitle.vue';
export default {
  components: {
    SectionTitle,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
