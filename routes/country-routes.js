var connection = require('./connection.js')
var urls = require('../url.js')
var h = require('./helper.js')
var cache = require('./cache-provider.js')
var router = connection.router

router.get('/country/:language(en|ru)', h.logMiddleware, (request, res) => {
    var lang = request.params.language == undefined ? 'en' : request.params.language
    var country_key = `country_${lang}`
    try{
        value = cache.instance().get(country_key, true );
        res.json(value)
    } catch( err ){
        var options = {
            uri: `${urls.API_URL}country?lang=${lang}`,
            method: 'GET',
            json: {},
            headers:{
                "Authorization":`Bearer ${request.session.access_token.token}`
              }
        };
        h.send_request(options, function (error, response, body, req) {
            // console.log(response)
            if (!error && body.statusCode == 200) {
                cache.instance().set(country_key, body, cache.TTL );
                res.json(body)
            } else {
                res.json({body:"Error", statusCode:400})
            }
        })
    
    }
})

module.exports = router;
