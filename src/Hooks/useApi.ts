import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API
});

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
    },
    getVisitor: async (token: string, type: string, field: string, filter: string) => {
        //const response = await axios.get('/BSVisitors/GetVisitors/LOADVISITOR/name/' + filter, {headers: {"Authorization": `Bearer ${ token }`}});
        const response = await axios.get('/BSVisitors/GetVisitors/LOADVISITOR/' + field + '/' + filter, {headers: headers});
        return response.data;
    },
    getCompanies: async (token: string, type: string, field: string, filter: string) => {
        const response = await axios.get('/BSTables/GetTables/LOADCOMPANYSQL/' + field + '/' + filter, {headers: headers});
        return response.data;
    },
    getCompany: async (token: string, type: string, field: string, filter: string) =>  {
        const response = await axios.get('/BSTables/GetTables/LOADCOMPANY/name/' + filter, {headers: headers});
        return response.data;
    }
});