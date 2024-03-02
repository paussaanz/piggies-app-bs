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

export const getAllForms = () => {
  return authenticatedHttp.get("/forms");
};

export const getUnacceptedForms = () => {
  return authenticatedHttp.get("/forms/unaccepted");
};

export const getAcceptedForms = () => {
  return authenticatedHttp.get("/forms/accepted");
};

export const acceptForm = (formId) => {
  return authenticatedHttp.post(`/forms/${formId}/accept`);
};

export const getServices = () => {
  return authenticatedHttp.get("/services");
};