const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/cert-generator', {
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: true
})

const Cert = mongoose.model('Cert', new mongoose.Schema({
    name: { type: String },
    issuer: { type: String }
}))

function CertCreate(certReq) {
    return Cert.create(certReq)
}

function CertView() {

}

function CertDelete() {

}

module.exports = {
    CertCreate,
    CertView,
    CertDelete
}