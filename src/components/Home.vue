<template>
  <div class="h-screen flex items-center justify-center">
    <div>
      <h1 class="font-bold text-5xl">
        <VueTextGlitch fill="#F0F0F0" text="Raya Sabari" background></VueTextGlitch>
      </h1>
      <div>
        <vue-typer
          class="font-medium"
          :text="['Full Stack Developer','Wordpress Developer']"
          :repeat="Infinity"
          :shuffle="false"
          initial-action="typing"
          :pre-type-delay="70"
          :type-delay="70"
          :pre-erase-delay="2000"
          :erase-delay="70"
          erase-style="backspace"
          :erase-on-complete="false"
          caret-animation="smooth"
        ></vue-typer>
      </div>
    </div>
  </div>
</template>

<script>
import VueTextGlitch from "vue-text-glitch";
export default {
  components: {
    VueTextGlitch,
  },
};
</script>

<style>
.vue-typer .custom.char {
  color: #f0f0f0;
}
</style>