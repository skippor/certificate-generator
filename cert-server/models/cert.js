// 使用lowdb数据库
const lowdb = require('../utils/lowdb')
const openssl = require('../utils/openssl')

async function Create(data) {
    return lowdb.CertView(data);
}

async function View(id) {
    const res = await openssl.runCommand("id")
    return res;
    //return lowdb.CertView(id);
}

async function Delete(id) {
    return lowdb.CertDelete(id);
}

module.exports = {
    Create,
    View,
    Delete
}