<template>
  <div class="consultar-container">
    <h2>Consultar Todos</h2>
    <button @click="consultarTodos" class="btn">Consultar</button>

    <div v-if="error" class="error">{{ error }}</div>

    <div v-if="estudiantes && estudiantes.length > 0" class="table-container">
      <table class="tabla-estudiantes">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Género</th>
            <th>Fecha Nacimiento</th>
            <th>Provincia</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="estudiante in estudiantes" :key="estudiante.id">
            <td>{{ estudiante.id }}</td>
            <td>{{ estudiante.nombre }}</td>
            <td>{{ estudiante.apellido }}</td>
            <td>{{ estudiante.genero }}</td>
            <td>{{ formatDate(estudiante.fechaNacimiento) }}</td>
            <td>{{ estudiante.provincia }}</td>
          </tr>
        </tbody>
      </table>
      <p class="info">Total de estudiantes: {{ estudiantes.length }}</p>
    </div>
  </div>
</template>

<script>
import { ConsultarTodosFachada } from "../clients/MatriculaClient.js";

export default {
  data() {
    return {
      estudiantes: null,
      error: null,
    };
  },
  methods: {
    async consultarTodos() {
      try {
        this.error = null;
        const res = await ConsultarTodosFachada();
        this.estudiantes = res;
      } catch (error) {
        this.error = "Error: " + error.message;
        this.estudiantes = null;
      }
    },
    formatDate(dateString) {
      if (!dateString) return "-";
      const date = new Date(dateString);
      return date.toLocaleDateString("es-ES", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });
    },
  },
};
</script>

<style scoped>
.consultar-container {
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

.btn {
  background-color: hsla(160, 100%, 37%, 1);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  margin-bottom: 1.5rem;
}

.btn:hover {
  background-color: hsla(160, 100%, 32%, 1);
}

.error {
  background-color: #fee;
  color: #c33;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  border-left: 4px solid #c33;
}

.table-container {
  overflow-x: auto;
}

.tabla-estudiantes {
  width: 100%;
  border-collapse: collapse;
  background-color: var(--color-background);
  box-shadow: 0 1px 3px var(--color-border);
  border-radius: 4px;
  overflow: hidden;
}

.tabla-estudiantes thead {
  background-color: var(--color-background-soft);
  border-bottom: 2px solid var(--color-border);
}

.tabla-estudiantes th {
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  color: var(--color-heading);
}

.tabla-estudiantes td {
  padding: 0.75rem 1rem;
  border-bottom: 1px solid var(--color-border);
  color: var(--color-text);
}

.tabla-estudiantes tbody tr:hover {
  background-color: var(--color-background-soft);
}

.tabla-estudiantes tbody tr:last-child td {
  border-bottom: none;
}

.info {
  margin-top: 1rem;
  color: var(--color-text);
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  .tabla-estudiantes {
    font-size: 0.9rem;
  }

  .tabla-estudiantes th,
  .tabla-estudiantes td {
    padding: 0.5rem;
  }

  h2 {
    font-size: 1.5rem;
  }
}
</style>
