var h = require('../routes/helper.js')
var urls = require('../url')
module.exports = {
    msg_api : function(req, res){
        var chat_id = req.query.chat_id
        fields = ['author', 'body', 'created_when']
        var options = {
            uri: `${urls.API_URL}chat/${chat_id}/message?fields=${fields.join(',')}`,
            method: 'GET',
            json: {
            },
            headers: {
                "Authorization": `Bearer ${req.session.access_token.token}`
            }
        };
        h.send_request(options, function (error, response, body) {
            if (!error &&  response.statusCode == 200) {
                res.json({
                    body: body.response,
                    statusCode:  response.statusCode
                })
            } else {
                res.json({
                    body: body.error,
                    statusCode:  response.statusCode
                })
            }
        })
    },
    conversations_api : function(req, res){
        var user_id = req.session.user_id
        var limit = req.query.limit==undefined ? 10 : req.query.limit
        var skip = req.query.skip==undefined ? 0 : req.query.skip
        var options = {
            uri: `${urls.API_URL}chat/user/${user_id}?limit=${limit}&skip=${skip}`,
            method: 'GET',
            json: {
            },
            headers: {
                "Authorization": `Bearer ${req.session.access_token.token}`
            }
        };
        h.send_request(options, function (error, response, body) {
            
            if (!error &&  body.statusCode == 200) {
                var chats = body.response
                for (var i=0;i<chats.length; i++){
                    u = chats[i].participants
                    if(u.profile!="" && u.profile!=undefined){
                        
                        img_path = h.uploadDir(u['_id'])
                        h.base64img(u.profile, `.${img_path}`)
                        u.profile = img_path
                    }
                }
                res.json(body);
            } else {
                res.json(body)
            }
        })
    }
}