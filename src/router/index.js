import { createRouter, createWebHistory } from 'vue-router'

// Import your pages
import Home from '../components/Home.vue'
import Projects from '../components/Projects.vue'
import ProjectDetail from '../components/ProjectDetail.vue'
import Resume from '../components/Resume.vue'

// Define your routes
const routes = [
  { path: '/', component: Home },
  { path: '/projects', component: Projects },
  { path: '/project/:id', component: ProjectDetail },
  { path: '/resume', component: Resume }
]

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router