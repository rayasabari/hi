<template>
  <div
    class="w-full p-6 mx-0 my-3 overflow-hidden leading-normal text-left transition duration-300 bg-gray-900 border border-gray-800 rounded-lg shadow-md lg:mx-2 group hover:scale-95 hover:shadow-xl hover:border-gray-700 lg:w-96"
  >
    <div class="flex justify-between">
      <div class>
        <h2 class="text-sm font-light uppercase tracking-ultra-wide">{{project.name}}</h2>
        <p class="mt-1 font-medium text-gray-300 text-md">{{project.title}}</p>
        <p
          class="my-1 text-xs font-medium text-gray-500 transition duration-300 group-hover:text-gray-400"
        >{{ project.year }} &middot; {{project.role}}</p>
      </div>
      <div class="flex space-x-3">
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
      class="h-[150px] mt-3 grayscale group-hover:grayscale-0 opacity-70 w-[400px] group-hover:opacity-100 translate-x-4 translate-y-2 group-hover:shadow-md group-hover:translate-x-0 group-hover:translate-y-1 transition duration-300"
    >
      <img :src="img" class="rounded-lg" />
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