<template>
  <div class="text-gray-300 h-screen flex items-center justify-center">
    <div class="h-90 flex flex-col items-center justify-center animate__animated animate__fadeInUp">
      <Glitch :text="nama"></Glitch>
      <Typer class="text-base" :text="tagline"></Typer>
    </div>
  </div>
</template>

<script>
import Glitch from "@/components/partials/Glitch.vue";
import Typer from "@/components/partials/Typer.vue";
export default {
  name: "Home",
  components: {
    Glitch,
    Typer,
  },
  data() {
    return {
      nama: "HI",
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