import { createHttp } from "./BaseService";

const authenticatedHttp = createHttp(true);
const unAuthenticatedHttp = createHttp();

export const getAllTasks = () => {
    return authenticatedHttp.get("/tasks");
  };

  export const updateTaskStatus = (taskId) => {
    return authenticatedHttp.post(`/tasks/${taskId}/status`);
  };