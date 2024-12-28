// 使用lowdb数据库
const lowdb = require('../utils/lowdb')

module.exports = {
    Create: lowdb.CertCreate,
    View: lowdb.CertView,
    Delete: lowdb.CertDelete
}