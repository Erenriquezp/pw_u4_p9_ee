<template>
    <div>
        <h2>Prueba MatriculaClient</h2>
        <RouterLink to="/consultar-todos">Ir a Consultar Todos</RouterLink>
        <RouterLink to="/consultar-por-id">Ir a Consultar Por ID</RouterLink>
        <button @click="guardarEstudiante">3. Guardar</button>
        <button @click="actualizarEstudiante">4. Actualizar</button>
        <button @click="actualizarParcial">5. Actualizar Parcial</button>
        <button @click="borrarEstudiante">6. Borrar</button>
        <pre v-if="respuesta">{{ respuesta }}</pre>
    </div>
</template>

<script>
import { GuardarFachada, ActualizarFachada, ActualizarParcialFachada, BorrarFachada } from '../clients/MatriculaClient.js';

export default {
    data() {
        return {
            respuesta: null
        };
    },
    methods: {
        async guardarEstudiante() {
            try {
                const body = { nombre: 'Test', apellido: 'Usuario' };
                const res = await GuardarFachada(body);
                this.respuesta = JSON.stringify(res, null, 2);
            } catch (error) {
                this.respuesta = 'Error: ' + error.message;
            }
        },
        async actualizarEstudiante() {
            try {
                const body = { nombre: 'Test Actualizado', apellido: 'Usuario' };
                await ActualizarFachada(51, body);
                this.respuesta = 'Estudiante actualizado exitosamente (Status 209)';
            } catch (error) {
                this.respuesta = 'Error: ' + error.message;
            }
        },
        async actualizarParcial() {
            try {
                const body = { nombre: 'Test Parcial' };
                await ActualizarParcialFachada(51, body);
                this.respuesta = 'Estudiante actualizado parcialmente (void)';
            } catch (error) {
                this.respuesta = 'Error: ' + error.message;
            }
        },
        async borrarEstudiante() {
            try {
                await BorrarFachada(1);
                this.respuesta = 'Estudiante eliminado exitosamente';
            } catch (error) {
                this.respuesta = 'Error: ' + error.message;
            }
        }
    }
}
</script>

<style>

</style>