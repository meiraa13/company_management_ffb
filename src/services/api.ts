import axios from "axios";

export const localApi = axios.create({
    baseURL:"http://localhost:3000",
    timeout:5000
})

export const cepApi = axios.create({
    baseURL:"https://viacep.com.br/ws",
    timeout:6000
})