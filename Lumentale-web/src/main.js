import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AdPlaceholder from '@/components/AdPlaceholder.vue'
import '@/assets/styles/main.css'

createApp(App)
  .use(router)
  .component('AdPlaceholder', AdPlaceholder)
  .mount('#app')
