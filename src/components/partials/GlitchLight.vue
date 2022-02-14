<template>
  <VueTextGlitch fill="#374151" :text="text" background highlight2="cyan"></VueTextGlitch>
</template>

<script>
import VueTextGlitch from "vue-text-glitch";
export default {
  props: ["text"],
  components: { VueTextGlitch },
};
</script>

<style>
</style>