import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import GptAdSlot from '@/components/GptAdSlot.vue'
import '@/assets/styles/main.css'

createApp(App).use(router).component('GptAdSlot', GptAdSlot).mount('#app')
