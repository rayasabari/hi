<template>
  <div>
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
      <CardIcon :items="techs"></CardIcon>
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
      <CardIcon :items="tools"></CardIcon>
      <NavGuide :to="'/projects'" :position="''" delay="2300">projects</NavGuide>
    </div>
  </div>
</template>

<script>
import Section from "../components/Section.vue";
import SectionTitle from "../components/SectionTitle.vue";
import SectionBody from "../components/SectionBody.vue";
import CardIcon from "../components/CardIcon.vue";
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
    CardIcon,
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
      this.getState("pages/skills/sections/title", "title");
      this.getState("pages/skills/sections/body", "body");
      this.getState("pages/skills/sections/highlights", "highlights");
      this.getState("master/techs", "techs");
      this.getState("master/tools", "tools");
    },
    getState(reference, state) {
      const sectionsRef = ref(db, reference);
      onValue(sectionsRef, (data) => {
        this[state] = data.val();
      });
    },
  },
};
</script>

<style>
</style>
