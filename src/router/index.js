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
        requiereAutorizacion: false,
        esPublica: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
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
        requiereAutorizacion: true,
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
  // 1. Verificamos si la ruta necesita autorización
  if (to.meta.requiereAutorizacion) {
    
    // 2. Buscamos el token donde lo guardamos (SessionStorage)
    const token = sessionStorage.getItem('jwt_token');
    
    if (token) {
      // Tiene token -> Pasa
      next();
    } else {
      // No tiene token -> Login
      console.log('Acceso denegado. Redirigiendo a Login.');
      next({ name: 'login' });
    }
    
  } else {
    /* Si no requiere autorizacion, dejo pasar */
    next();
  }
});

export default router
