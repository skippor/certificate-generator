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

function CertCreateByMongoose(certReq) {
    return Cert.create(certReq)
}

function CertViewByMongoose() {

}

function CertDeleteByMongoose() {

}

module.exports = {
    CertCreateByMongoose,
    CertViewByMongoose,
    CertDeleteByMongoose
}