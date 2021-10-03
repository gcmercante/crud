import axios from 'axios';

const baseUrl = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
})

class api {
    async get(route) {
        const result = await baseUrl.get(route); 
        return result.data;
    }

    async post(route, data) {
        await baseUrl.post(route, data);
    }

    async delete(route) {
        await baseUrl.delete(route);
    }

    async put(route, data) {
        await baseUrl.put(route, data);
    }
}

export default new api();