import axios from 'axios'

const CERT_BASE_SERVER_URL = "http://127.0.0.1:8001/api"

// axios.defaults.withCredentials = true;

const http = axios.create({
    baseURL: CERT_BASE_SERVER_URL,
    timeout: 5000
})

export default http