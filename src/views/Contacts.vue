<template>
  <div class="text-gray-300 bg-yellow-30">
    <div class="flex flex-col items-center justify-center h-screen">
      <div class="animate__animated animate__fadeInUp flex flex-col items-center">
        <Glitch text="CONTACTS"></Glitch>
        <div class="font-light">
          <span class="text-yellow-300">get</span>
          <span class="text-gray-400">&nbsp;in touch</span>
        </div>
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
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style>
</style>
