<template>
  <a
    :aria-label="label"
    class="transition duration-300 hover:text-yellow-400 dark:hover:text-yellow-300"
    :href="link"
  >
    <font-awesome-icon :icon="icon" />
  </a>
</template>

<script>
export default {
  name: "SocialIcon",
  props: ["label", "link", "icon"],
};
</script>