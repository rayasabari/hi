<template>
  <div class="text-gray-300">
    <SectionTitle :title="'PROJECTS'" :subYellow="'works'" :subGray="' & porto'" />
    <Scroller :to="'#detail-projects'" />
    <div
      id="detail-projects"
      class="flex items-center justify-center min-h-screen pt-16 mb-40 lg:mb-0 lg:py-24"
    >
      <Section class="lg:w-8/12">
        <div class="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:flex-wrap">
          <div v-for="(project, index) in projects" :key="index" class="lg:w-4/12">
            <CardProject
              data-aos="fade-up"
              data-aos-duration="1000"
              :data-aos-delay=" (index * 200)"
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
          name: "propertyforsale.id",
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
          name: "RIS",
          title: "ERP System",
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
        {
          name: "SRA Auction",
          title: "E-Auction",
          tag: "Web Development",
          year: "2019",
          role: "Full Stack",
          img: "sra.webp",
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
          name: "Sispro",
          title: "Appraisal System",
          tag: "Web Development",
          year: "2017",
          role: "Full Stack",
          img: "sispro.webp",
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
          name: "Ocean Seven Store",
          title: "Landing Page",
          tag: "Web Development",
          year: "2012",
          role: "Front End",
          img: "oss.webp",
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
