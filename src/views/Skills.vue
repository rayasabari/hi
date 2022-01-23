<template>
  <div class="text-gray-300 bg-yellow-30">
    <SectionTitle :title="'SKILLS'" :subYellow="'techs'" :subGray="'tools'" />
    <Scroller :to="'#dataskills'" />
    <div id="dataskills" class="h-screen flex flex-col items-center justify-center">
      <div
        class="w-10/12 lg:w-6/12 text-center mb-3 lg:mb-5 font-light text-md lg:text-xl text-gray-400 leading-10 lg:leading-extra-loose"
      >
        <div data-aos="fade" data-aos-duration="1000" data-aos-delay="200">
          I have a lot of experiences in the real projects in web development using
          <Highlight>
            <a href="https://php.net/" target="_blank" class="text-gray-300">
              <font-awesome-icon class="mr-2 text-indigo-400" :icon="['fab','php']" />PHP
            </a>
          </Highlight>and
          <Highlight>
            <a href="https://javascript.com/" target="_blank">
              <font-awesome-icon class="mr-2 text-yellow-400" :icon="['fab','js']" />Javascript
            </a>
          </Highlight>. I am pretty confident in building apps using these techs and tools:
        </div>
      </div>
      <div class="w-10/12 lg:w-5/12 flex flex-wrap items-center justify-center">
        <a
          v-for="(tech,index) in techs"
          :key="index"
          :href="tech.link"
          target="_blank"
          @mouseover="texhName = tech.alt"
          @mouseleave="texhName = ''"
          class="m-7 flex flex-col saturate-0 hover:saturate-100 opacity-90 hover:opacity-100 contrast-100 hover:contrast-200 items-center justify-center filter hover:scale-125 transition duration-200"
        >
          <img
            data-aos="fade-up"
            data-aos-duration="500"
            :data-aos-delay="400 + (index * 200)"
            :src="`./images/${tech.icon}`"
            :alt="tech.alt"
            :class="tech.icon == 'bootstrap.svg' ? 'w-auto' :'w-10 lg:w-12'"
            class="h-10 lg:h-12"
          />
          <div
            v-if="texhName == tech.alt"
            class="text-3xs lg:text-2xs text-center text-gray-300 font-extralight mt-16 lg:mt-20 absolute transition duration-300"
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
    Scroller,
  },
  data() {
    return {
      texhName: "",
      techs: [
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
        {
          icon: "wordpress.svg",
          link: "https://wordpress.com",
          alt: "Wordpress",
        },
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
          icon: "react.svg",
          link: "https://reactjs.org/",
          alt: "React JS",
        },
        {
          icon: "next.webp",
          link: "https://nextjs.org/",
          alt: "Next JS",
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
