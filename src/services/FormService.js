import { createHttp } from "./BaseService";

const http = createHttp(false);

export const formSubmit = ({ name, email, phone, subject, message, service }) => { 
  return http.post("/form", { name, email, phone, subject, message, service })
 }
 