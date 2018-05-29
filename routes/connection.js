var express = require('express');
var express_session = require("express-session")
var MongoStore = require("connect-mongo")(express_session);

var router = express.Router();
var session = express_session({
  secret: 'a4f8071f-c873-4447-8ee22d-dddd1',
  name: 'nameOfCookie',
  store: new MongoStore({
    url:   'mongodb://admin_remine:WinniePooh8@cluster0-shard-00-00-h4vdb.mongodb.net:27017,cluster0-shard-00-01-h4vdb.mongodb.net:27017,cluster0-shard-00-02-h4vdb.mongodb.net:27017/Portal?replicaSet=Cluster0-shard-0&ssl=true&authSource=admin',
    autoRemove: 'native',
    collection: 'session',
  }),
  proxy: true,
  resave: true,
  saveUninitialized: false
})

router.use(session);
module.exports.router = router;
module.exports.express = express;
module.exports.session = session;
// module.exports.io = io;

