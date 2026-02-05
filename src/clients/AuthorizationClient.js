import axios from 'axios';

const BASE_URL = 'http://localhost:8082';
const USER = 'admin';
const PASS = '1234';

export const obtenerToken = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/auth/token`, {
            params: {
                user: USER,
                password: PASS
            }
        });
        return response.data.accessToken;
    } catch (error) {
        console.error('Error al obtener token:', error.message);
        throw error;
    }
}