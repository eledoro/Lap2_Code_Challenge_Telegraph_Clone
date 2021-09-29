const express = require('express');
const router = express.Router();
const blogControllers = require('../controllers/blog')

//router.post('/', blogControllers.create)
router.get('/:title.:date', blogControllers.show)

module.exports = router;