const express = require('express');
const router = express.Router();
const shark = require('../controllers/sharks');

router.get('/', function (req, res) {
    console.log('routers.index');
    shark.index(req, res);
});

router.post('/addshark', function (req, res) {
    console.log('routers.addshark');
    shark.create(req, res);
});

router.get('/getshark', function (req, res) {
    console.log('routers.get');
    shark.list(req, res);
});

module.exports = router;

