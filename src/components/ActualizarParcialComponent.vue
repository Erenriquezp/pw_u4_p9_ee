<template>
  <div class="container">
    <h2>Actualizar Parcial Estudiante</h2>
    <RouterLink to="/consultar-todos">Ir a Consultar Todos</RouterLink>
    <p class="info-text">Solo complete los campos que desea actualizar</p>

    <div class="id-input-group">
      <label for="id">ID del Estudiante:</label>
      <input
        id="id"
        v-model.number="idEstudiante"
        type="number"
        placeholder="Ingrese el ID"
        min="1"
      />
    </div>

    <form @submit.prevent="actualizarParcial" class="formulario">
      <div class="form-group">
        <label for="nombre">Nombre:</label>
        <input
          id="nombre"
          v-model="formulario.nombre"
          type="text"
          placeholder="Dejar vacío si no se actualiza"
        />
      </div>

      <div class="form-group">
        <label for="apellido">Apellido:</label>
        <input
          id="apellido"
          v-model="formulario.apellido"
          type="text"
          placeholder="Dejar vacío si no se actualiza"
        />
      </div>

      <div class="form-group">
        <label for="fechaNacimiento">Fecha de Nacimiento:</label>
        <input
          id="fechaNacimiento"
          v-model="formulario.fechaNacimiento"
          type="date"
        />
      </div>

      <div class="form-group">
        <label for="provincia">Provincia:</label>
        <input
          id="provincia"
          v-model="formulario.provincia"
          type="text"
          placeholder="Dejar vacío si no se actualiza"
        />
      </div>

      <div class="form-group">
        <label for="genero">Género:</label>
        <select id="genero" v-model="formulario.genero">
          <option value="">Sin cambios</option>
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
          <option value="Otro">Otro</option>
        </select>
      </div>

      <button type="submit" class="btn">Actualizar Parcial</button>
    </form>

    <div v-if="error" class="error">{{ error }}</div>

    <div v-if="respuesta" class="resultado">
      <h3>{{ respuesta }}</h3>
    </div>
  </div>
</template>

<script>
import { ActualizarParcialFachada } from "../clients/MatriculaClient.js";

export default {
  data() {
    return {
      idEstudiante: 1,
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
    async actualizarParcial() {
      try {
        this.error = null;
        this.respuesta = null;

        if (!this.idEstudiante || this.idEstudiante < 1) {
          this.error = "Por favor, ingrese un ID válido";
          return;
        }

        // Construir el body solo con campos que tienen valores
        const body = {};

        if (this.formulario.nombre) {
          body.nombre = this.formulario.nombre;
        }
        if (this.formulario.apellido) {
          body.apellido = this.formulario.apellido;
        }
        if (this.formulario.fechaNacimiento) {
          body.fechaNacimiento = this.formulario.fechaNacimiento + "T00:00:00";
        }
        if (this.formulario.provincia) {
          body.provincia = this.formulario.provincia;
        }
        if (this.formulario.genero) {
          body.genero = this.formulario.genero;
        }

        if (Object.keys(body).length === 0) {
          this.error = "Por favor, ingrese al menos un campo para actualizar";
          return;
        }

        await ActualizarParcialFachada(this.idEstudiante, body);
        this.respuesta = "Estudiante actualizado parcialmente (void)";
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
  },
};
</script>

<style scoped>
.container {
  padding: 1rem;
  max-width: 600px;
  margin: 0 auto;
}

.info-text {
  color: var(--color-text);
  font-style: italic;
  margin-bottom: 1rem;
  font-size: 0.9rem;
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
  color: var(--color-text);
}

.resultado h3 {
  margin: 0;
  color: hsla(160, 100%, 37%, 1);
}
</style>
