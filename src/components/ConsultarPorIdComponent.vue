<template>
  <div class="container">
    <h2>Consultar Por ID</h2>

    <div class="input-group">
      <input
        v-model.number="id"
        type="number"
        placeholder="Ingrese el ID"
        @keyup.enter="consultarPorId"
      />
      <button @click="consultarPorId" class="btn">Consultar</button>
    </div>

    <div v-if="error" class="error">{{ error }}</div>

    <div v-if="estudiante" class="resultado">
      <table class="tabla-datos">
        <tbody>
          <tr>
            <td class="label">ID</td>
            <td>{{ estudiante.id }}</td>
          </tr>
          <tr>
            <td class="label">Nombre</td>
            <td>{{ estudiante.nombre }}</td>
          </tr>
          <tr>
            <td class="label">Apellido</td>
            <td>{{ estudiante.apellido }}</td>
          </tr>
          <tr>
            <td class="label">Género</td>
            <td>{{ estudiante.genero }}</td>
          </tr>
          <tr>
            <td class="label">Fecha Nacimiento</td>
            <td>{{ formatDate(estudiante.fechaNacimiento) }}</td>
          </tr>
          <tr>
            <td class="label">Provincia</td>
            <td>{{ estudiante.provincia }}</td>
          </tr>
        </tbody>
      </table>

      <div
        v-if="estudiante.links && estudiante.links.length"
        class="links-section"
      >
        <h3>Enlaces</h3>
        <ul class="links-list">
          <li v-for="link in estudiante.links" :key="link.rel">
            <strong>{{ link.rel }}:</strong> {{ link.href }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { ConsultarPorIdFachada } from "../clients/MatriculaClient.js";

export default {
  data() {
    return {
      id: 1,
      estudiante: null,
      error: null,
    };
  },
  methods: {
    async consultarPorId() {
      try {
        this.error = null;
        this.estudiante = null;
        const res = await ConsultarPorIdFachada(this.id);
        this.estudiante = res;
      } catch (error) {
        this.error = "Error: " + error.message;
        this.estudiante = null;
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
.container {
  padding: 1rem;
  max-width: 600px;
  margin: 0 auto;
}

.input-group {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

input {
  flex: 1;
  padding: 0.5rem;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  background-color: var(--color-background);
  color: var(--color-text);
}

input:focus {
  outline: none;
  border-color: hsla(160, 100%, 37%, 1);
}

.btn {
  padding: 0.5rem 1rem;
  background-color: hsla(160, 100%, 37%, 1);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

.btn:hover {
  background-color: hsla(160, 100%, 32%, 1);
}

.error {
  background-color: #fee;
  color: #c33;
  padding: 0.75rem;
  border-radius: 4px;
  border-left: 4px solid #c33;
  margin-bottom: 1rem;
}

.resultado {
  background-color: var(--color-background-soft);
  padding: 1rem;
  border-radius: 4px;
  border: 1px solid var(--color-border);
}

.tabla-datos {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1.5rem;
}

.tabla-datos td {
  padding: 0.75rem;
  border-bottom: 1px solid var(--color-border);
}

.tabla-datos td.label {
  font-weight: 600;
  width: 35%;
  color: var(--color-heading);
}

.tabla-datos tbody tr:last-child td {
  border-bottom: none;
}

.links-section h3 {
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
  color: var(--color-heading);
}

.links-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.links-list li {
  padding: 0.5rem 0;
  font-size: 0.85rem;
  color: var(--color-text);
  word-break: break-all;
}

.links-list strong {
  color: var(--color-heading);
}
</style>
