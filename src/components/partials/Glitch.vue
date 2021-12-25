<template>
  <div>
    <h1 class="font-semibold lg:text-7xl text-5xl -mb-1">
      <VueTextGlitch fill="#d1d5db" :text="text" background></VueTextGlitch>
    </h1>
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