const express = require('express');
const router = express.Router();

const post = require('./post.js');
router.use('/post', post);

const code = require('./code.js');
router.use('/code', code);

const partner = require('./partner.js');
router.use('/partner', partner);

const salesCode = require('./code/salesCode');
router.use('/code/salesCode', salesCode);


const codeMaster = require('./code/codeMaster');
router.use('/code/codeMaster', codeMaster);





module.exports = router;