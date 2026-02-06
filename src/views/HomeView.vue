<script setup>
import { ref } from 'vue';

const username = ref('Administrador');

</script>

<template>
  <main class="home-container">
    
    <section class="hero">
      <div class="hero-content">
        <h1>Bienvenido al <span class="highlight">SGA</span></h1>
        <p class="subtitle">Sistema de Gestión Académica y Matriculación</p>
        <p class="description">
          Hola, <strong>{{ username }}</strong>. Selecciona una opción del menú o utiliza los accesos directos para comenzar a gestionar la información institucional.
        </p>
      </div>
      <div class="hero-image">
        <div class="icon-placeholder">🎓</div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.home-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(135deg, var(--color-background-soft) 0%, #988f8f 100%);
  padding: 3rem;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  margin-bottom: 3rem;
}

.hero-content {
  flex: 1;
  padding-right: 2rem;
}

h1 {
  font-size: 3rem;
  font-weight: 800;
  color: var(--color-heading);
  margin-bottom: 0.5rem;
  line-height: 1.2;
}

.highlight {
  color: hsla(160, 100%, 37%, 1); /* El verde de Vue */
}

.subtitle {
  font-size: 1.5rem;
  color: #baacac;
  margin-bottom: 1.5rem;
  font-weight: 300;
}

.description {
  font-size: 1.1rem;
  color: var(--color-text);
  line-height: 1.6;
  max-width: 600px;
}

.icon-placeholder {
  font-size: 8rem;
  animation: float 6s ease-in-out infinite;
}

</style>