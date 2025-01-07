const pem = require('pem');

pem.config({
    pathOpenSSL: process.env.OPENSSL_BIN || 'openssl'
})

pem.createPrivateKey(function (err, key) {
    if (err) {
        throw err
    }
    console.log({ key: key.key})
})

pem.createCertificate({ days: 1, selfSigned: true }, function (err, keys) {
    if (err) {
      throw err
    }
    console.log({ key: keys.clientKey, cert: keys.certificate })
})

//pem.createEcparam("SM2", function (err, data) {
pem.createEcparam(function (err, data) {
    if (err) {
        throw err
    }
    console.log({ ecparam: data.ecparam})
})
