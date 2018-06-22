var body_parser = require("body-parser")
var connection = require('./connection.js')
var i18n = require('../i18n/i18n.js')
const m = require('../middleware.js')

var router = connection.router

router.use(body_parser.json())
router.use(body_parser.urlencoded({
    extended: false
}))
router.use(i18n.i18n.init)

router.get(['/tips/:language(en|ru)'], (req, res) => {
    var current_user_id = req.session.access_token.user_id
    var lang = req.params.language == undefined ? 'en' : req.params.language
    req.setLocale(lang)
    res.render('tips', {
        lang: lang,
        current_user_id: current_user_id,
        i18n: res,
        role: req.session[current_user_id].role['_id']
    })
})

router.get(['/tips/:type(pre|after|visa|general|migration|student)/:language(en|ru)'], (req, res) => {
    var type = req.params.type
    var lang = req.params.language == undefined ? 'en' : req.params.language
    req.setLocale(lang)
    res.json(req.__(type))
})
//exporting our routers
module.exports = router;