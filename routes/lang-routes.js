var connection = require('./connection.js')
var urls = require('../url.js')
var h = require('./helper.js')
var cache = require('./cache-provider.js')
var router = connection.router

router.get(['/languages/:language(en|ru)'], h.logMiddleware, (req, res) => {
    var lang = req.params.language == undefined ? 'en' : req.params.language
    var lang_key = `lang_${lang}`
    try {
        value = cache.instance().get(lang_key, true);
        
        res.json(value)
    } catch (err) {
        var options = {
            uri: `${urls.API_URL}languages`,
            method: 'GET',
            json: {
                lang: lang
            },
            headers: {
                "Authorization": `Bearer ${req.session.access_token.token}`
            }
        };

        h.send_request(options, function (error, response, body) {
            if (!error && body.statusCode == 200) {
                cache.instance().set(lang_key, body, cache.TTL );
                
                res.json(body)
            } else {
                res.json(body)
            }
        })
    }
});

module.exports = router;