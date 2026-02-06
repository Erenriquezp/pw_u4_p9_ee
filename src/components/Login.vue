<template>
  <div class="login-container">
    <h2>Iniciar Sesión</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="username">Usuario:</label>
        <input
          type="text"
          id="username"
          v-model="username"
          required
          autofocus
        />
      </div>

      <div class="form-group">
        <label for="password">Contraseña:</label>
        <input type="password" id="password" v-model="password" required />
      </div>

      <div v-if="errorMsg" class="error-alert">
        {{ errorMsg }}
      </div>

      <button type="submit" :disabled="cargando">
        {{ cargando ? "Entrando..." : "Entrar" }}
      </button>
    </form>
  </div>
</template>

<script>
import { obtenerToken } from "@/clients/AuthorizationClient";

export default {
  data() {
    return {
      username: "",
      password: "",
      errorMsg: null,
      cargando: false,
    };
  },
  methods: {
    async login() {
      this.cargando = true;
      this.errorMsg = null;

      try {
        await obtenerToken(this.username, this.password);

        // Si pasa, redirigimos al Home
        this.$router.push({ name: "home" });
      } catch (error) {
        this.errorMsg = "Usuario o contraseña incorrectos";
      } finally {
        this.cargando = false;
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  background-color: var(--color-background-soft);
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--color-text);
}

.form-group input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  font-size: 1rem;
}

.login-container button {
  width: 100%;
  padding: 0.75rem;
  background-color: hsla(160, 100%, 37%, 1);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: hsla(160, 100%, 32%, 1);
}

.error-alert {
  color: #721c24;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 15px;
  font-size: 0.9rem;
  text-align: center;
}
</style>
