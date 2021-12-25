<template>
  <div id="app">
    <div class>
      <Header class="absolute"></Header>
      <Content class="h-screen"></Content>
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
  mounted() {},
  methods: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
