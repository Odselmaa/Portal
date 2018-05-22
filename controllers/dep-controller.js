var h = require('../routes/helper.js')

var urls = require('../url')
let cache = require('../routes/cache-provider.js')

module.exports = {
    spec_department_api : function (req, res) {
        var lang = req.params.lang == undefined ? 'en' : req.params.lang
        var dep_id = req.params.dep_id 
        fields = ['_id', 'name', 'code', 'link', 'description', 'chairs'].join(',')
        var options = {
            uri: `${urls.API_URL}department/${dep_id}?lang=${lang}&fields=${fields}`,
            method: 'GET',
            json: {
            },
            headers: {
                "Authorization": `Bearer ${req.session.access_token.token}`
            }
        };
    
        h.send_request(options, function (error, response, body, req) {
            if (!error && body.statusCode == 200) {
                res.json(body)
            } else {
                res.json(body)
            }
        })
    
    },
    departments_api : function (req, res) {
        lang = req.params.lang == undefined ? 'en' : req.params.lang
    
        var dep_key = `dep_${lang}`
        try {
            value = cache.instance().get(dep_key, true);
            
            res.json(value)
        } catch (err) {
            fields = ['_id', 'code', 'name', 'link'].join(',')
    
            var options = {
                uri: `${urls.API_URL}department?lang=${lang}&fields=${fields}`,
                method: 'GET',
                json: {
                },
                headers: {
                    "Authorization": `Bearer ${req.session.access_token.token}`
                }
            };
    
            h.send_request(options, function (error, response, body, req) {
                if (!error && body.statusCode == 200) {
                    cache.instance().set(dep_key, body, cache.TTL);
                    
                    res.json(body)
                } else {
                    res.json(body)
                }
            })
        }
    }
    
}