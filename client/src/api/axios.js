import axios from "axios";

const instance =  axios.create({
    baseURL:'http://localhost:3000/api',
    withCredentials: true
})
export default instance;
// Aqui creamos la conexión del front con el back a través de axios 
