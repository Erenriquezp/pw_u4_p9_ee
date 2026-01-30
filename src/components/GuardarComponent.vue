<template>
  <div class="container">
    <h2>Guardar Estudiante</h2>
    <RouterLink to="/consultar-todos">Ir a Consultar Todos</RouterLink>

    <form @submit.prevent="guardarEstudiante" class="formulario">
      <div class="form-group">
        <label for="nombre">Nombre:</label>
        <input
          id="nombre"
          v-model="formulario.nombre"
          type="text"
          placeholder="Ingrese el nombre"
          required
        />
      </div>

      <div class="form-group">
        <label for="apellido">Apellido:</label>
        <input
          id="apellido"
          v-model="formulario.apellido"
          type="text"
          placeholder="Ingrese el apellido"
          required
        />
      </div>

      <div class="form-group">
        <label for="fechaNacimiento">Fecha de Nacimiento:</label>
        <input
          id="fechaNacimiento"
          v-model="formulario.fechaNacimiento"
          type="date"
          required
        />
      </div>

      <div class="form-group">
        <label for="provincia">Provincia:</label>
        <input
          id="provincia"
          v-model="formulario.provincia"
          type="text"
          placeholder="Ingrese la provincia"
          required
        />
      </div>

      <div class="form-group">
        <label for="genero">Género:</label>
        <select id="genero" v-model="formulario.genero" required>
          <option value="">Seleccione un género</option>
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
          <option value="Otro">Otro</option>
        </select>
      </div>

      <button type="submit" class="btn">Guardar</button>
    </form>

    <div v-if="error" class="error">{{ error }}</div>

    <div v-if="respuesta" class="resultado">
      <h3>Resultado:</h3>
      <table class="tabla-datos">
        <tbody>
          <tr>
            <td class="label">ID</td>
            <td>{{ respuesta.id }}</td>
          </tr>
          <tr>
            <td class="label">Nombre</td>
            <td>{{ respuesta.nombre }}</td>
          </tr>
          <tr>
            <td class="label">Apellido</td>
            <td>{{ respuesta.apellido }}</td>
          </tr>
          <tr>
            <td class="label">Género</td>
            <td>{{ respuesta.genero }}</td>
          </tr>
          <tr>
            <td class="label">Fecha Nacimiento</td>
            <td>{{ formatDate(respuesta.fechaNacimiento) }}</td>
          </tr>
          <tr>
            <td class="label">Provincia</td>
            <td>{{ respuesta.provincia }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { GuardarFachada } from "../clients/MatriculaClient.js";

export default {
  data() {
    return {
      formulario: {
        nombre: "",
        apellido: "",
        fechaNacimiento: "",
        provincia: "",
        genero: "",
      },
      respuesta: null,
      error: null,
    };
  },
  methods: {
    async guardarEstudiante() {
      try {
        this.error = null;
        this.respuesta = null;

        const body = {
          nombre: this.formulario.nombre,
          apellido: this.formulario.apellido,
          fechaNacimiento: this.formulario.fechaNacimiento + "T00:00:00",
          provincia: this.formulario.provincia,
          genero: this.formulario.genero,
        };

        const res = await GuardarFachada(body);
        this.respuesta = res;
        this.formulario = {
          nombre: "",
          apellido: "",
          fechaNacimiento: "",
          provincia: "",
          genero: "",
        };
      } catch (error) {
        this.error = "Error: " + error.message;
        this.respuesta = null;
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

.formulario {
  background-color: var(--color-background-soft);
  padding: 1.5rem;
  border-radius: 4px;
  border: 1px solid var(--color-border);
  margin: 1.5rem 0;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.35rem;
  font-weight: 600;
  color: var(--color-heading);
  font-size: 0.95rem;
}

input,
select {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  background-color: var(--color-background);
  color: var(--color-text);
  font-size: 0.95rem;
}

input:focus,
select:focus {
  outline: none;
  border-color: hsla(160, 100%, 37%, 1);
}

.btn {
  width: 100%;
  padding: 0.75rem;
  background-color: hsla(160, 100%, 37%, 1);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
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
  margin-top: 1.5rem;
}

.resultado h3 {
  margin-top: 0;
  margin-bottom: 1rem;
  color: var(--color-heading);
}

.tabla-datos {
  width: 100%;
  border-collapse: collapse;
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
</style>
