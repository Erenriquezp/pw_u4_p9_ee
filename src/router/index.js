import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/consultar-todos',
      name: 'consultar-todos',
      component: () => import('../views/ConsultarTodosView.vue'),
    },
    {
      path: '/consultar-por-id',
      name: 'consultar-por-id',
      component: () => import('../views/ConsultarPorIdView.vue'),
    },
    {
      path: '/guardar',
      name: 'guardar',
      component: () => import('../views/GuardarView.vue'),
    },
    {
      path: '/actualizar',
      name: 'actualizar',
      component: () => import('../views/ActualizarView.vue'),
    },
    {
      path: '/actualizar-parcial',
      name: 'actualizar-parcial',
      component: () => import('../views/ActualizarParcialView.vue'),
    },
    {
      path: '/borrar',
      name: 'borrar',
      component: () => import('../views/BorrarView.vue'),
    },
  ],
})

export default router
