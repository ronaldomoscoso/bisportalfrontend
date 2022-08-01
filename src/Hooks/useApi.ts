import axios from 'axios';
import { useState } from 'react';

/*const api = axios.create({
    baseURL: process.env.REACT_APP_API
});*/

const headers = {
    'Content-Type': 'application/json'
}

export const useApi = () => ({
    validateToken: async (token: string) => {
        const response = await axios.post('/validate', { token });
        return response.data;
    },
    signin: async (username: string, password: string) => {
        const response = await axios.post('/Authenticate/Login', {username, password}, {headers: headers});
        return response.data;
    },
    logout: async () => {
        const response = await axios.post('/Home');
        return response.data;
    }
});
