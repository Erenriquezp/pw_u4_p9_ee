<template>
  <div class="container">
    <h2>Borrar Estudiante</h2>
    <RouterLink to="/consultar-todos">Ir a Consultar Todos</RouterLink>

    <div class="id-input-group">
      <label for="id">ID del Estudiante a Borrar:</label>
      <input
        id="id"
        v-model.number="idEstudiante"
        type="number"
        placeholder="Ingrese el ID"
        min="1"
        @keyup.enter="borrarEstudiante"
      />
    </div>

    <button @click="borrarEstudiante" class="btn btn-danger">
      Borrar Estudiante
    </button>

    <div v-if="error" class="error">{{ error }}</div>

    <div v-if="respuesta" class="resultado">
      <h3>{{ respuesta }}</h3>
    </div>
  </div>
</template>

<script>
import { BorrarFachada } from "../clients/MatriculaClient.js";

export default {
  data() {
    return {
      idEstudiante: 1,
      respuesta: null,
      error: null,
    };
  },
  methods: {
    async borrarEstudiante() {
      try {
        this.error = null;
        this.respuesta = null;

        if (!this.idEstudiante || this.idEstudiante < 1) {
          this.error = "Por favor, ingrese un ID válido";
          return;
        }

        await BorrarFachada(this.idEstudiante);
        this.respuesta = "Estudiante eliminado exitosamente";
        this.idEstudiante = 1;
      } catch (error) {
        this.error = "Error: " + error.message;
        this.respuesta = null;
      }
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

.id-input-group {
  background-color: var(--color-background-soft);
  padding: 1rem;
  border-radius: 4px;
  border: 1px solid var(--color-border);
  margin: 1.5rem 0;
}

.id-input-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--color-heading);
}

.id-input-group input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  background-color: var(--color-background);
  color: var(--color-text);
}

.id-input-group input:focus {
  outline: none;
  border-color: hsla(160, 100%, 37%, 1);
}

.btn {
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 1rem;
}

.btn-danger {
  background-color: #dc3545;
  color: white;
}

.btn-danger:hover {
  background-color: #c82333;
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
  margin-top: 1.5rem;
  color: var(--color-text);
}

.resultado h3 {
  margin: 0;
  color: hsla(160, 100%, 37%, 1);
}
</style>
