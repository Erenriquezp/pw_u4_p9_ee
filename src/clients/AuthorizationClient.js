// AuthClient.js
import axios from 'axios';

const AUTH_URL = 'http://localhost:8082/auth/token'; 

export const obtenerToken = async (user, password) => {
    try {
        console.log("Intentando autenticar...");
        const response = await axios.get(AUTH_URL, {
            params: { user, password }
        });
        
        const token = response.data.accessToken;
        
        sessionStorage.setItem('jwt_token', token);
        sessionStorage.setItem('estaAutenticado', 'true');
        
        console.log("Token guardado en SessionStorage.");
        return token;
    } catch (error) {
        console.error('Error de autenticación:', error);
        throw error; 
    }
}

// Función auxiliar para Logout
export const cerrarSesion = () => {
    sessionStorage.removeItem('jwt_token');
    sessionStorage.removeItem('estaAutenticado');
    window.location.reload(); 
}