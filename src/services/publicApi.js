import axios from 'axios';

const options = {
    baseURL: 'https://asistencias-backend.herokuapp.com/api',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
    timeout: 10000,
};

const publicApi = axios.create(options);


export { publicApi };
