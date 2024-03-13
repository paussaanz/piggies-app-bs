import { createHttp } from "./BaseService";

const http = createHttp(false);

export const register = (data) => {
  return http.post('/register', data)
}

export const editProfileService = (id, data) => {
  return http.post(`/edit/${id}`, data)
}

export const login = ({ username, password }) => { 
 return http.post("/login", { username, password })
}
