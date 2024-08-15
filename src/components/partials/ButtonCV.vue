<template>
  <div class="mt-8">
    <a
      href="https://cv.rayasabari.com"
      download
      target="_blank"
      class="inline-flex items-center gap-2 px-5 py-3 leading-none text-gray-700 transition-all duration-300 bg-yellow-400 rounded-full shadow-md hover:bg-yellow-300 hover:shadow-xl hover:-translate-y-1"
    >
      <font-awesome-icon :icon="[['fas'], ['cloud-download-alt']]" />
      <span>Resume</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'ButtonCV',
};
</script>
