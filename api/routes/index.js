const express = require('express');
const router = express.Router();
const path = require('path');

router.use(function (req, res, next) {
    console.log('~~~~~');
    console.log('/' + req.method);
    console.log('======');
    next();
});

router.get('/', function (req, res) {
    res.sendFile(path.resolve('views/index.html'));
});

module.exports = router;

