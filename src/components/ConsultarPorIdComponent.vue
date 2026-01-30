<template>
    <div>
        <h2>Consultar Por ID</h2>
        <input v-model.number="id" type="number" placeholder="ID" />
        <button @click="consultarPorId">Consultar</button>
        <pre v-if="respuesta">{{ respuesta }}</pre>
    </div>
</template>

<script>
import { ConsultarPorIdFachada } from '../clients/MatriculaClient.js';

export default {
    data() {
        return {
            id: 1,
            respuesta: null
        };
    },
    methods: {
        async consultarPorId() {
            try {
                const res = await ConsultarPorIdFachada(this.id);
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
