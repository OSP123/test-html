var express = require('express');
var router  = express.Router();
var api_controller = require('../controllers/api_controller');

router.get('/', api_controller.index);

module.exports = router;