import { publicApi } from "./publicApi";

const getRepresentantesThatCheckedIn = async () => {
    try {
        const response = await publicApi.get('/representantes?checkedIn&perPage=50');
        return response.data;
    } catch (err) {
        Promise.reject(err);
    }
};

const joinRepresentante = async (id) => {
    try {
        const response = await publicApi.patch(`/representantes/${id}/join`);
    } catch (err) {
        Promise.reject(err);
    }
};

export {
    getRepresentantesThatCheckedIn,
    joinRepresentante
}