<template>
  <VueTextGlitch fill="#d1d5db" :text="text" background highlight2="cyan"></VueTextGlitch>
</template>

<script>
import VueTextGlitch from 'vue-text-glitch';
export default {
  props: ['text'],
  components: { VueTextGlitch },
};
</script>
