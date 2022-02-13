<template>
  <div class="text-gray-300">
    <SectionTitle :title="'CONTACTS'" :subYellow="'reach'" :subGray="' & connect'" />
    <Scroller :to="'#detail-contacts'" />
    <div
      id="detail-contacts"
      class="flex items-center justify-center h-screen"
    >
      <Section
        data-aos="fade"
        data-aos-duration="1000"
        data-aos-delay="200"
        class="md:w-8/12 2xl:w-6/12"
      >
        <div>For business inquiries, feel free to get in touch via email at</div>
        <div class="mt-3">
          <a
            data-aos="fade"
            data-aos-duration="1000"
            data-aos-delay="600"
            href="mailto:hi@rayasabari.com"
            class="flex items-center justify-center text-lg font-medium tracking-wider text-gray-300 transition duration-300 lg:text-2xl hover:-translate-y-1 group hover:text-yellow-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 mr-2 text-yellow-300 transition duration-300 lg:w-7 lg:h-7 group-hover:text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            hi@rayasabari.com
          </a>
        </div>
      </Section>
    </div>
  </div>
</template>

<script>
import Highlight from "../components/partials/Highlight.vue";
import Scroller from "../components/partials/Scroller.vue";
import Section from "../components/Section.vue";
import SectionTitle from "../components/SectionTitle.vue";
export default {
  components: {
    SectionTitle,
    Section,
    Scroller,
    Highlight,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style>
</style>
