var express = require('express');
var router = express.Router();
var query = require('../mysql/mysql')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/api/get/list', function(req, res, next) {
    var url = `select *from zhoukao limit ${req.query.page},${req.query.page_size}`
    query(url, function(err, result) {
        if (err) {
            return err
        }
        res.send(result)

    })

})
module.exports = router;