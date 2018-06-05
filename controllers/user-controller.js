let h = require('../routes/helper.js')
let urls = require('../url')
let fs = require('fs');
let sharp = require('sharp')
let moment = require('moment')

let v = require('./verification-controller.js')
let formidable = require('formidable');
let path = require('path')
let cache = require('../routes/cache-provider.js')
let querystring = require('querystring');
const request = require('request');
const rp = require('request-promise')
var user_fields = ["firstname", "lastname", "profile", "friends","gender", "role", "socials", "email", "languages", "department", "chair", "news_tags", "country", 'bio']
var update_user_fields = ["firstname", "lastname", "gender", "role", "socials", "email", "languages", "department", "chair", "news_tags", "country", 'bio']

function update_user(payload, fields, request, token, callback) {
    var user_id = payload.user_id
    var options = {
        uri: `${urls.API_URL}user/${user_id}`,
        method: 'PUT',
        json: {payload: payload, fields: fields, lang: 'en'},
        headers: {
            "Authorization": `Bearer ${token}`
        }
    };

    h.send_request(options, function (error, response, body, req) {
        if (!error && body.statusCode == 200) {
            if ('profile' in payload) {
                img_path = h.uploadDir(user_id)
                h.base64img(payload.profile, `..${img_path}`)
                payload.profile = img_path
            }
            console.log(body)
            for (const [key, value] of Object.entries(body['updated_user'])) {
                if(key!='profile')
                    request.session[user_id][key] = value
            }
            request.session.save()
        }
        callback(response)
    })
}

function set_session(session, key, value) {
    session[key] = value;
    session.save()
}

function resize(user) {
    var promise = new Promise(function (resolve, reject) {
        img_path = path.join(__dirname, `../${h.uploadDir(user.user_id)}`)
        old_path = user.profile
        sharp(old_path)
            .resize(200, 200)
            .toFile(img_path, function (err) {
                if (err != undefined)
                    console.log("Resizing image error: ", err)
            });
        user.profile = img_path
        user.old_path = old_path
        resolve(user);
    });
    return promise;
}

function convert(user) {
    var promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            var bitmap = fs.readFileSync(user.profile);
            user.profile = new Buffer(bitmap).toString('base64')
            resolve(user);
        }, 500);
    });
    return promise;
}

function delete_old(user) {
    var promise = new Promise(function (resolve, reject) {
        fs.unlink(user.old_path, (err) => {
            if (err != undefined) {
                console.log("Deleting old image is giving error", err);
                reject(user)
            } else {
                delete user.old_path
                resolve(user);
            }
        })
    });
    return promise;
}

function put2session(session, key1, key2, value) {
    var my_array = session[key1][key2];
    my_array.push(value)
    session[key1][key2] = my_array;
    session.save()
}

function pop_session(session, key1, key2, value) {
    var my_array = session[key1][key2];
    // my_array.slice(my_array.indexOf(value), 1)
    remove(my_array, value)
    session[key1][key2] = my_array;
    session.save()
}

function remove(array, element) {
    const index = array.indexOf(element);
    if (index !== -1) {
        array.splice(index, 1);
    }
}


module.exports = {
    user_api: function (req, res) {
        var user_id = req.params.user_id
        var lang = req.params.language == undefined ? 'en' : req.params.language

        if (user_id == req.session.access_token.user_id) {
            response = req.session[user_id]
            delete response['access_token']
            res.json({
                response: response,
                statusCode: 200
            })
        } else {
            if (user_id != undefined) {
                current_user = req.session[req.session.access_token.user_id]
                if (current_user.role._id == 1) 
                    var fields = user_fields.concat(["blocked"])
                else
                    var fields = user_fields
                var options = {
                    uri: `${urls.API_URL}user/${user_id}?lang=${lang}&fields=${fields.join(',')}`,
                    method: 'GET',
                    json: {},
                    headers: {
                        "Authorization": `Bearer ${req.session.access_token.token}`
                    },
                };
                var startDate = moment();


                request(options, function (error, response, body) {
                    // console.log(body, error, response)
                    if (!error && body.statusCode == 200) {
                        var endDate = moment();
                        console.log('Request took: ' + endDate.diff(startDate)/1000 + response);
                        if (body.response.profile != "") {
                            user_id = body.response['_id']
                            img_path = h.uploadDir(user_id)
                            h.base64img(body.response.profile, `.${img_path}`)
                            body.response.profile = img_path
                        }
                        res.json(body)
                    } else {
                        res.json({
                            response: "Something went wrong",
                            statusCode: "400"
                        })
                    }
                })
            } else {
                res.json({
                    statusCode: 404,
                    response: "Not found yass"
                })
            }
        }
    },

    filter_users_api: function (req, res) {
        var query = req.query.q
        var lang = req.params.language == undefined ? 'en' : req.params.language
        var limit = req.query.l == undefined ? 10 : parseInt(req.query.l)
        var skip = req.query.s == undefined ? 0 : parseInt(req.query.s)

        var department = req.query.d
        var chair = req.query.c
        var ulang = req.query.ulang
        var gender = req.query.g
        var country = req.query.cn

        var fields = ['firstname', 'lastname', 'profile', 'department']
        var keys = {}
        if (req.session[req.session.access_token.user_id].role['_id'] == 1) fields.push('blocked')
        if (query != undefined) keys.search_key = query;
        if (department != undefined) keys.department = department;
        if (ulang != undefined) keys.ulang = ulang;
        if (chair != undefined) keys.chair = chair;
        if (gender != undefined) keys.gender = gender;
        if (country != undefined) keys.country = country;

        query = querystring.stringify(keys);

        var options = {
            uri: `${urls.API_URL}user?fields=${fields.join(',')}&lang=${lang}&limit=${limit}&skip=${skip}&${query}`,
            method: 'GET',
            json: {},
            headers: {
                "Authorization": `Bearer ${req.session.access_token.token}`
            }
        };
        request(options, function (error, response, body, req) {
            res.json(body);
        })
    },

    last_user_api: function (req, res) {
        var lang = req.params.language == undefined || req.params.language == '' ? 'en' : req.params.language
        var lastu_key = `lastu_${lang}`
        try {
            value = cache.instance().get(lastu_key, true);
            res.json(value)

        } catch (err) {
            var limit = req.query.l == undefined ? 10 : parseInt(req.query.l)
            var skip = req.query.s == undefined ? 0 : parseInt(req.query.s)
            var fields = ['firstname', 'lastname', 'role', 'department'].join(',')
            var keys = {
                fields: fields,
                lang: lang,
                limit: limit,
                skip: skip,
            }
            query = querystring.stringify(keys);
            var options = {
                uri: `${urls.API_URL}user?${query}`,
                method: 'GET',
                headers: {
                    "Authorization": `Bearer ${req.session.access_token.token}`
                },
                json: {}
            };

            request(options, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    body.lastUpdate = new Date().getTime()
                    cache.instance().set(lastu_key, body, cache.TTL);
                }
                res.json(body);
            })
        }
    },

    friends_api: function (req, res) {
        var lang = req.params.language == undefined ? 'en' : req.params.language
        var user_id = req.params.user_id
        var friend_key = `f_${user_id}_${lang}`

        try {
            value = cache.instance().get(friend_key, true);
            res.json(value)

        } catch (err) {
            fields = ['firstname', 'lastname', 'profile', 'id', 'department'].join(',')
            var options = {
                uri: `${urls.API_URL}user/${user_id}/friend?${lang}=lang&fields=${fields}`,
                method: 'GET',
                headers: {
                    "Authorization": `Bearer ${req.session.access_token.token}`
                },
                json: {
                }
            };
            request(options, function (error, response, body) {
                if (!error && body.statusCode == 200)
                    for (var i = 0; i < body.response.length; i++) {
                        if (body.response[i].profile != "") {
                            img_path = h.uploadDir(body.response[i]['_id'])
                            h.base64img(body.response[i].profile, `..${img_path}`)
                            body.response[i].profile = img_path
                        }
                    }
                cache.instance().set(friend_key, body, cache.FR_TTL);
                res.json(body);
            })
        }
    },

    add_friend_api: function (req, res) {
        var user_id1 = req.session.access_token.user_id
        var user_id2 = req.params.user_id2
        var options = {
            uri: `${urls.API_URL}user/${user_id1}/friend/${user_id2}`,
            method: 'POST',
            json: {},
            headers: {
                "Authorization": `Bearer ${req.session.access_token.token}`
            }
        };

        request(options, function (error, response, body) {
            if (body.statusCode == 201) {
                put2session(req.session, user_id1, 'friends', user_id2)
            }
            res.json(body);
        })
    },
    unfriend_api: function (req, res) {
        var user_id1 = req.session.access_token.user_id
        var user_id2 = req.params.user_id2
        var options = {
            uri: `${urls.API_URL}user/${user_id1}/friend/${user_id2}`,
            method: 'DELETE',
            json: {},
            headers: {
                "Authorization": `Bearer ${req.session.access_token.token}`
            }
        };

        request(options, function (error, response, body) {
            if (body.statusCode == 200) {
                pop_session(req.session, user_id1, 'friends', user_id2)
            }
            res.json(body);
        })
    },
    block_user_api: function (req, res) {
        var admin_id = req.session.access_token.user_id
        var user_id = req.params.user_id
        var role = req.session[admin_id].role.name
        var blocked = req.body.blocked == 'true'
        if (role == 'admin') {
            var options = {
                uri: `${urls.API_URL}user/${user_id}/block`,
                method: 'POST',
                json: {
                    blocked: blocked
                },
                headers: {
                    "Authorization": `Bearer ${req.session.access_token.token}`
                }
            };

            request(options, function (error, response, body) {
                res.json(body);
            })
        } else {
            res.json({
                statusCode: 400,
                response: 'Only admin can block the user'
            });
        }
    },

    upload_api: function (req, res) {
        var form = new formidable.IncomingForm();
        var user = {},
            file;
        var file_came = false;
        // specify that we want to allow the user to upload multiple files in a single request
        form.multiples = false;

        form.uploadDir = path.join(__dirname, '../public/uploads');

        form.on('field', function (name, value) {
            if (name == 'user')
                user = JSON.parse(value)
        });

        form.on('file', function (field, file) {
            user.profile = file.path
        });

        form.on('error', function (err) {
            console.log('An error has occured: \n' + err);
        });

        form.on('end', function () {
            const token = req.session.access_token.token
            // var fields = []
            // for(var k in user){
            //     fields.push(k)
            // }

            if ('profile' in user && user.profile != "") {
                resize(user)
                    .then(convert)
                    .then(delete_old)
                    .then((user) => {
                        update_user(user, user_fields,req, token, (r) => {
                            res.json(r)
                        })
                    })
            } else {
                update_user(user, user_fields, req, token, (r) => {
                    console.log(r.body)

                    res.json(r.body)
                })
            }

        });

        // parse the incoming request containing the form data
        form.parse(req);

    },
    send_confirm_api: function (req, res) {
        var hostname = req.headers.host; // hostname = 'localhost:8080'
        var url = 'http://' + hostname + "/verify/";
        var email = req.body.email
        v.send_email(url, email, (error, info, token) => {
            if (error) {
                res.status(400).json({
                    response: "Error",
                    statusCode: 400
                })
            } else {
                payload = {}
                payload.user_id = req.session.access_token.user_id
                payload.verified_email = email
                cache.instance().set(token, payload, cache.CONFIRM_TTL);
                res.json({
                    response: "OK",
                    statusCode: 200
                })
            }
        })

    },
    get_profile: function(token, user_id) {
        var f = user_fields.concat(['blocked'])
    
        var options = {
            uri: `${urls.API_URL}user/${user_id}?fields=${f.join(',')}`,
            method: 'GET',
            json: {},
            headers: {
                "Authorization": `Bearer ${token}`
            }
        };
        return rp(options) 
    },
    update_user: update_user
}