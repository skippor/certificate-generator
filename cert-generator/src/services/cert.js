import axios from './utils/axios'
import api from '../api'

function CertCreate(data) {
    return axios.post('/api/cert/create', data)
}

function CertView(id) {
    return axios({
        url: api.cert.ApiCertView,
        method: 'get'
    })
}

function CertDelete() {
    return axios({
        url: api.cert.ApiCertDelete,
        method: 'post',
        data: {}
    })
}

export default {
    CertCreate,
    CertView,
    CertDelete
}