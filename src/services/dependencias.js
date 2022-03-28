import { publicApi } from "./publicApi";

const getDependencias = async () => {
    try {
        const response = await publicApi.get('/dependencias?perPage=50');
        return response.data;
    } catch (err) {
        Promise.reject(err);
    }
};

const getRepresentantesFromDependencia = async (id) => {
    try {
        const response = await publicApi.get(`/dependencias/${id}/representantes`);
        return response.data;
    } catch (err) {
        Promise.reject(err);
    }
}

export {
    getDependencias,
    getRepresentantesFromDependencia,
};