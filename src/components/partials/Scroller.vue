<template>
  <div
    class="flex items-center justify-center w-full text-gray-400 bottom-28 lg:bottom-24"
    :class="position ? position : 'absolute'"
    data-aos="fade"
    data-aos-duration="1000"
    :data-aos-delay="delay ? delay : '300'"
  >
    <a
      :href="to"
      aria-label="Scroll Down"
      class="p-1 text-yellow-300 transition duration-300 bg-gray-900 rounded-full hover:bg-yellow-300 hover:text-gray-900 animate-bounce-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M17 13l-5 5m0 0l-5-5m5 5V6"
        />
      </svg>
    </a>
  </div>
</template>

<script>
export default {
  props: ['to', 'position', 'delay'],
};
</script>
