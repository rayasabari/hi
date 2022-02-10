<template>
  <div
    class="p-6 m-0 overflow-hidden leading-normal text-left transition duration-300 bg-gray-900 border border-gray-800 rounded-lg shadow-md lg:m-2 group hover:shadow-xl hover:border-gray-700 lg:max-h-72 hover:scale-90"
  >
    <div class="flex flex-col justify-between lg:flex-row">
      <div class="text-center lg:text-left">
        <h2 class="text-sm font-light uppercase tracking-ultra-wide">{{project.name}}</h2>
        <p
          class="mt-1 text-sm font-medium text-gray-300"
        >{{project.title}}</p>
        <p
          class="my-1 text-xs font-medium text-gray-500 transition duration-300 group-hover:text-gray-400"
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
      class="h-28 lg:h-[150px] mt-6 lg:mt-3 saturate-0 group-hover:saturate-100 rounded-lg opacity-60 w-full lg:w-[400px] group-hover:opacity-80 lg:translate-x-4 lg:translate-y-2 group-hover:shadow-md group-hover:translate-x-0 group-hover:translate-y-1 transition duration-300"
    >
      <img :src="img" class="border border-gray-700 rounded-lg" />
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