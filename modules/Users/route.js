const express = require('express');
const router = express.Router();
const UserController = require('./Controller');

router.get('/findAll', UserController.findAll );
router.post('/login', UserController.find );
router.post('/', UserController.create );
router.put('/:id', UserController.update );
router.delete('/', UserController.remove );

module.exports = router;
