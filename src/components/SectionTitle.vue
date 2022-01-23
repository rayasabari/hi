<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <div data-aos="fade-up" data-aos-duration="1000" class=" flex flex-col items-center">
      <Glitch :text="title"></Glitch>
      <div class="font-base">
        <span class="text-yellow-300">{{subYellow}}</span>
        <span class="text-gray-400"> & {{subGray}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Glitch from "../components/partials/Glitch.vue"
export default {
  props: ['title','subYellow','subGray'],
  components: {
    Glitch
  }
};
</script>

<style>
</style>