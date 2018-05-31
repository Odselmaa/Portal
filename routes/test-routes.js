var connection = require('./connection.js')
var router = connection.router
var request = require('request');
var moment = require('moment');
var url = require('../url.js')
var sum_time = 0

function makeRequest(options) {
    var startDate = moment();
    request(options, function (error, response, body) {
        var endDate = moment();
        diff = endDate.diff(startDate) / 1000
        sum_time += diff
        console.log('Request took: ' + diff + " " + response);
    });
}

var test_handler = function(req, res){
    var number = parseInt(req.query.limit!==undefined?req.query.limit:10)
    console.log(number)
    var options = {
        uri: url.API_URL + 'user?&fields=firstname,lastname,blocked,department',
        headers: {
            "Authorization": "Bearer " + req.session.access_token.token
        }
    }
    for (var i = 0; i < number; i++) {
        makeRequest(options);
    }

    res.send("OK")
}

router.get('/test',test_handler)

module.exports = router;
