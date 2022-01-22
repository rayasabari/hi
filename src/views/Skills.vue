<template>
  <div class="text-gray-300 bg-yellow-30">
    <SectionTitle :title="'SKILLS'" :subYellow="'techs'" :subGray="'tools'" />
    <Scroller :to="'#dataskills'"/>
    <div id="dataskills" class="h-screen flex flex-col items-center justify-center">
      <div
        class="w-11/12 lg:w-6/12 text-center lg:mb-7 font-light text-md lg:text-xl text-gray-400 leading-10 lg:leading-extra-loose"
      >
        About more five years dive in the real web development projects using
        <Highlight>
          <a href="https://php.net/" target="_blank">
            <font-awesome-icon class="mr-2 text-indigo-400" :icon="['fab','php']" />PHP
          </a>
        </Highlight>and
        <Highlight>
          <a href="https://javascript.com/" target="_blank">
            <font-awesome-icon class="mr-2 text-yellow-400" :icon="['fab','js']" />Javascript
          </a>
        </Highlight>. I am pretty confident in building apps using these techs and tools:
      </div>
      <div class="w-full lg:w-6/12 flex flex-wrap-reverse items-center justify-center">
        <a
          v-for="tech in techs"
          :key="tech.icon"
          :href="tech.link"
          target="_blank"
          v-tooltip="'asdf'"
          @mouseover="texhName = tech.alt"
          @mouseleave="texhName = ''"
          class="m-7 flex flex-col items-center justify-center filter grayscale opacity-70 hover:opacity-100 hover:grayscale-0 hover:scale-125 transition duration-300"
        >
          <img
            :src="`./images/${tech.icon}`"
            :alt="tech.alt"
            :class="tech.icon == 'bootstrap.svg' ? 'w-auto' :'w-16'"
            class="h-16"
          />
          <div
            v-if="texhName == tech.alt"
            class="text-xs text-gray-300 font-extralight mt-24 absolute transition duration-300"
          >{{texhName}}</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from "../components/SectionTitle.vue";
import Highlight from "../components/partials/Highlight.vue";
import Scroller from "../components/partials/Scroller.vue";
export default {
  components: {
    SectionTitle,
    Highlight,
    Scroller
  },
  data() {
    return {
      texhName: "",
      techs: [
        {
          icon: "codeigniter.svg",
          link: "https://codeigniter.com",
          alt: "Codeigniter",
        },
        {
          icon: "bootstrap.svg",
          link: "https://getbootstrap.com",
          alt: "Bootstrap",
        },
        {
          icon: "node.svg",
          link: "https://nodejs.org/en",
          alt: "Node JS",
        },
        {
          icon: "react.svg",
          link: "https://reactjs.org/",
          alt: "React JS",
        },
        {
          icon: "next.webp",
          link: "https://nextjs.org/",
          alt: "Next JS",
        },
        {
          icon: "laravel.svg",
          link: "https://laravel.com",
          alt: "Laravel",
        },
        {
          icon: "tailwind.svg",
          link: "https://tailwindcss.com",
          alt: "Tailwind",
        },
        {
          icon: "vue.svg",
          link: "https://vuejs.org",
          alt: "Vue JS",
        },
        {
          icon: "nuxt.svg",
          link: "https://nuxtjs.org",
          alt: "Nuxt JS",
        },
      ],
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    test() {},
  },
};
</script>

<style>
</style>
