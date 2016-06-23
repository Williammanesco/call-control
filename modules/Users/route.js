const express = require('express');
const router = express.Router();
const UserController = require('./Controller');

router.get('/', UserController.find );
router.post('/', UserController.create );
router.put('/', UserController.update );
router.delete('/', UserController.remove );

module.exports = router;
