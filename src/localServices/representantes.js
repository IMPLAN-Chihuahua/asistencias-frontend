import { localApi } from "./localApi";

const getRepresentantesThatCheckedIn = async () => {
    try {
        const response = await localApi.get('/representantes?checkedIn&perPage=50');
        return response.data;
    } catch (err) {
        Promise.reject(err);
    }
};

const joinRepresentante = async (id) => {
    try {
        const response = await localApi.patch(`/representantes/${id}/join`);
    } catch (err) {
        Promise.reject(err);
    }
};

const kickoutRepresentante = async (id) => {
    try {
        const response = await localApi.patch(`/representantes/${id}/kickout`);
    } catch (err) {
        Promise.reject(err);
    }
};

const checkInRepresentante = async (id) => {
    try {
        const response = await localApi.patch(`/representantes/${id}/checkin`);
    } catch (err) {
        Promise.reject(err);
    }
}

export {
    getRepresentantesThatCheckedIn,
    joinRepresentante,
    kickoutRepresentante,
    checkInRepresentante,
}