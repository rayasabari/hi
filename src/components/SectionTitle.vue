<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <div data-aos="fade" data-aos-duration="1000" class="flex flex-col items-center">
      <Glitch :text="title"></Glitch>
      <div>
        <span class="text-yellow-400 dark:text-yellow-300">{{ subYellow }}</span>
        <span class="text-gray-500 dark:text-gray-400">{{ subGray }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Glitch from '../components/partials/Glitch.vue';
export default {
  props: ['title', 'subYellow', 'subGray'],
  components: {
    Glitch,
  },
};
</script>
