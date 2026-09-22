import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AdSlot from '@/components/AdSlot.vue'
import '@/assets/styles/main.css'

createApp(App)
  .use(router)
  .component('AdSlot', AdSlot)
  .mount('#app')
