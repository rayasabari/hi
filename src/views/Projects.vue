<template>
  <div>
    <SectionTitle
      :title="title.text"
      :subYellow="title.sub_primary"
      :subGray="title.sub_secondary"
    />
    <Scroller :to="'#detail-projects'" />
    <div
      id="detail-projects"
      class="flex items-center justify-center min-h-screen py-16 mb-8 lg:mb-2"
    >
      <Section class="xl:w-9/12 2xl:w-8/12">
        <div
          class="grid grid-cols-1 gap-6 mb-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-2 xl:grid-cols-3"
        >
          <div v-for="(project, index) in projects" :key="index" class>
            <CardProject
              data-aos="fade-up"
              data-aos-duration="1000"
              :data-aos-delay="index * 50"
              :img="`./images/projects/${project.img}`"
              :project="project"
            ></CardProject>
          </div>
        </div>
        <NavGuide :to="'/contacts'" :position="''" delay="1000">contacts</NavGuide>
      </Section>
    </div>
  </div>
</template>

<script>
import CardProject from '../components/CardProject.vue';
import NavGuide from '../components/partials/NavGuide.vue';
import Scroller from '../components/partials/Scroller.vue';
import Section from '../components/Section.vue';
import SectionTitle from '../components/SectionTitle.vue';
import firebase from '../firebase';
import { getDatabase, ref, onValue } from 'firebase/database';
const db = getDatabase(firebase);
export default {
  name: 'Projects',
  metaInfo: {
    title: 'Skills -',
    meta: [
      { name: 'titile', content: 'Projects - Raya Sabari' },
      { name: 'description', content: 'Works and portfolio' },
    ],
  },
  components: {
    SectionTitle,
    Scroller,
    Section,
    CardProject,
    NavGuide,
  },
  data() {
    return {
      title: {
        text: '',
        sub_primary: '',
        sub_secondary: '',
      },
      projects: [],
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
      this.getState('/pages/projects/sections/title', 'title');
      this.getState('/master/projects', 'projects');
      this.projects.sort((a, b) => b.year - a.year);
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
