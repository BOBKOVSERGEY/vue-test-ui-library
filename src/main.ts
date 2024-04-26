import './assets/main.scss'

import PrimeVue from 'primevue/config';
import 'primeicons/primeicons.css';
import Menubar from 'primevue/menubar';
// @ts-ignore
import Wind from "@/presets/wind/index.js";

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(PrimeVue, {
  unstyled: true,
  pt: Wind
});

app.component('MenuBar', Menubar)

app.mount('#app')
