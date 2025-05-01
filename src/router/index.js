import { createRouter, createWebHashHistory } from 'vue-router'

// Import your pages
import Home from '../components/Home.vue'
import Projects from '../components/Projects.vue'
import ProjectDetail from '../components/WebsiteProject.vue'
import Resume from '../components/Resume.vue'

// Define your routes
const routes = [
  { path: '/', component: Home },
  { path: '/projects/', component: Projects },
  { path: '/projects/website/', component: ProjectDetail },
  { path: '/resume/', component: Resume }
]

// Create router instance
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router