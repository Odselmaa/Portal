var body_parser = require("body-parser");
var c = require('../controllers/chat-controller.js')

var h = require('./helper.js')
var urls = require('../url.js')
var i18n = require('../i18n/i18n.js')
var connection = require('./connection.js')
const m = require('../middleware.js')

var router = connection.router

router.use(body_parser.json())
router.use(body_parser.urlencoded({
  extended: false
}))

var chat_handler = function(req, res){
    var user_sender_id = req.session.access_token.user_id
    var user_sender = req.session[user_sender_id]
    var lang = req.params.language == undefined ? 'en' : req.params.language
    req.setLocale(lang)
    user_sender["_id"] = user_sender_id
    
    res.render('chat', {
        user_sender: user_sender,
        i18n:res
    })
}

router.get('/conversations', c.conversations_api);
router.get(["/chat", "/chat/:language(en|ru)"], chat_handler)
router.get("/messages", m.logMiddleware, c.msg_api)

module.exports = router;