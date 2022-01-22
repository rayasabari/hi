<template>
  <div
    class="text-gray-400 w-full -mt-40 lg:-mt-32 flex justify-center items-center animate__animated animate__fadeInUp"
  >
    <a :href="to" class="animate-ping-slow text-yellow-300">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
        />
      </svg>
    </a>
  </div>
</template>

<script>
export default {
  props: ["to"],
};
</script>

<style>
</style>