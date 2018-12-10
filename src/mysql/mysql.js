var mysql = require('mysql')
var opt = {
    user: 'root',
    password: 'root',
    database: '12-10'
}
var pool = mysql.createPool(opt);

function query(sql, arr, ck) {
    pool.getConnection(function(err, con) {
        if (err) {
            return ck && ck(err)
        }
        con.query(sql, arr, function(err, result) {
            if (err) {
                return ck && ck(err)
            }
            ck && ck(result)
            con.release()
        })
    })

}
module.exports = query