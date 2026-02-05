import axios from 'axios';
import { obtenerToken } from './AuthorizationClient.js';

const TOKEN = await obtenerToken();
const URL = 'http://localhost:8081/matricula/api/v1.0/estudiantes';

const ConsultarTodos = async () => {
    console.log(`Obteniendo token: ${TOKEN}`);
    const data = axios.get(URL, {headers:{Authorization: `Bearer ${TOKEN}`}}).then(response => response.data);
    console.log(data);
    return data;
}

const consutarPorId = async (id) => {
    const data = axios.get(`${URL}/${id}`, {headers:{Authorization: `Bearer ${TOKEN}`}}).then(response => response.data);
    console.log(data);
    return data;
}

const guardar = async (body) => {
    const data = axios.post(URL, body, {headers:{Authorization: `Bearer ${TOKEN}`}}).then(response => response.data);
    console.log(data);
    return data;
}

const actualizar = async (id, body) => {
    const data = axios.put(`${URL}/${id}`, body, {headers:{Authorization: `Bearer ${TOKEN}`}}).then(response => response.data);
    console.log(data);
    return data;
}

const actualizarParcial = async (id, body) => {
    const data = axios.patch(`${URL}/${id}`, body, {headers:{Authorization: `Bearer ${TOKEN}`}}).then(response => response.data);
    console.log(data);
    return data;
}

const borrar = async (id) => {
    axios.delete(`${URL}/${id}`, {headers:{Authorization: `Bearer ${TOKEN}`}}).then(response => response.data);
    console.log(`Estudiante con id ${id} eliminado`);
}

export async function ConsultarTodosFachada() { 
    return await ConsultarTodos(); 
}

export async function ConsultarPorIdFachada(id) { 
    return await consutarPorId(id); 
}

export async function GuardarFachada(body) { 
    return await guardar(body); 
}

export async function ActualizarFachada(id, body) { 
    return await actualizar(id, body); 
}

export async function ActualizarParcialFachada(id, body) { 
    return await actualizarParcial(id, body); 
}

export async function BorrarFachada(id) { 
    await borrar(id); 
}