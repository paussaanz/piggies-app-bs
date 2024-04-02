import { createHttp } from "./BaseService";

const authenticatedHttp = createHttp(true);

export const getMessageHistory = (room) => {
    return authenticatedHttp.get(`/messages/${room}`);
};

export const uploadImage = (data) => {
    return authenticatedHttp.post(`/uploadImage`, data);
};

