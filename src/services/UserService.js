import { createHttp } from "./BaseService";

const authenticatedHttp = createHttp(true);
const unAuthenticatedHttp = createHttp();

export const getCurrentUser = () => authenticatedHttp.get("/users/me");

export const getUsers = () => unAuthenticatedHttp.get("/users");