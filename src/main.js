import Vue from 'vue'
import App from './App.vue'
import VueMeta from 'vue-meta'

import 'animate.css'
import VueTyperPlugin from 'vue-typer'

import AOS from 'aos'
import 'aos/dist/aos.css'

import VTooltip from 'v-tooltip'
import '../public/css/vtooltip.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faGithub, faLinkedin, faInstagram, faYoutube, faPhp, faJs, faLaravel, faVuejs} from '@fortawesome/free-brands-svg-icons'
import { faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from './router'

library.add(faCloudDownloadAlt, faFacebook, faTwitter, faGithub, faLinkedin, faInstagram, faYoutube, faHeart, faPhp, faJs, faLaravel, faVuejs)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueMeta)
Vue.use(VueTyperPlugin)
Vue.use(VTooltip)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  mounted() {
    AOS.init()
  },
}).$mount('#app')
