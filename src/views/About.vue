<template>
  <div>
    <SectionTitle
      v-if="title.text != ''"
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
        <SectionBody :body="body[0]" :highlights="highlights"></SectionBody>
        <ButtonCv v-if="title.text && showResumeButton" />
        <NavGuide v-if="title.text" :to="'/skills'" :delay="800">skills</NavGuide>
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
import ButtonCv from "../components/partials/ButtonCV.vue";
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
    ButtonCv,
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
      showResumeButton: false
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
      this.getState("pages/about/sections/title", "title");
      this.getState("pages/about/sections/body", "body");
      this.getState("pages/about/sections/highlights", "highlights");
      this.getState("pages/about/sections/showResumeButton", "showResumeButton");
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
