<template>
  <div class="-mb-1 text-5xl italic font-bold tracking-wide lg:text-7xl">
    <GlitchDark v-if="darkMode === 'dark'" :text="text" />
    <GlitchLight v-else :text="text" />
  </div>
</template>

<script>
import GlitchDark from "./GlitchDark.vue";
import GlitchLight from "./GlitchLight.vue";
export default {
  props: ["text"],
  components: { GlitchDark, GlitchLight },
  data() {
    return {
      darkMode: "dark",
    };
  },
  created() {
    const currentMode = localStorage.getItem("darkMode");
    this.setMode(currentMode);
  },
  mounted() {
    this.$root.$on("changeMode", (mode) => {
      this.setMode(mode);
    });
  },
  methods: {
    setMode(mode) {
      mode === null || mode === "dark"
        ? (this.darkMode = "dark")
        : (this.darkMode = "light");
    },
  },
};
</script>

<style>
</style>