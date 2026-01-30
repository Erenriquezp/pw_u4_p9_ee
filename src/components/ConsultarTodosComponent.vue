<template>
    <div>
        <h2>Consultar Todos</h2>
        <button @click="consultarTodos">Consultar</button>
        <pre v-if="respuesta">{{ respuesta }}</pre>
    </div>
</template>

<script>
import { ConsultarTodosFachada } from '../clients/MatriculaClient.js';

export default {
    data() {
        return {
            respuesta: null
        };
    },
    methods: {
        async consultarTodos() {
            try {
                const res = await ConsultarTodosFachada();
                this.respuesta = JSON.stringify(res, null, 2);
            } catch (error) {
                this.respuesta = 'Error: ' + error.message;
            }
        }
    }
}
</script>

<style>

</style>
