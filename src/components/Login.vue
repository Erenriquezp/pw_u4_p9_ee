<template>
    <div class="login-container">
        <h2>Login</h2>
        <form @submit.prevent="login">
        <div class="form-group">
            <label for="username">Usuario:</label>
            <input type="text" id="username" placeholder="Usuario" v-model="username" required />
        </div>
        <div class="form-group">
            <label for="password">Contraseña:</label>
            <input type="password" id="password" placeholder="Contraseña" v-model="password" required />
        </div>
        <button type="submit">Entrar</button>
        </form>
    </div>
</template>

<script>
import { obtenerToken } from "@/clients/AuthorizationClient";

export default {
    data() {
        return {
            username: '',
            password: ''
        };
    },
    methods: {
        async login() {
            try {
                await obtenerToken(this.username, this.password);
                console.log('Autenticación exitosa, token guardado.');
                this.$router.push({ name: 'home' });
            } catch (error) {
                console.error('Error al obtener el token de autenticación', error);
            }
        }
    }
}
</script>

<style>

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

button {
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

</style>