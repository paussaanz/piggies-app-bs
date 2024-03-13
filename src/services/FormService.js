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
  return unAuthenticatedHttp.post("/forms", { name, email, phone, subject, message, service });
};

export const getAllForms = (accepted) => {
  return accepted ? authenticatedHttp.get(`/forms?accepted=true`) :  authenticatedHttp.get("/forms");
};

export const contactClientService = (id, message) => {
  return authenticatedHttp.post(`/forms/contact/${id}`, message);
};

export const acceptForm = (formId) => {
  return authenticatedHttp.post(`/forms/${formId}/accept`);
};

export const getServices = () => {
  return authenticatedHttp.get("/services");
};