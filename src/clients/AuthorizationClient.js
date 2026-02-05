//AuthClient.js
import axios from 'axios';

const AUTH_URL = 'http://localhost:8082/auth/token'; 
const USER = 'admin';
const PASS = '1234';

export const obtenerToken = async () => {
    try {
        console.log("Intentando autenticar...");
        const response = await axios.get(AUTH_URL, {
            params: {
                user: USER,
                password: PASS
            }
        });
        
        const token = response.data.accessToken;
        
        sessionStorage.setItem('jwt_token', token);
        
        console.log("Token obtenido y guardado con éxito.");
        return token;
    } catch (error) {
        console.error('Error fatal en autenticación:', error);
        throw error;
    }
}