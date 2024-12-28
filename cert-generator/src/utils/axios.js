import axios from 'axios'

const CERT_BASE_SERVER_URL = "http://127.0.0.1:8001"

// axios.defaults.withCredentials = true;

const Service = axios.create({
    baseURL: CERT_BASE_SERVER_URL,
    timeout: 5000
})

export default Service