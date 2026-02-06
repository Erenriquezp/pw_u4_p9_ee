//AuthClient.js
import axios from 'axios';

const AUTH_URL = 'http://localhost:8082/auth/token'; 

export const obtenerToken = async (user, password) => {
    try {
        console.log("Intentando autenticar...");
        const response = await axios.get(AUTH_URL, {
            params: {
                user,
                password
            }
        });
        
        const token = response.data.accessToken;
        
        sessionStorage.setItem('jwt_token', token);
        localStorage.setItem('estaAutenticado', 'true');
        
        console.log("Token obtenido y guardado con éxito.");
        return token;
    } catch (error) {
        console.error('Error fatal en autenticación:', error);
        throw error;
    }
}