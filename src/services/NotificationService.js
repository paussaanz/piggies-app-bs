import { createHttp } from "./BaseService";

const authenticatedHttp = createHttp(true);

  export const getUserNotifications = (userId) => {
    return authenticatedHttp.get(`/notifications/${userId}`);
  }
  export const createUserNotifications = ( users, taskId, added ) => {
    return authenticatedHttp.post(`/notifications/create`, { users, taskId, added });
    
  }
  export const markAsRead = ( userId ) => {
    return authenticatedHttp.post(`/notifications/markAsRead/${userId}`);
    
  }
  