<template>
  <div id="app">
    <div class="flex flex-col" v-if="!isLoading">
      <Content></Content>
      <Navbar></Navbar>
      <Footer></Footer>
    </div>
  </div>
</template>
<script>
import Navbar from './components/Navbar.vue';
import Content from './components/Content.vue';
import Footer from './components/Footer.vue';
import Notiflix from 'notiflix';

export default {
  metaInfo: {
    titleTemplate: '%s Raya Sabari',
    meta: [
      { vmid: 'title', name: 'title', content: 'Raya Sabari — A Full Stack Developer' },
      {
        vmid: 'description',
        name: 'description',
        content:
          'Raya Sabari, also known as RYSB, is a Full Stack Developer from Jakarta, Indonesia. He has over 7 years in the web development',
      },
    ],
  },
  components: {
    Navbar,
    Content,
    Footer,
  },
  data() {
    return {
      isLoading: false,
      svgDark: `
            <svg version="1.1" id="L7" xmlns="x//www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
      <path fill="#d1d5db" d="M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3
        c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z">
            <animateTransform 
              attributeName="transform" 
              attributeType="XML" 
              type="rotate"
              dur="2s" 
              from="0 50 50"
              to="360 50 50" 
              repeatCount="indefinite" />
        </path>
      <path fill="#d1d5db" d="M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7
        c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z">
            <animateTransform 
              attributeName="transform" 
              attributeType="XML" 
              type="rotate"
              dur="1s" 
              from="0 50 50"
              to="-360 50 50" 
              repeatCount="indefinite" />
        </path>
      <path fill="#d1d5db" d="M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5
        L82,35.7z">
            <animateTransform 
              attributeName="transform" 
              attributeType="XML" 
              type="rotate"
              dur="2s" 
              from="0 50 50"
              to="360 50 50" 
              repeatCount="indefinite" />
        </path>
      </svg>
      `,
      svgLight: `
            <svg version="1.1" id="L7" xmlns="x//www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
      <path fill="#374151" d="M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3
        c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z">
            <animateTransform 
              attributeName="transform" 
              attributeType="XML" 
              type="rotate"
              dur="2s" 
              from="0 50 50"
              to="360 50 50" 
              repeatCount="indefinite" />
        </path>
      <path fill="#374151" d="M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7
        c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z">
            <animateTransform 
              attributeName="transform" 
              attributeType="XML" 
              type="rotate"
              dur="1s" 
              from="0 50 50"
              to="-360 50 50" 
              repeatCount="indefinite" />
        </path>
      <path fill="#374151" d="M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5
        L82,35.7z">
            <animateTransform 
              attributeName="transform" 
              attributeType="XML" 
              type="rotate"
              dur="2s" 
              from="0 50 50"
              to="360 50 50" 
              repeatCount="indefinite" />
        </path>
      </svg>
      `,
    };
  },
  mounted() {
    this.setViewHeight();
    window.addEventListener('resize', () => {
      this.setViewHeight();
    });
    this.loading();
  },
  methods: {
    setViewHeight: function () {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    },
    loading() {
      this.isLoading = true;
      const currentMode = localStorage.getItem('darkMode');
      const svgColor =
        currentMode === null || currentMode === 'dark' ? this.svgDark : this.svgLight;
      Notiflix.Loading.custom({
        backgroundColor: 'transparent',
        customSvgCode: svgColor,
      });
      Notiflix.Loading.remove(700);
      setTimeout(() => {
        this.isLoading = false;
      }, 900);
    },
  },
};
</script>
<style>
/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #facc15;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #fde047;
}
</style>
