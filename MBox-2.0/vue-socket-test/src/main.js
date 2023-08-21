import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import aos from 'aos';

import { createPinia } from 'pinia'

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/main.scss';
import 'aos/dist/aos.css';

const app = createApp(App)

app.use(aos.init());
app.use(createPinia());
app.use(router)

app.mount('#app')
