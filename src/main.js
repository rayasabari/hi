import Vue from 'vue'
import App from './App.vue'

import 'animate.css'
import VueTyperPlugin from 'vue-typer'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faGithub, faLinkedin, faInstagram, faPhp, faJs } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from './router'

library.add(faFacebook, faTwitter, faGithub, faLinkedin, faInstagram, faHeart, faPhp, faJs)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueTyperPlugin)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
