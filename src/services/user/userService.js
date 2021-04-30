import api from "../index";

export const login = payload => api.post("/login", payload)
