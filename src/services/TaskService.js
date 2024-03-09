import { createHttp } from "./BaseService";

const authenticatedHttp = createHttp(true);
const unAuthenticatedHttp = createHttp();

  export const updateTaskStatus = (taskId) => {
    return authenticatedHttp.post(`/tasks/${taskId}/status`);
  };

  export const addUserToTask = (userId, taskId) => {
    return authenticatedHttp.post(`/addUserToTask/${userId}/${taskId}`);
  }

  export const editTaskService = (taskId, body) => {
    return authenticatedHttp.put(`/tasks/${taskId}`, body);
  }
  