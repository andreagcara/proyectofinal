import axios from "./axios.js";

export const registerRequest = (user) => axios.post(`/register`, user);

export const loginRequest = ( user) => axios.post(`/login`, user);

export const verifyTokenRequest = () => axios.get(`/verify`);

// Aquí encontramos las conexiones de axios que nos permiten hacer peticiones o llamadas a un http
// Aqui encontramos la de registro, login y la de verificación del token para que nos guarde los datos