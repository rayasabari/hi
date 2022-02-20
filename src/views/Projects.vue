<template>
  <div class="text-gray-300">
    <SectionTitle :title="'PROJECTS'" :subYellow="'works'" :subGray="' & porto'" />
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
              :data-aos-delay=" (index * 50)"
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
import CardProject from "../components/CardProject.vue";
import NavGuide from "../components/partials/NavGuide.vue";
import Scroller from "../components/partials/Scroller.vue";
import Section from "../components/Section.vue";
import SectionTitle from "../components/SectionTitle.vue";
export default {
  components: {
    SectionTitle,
    Scroller,
    Section,
    CardProject,
    NavGuide,
  },
  data() {
    return {
      projects: [
        {
          name: "propertyforsale.id",
          title: "Landing Page",
          tag: "Web Development",
          year: "2022",
          role: "Front End",
          img: "propertyforsale.id.webp",
          visit: true,
          status: "visit",
          link: "https://www.propertyforsale.id/",
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
          visit: false,
          status: "private",
          link: "",
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
          name: "RIS",
          title: "ERP System",
          tag: "Web Development",
          year: "2020",
          role: "Full Stack",
          img: "ris2.webp",
          visit: false,
          status: "private",
          link: "",
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
          visit: true,
          status: "visit",
          link: "https://rantaka.id",
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
        {
          name: "SRA Auction",
          title: "E-Auction",
          tag: "Web Development",
          year: "2019",
          role: "Full Stack",
          img: "sra.webp",
          visit: false,
          status: "offline",
          link: "",
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
        {
          name: "rhr.co.id",
          title: "Company Profile",
          tag: "Web Development",
          year: "2019",
          role: "Full Stack",
          img: "rhr.co.id.webp",
          visit: true,
          status: "visit",
          link: "https://kjpp.rhr.co.id",
          techs: [
            {
              icon: "wordpress.svg",
              link: "https://wordpress.com",
              name: "Wordpress",
            },
          ],
        },
        {
          name: "RHR-PLN 2018",
          title: "Appraisal System",
          tag: "Web Development",
          year: "2018",
          role: "Full Stack",
          img: "rhrpln2018.webp",
          visit: false,
          status: "private",
          link: "",
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
            {
              icon: "jquery.svg",
              link: "https://jquery.com/",
              name: "Jquery",
            },
          ],
        },
        {
          name: "Sispro",
          title: "Appraisal System",
          tag: "Web Development",
          year: "2017",
          role: "Full Stack",
          img: "sispro.webp",
          visit: false,
          status: "private",
          link: "",
          techs: [
            {
              icon: "codeigniter.svg",
              link: "https://codeigniter.com",
              name: "Codeigniter",
            },
            {
              icon: "bootstrap.svg",
              link: "https://getbootstrap.com",
              name: "Bootstrap",
            },
          ],
        },
        {
          name: "ekonomibiru.org",
          title: "Web & Blog",
          tag: "Web Development",
          year: "2013",
          role: "Full Stack",
          img: "ekonomibiru.webp",
          visit: true,
          status: "visit",
          link: "http://ekonomibiru.org",
          techs: [
            {
              icon: "wordpress.svg",
              link: "https://wordpress.com",
              name: "Wordpress",
            },
          ],
        },
        {
          name: "HBN Group",
          title: "Company Profile",
          tag: "Web Development",
          year: "2013",
          role: "Front End",
          img: "hbn.webp",
          visit: true,
          status: "visit",
          link: "https://hbn-group.com",
          techs: [
            {
              icon: "html5.svg",
              link: "https://www.w3schools.com/html/",
              name: "HTML 5",
            },
            {
              icon: "css3.svg",
              link: "https://web.dev/learn/css/",
              name: "CSS 3",
            },
            {
              icon: "jquery.svg",
              link: "https://jquery.com/",
              name: "Jquery",
            },
          ],
        },
        {
          name: "Ocean Seven",
          title: "Landing Page",
          tag: "Web Development",
          year: "2012",
          role: "Front End",
          img: "oss.webp",
          visit: false,
          status: "offline",
          link: "",
          techs: [
            {
              icon: "html5.svg",
              link: "https://www.w3schools.com/html/",
              name: "HTML 5",
            },
            {
              icon: "css3.svg",
              link: "https://web.dev/learn/css/",
              name: "CSS 3",
            },
            {
              icon: "jquery.svg",
              link: "https://jquery.com/",
              name: "Jquery",
            },
          ],
        },
        {
          name: "Icodea Social",
          title: "Twitter Client",
          tag: "Web Development",
          year: "2012",
          role: "Front End",
          img: "icodea.webp",
          visit: false,
          status: "offline",
          link: "",
          techs: [
            {
              icon: "html5.svg",
              link: "https://www.w3schools.com/html/",
              name: "HTML 5",
            },
            {
              icon: "css3.svg",
              link: "https://web.dev/learn/css/",
              name: "CSS 3",
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
