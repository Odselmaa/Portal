var connection = require('./connection.js')
var urls = require('../url.js')
var h = require('./helper.js')
var i18n = require('../i18n/i18n.js')
const m = require('../middleware.js')

var router = connection.router
router.use(i18n.i18n.init)

router.get('/location/:language(en|ru|mn)',  [m.logMiddleware, m.verifyMiddleware], (req, res) => {
    var lang = req.params.language == undefined ? 'en' : req.params.language
    var current_user_id = req.session.access_token.user_id
    req.setLocale(lang)

    res.render('location', {
        lang: lang,
        current_user_id: current_user_id,
        i18n: res
    })

})

module.exports = router;