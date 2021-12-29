<template>
  <div class="text-gray-300 bg-yellow-30 animate__animated animate__fadeIn">
    <div class="h-screen flex flex-col items-center justify-center">
      <Glitch text="SKILLS"></Glitch>
      <div class="font-light">
        <router-link to="/" class="text-gray-300">home</router-link> /
        <span class="text-gray-400">skills</span>
      </div>
    </div>
    <div class="h-screen flex items-center justify-center">coming soon...</div>
  </div>
</template>

<script>
import Glitch from "@/components/partials/Glitch.vue";
export default {
  components: {
    Glitch,
  },
};
</script>

<style>
</style>
