var connection = require('./connection.js')
var urls = require('../url.js')
var h = require('./helper.js')
var cache = require('./cache-provider.js')
var router = connection.router

router.get('/gender/:language(en|ru)', h.logMiddleware, (req, res) => {
    var gender_key = `gender_${lang}`
    try {
        value = cache.instance().get(gender_key, true);
        
        res.json(value)
    } catch (err) {
        var lang = req.params.language == undefined ? 'en' : req.params.language

        var options = {
            uri: `${urls.API_URL}gender?lang=${lang}`,
            method: 'GET',
            json: {    },
            headers: {
                "Authorization": `Bearer ${req.session.access_token.token}`
            }
        };

        h.send_request(options, function (error, response, body, req) {
            if (!error && body.statusCode == 200) {
                cache.instance().set(gender_key, body, cache.TTL );
                

                res.json(body)
            } else {
                res.json(body)
            }
        })

    }
})

module.exports = router;