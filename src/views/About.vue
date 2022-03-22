<template>
  <div class="text-gray-300">
    <SectionTitle
      :title="title.text"
      :subYellow="title.sub_primary"
      :subGray="title.sub_secondary"
    />
    <Scroller :to="'#detail-about'" />
    <div id="detail-about" class="flex items-center justify-center h-screen">
      <Section
        data-aos="fade"
        data-aos-duration="1000"
        data-aos-delay="200"
        class="md:w-8/12 2xl:w-6/12"
      >
        <span v-for="(item,index) in body[0]" :key="index">
          <span v-if="item.type == 'text'">{{ item.value }}</span>
          <span v-if="item.type == 'text-bold'">
            <TextBold>{{ item.value }}</TextBold>
          </span>
          <span v-if="item.type == 'highlights'">
            <span v-for="(highlight, idx) in highlights" :key="idx">
              <span v-if="(highlights.length - 1) == idx">and</span>
              <Highlight :data="highlight"></Highlight>
            </span>
          </span>
        </span>
        <NavGuide :to="'/skills'" :delay="800">skills</NavGuide>
      </Section>
    </div>
  </div>
</template>

<script>
import Highlight from "../components/partials/Highlight.vue";
import TextBold from "../components/partials/TextBold.vue";
import NavGuide from "../components/partials/NavGuide.vue";
import Scroller from "../components/partials/Scroller.vue";
import Section from "../components/Section.vue";
import SectionTitle from "../components/SectionTitle.vue";
import firebase from "../firebase";
import { getDatabase, ref, onValue } from "firebase/database";
const db = getDatabase(firebase);
export default {
  name: "About",
  components: {
    Highlight,
    TextBold,
    SectionTitle,
    Scroller,
    NavGuide,
    Section,
  },
  data() {
    return {
      title: {
        text: "",
        sub_primary: "",
        sub_secondary: "",
      },
      body: [],
      highlights: [],
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
      this.fetchSections("pages/about/sections/title", "title");
      this.fetchSections("pages/about/sections/body", "body");
      this.fetchSections("pages/about/sections/highlights", "highlights");
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
