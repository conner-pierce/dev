import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // <-- import router

import './assets/CSS/main.css'
import './assets/CSS/Navbar.css'

const app = createApp(App)

app.use(router) // <-- tell Vue to use the router
app.mount('#app')
