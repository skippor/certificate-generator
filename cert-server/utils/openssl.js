const { exec } = require('child_process');
const util = require('util');

const execPromise = util.promisify(exec);

async function runCommand(cmd) {
    try {
        const { stdout, stderr } = await execPromise(cmd, { timeout: 10000 });
        return { "result": stdout, "error": stderr }
    } catch (error) {
        return { "result": "", "error": error }
    }
}

module.exports = {
    runCommand
}

/*
openssl 证书命令：
# Generate CA private key
$ openssl genrsa -out ca.key 2048
# Generate CSR
$ openssl req -new -key ca.key -out ca.csr
# Generate Self Signed certificate（CA 根证书）
$ openssl x509 -req -days 365 -in ca.csr -signkey ca.key -out ca.crt

# private key
$ openssl genrsa -des3 -out server.key 1024
# generate csr
$ openssl req -new -key server.key -out server.csr
# generate certificate
$ openssl ca -in server.csr -out server.crt -cert ca.crt -keyfile ca.key


生成CA证书
生成CA私钥 ca.pri
openssl genrsa -out ca.pri 2048
生成CA公钥
openssl rsa -in ca.pri -pubout -out ca.pub
生成签名请求文件ca. csr
openssl req -new -key ca.pri -out  ca.csr -subj "/C=US/ST=New York/L=Brooklyn/O=Example Brooklyn Company/CN=examplebrooklyn.com"
生成自签名证书
openssl x509  -req -signkey ca.pri -days 365 -in ca.csr -out ca.crt

生成server证书
生成server私钥 server.pri
openssl genrsa -out server.pri 2048
生成server公钥
openssl rsa -in server.pri -pubout -out server.pub
生成签名请求文件server. csr
openssl req -new -key server.pri -out  server.csr -subj "/C=US/ST=New York/L=Brooklyn/O=Example Brooklyn Company/CN=localhost"
CA签名
openssl x509 -req -CA ca.crt -CAcreateserial -CAkey ca.pri  -in server.csr -out server.crt

生成client证书
生成server私钥 client.pri
openssl genrsa -out client.pri 2048
生成client公钥
openssl rsa -in client.pri -pubout -out client.pub
生成签名请求文件client. csr
openssl req -new -key client.pri -out  client.csr -subj "/C=US/ST=New York/L=Brooklyn/O=Example Brooklyn Company/CN=localhost"
CA签名
openssl x509 -req -CA ca.crt -CAcreateserial -CAkey ca.pri  -in client.csr -out client.crt
*/






