<template>
  <div
    data-aos="fade-in"
    :data-aos-delay="delay ? delay : '1500'"
    data-aos-duration="1000"
    :class="position"
    class="flex justify-center my-4 bottom-28 lg:bottom-24"
  >
    <router-link
      :to="to"
      class="flex items-center text-sm text-center text-gray-500 transition duration-300 dark:text-gray-400 hover:text-yellow-400 dark:hover:text-yellow-300"
    >
      <slot />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-4 h-4 text-yellow-400 dark:text-yellow-300 animate-bounce-3"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 7l5 5m0 0l-5 5m5-5H6"
        />
      </svg>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["to", "position", "delay"],
};
</script>

<style>
</style>