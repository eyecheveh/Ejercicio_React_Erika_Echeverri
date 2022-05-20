import axios from "axios";

const api = axios.create({
    baseURL: 'https://6271d3f4c455a64564b8452c.mockapi.io/'
});

export default api;