var request = require('request');
var moment = require('moment');
var url = require('../url.js')

var sum_time = 0
let API_URL = url.API_URL
var options = {
    uri: API_URL + '/user?&fields=firstname,lastname,blocked,department',
    headers: {
        "Authorization": "Bearer dnclg0YfJuN0Zw64k04JAIsRef1hORIR9gvr7cesUBkh7AA6ZKg5KhdyN04vurGF"
    }
}

function makeRequest(options) {
    var promise = new Promise((resolve, reject)=>{
        var startDate = moment();
        request(options, function (error, response, body) {
            var endDate = moment();
            diff = endDate.diff(startDate) / 1000
            sum_time += diff
            console.log('Request took: ' + diff + " " + response);
            resolve(diff)
        });
    })
    return promise
}

function test_100(){
    var promises = []
    for (var i = 0; i < 100; i++) {
        promises.push(makeRequest(options));
    }
    Promise.all(promises).then(function(values) {
        console.log(values);
    });
}

