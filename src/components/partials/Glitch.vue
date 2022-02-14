<template>
  <div class="-mb-1 text-5xl italic font-bold tracking-wide lg:text-7xl">
    <VueTextGlitch :fill="fill" :text="text" background highlight2="cyan"></VueTextGlitch>
  </div>
</template>

<script>
import VueTextGlitch from "vue-text-glitch";
export default {
  props: ["text"],
  components: { VueTextGlitch },
  data(){
    return {
      fill: '#d1d5db',
    }
  },
  created(){
    const currentMode = localStorage.getItem('darkMode');
    currentMode === null ? this.fill = '#d1d5db' : this.fill = '#374151';
  }
};
</script>

<style>
</style>