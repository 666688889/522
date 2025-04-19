import { createApp } from 'vue'
import App from './App.vue'
import 'vant/lib/index.css'
import { Button, Toast } from 'vant'
import router from './router'

const app = createApp(App)
app.use(Button).use(Toast).use(router)
app.mount('#app')