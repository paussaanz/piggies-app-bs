import { createHttp } from "./BaseService";

const authenticatedHttp = createHttp(true);
const unAuthenticatedHttp = createHttp();

export const getTasksByForm = (formId) => {
    return authenticatedHttp.get(`/tasks/form/${formId}`);
};


export const getTasksByService = (serviceId) => {
    return authenticatedHttp.get(`/tasks/service/${serviceId}`);
};

export const getAllTasks = () => {
    return authenticatedHttp.get(`/tasks`);
};
