import axios from 'axios';

const API_URL = 'http://localhost:8081/matricula/api/v1.0';

const apiClient = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

apiClient.interceptors.request.use(
    (config) => {
        const token = sessionStorage.getItem('jwt_token');
        
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export const ConsultarTodosFachada = async () => {
    const response = await apiClient.get('/estudiantes');
    return response.data;
}

export const ConsultarPorIdFachada = async (id) => {
    const response = await apiClient.get(`/estudiantes/${id}`);
    return response.data;
}

export const GuardarFachada = async (body) => {
    const response = await apiClient.post('/estudiantes', body);
    return response.data;
}

export const ActualizarFachada = async (id, body) => {
    const response = await apiClient.put(`/estudiantes/${id}`, body);
    return response.data;
}

export const ActualizarParcialFachada = async (id, body) => {
    const response = await apiClient.patch(`/estudiantes/${id}`, body);
    return response.data;
}

export const BorrarFachada = async (id) => {
    await apiClient.delete(`/estudiantes/${id}`);
}