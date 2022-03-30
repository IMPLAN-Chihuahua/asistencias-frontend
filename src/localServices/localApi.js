import axios from 'axios';

const options = {
    baseURL: 'http://localhost:8080/api',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
    timeout: 10000,
};

const localApi = axios.create(options);

export { localApi, };
