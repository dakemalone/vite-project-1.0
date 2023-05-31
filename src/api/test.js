import axios from "./request";

export const test1 = () => axios.post("http://172.20.10.2:8080/sample")

export const linelist = () => axios.get('http://localhost:8080/test')