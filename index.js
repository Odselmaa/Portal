const express = require("express")
const session = require("express-session")
const body_parser = require("body-parser")
const request = require('request');
const path = require('path')
const app = express()
// const http = require('http').Server(app)
const jwt = require('jsonwebtoken');
const passport = require('passport')
const promise = require('promise')
const MongoStore = require("connect-mongo")(session);
const morgan = require('morgan')

//imported routes
const user_routes = require('./routes/user-routes.js');
const department_routes = require('./routes/department-routes.js');
const chair_routes = require('./routes/chair-routes.js');
const gender_routes = require('./routes/gender-routes.js');
const country_routes = require('./routes/country-routes.js');
const location_routes = require('./routes/location-routes.js');
const report_routes = require('./routes/report-routes.js');
const lang_routes = require('./routes/lang-routes.js');
const news_routes = require('./routes/news-routes.js');
const chat_routes = require('./routes/chat-routes.js');
const review_routes = require('./routes/review-routes.js');
const u = require('./controllers/user-controller.js');

const i18n = require('./i18n/i18n.js')
const h = require("./routes/helper.js")
const urls = require('./url.js');
const cache = require('./routes/cache-provider.js')

var connectedUsers = {};

app.use('/', user_routes);
app.use('/', department_routes);
app.use('/', chair_routes);
app.use('/', gender_routes);
app.use('/', country_routes);
app.use('/', location_routes);
app.use('/', report_routes);
app.use('/', lang_routes);
app.use('/', news_routes);
app.use('/', chat_routes);
app.use('/', review_routes);

app.use(i18n.i18n.init);
app.use(express.static(__dirname))
app.use(body_parser.json())
app.use(session({
    secret: 'a4f8071f-c873-4447-8ee22d',
    name: 'nameOfCookie',
    store: new MongoStore({
        url: 'mongodb://admin_odko:WinniePooh@portalinternational-shard-00-00-3b6lw.mongodb.net:27017,portalinternational-shard-00-01-3b6lw.mongodb.net:27017,portalinternational-shard-00-02-3b6lw.mongodb.net:27017/Portal?ssl=true&replicaSet=PortalInternational-shard-0&authSource=admin',
        autoRemove: 'native',
        collection: 'session'
    }),
    proxy: true,
    resave: true,
    saveUninitialized: false
}));
app.use(body_parser.urlencoded({
    extended: false
}))




app.use(express.static(__dirname + '/public'));
app.use('/js', express.static(path.join(__dirname, 'public/js')));
app.use('/css', express.static(path.join(__dirname, 'public/css')));
app.use('/font', express.static(path.join(__dirname, 'public/font')));
app.use('/vendor', express.static(path.join(__dirname, 'public/vendor')));
app.use('/images', express.static(path.join(__dirname, 'public/images')));
app.use(morgan('combined'))

app.set('view engine', 'ejs');
app.set('views', __dirname + '/public/views');
app.engine('html', require('ejs').renderFile);

const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
    console.log('Express server listening on port', port)
});

const io = require('socket.io')(server)


cache.start(function (err) {
    if (err) console.error(err);
});

var index_handler = function (req, res) {
    var lang = req.params.language == undefined ? 'en' : req.params.language
    req.setLocale(lang);
    var current_user_id = req.session.user_id
    var user = req.session[current_user_id]
    var role = user.role['_id']
    res.render('index', {
        lang: lang,
        current_user_id: current_user_id,
        i18n: res,
        role: role
    })
}
var dashboard_handler = function (req, res) {
    var lang = req.params.language == undefined ? 'en' : req.params.language
    req.setLocale(lang);
    var current_user_id = req.session.user_id
    var user = req.session[current_user_id]
    var role = user.role['_id']
    if (role == 1) {
        res.render('dashboard', {
            lang: lang,
            current_user_id: current_user_id,
            i18n: res,
            role: role
        })
    } else
        res.render('error/404')
}
var login_handler = function (req, res) {
    var lang = req.params.language == undefined ? 'en' : req.params.language
    req.setLocale(lang)
    res.render('login', {
        i18n: res
    })
}
var register_handler = function (req, res) {
    res.render('register')
}
var login_post_handler = function (req, res) {
    var payload = jwt.sign(req.body, 'f*ckyou');
    var options = {
        uri: `${urls.API_URL}auth`,
        method: 'POST',
        json: {
            payload: payload
        },
        headers: {
            'Content-Type': 'application/json'
        }
    };
    h.send_request(options, function (error, response, body) {
        if (!error && body.statusCode == 200) {
            var access_token = body.response.access_token
            var user_id = body.response.user_id
            set_session(req.session, 'access_token', access_token)
            set_session(req.session, 'user_id', user_id)
            try {
                u.get_profile(access_token.token, user_id, (body) => {
                    console.log(body)
                    if (response.statusCode == 200) {
                        if (body.response.profile != "") {
                            img_path = h.uploadDir(user_id)
                            h.base64img(body.response.profile, `.${img_path}`)
                            body.response.profile = img_path
                        }
                        set_session(req.session, user_id, body.response)
                    }
                    res.json(body)
                })
            } catch (error) {
                res.status(500).json({response: error, statusCode:500})
            }
        } else {
            res.json(body)
        }
    })
}
var logout_handler = function (req, res) {


    io.emit('logged_out', {
        "user_id": req.session.user_id
    })
    delete connectedUsers[req.session.user_id];
    req.session.destroy(function (err) {
        // cannot access session here
    })
    req.session = null

    res.redirect('/login')

}
var register_post_handler = function (req, res) {
    var payload = req.body
    payload.role = 2
    var my_token = jwt.sign(payload, 'f*ckyou');
    var options = {
        uri: `${urls.API_URL}user`,
        method: 'POST',
        json: {
            payload: my_token
        },
    };
    h.send_request(options, function (error, response, body, req) {
        if (!error && response.statusCode == 201) {
            res.status(201).json({
                'success': 'Successfully registered, please login',
                'statusCode': 201
            })
        } else {
            var payload = response.body
            payload['statusCode'] = response.statusCode
            res.json(payload)
        }
    })
}
var msg_post_handler = function (req, res) {
    var session = req.session
    var user_sender = session.user_id
    var body = req.body

    var user_receiver = req.body.user_receiver
    var chat_title = session[user_sender].firstname
    // 
    var user = session[user_sender]
    var access_token = session.access_token.token
    body["user_sender"] = user_sender
    body["chat_title"] = user['firstname'] + " " + user['lastname']

    if (body.chat_id == undefined) {
        get_chat_id(user_sender, user_receiver, access_token, (chat_id) => {
            body["chat_id"] = chat_id["$oid"]
            loop_do(get_socket(user_receiver), (s_id) => {
                io.to(s_id).emit('message', body)
            })
            send_message(req.body.chat_id, user_sender, req.body.body, req.session.access_token.token)
            res.sendStatus(200)
        })
    } else {
        loop_do(get_socket(user_receiver), (s_id) => {
            io.to(s_id).emit('message', body)
        })
        send_message(req.body.chat_id, user_sender, req.body.body)
        res.sendStatus(200)
    }
}
var status = function (req, res) {
    var user_ids = req.query.user_ids
    var response = {}

    if (user_ids != undefined)
        for (var user_id of user_ids) {
            response[user_id] = user_id in connectedUsers
        }
    res.json(response)
}

function set_session(session, key, value) {
    session[key] = value;
    session.save()
}

function send_message(chat_id, user_sender, body, access_token) {
    var options = {
        uri: `${urls.API_URL}chat/${chat_id}/user/${user_sender}`,
        method: 'POST',
        json: {
            body: body,
            created_when: new Date().getTime()
        },
        headers: {
            "Authorization": `Bearer ${access_token}`
        }
    };

    h.send_request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {

        } else {

        }
    })
}

function get_chat_id(user1, user2, access_token, callback) {
    var options = {
        uri: `${urls.API_URL}chat/users/${user1}/${user2}`,
        method: 'GET',
        json: {},
        headers: {
            "Authorization": `Bearer ${access_token}`
        }
    };
    h.send_request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            callback(body.response['_id'])
        } else {
            callback(-1)
        }
    })
}

function loop_do(array, callback) {
    for (var i = 0; i < array.length; i++)
        callback(array[i])
}

function set_socket(user_id, socket_id) {
    if (user_id in connectedUsers) {
        connectedUsers[user_id].push(socket_id)
    } else {
        connectedUsers[user_id] = [socket_id]
    }
}

function get_socket(user_id) {
    return connectedUsers[user_id]
}

function delete_socket(user_id, socket_id) {
    if (user_id in connectedUsers)
        connectedUsers[user_id].remove(socket_id)
}
Array.prototype.remove = function () {
    var what, a = arguments,
        L = a.length,
        ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

function get_socket(user_receiver) {
    return user_receiver in connectedUsers ? connectedUsers[user_receiver] : []
}

function get_role(req) {
    var current_user_id = req.session.user_id
    var user = req.session[current_user_id]
    var role_id = user.role['_id']
    return role_id
}
app.get('/', h.logMiddleware, index_handler)
app.get('/status', status)
app.get(["/dashboard", '/dashboard/:language(en|ru)'], h.logMiddleware, dashboard_handler)
app.get(["/login", '/login/:language(en|ru)'], login_handler)
app.get(["/register", '/register/:language(en|ru)/'], register_handler)
app.post("/login", login_post_handler)
app.get("/logout", logout_handler)
app.get("/register", register_handler)
app.post("/register", register_post_handler)
app.post("/messages", h.logMiddleware, msg_post_handler)

io.on('connection', (socket) => {
    socket.on("login", function (data) {
        set_socket(data.user_sender, socket.id)
        console.log("user connected", data)
        io.emit('logged_in', {
            "user_id": data.user_sender
        })
        io.emit('ok', "hey");
    })
    socket.on("logout", function (data) {
        delete_socket(data.user_sender, socket.id)
    })
})

app.get("/test_token", (req, res) => {
    // async
    cache.instance().keys(function (err, mykeys) {
        if (!err) {

            // [ "all", "my", "keys", "foo", "bar" ]
        }
    });
    res.send(req.session)
})