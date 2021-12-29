<template>
  <div class="font-bold italic lg:text-7xl text-5xl tracking-wide -mb-2">
    <VueTextGlitch fill="#d1d5db" :text="text" background highlight2="cyan"></VueTextGlitch>
  </div>
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