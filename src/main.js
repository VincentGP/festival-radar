// Eksterne imports
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

// Interne imports
import App from './App.vue';
import router from './router';
import { store } from './store/store';
import { apiBaseUrl } from './config/config';
import './filters';

// Vi fortæller Vue at vi bruger Axios
Vue.use(VueAxios, axios);

// Sæt base URL til når vi laver API requests
axios.defaults.baseURL = apiBaseUrl;

// Denne bestemmer om vi får vist hjælp i browser loggen
Vue.config.productionTip = true;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
