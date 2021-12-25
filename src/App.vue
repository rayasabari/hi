<template>
  <div id="app">
    <div class="h-screen flex flex-col justify-between">
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Content from "./components/Content.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Content,
    Footer,
  },
  mounted() {},
  methods: {},
};
</script>

<style>
</style>
