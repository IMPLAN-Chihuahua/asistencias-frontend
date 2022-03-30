import { localApi } from "./localApi";

const getDependencias = async () => {
    try {
        const response = await localApi.get('/dependencias?perPage=50');
        return response.data;
    } catch (err) {
        Promise.reject(err);
    }
};

const getRepresentantesFromDependencia = async (id) => {
    try {
        const response = await localApi.get(`/dependencias/${id}/representantes`);
        return response.data;
    } catch (err) {
        Promise.reject(err);
    }
}

export {
    getDependencias,
    getRepresentantesFromDependencia,
};