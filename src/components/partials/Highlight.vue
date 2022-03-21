<template>
  <div
    class="inline-flex px-3 py-0 mx-2 font-medium text-gray-700 transition duration-500 transform bg-white rounded-full shadow-md dark:text-gray-300 dark:bg-gray-800 xl:py-1 xl:px-4 text-md xl:text-xl dark:hover:bg-gray-700 focus:outline-none hover:-translate-y-1 hover:shadow-xl"
  >
    <span class="hidden text-green-500 text-indigo-400 text-rose-500"></span>
    <a :href="data.link" target="_blank">
      <font-awesome-icon :class="`mr-2 ${data.color}`" :icon="data.icon" />
      {{ data.name }}
    </a>
  </div>
</template>

<script>
export default {
  props: ["data"],
  name: "Highlight",
};
</script>

<style>
</style>