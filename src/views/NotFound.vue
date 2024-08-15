<template>
  <div class="text-gray-300 bg-yellow-30">
    <section-title :title="'404'" :subYellow="'page'" :subGray="' not found'" />
  </div>
</template>

<script>
import SectionTitle from '../components/SectionTitle.vue';
export default {
  name: 'NotFound',
  metaInfo: {
    title: '404 -',
    meta: [
      { vmid: 'title', name: 'title', content: '404 - Raya Sabari' },
      { vmid: 'description', name: 'description', content: 'Page not found' },
    ],
  },
  components: {
    SectionTitle,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
