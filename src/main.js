import Vue from 'vue'
import App from './App.vue'
import './index.css'
import 'animate.css'
import VueTyperPlugin from 'vue-typer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faTwitter, faGithub, faLinkedin, faInstagram, faLaravel, faVuejs, faWordpress } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from './router'

library.add(faFacebook, faTwitter, faGithub, faLinkedin, faInstagram, faLaravel, faVuejs, faWordpress)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueTyperPlugin)
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
