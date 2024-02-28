import { createHttp } from "./BaseService";

const authenticatedHttp = createHttp(true);
const unAuthenticatedHttp = createHttp();

export const formSubmit = ({
  name,
  email,
  phone,
  subject,
  message,
  service,
}) => {
  return unAuthenticatedHttp.post("/form", { name, email, phone, subject, message, service });
};

export const getServices = () => {
  return authenticatedHttp.get("/services");
};