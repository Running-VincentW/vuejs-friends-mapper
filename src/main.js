import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Leaflet dependencies
import { Icon } from "leaflet";
import 'leaflet/dist/leaflet.css';

// Buefy CSS Framework
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faMapMarker, faSpinner, faAt, faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faUser, faMapMarker, faSpinner, faAt, faAddressCard);
Vue.component('vue-fontawesome', FontAwesomeIcon);

Vue.use(Buefy, {
  defaultIconComponent: 'vue-fontawesome',
  defaultIconPack: 'fas',
});

Vue.config.productionTip = false


delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
