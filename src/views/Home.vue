<template>
  <div class="text-gray-300 bg-yellow-30 animate__animated animate__fadeIn">
    <div class="h-90 flex flex-col items-center justify-center">
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
      nama: "RYSB",
      tagline: [
        "Hi, I am Raya Sabari",
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