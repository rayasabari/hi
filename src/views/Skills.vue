<template>
  <div class="text-gray-300">
    <SectionTitle :title="'SKILLS'" :subYellow="'techs'" :subGray="' & stacks'" />
    <Scroller :to="'#detail-skills'" />
    <div id="detail-skills" class="flex flex-col items-center justify-center h-screen">
      <Section
        data-aos="fade"
        data-aos-duration="1000"
        data-aos-delay="200"
        class="md:w-8/12 2xl:w-6/12"
      >
        <span v-for="item in body" :key="item.order">
          <span v-if="item.type == 'text'">{{ item.value }}</span>
          <span v-if="item.type == 'highlight'">
            <span v-for="(highlight, idx) in highlights" :key="idx">
              <span v-if="(highlights.length - 1) == idx">and</span>
              <Highlight :data="highlight"></Highlight>
            </span>
          </span>
        </span>
      </Section>
      <div
        class="flex flex-wrap items-center justify-center w-10/12 mt-2 lg:-mt-1 lg:w-5/12 xl:w-5/12 2xl:w-4/12"
      >
        <a
          v-for="(tech,index) in techs"
          :key="index"
          :href="tech.link"
          target="_blank"
          @mouseover="techName = tech.name"
          @mouseleave="techName = ''"
          class="flex flex-col items-center justify-center transition duration-300 opacity-70 dark:opacity-60 m-7 saturate-0 dark:brightness-150 brightness-100 hover:brightness-100 dark:hover:brightness-100 hover:saturate-100 hover:opacity-100 dark:hover:opacity-100 dark:hover:contrast-150 hover:contrast-150 filter hover:scale-125"
        >
          <img
            data-aos="fade-up"
            data-aos-duration="500"
            :data-aos-delay="600 + (index * 200)"
            :src="`./images/${tech.icon}`"
            :alt="tech.name"
            :class="tech.icon == 'bootstrap.svg' ? 'w-auto' :'w-8 xl:w-12'"
            class="h-8 xl:h-12"
          />
          <div
            v-if="techName == tech.name"
            class="absolute mt-16 text-center text-gray-700 transition duration-300 dark:text-gray-300 text-3xs lg:text-2xs font-extralight lg:mt-20"
          >{{techName}}</div>
        </a>
      </div>
      <div
        class="flex flex-wrap items-center justify-center w-10/12 mt-2 lg:mt-5 lg:w-5/12 xl:w-5/12 2xl:w-4/12"
      >
        <a
          v-for="(tool,index) in tools"
          :key="index"
          :href="tool.link"
          v-tooltip.bottom="tool.name"
          target="_blank"
          @mouseover="toolName = tool.name"
          @mouseleave="toolName = ''"
          class="flex flex-col items-center justify-center m-4 transition duration-300 opacity-70 dark:opacity-60 saturate-0 dark:brightness-150 brightness-100 hover:brightness-100 dark:hover:brightness-100 hover:saturate-100 hover:opacity-100 dark:hover:opacity-100 dark:hover:contrast-150 hover:contrast-150 filter hover:scale-125"
        >
          <img
            data-aos="fade-up"
            data-aos-duration="500"
            :data-aos-delay="600 + (index * 200)"
            :src="`./images/${tool.icon}`"
            :alt="tool.name"
            :class="tool.icon == 'bootstrap.svg' ? 'w-auto' :'w-4 xl:w-6'"
            class="h-4 xl:h-6"
          />
        </a>
      </div>
      <NavGuide :to="'/projects'" :position="''" delay="2500">projects</NavGuide>
    </div>
  </div>
</template>

<script>
import SectionTitle from "../components/SectionTitle.vue";
import Highlight from "../components/partials/Highlight.vue";
import Scroller from "../components/partials/Scroller.vue";
import NavGuide from "../components/partials/NavGuide.vue";
import Section from "../components/Section.vue";
import firebase from "../firebase";
import { getDatabase, ref, onValue } from "firebase/database";
const db = getDatabase(firebase);
export default {
  components: {
    SectionTitle,
    Highlight,
    Scroller,
    NavGuide,
    Section,
  },
  data() {
    return {
      techName: "",
      body: [],
      highlights: [],
      techs: [],
      tools: [],
    };
  },
  created() {
    this.fetchData();
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    fetchData() {
      this.fetchSections("sections/skills/highlights", "highlights");
      this.fetchSections("sections/skills/body", "body");
      this.fetchSkills("techs");
      this.fetchSkills("tools");
    },
    fetchSkills(reference) {
      const skillsRef = ref(db, reference);
      onValue(skillsRef, (data) => {
        this[reference] = [];
        data.val().forEach((item) => {
          this[reference].push({
            name: item.name,
            icon: item.icon,
            link: item.link,
          });
        });
      });
    },
    fetchSections(reference, type) {
      const sectionsRef = ref(db, reference);
      onValue(sectionsRef, (data) => {
        this[type] = [];
        data.val().forEach((item) => {
          if (type == "highlights") {
            this[type].push({
              name: item.name,
              icon: item.icon,
              link: item.link,
              color: item.color,
            });
          }
          if (type == "body") {
            this[type].push({
              type: item.type,
              value: item.value,
              order: item.order,
            });
          }
        });
      });
    },
  },
};
</script>

<style>
</style>
