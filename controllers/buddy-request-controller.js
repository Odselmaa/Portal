var h = require('../routes/helper.js')
var urls = require('../url')

module.exports = {
    buddies_api: function (req, res) {

        var options = {
            uri: `${urls.API_URL}buddy`,
            method: 'GET',
            json: {},
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
    
    buddy_post_api: function (req, res) {
        var options = {
            uri: `${urls.API_URL}buddy`,
            method: 'POST',
            json: req.body,
            headers: {
                "Authorization": `Bearer ${req.session.access_token.token}`
            }
        };

        h.send_request(options, function (error, response, body, req) {
            if (!error && body.statusCode == 201) {
                res.json(body)
            } else {
                res.json(body)
            }
        })
    }

}