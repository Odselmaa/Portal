var connection = require('./connection.js')
var h = require('./helper.js')
var router = connection.router
var c = require('../controllers/buddy-request-controller.js')
const m = require('../middleware.js')

var buddy_get_handler = function(req, res){
    var lang = req.params.lang == undefined ? 'en' : req.params.lang
    var current_user_id = req.session.access_token.user_id
    var user = req.session[current_user_id]
    var role = user.role['_id']
    var chair_id = req.params.chair_id

    req.setLocale(lang)

    res.render('buddy-request', {
        lang: lang,
        current_user_id: current_user_id,
        chair_id: chair_id,
        i18n: res,
        role: role
    })
}

var buddy_create_handler = function(req, res){
    var lang = req.params.lang == undefined ? 'en' : req.params.lang
    var current_user_id = req.session.access_token.user_id
    var user = req.session[current_user_id]
    var role = user.role['_id']
    var chair_id = req.params.chair_id

    req.setLocale(lang)

    res.render('buddy-create', {
        lang: lang,
        current_user_id: current_user_id,
        chair_id: chair_id,
        i18n: res,
        role: role
    })

}

router.get('/buddy/:lang(en|ru|mn)', [m.logMiddleware, m.verifyMiddleware],  buddy_get_handler)
router.get('/buddy/create/:lang(en|ru|mn)',[m.logMiddleware, m.verifyMiddleware],  buddy_create_handler)
router.get('/api/buddy', m.logMiddleware, c.buddies_api)
// router.get(['/chair/:chair_id/:lang(en|ru|mn)', '/chair/:chair_id'], m.logMiddleware,  chair_handler)

module.exports = router;
