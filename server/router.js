
const express = require('express');
const router = express.Router();

const article = require('./api/article');
const personnel = require('./api/personnel');

router.use(article);
router.use(personnel);


module.exports = router



