import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/AppHome.vue'
import AboutUs from '../views/AboutUs.vue'
import Menu1 from '../views/Menu1.vue'
import Menu2 from '../views/Menu2.vue'
import Menu3 from '../views/Menu3.vue'
import DemarchesDossier from '../views/DemarchesDossier.vue'

const MAIN_TITLE = 'Gabarit de démarrage VueDsfr'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/menu-id-1',
    name: 'Menu1',
    component: Menu1,
  },
  {
    path: '/menu-id-2',
    name: 'Menu2',
    component: Menu2,
  },
  {
    path: '/menu-id-3',
    name: 'Menu3',
    component: Menu3,
  },
  {
    path: '/submenu-id-1',
    name: 'SubMenu1',
    component: Menu1,
  },
  {
    path: '/submenu-id-2',
    name: 'SubMenu2',
    component: Menu2,
  },
  {
    path: '/submenu-id-3',
    name: 'SubMenu3',
    component: Menu3,
  },
  {
    path: '/a-propos',
    name: 'About',
    component: AboutUs,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env?.BASE_URL || ''),
  routes,
})

router.beforeEach((to) => { // Cf. https://github.com/vueuse/head pour des transformations avancées de Head
  const specificTitle = to.meta.title ? `${to.meta.title} - ` : ''
  document.title = `${specificTitle}${MAIN_TITLE}`
})

export default router
