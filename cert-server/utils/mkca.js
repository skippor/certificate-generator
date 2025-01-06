const forge = require('node-forge')
const fs = require('fs')

// 创建一份随机钥匙对
const keys = forge.pki.rsa.generateKeyPair(2048);
// 创建证书
const cert = forge.pki.createCertificate();
// 使用公钥
cert.publicKey = keys.publicKey;
// 序列号（？
cert.serialNumber = String(Date.now());
// 设置有效日期
cert.validity.notBefore = new Date();
cert.validity.notBefore.setFullYear(cert.validity.notBefore.getFullYear() - 5);
cert.validity.notAfter = new Date();
cert.validity.notAfter.setFullYear(cert.validity.notAfter.getFullYear() + 20);
// 属性设置
const attrs = [
  { name: "commonName", value: "My Certificate Authority" },
  { name: "countryName", value: "CN" },
  { shortName: "ST", value: "Zhejiang" },
  { name: "localityName", value: "Shaoxing" },
  { name: "organizationName", value: "Myself" },
  { shortName: "OU", value: "https://blog.swwind.me" },
];
// 设置 subject
cert.setSubject(attrs);
// 设置颁发者
cert.setIssuer(attrs);
// 设置 Extensions
// 这里不用改
cert.setExtensions([
  {
    name: "basicConstraints",
    critical: true,
    cA: true,
  },
  {
    name: "keyUsage",
    critical: true,
    keyCertSign: true,
  },
  {
    name: "subjectKeyIdentifier",
  },
]);

// 用自己的私钥给 CA 根证书签名
cert.sign(keys.privateKey, forge.md.sha256.create());

// 公钥 ca.crt
console.log(forge.pki.certificateToPem(cert));
// 私钥 ca.key.pem
console.log(forge.pki.privateKeyToPem(keys.privateKey));

const certificate = forge.pki.certificateToPem(cert)
const privateKey = forge.pki.privateKeyToPem(keys.privateKey)

fs.writeFileSync('ca.key.pem', privateKey)
fs.writeFileSync('ca.crt', certificate)
