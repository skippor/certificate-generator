const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const lowdbPath = "/tmp/database.json";

const db = low(new FileSync(lowdbPath));

db.defaults({ certs: [], reqs: [], roots: [] }).write();

function CertCreate(data) {
    return db.get('certs').push(data).write();
}

function CertView(id) {
    return db.get('certs').find({ 'id': id }).value();
}

function CertDelete(id) {
    return db.get('certs').remove({ 'id': id }).write();
}

module.exports = {
    CertCreate,
    CertView,
    CertDelete
}