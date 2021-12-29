<template>
  <div>
    <vue-typer
      class="font-light"
      :text="text"
      :repeat="Infinity"
      :shuffle="false"
      initial-action="typing"
      :pre-type-delay="70"
      :type-delay="80"
      :pre-erase-delay="1300"
      :erase-delay="30"
      erase-style="backspace"
      :erase-on-complete="false"
      caret-animation="smooth"
    ></vue-typer>
  </div>
</template>

<script>
export default {
  props: ["text"],
};
</script>

<style>
.vue-typer .custom.char {
  /* color: #fcd34d; */
  color: #9ca3af;
}
</style>