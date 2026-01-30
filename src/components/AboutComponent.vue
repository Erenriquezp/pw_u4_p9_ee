<template>
  <div>
    <h2>Prueba MatriculaClient</h2>
    <RouterLink to="/consultar-todos">Ir a Consultar Todos</RouterLink>
    <RouterLink to="/consultar-por-id">Ir a Consultar Por ID</RouterLink>
    <RouterLink to="/guardar">Ir a Guardar</RouterLink>
    <RouterLink to="/actualizar">Ir a Actualizar</RouterLink>
    <RouterLink to="/actualizar-parcial">Ir a Actualizar Parcial</RouterLink>
    <RouterLink to="/borrar">Ir a Borrar</RouterLink>
    <pre v-if="respuesta">{{ respuesta }}</pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      respuesta: null,
    };
  },
};
</script>

<style></style>
