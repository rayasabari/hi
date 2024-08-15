<template>
  <div
    class="flex flex-wrap items-center justify-center w-10/12 mt-2 lg:-mt-1 md:w-7/12 lg:w-7/12 xl:w-6/12 2xl:w-5/12"
  >
    <a
      v-for="(item, index) in items"
      :key="index"
      :href="item.link"
      target="_blank"
      @mouseover="itemName = item.name"
      @mouseleave="itemName = ''"
      class="flex flex-col items-center justify-center m-5 transition duration-300 opacity-70 dark:opacity-60 lg:m-7 saturate-0 dark:brightness-150 brightness-100 hover:brightness-100 dark:hover:brightness-100 hover:saturate-100 hover:opacity-100 dark:hover:opacity-100 dark:hover:contrast-150 hover:contrast-150 filter hover:scale-125"
    >
      <div class="flex items-center justify-center w-6 h-6 lg:h-8 xl:h-10 lg:w-8 xl:w-10">
        <img
          data-aos="fade-up"
          data-aos-duration="500"
          :data-aos-delay="600 + index * 150"
          :src="`./images/logo/${item.icon}`"
          :alt="item.name"
        />
      </div>
      <div
        v-if="itemName == item.name"
        class="absolute mt-16 text-center text-gray-700 transition duration-300 dark:text-gray-300 text-3xs lg:text-2xs font-extralight lg:mt-20"
      >
        {{ itemName }}
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'CardItem',
  props: ['items'],
  data() {
    return {
      itemName: '',
    };
  },
};
</script>
