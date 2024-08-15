<template>
  <footer
    class="fixed inset-x-0 bottom-0 flex flex-col-reverse px-6 py-4 text-xs font-thin text-gray-500 transition duration-500 bg-gray-50 dark:text-gray-400 dark:bg-gray-900 dark:bg-opacity-60 dark:2xl:bg-opacity-0 bg-opacity-80 lg:flex-row lg:justify-between animate__animated animate__fadeIn 2xl:bg-transparent backdrop-blur 2xl:backdrop-blur-0"
  >
    <div class="flex items-center m-auto font-light transition duration-300 lg:m-0">
      &copy; 2021 - {{ year }}. Built with &nbsp;
      <font-awesome-icon :icon="['fas', 'heart']" />&nbsp; from Indonesia
    </div>
    <div
      class="flex justify-between w-40 pb-3 m-auto text-xl lg:pb-0 lg:w-36 lg:text-base lg:m-0"
    >
      <SocialIcon
        v-for="(social, index) in socials"
        :key="index"
        :label="social.label"
        :link="social.link"
        :icon="social.icon"
      />
    </div>
  </footer>
</template>

<script>
import SocialIcon from './partials/SocialIcon.vue';
import firebase from '../firebase';
import { getDatabase, ref, onValue } from 'firebase/database';
const db = getDatabase(firebase);
export default {
  components: {
    SocialIcon,
  },
  data() {
    return {
      year: new Date().getFullYear(),
      socials: [],
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.getState('master/socials', 'socials');
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
