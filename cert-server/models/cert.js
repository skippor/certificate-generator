// 使用lowdb数据库
const lowdb = require('../dbutils/lowdb')

module.exports = {
    Create: lowdb.CertCreateByLowdb,
    View: lowdb.CertViewByLowdb,
    Delete: lowdb.CertDeleteByLowdb
}