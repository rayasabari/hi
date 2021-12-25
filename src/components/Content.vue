<template>
  <main class="flex flex-col">
    <Home class="m-auto"></Home>
    <Footer></Footer>
  </main>
</template>

<script>
import Home from "./Home.vue";
import Footer from "./Footer.vue";
export default {
  name: "Content",
  components: { Home, Footer },
};
</script>

<style>
</style>