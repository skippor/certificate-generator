import axios from 'axios'

const BASE_URL = "http://127.0.0.1:3001"

axios.defaults.withCredentials = true;

const Service = axios.create({
    baseURL: BASE_URL,
    timeout: 5000
})

export default Service