import Vue from 'vue'
import App from './App.vue'
import './index.css'
import 'animate.css'
import VueTyperPlugin from 'vue-typer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faTwitter, faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faFacebook, faTwitter, faGithub, faLinkedin, faInstagram)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueTyperPlugin)
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
