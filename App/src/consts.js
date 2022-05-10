import axios from 'axios';
export const API_URL = 'http://localhost:3002/';

export const axiosObj = axios.create({
    baseURL: API_URL,
});

export function getAxiosConfig() {
    const userStr = localStorage.getItem('user');
    if (userStr) {
        const user = JSON.parse(userStr);
        return {
            headers: { Authorization: `Bearer ${user.access_token}` }
          };        
    }
    return null;
}
