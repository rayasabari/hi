<template>
  <div class="text-gray-300">
    <SectionTitle
      v-if="title.text != ''"
      :title="title.text"
      :subYellow="title.sub_primary"
      :subGray="title.sub_secondary"
    />
    <Scroller :to="'#detail-about'"/>
    <div id="detail-about" class="flex items-center justify-center h-screen">
      <Section
        data-aos="fade"
        data-aos-duration="1000"
        data-aos-delay="200"
        class="md:w-8/12 2xl:w-6/12"
      >
        <SectionBody :body="body[0]" :highlights="highlights"></SectionBody>
        <NavGuide :to="'/skills'" :delay="800">skills</NavGuide>
      </Section>
    </div>
  </div>
</template>

<script>
import SectionTitle from "../components/SectionTitle.vue";
import Section from "../components/Section.vue";
import SectionBody from "../components/SectionBody.vue";
import Highlight from "../components/partials/Highlight.vue";
import NavGuide from "../components/partials/NavGuide.vue";
import Scroller from "../components/partials/Scroller.vue";
import firebase from "../firebase";
import { getDatabase, ref, onValue } from "firebase/database";
const db = getDatabase(firebase);
export default {
  name: "About",
  components: {
    SectionTitle,
    Section,
    SectionBody,
    Highlight,
    Scroller,
    NavGuide,
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
