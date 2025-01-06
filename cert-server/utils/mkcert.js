const forge = require('node-forge')
const fs = require('fs')

// 读取根证书 caCert 和 caKey
const caCertPem = fs.readFileSync("ca.crt", "utf8");
const caKeyPem = fs.readFileSync("ca.key.pem", "utf8");
const caCert = forge.pki.certificateFromPem(caCertPem);
const caKey = forge.pki.privateKeyFromPem(caKeyPem);

// 生成随机秘钥对
const keys = forge.pki.rsa.generateKeyPair(2048);
// 生成证书
const cert = forge.pki.createCertificate();
cert.publicKey = keys.publicKey;
cert.serialNumber = String(Date.now());
cert.validity.notBefore = new Date();
cert.validity.notBefore.setFullYear(cert.validity.notBefore.getFullYear() - 1);
cert.validity.notAfter = new Date();
cert.validity.notAfter.setFullYear(cert.validity.notAfter.getFullYear() + 10);

const attrs = [
  { name: "commonName", value: "localhost" },
  { name: "countryName", value: "CN" },
  { shortName: "ST", value: "Zhejiang" },
  { name: "localityName", value: "Shaoxing" },
  { name: "organizationName", value: "Myself" },
  { shortName: "OU", value: "https://blog.swwind.me" },
];

// 颁发者设置为根证书
cert.setSubject(attrs);
cert.setIssuer(caCert.subject.attributes);

// 证书设置
cert.setExtensions([
  {
    name: "basicConstraints",
    critical: true,
    cA: false,
  },
  {
    name: "keyUsage",
    keyCertSign: true,
    digitalSignature: true,
    nonRepudiation: true,
    keyEncipherment: true,
    dataEncipherment: true,
  },
  {
    name: "extKeyUsage",
    serverAuth: true,
    clientAuth: true,
    codeSigning: true,
    emailProtection: true,
    timeStamping: true,
  },
  {
    name: "nsCertType",
    client: true,
    server: true,
    email: true,
    objsign: true,
    sslCA: true,
    emailCA: true,
    objCA: true,
  },
  {
    name: "subjectAltName",
    // 这里填多个域名或者 ip
    altNames: [
      {
        type: 1, // email
        value: 'zhangsan@example.com', 
      },
      {
        type: 2, // DNS
        value: "localhost",
      },
      {
        type: 7, // ipv4
        ip: "127.0.0.1",
      },
      {
        type: 7, // ipv6
        ip: "[::1]",
      },
    ],
  },
  {
    name: "subjectKeyIdentifier",
  },
]);
// 使用根证书签名
cert.sign(caKey, forge.md.sha256.create());

// 公钥 localhost.crt
console.log(forge.pki.certificateToPem(cert));
// 私钥 localhost.key.pem
console.log(forge.pki.privateKeyToPem(keys.privateKey));


const certificate = forge.pki.certificateToPem(cert)
const privateKey = forge.pki.privateKeyToPem(keys.privateKey)

fs.writeFileSync('localhost.key', privateKey)
fs.writeFileSync('localhost.crt', certificate)
