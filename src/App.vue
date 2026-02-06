<template>
  <header header v-if="$route.name !== 'login'">
      <nav>
        <div class="nav-links">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/consultar-todos">Consultar Todos</RouterLink>
          <RouterLink to="/consultar-por-id">Consultar Por ID</RouterLink>
          <RouterLink to="/guardar">Guardar</RouterLink>
          <RouterLink to="/actualizar">Actualizar</RouterLink>
          <RouterLink to="/actualizar-parcial">Actualizar Parcial</RouterLink>
          <RouterLink to="/borrar">Borrar</RouterLink>
        </div>
      <button @click="logout" class="logout-btn">
        <span class="icon"></span> Salir
      </button>
    </nav>
  </header>

  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView, useRouter } from "vue-router";
import { cerrarSesion } from "./clients/AuthorizationClient";

const router = useRouter();

const logout = () => {
  cerrarSesion();
  window.location.href = '/login';};
</script>
<style scoped>
header {
  background-color: var(--color-background-soft);
  border-bottom: 1px solid var(--color-border);
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05); /* Sombra sutil */
}

nav {
  display: flex;
  justify-content: space-between; /* Separa los links a la izq y el botón a la der */
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}

nav a {
  text-decoration: none;
  color: var(--color-text);
  font-size: 0.95rem;
  padding: 0.5rem 0;
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease;
  font-weight: 500;
}

nav a:hover {
  color: hsla(160, 100%, 37%, 1);
}

nav a.router-link-exact-active {
  color: hsla(160, 100%, 37%, 1);
  border-bottom-color: hsla(160, 100%, 37%, 1);
}

/* ESTILO DEL BOTÓN SALIR */
.logout-btn {
  background-color: transparent;
  border: 1px solid #e74c3c; /* Rojo suave */
  color: #e74c3c;
  padding: 0.5rem 1.2rem;
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logout-btn:hover {
  background-color: #e74c3c;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(231, 76, 60, 0.2);
}

.icon {
  font-size: 1.1rem;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  nav {
    flex-direction: column;
    gap: 1rem;
  }
  
  .nav-links {
    justify-content: center;
    gap: 1rem;
  }

  .logout-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>