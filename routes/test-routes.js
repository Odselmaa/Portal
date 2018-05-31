var connection = require('./connection.js')
var router = connection.router
var request = require('request');
var moment = require('moment');
var url = require('../url.js')
var sum_time = 0

function makeRequest(options) {
    var promise = new Promise((resolve, reject)=>{
        var startDate = moment();
        request(options, function (error, response, body) {
            var endDate = moment();
            diff = endDate.diff(startDate) / 1000
            sum_time += diff
            console.log('Request took: ' + diff + " " + response);
            resolve({start: startDate, end: endDate})
        });
    })
    return promise
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

    var promises = []
    for (var i = 0; i < number; i++) {
        promises.push(makeRequest(options));
    }
    Promise.all(promises).then(function(values) {
        end = values[values.length-1].end
        start = values[0].start
        console.log((end - start)/number)
    });

    res.send("OK")
}
const arrSum = arr => arr.reduce((a,b) => a + b, 0)

router.get('/test',test_handler)

module.exports = router;
