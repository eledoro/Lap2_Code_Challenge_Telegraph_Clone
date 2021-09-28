const express = require('express');
const router = express.Router();
const blogControllers = require('../controllers/blog')

router.get('/:name', blogControllers.showName)
//router.get('/', blogControllers.show)
//router.post('/', blogControllers.create)

module.exports = router;