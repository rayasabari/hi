<template>
  <div
    class="p-6 m-0 overflow-hidden leading-normal text-left transition duration-300 bg-white border border-b-0 border-gray-100 rounded-lg shadow-md dark:border-gray-800 dark:bg-gray-900 lg:m-2 group hover:shadow-xl dark:hover:border-gray-700 lg:max-h-72"
  >
    <div class="flex flex-col justify-between md:flex-row">
      <div class="text-center md:text-left">
        <h2
          class="text-sm font-light text-gray-600 uppercase dark:text-gray-300 tracking-ultra-wide"
        >{{project.name}}</h2>
        <p class="mt-1 text-sm font-medium text-gray-700 dark:text-gray-300">{{project.title}}</p>
        <p
          class="my-1 text-xs font-medium text-gray-400 transition duration-300 dark:text-gray-500 dark:group-hover:text-gray-400 group-hover:text-gray-500"
        >{{ project.year }} &middot; {{project.role}}</p>
      </div>
      <div class="flex justify-center mt-2 space-x-3 lg:mt-0">
        <span v-for="(tech, index) in project.techs" :key="index">
          <img
            :src="`./images/${tech.icon}`"
            :alt="tech.name"
            v-tooltip="tech.name"
            :class="tech.icon == 'bootstrap.svg' ? 'w-auto' :'w-5'"
            class="h-5 transition grayscale group-hover:grayscale-0 group-hover:contrast-150"
          />
        </span>
      </div>
    </div>
    <div
      class="h-28 xl:h-[130px] mt-6 xl:mt-3 saturate-0 group-hover:saturate-100 rounded-lg opacity-80 dark:opacity-60 w-full group-hover:opacity-100 xl:translate-x-0 xl:translate-y-0 group-hover:shadow-md group-hover:translate-x-0 group-hover:translate-y-1 transition duration-300"
    >
      <div class="absolute flex items-end justify-center w-full h-full">
        <a
          v-if="project.visit"
          :href="project.link"
          target="_blank"
          class="px-3 py-1 text-xs font-medium tracking-widest text-gray-900 text-opacity-0 uppercase transition duration-300 bg-yellow-400 bg-opacity-0 rounded-full dark:bg-opacity-0 dark:bg-yellow-300 group-hover:shadow-lg group-hover:bg-opacity-100 hover:-translate-y-1 hover:bg-yellow-200 group-hover:text-opacity-100"
        >{{project.status}}</a>
        <a
          v-else
          class="px-3 py-1 text-xs font-medium tracking-widest text-gray-300 text-opacity-0 uppercase transition duration-300 bg-gray-800 bg-opacity-0 rounded-full cursor-not-allowed group-hover:shadow-lg group-hover:bg-opacity-100 hover:-translate-y-1 hover:bg-gray-700 group-hover:text-opacity-100"
        >{{project.status}}</a>
      </div>
      <img :src="img" class="w-full border rounded-lg dark:border-gray-700" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["img", "project"],
  name: "CardProject",
};
</script>

<style>
</style>