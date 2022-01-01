import Vue from 'vue'
import App from './App.vue'
import './index.css'
import 'animate.css'
import VueTyperPlugin from 'vue-typer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faGithub, faLinkedin, faInstagram, faLaravel, faVuejs, faWordpress } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from './router'
import VueSmoothScroll from 'vue2-smooth-scroll'

library.add(faFacebook, faTwitter, faGithub, faLinkedin, faInstagram, faLaravel, faVuejs, faWordpress, faHeart)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueTyperPlugin)
Vue.config.productionTip = false
Vue.use(VueSmoothScroll)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
