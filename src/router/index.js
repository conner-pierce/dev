import { createRouter, createWebHistory } from 'vue-router'

// Import your pages
import Home from '../components/Home.vue'
import Projects from '../components/Projects.vue'
import ProjectDetail from '../components/WebsiteProject.vue'
import Resume from '../components/Resume.vue'

// Define your routes
const routes = [
  { path: '/dev/', component: Home },
  { path: '/dev/projects/', component: Projects },
  { path: '/dev/projects/website/', component: ProjectDetail },
  { path: '/dev/resume/', component: Resume }
]

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router