<template>
  <div id="app">
    <div class="h-screen">
      <Header class="absolute"></Header>
      <Content></Content>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Content from "./components/Content.vue";
export default {
  name: "App",
  components: {
    Header,
    Content,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
