import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
  faEnvelope, 
  faBriefcase, 
  faCode, 
  faServer, 
  faCloud,
  faDatabase,
  faLaptopCode,
  faMobileAlt,
  faGlobe,
  faCog,
  faRocket,
  faUsers,
  faChartLine,
  faShoppingCart,
  faBlog,
  faPhone,
  faMapMarkerAlt,
  faCodeBranch,
} from '@fortawesome/free-solid-svg-icons'
import { 
  faGithub,
  faLinkedin,
  faTwitter,
  faVuejs,
  faJs,
  faPhp,
  faAws,
  faDocker,
  faBootstrap,
  faGitlab,
  faLinux,
  faGithubAlt,
  faGolang,
  faNodeJs,
  faCss,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'

// Add icons to the library
library.add(
  // Solid icons
  faEnvelope, 
  faBriefcase, 
  faCode, 
  faServer, 
  faCloud,
  faDatabase,
  faLaptopCode,
  faMobileAlt,
  faGlobe,
  faCog,
  faRocket,
  faUsers,
  faChartLine,
  faShoppingCart,
  faBlog,
  faPhone,
  faMapMarkerAlt,
  faCodeBranch,

  // Brand icons
  faGithub,
  faGitlab,
  faLinkedin,
  faTwitter,
  faVuejs,
  faJs,
  faPhp,
  faAws,
  faDocker,
  faBootstrap,
  faLinux,
  faGithubAlt,
  faGolang,
  faNodeJs,
  faCss,
  faWhatsapp,
)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
}) 