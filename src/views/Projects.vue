<template>
  <div class="text-gray-300">
    <SectionTitle :title="'PROJECTS'" :subYellow="'works'" :subGray="' & porto'" />
    <Scroller :to="'#detail-projects'" />
    <div
      id="detail-projects"
      class="flex items-center justify-center min-h-screen pt-16 mb-40 lg:pt-0 lg:mb-0"
    >
      <Section>
        <div class="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:flex-wrap">
          <div v-for="(project, index) in projects" :key="index" class="lg:w-6/12">
            <CardProject
              data-aos="fade-up"
              data-aos-duration="1000"
              :data-aos-delay="600 + (index * 200)"
              :img="`./images/projects/${project.img}`"
              :project="project"
            ></CardProject>
          </div>
        </div>
      </Section>
    </div>
  </div>
</template>

<script>
import CardProject from "../components/CardProject.vue";
import Scroller from "../components/partials/Scroller.vue";
import Section from "../components/Section.vue";
import SectionTitle from "../components/SectionTitle.vue";
export default {
  components: {
    SectionTitle,
    Scroller,
    Section,
    CardProject,
  },
  data() {
    return {
      projects: [
        {
          name: "propertiforsale.id",
          title: "Landing Page",
          tag: "Web Development",
          year: "2022",
          role: "Front End",
          img: "propertyforsale.id.webp",
          techs: [
            {
              icon: "nuxt.svg",
              link: "https://nuxtjs.org",
              name: "Nuxt JS",
            },
            {
              icon: "tailwind.svg",
              link: "https://tailwindcss.com",
              name: "Tailwind",
            },
          ],
        },
        {
          name: "RHR-PLN 2021",
          title: "Appraisal System",
          tag: "Web Development",
          year: "2021",
          role: "Full Stack",
          img: "rhrpln2021.webp",
          techs: [
            {
              icon: "laravel.svg",
              link: "https://laravel.com",
              name: "Laravel",
            },
            {
              icon: "vue.svg",
              link: "https://vuejs.org",
              name: "Vue JS",
            },
            {
              icon: "bootstrap.svg",
              link: "https://getbootstrap.com",
              name: "Bootstrap",
            },
          ],
        },
        {
          name: "RHR Integrated System",
          title: "SAP",
          tag: "Web Development",
          year: "2020",
          role: "Full Stack",
          img: "ris2.webp",
          techs: [
            {
              icon: "laravel.svg",
              link: "https://laravel.com",
              name: "Laravel",
            },
            {
              icon: "vue.svg",
              link: "https://vuejs.org",
              name: "Vue JS",
            },
            {
              icon: "bootstrap.svg",
              link: "https://getbootstrap.com",
              name: "Bootstrap",
            },
          ],
        },
        {
          name: "rantaka.id",
          title: "Property Management",
          tag: "Web Development",
          year: "2019",
          role: "Full Stack",
          img: "rantaka.id.webp",
          techs: [
            {
              icon: "laravel.svg",
              link: "https://laravel.com",
              name: "Laravel",
            },
            {
              icon: "bootstrap.svg",
              link: "https://getbootstrap.com",
              name: "Bootstrap",
            },
          ],
        },
      ],
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style>
</style>
