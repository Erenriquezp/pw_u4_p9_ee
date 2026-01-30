<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/consultar-todos">Consultar Todos</RouterLink>
      <RouterLink to="/consultar-por-id">Consultar Por ID</RouterLink>
      <RouterLink to="/guardar">Guardar</RouterLink>
      <RouterLink to="/actualizar">Actualizar</RouterLink>
      <RouterLink to="/actualizar-parcial">Actualizar Parcial</RouterLink>
      <RouterLink to="/borrar">Borrar</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

<style scoped>
header {
  background-color: var(--color-background-soft);
  border-bottom: 1px solid var(--color-border);
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
}

nav {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

nav a {
  text-decoration: none;
  color: var(--color-text);
  font-size: 0.95rem;
  padding: 0.5rem 0;
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease;
}

nav a:hover {
  border-bottom-color: var(--color-border-hover);
  color: var(--color-heading);
}

nav a.router-link-exact-active {
  color: hsla(160, 100%, 37%, 1);
  border-bottom-color: hsla(160, 100%, 37%, 1);
  font-weight: 500;
}

@media (max-width: 768px) {
  nav {
    gap: 1rem;
    font-size: 0.85rem;
  }

  nav a {
    padding: 0.4rem 0;
  }
}
</style>
