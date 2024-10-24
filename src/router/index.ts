import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Support from '../views/Support.vue'
import Donate from '../views/Donate.vue'
import Contact from '../views/Contact.vue'
import Tutorials from '../views/Tutorials.vue'
import ArticleDetail from '../views/ArticleDetail.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/support', component: Support },
    { path: '/donate', component: Donate },
    { path: '/contact', component: Contact },
    { path: '/tutorials', component: Tutorials },
    { path: '/article/:id', component: ArticleDetail },
  ]
})

export default router