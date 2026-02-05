import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        requiereAutorizacion: true,
        esPublica: false
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: {
        requiereAutorizacion: false,
        esPublica: true
      }
    },
    {
      path: '/consultar-todos',
      name: 'consultar-todos',
      component: () => import('../views/ConsultarTodosView.vue'),
      meta: {
        requiereAutorizacion: false,
        esPublica: false
      }
    },
    {
      path: '/consultar-por-id',
      name: 'consultar-por-id',
      component: () => import('../views/ConsultarPorIdView.vue'),
      meta: {
        requiereAutorizacion: true,
        esPublica: false
      }
    },
    {
      path: '/guardar',
      name: 'guardar',
      component: () => import('../views/GuardarView.vue'),
      meta: {
        requiereAutorizacion: false,
        esPublica: false
      }
    },
    {
      path: '/actualizar',
      name: 'actualizar',
      component: () => import('../views/ActualizarView.vue'),
      meta: {
        requiereAutorizacion: false,
        esPublica: false
      }
    },
    {
      path: '/actualizar-parcial',
      name: 'actualizar-parcial',
      component: () => import('../views/ActualizarParcialView.vue'),
      meta: {
        requiereAutorizacion: true,
        esPublica: false
      }
    },
    {
      path: '/borrar',
      name: 'borrar',
      component: () => import('../views/BorrarView.vue'),
      meta: {
        requiereAutorizacion: true,
        esPublica: false
      }
    },
  ],
})

/* Configuracion del Guardian */
router.beforeEach((to, from, next) => {
  if (to.meta.requiereAutorizacion) {
    /* Si requiere autorizacion le envio a una pagina de login */
    console.log('Ruta protegida, se requiere autorizacion');
  } else {
    /* Si no requiere autorizacion, dejo pasar */
    console.log('Ruta pública, no se requiere autorizacion');
    next();
  }
})

export default router
