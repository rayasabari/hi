<template>
  <a
    data-aos="fade"
    data-aos-duration="1000"
    data-aos-delay="600"
    :href="`mailto:${text}`"
    class="flex items-center justify-center mt-3 text-lg font-medium tracking-wider text-gray-700 transition duration-300 dark:text-gray-300 lg:text-2xl hover:-translate-y-1 group dark:hover:text-yellow-300 hover:text-yellow-400"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="w-6 h-6 mr-2 text-yellow-400 transition duration-300 dark:text-yellow-300 lg:w-7 lg:h-7 dark:group-hover:text-gray-300 group-hover:text-gray-700"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
    {{ text }}
  </a>
</template>

<script>
export default {
  name: 'ButtonEmail',
  props: ['text'],
};
</script>
