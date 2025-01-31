// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';
import 'prismjs'
import 'prismjs/themes/prism-solarizedlight.css'



import Home from './components/Home.vue';
import Projects from './components/Projects.vue';
import ProjectDetail from './components/ProjectDetail.vue';
import Resume from './components/Resume.vue';

// Define routes
const routes = [
  { path: '/dev', component: Home },
  { path: '/dev/projects', component: Projects },
  { path: '/dev/projects/detail', component: ProjectDetail },
  { path: '/dev/resume', component: Resume }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const vuetify = createVuetify();

const app = createApp(App);
app.use(router);
app.use(vuetify);
app.mount('#app');