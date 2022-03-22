<template>
  <div class="text-gray-300">
    <SectionTitle
      v-if="title.text != ''"
      :title="title.text"
      :subYellow="title.sub_primary"
      :subGray="title.sub_secondary"
    />
    <Scroller :to="'#detail-skills'" />
    <div id="detail-skills" class="flex flex-col items-center justify-center h-screen">
      <Section
        data-aos="fade"
        data-aos-duration="1000"
        data-aos-delay="200"
        class="md:w-8/12 2xl:w-6/12"
      >
        <SectionBody :body="body[0]" :highlights="highlights"></SectionBody>
      </Section>
      <div
        class="flex flex-wrap items-center justify-center w-full lg:-mt-1 lg:w-5/12 xl:w-5/12 2xl:w-4/12"
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
            :data-aos-delay="600 + (index * 150)"
            :src="`./images/${tech.icon}`"
            :alt="tech.name"
            :class="tech.icon == 'bootstrap.svg' ? 'w-auto' :'w-8 xl:w-10'"
            class="h-8 xl:h-10"
          />
          <div
            v-if="techName == tech.name"
            class="absolute mt-16 text-center text-gray-700 transition duration-300 dark:text-gray-300 text-3xs lg:text-2xs font-extralight lg:mt-20"
          >{{techName}}</div>
        </a>
      </div>
      <Scroller class="mt-4 xl:mt-6" :to="'#detail-tools'" :position="'static'" delay="2200" />
    </div>
    <div id="detail-tools" class="flex flex-col items-center justify-center h-screen">
      <Section
        data-aos="fade"
        data-aos-duration="1000"
        data-aos-delay="200"
        class="md:w-8/12 2xl:w-6/12"
      >
        <SectionBody :body="body[1]" :highlights="highlights"></SectionBody>
      </Section>
      <div class="flex flex-wrap items-center justify-center w-full lg:w-5/12 xl:w-5/12 2xl:w-4/12">
        <a
          v-for="(tool,index) in tools"
          :key="index"
          :href="tool.link"
          v-tooltip.bottom="tool.name"
          target="_blank"
          @mouseover="toolName = tool.name"
          @mouseleave="toolName = ''"
          class="flex flex-col items-center justify-center transition duration-300 opacity-70 dark:opacity-60 m-7 saturate-0 dark:brightness-150 brightness-100 hover:brightness-100 dark:hover:brightness-100 hover:saturate-100 hover:opacity-100 dark:hover:opacity-100 dark:hover:contrast-150 hover:contrast-150 filter hover:scale-125"
        >
          <img
            data-aos="fade-up"
            data-aos-duration="500"
            :data-aos-delay="600 + (index * 150)"
            :src="`./images/${tool.icon}`"
            :alt="tool.name"
            class="w-8 h-8 xl:h-10 xl:w-10"
          />
        </a>
      </div>
      <NavGuide :to="'/projects'" :position="''" delay="2300">projects</NavGuide>
    </div>
  </div>
</template>

<script>
import Section from "../components/Section.vue";
import SectionTitle from "../components/SectionTitle.vue";
import SectionBody from "../components/SectionBody.vue";
import Scroller from "../components/partials/Scroller.vue";
import NavGuide from "../components/partials/NavGuide.vue";
import firebase from "../firebase";
import { getDatabase, ref, onValue } from "firebase/database";
const db = getDatabase(firebase);
export default {
  components: {
    SectionTitle,
    Scroller,
    NavGuide,
    Section,
    SectionBody,
  },
  data() {
    return {
      techName: "",
      title: {
        text: "",
        sub_primary: "",
        sub_secondary: "",
      },
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
      this.fetchSections("pages/skills/sections/title", "title");
      this.fetchSections("pages/skills/sections/body", "body");
      this.fetchSections("pages/skills/sections/highlights", "highlights");
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
        this[type] = data.val();
      });
    },
  },
};
</script>

<style>
</style>
