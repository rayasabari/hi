<template>
  <div>
    <h1 class="font-semibold lg:text-7xl text-5xl -mb-1 text-white">
      <VueTextGlitch fill="#F0F0F0" :text="text" background></VueTextGlitch>
    </h1>
  </div>
</template>

<script>
import VueTextGlitch from "vue-text-glitch";
export default {
  props: ["text"],
  components: {VueTextGlitch},
};
</script>

<style>
</style>