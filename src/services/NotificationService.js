import { createHttp } from "./BaseService";

const authenticatedHttp = createHttp(true);

  export const getUserNotifications = (userId) => {
    return authenticatedHttp.get(`/notifications/${userId}`);
  }
  export const createUserNotifications = ({ userId, taskId }) => {
    return authenticatedHttp.post(`/notifications/create`, { userId, taskId });
  }
  