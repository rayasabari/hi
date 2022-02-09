<template>
  <div class="flex items-center justify-center h-screen text-gray-300">
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      class="flex flex-col items-center justify-center h-90"
    >
      <Glitch :text="title"></Glitch>
      <Typer class="text-base" :text="tagline"></Typer>
    </div>
    <NavGuide :to="'/about'" position="absolute">discover</NavGuide>
  </div>
</template>

<script>
import Glitch from "@/components/partials/Glitch.vue";
import Typer from "@/components/partials/Typer.vue";
import NavGuide from "../components/partials/NavGuide.vue";
export default {
  name: "Home",
  components: {
    Glitch,
    Typer,
    NavGuide,
  },
  data() {
    return {
      title: "HI",
      tagline: [
        "I am Raya Sabari",
        "A Full Stack Developer",
        "Based in Jakarta",
      ],
    };
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>