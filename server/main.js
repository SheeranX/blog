
const express = require('express');
const router = express.Router();

const article = require('./api/article');
const personnel = require('./api/personnel');

router.use('/front',article);
router.use('/admin',personnel);


module.exports = router


