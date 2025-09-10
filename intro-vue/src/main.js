import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import Home from './pages/Home.vue'
import Celulares from './pages/Celulares.vue'
import Acessorios from './pages/Acessorios.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/celulares', component: Celulares },
  { path: '/acessorios', component: Acessorios }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')

createApp(App).use(router).mount('#app')
