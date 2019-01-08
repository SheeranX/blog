
const express = require('express');
const router = express.Router();

const article = require('./api/article');

router.use('/front',article);



module.exports = router



