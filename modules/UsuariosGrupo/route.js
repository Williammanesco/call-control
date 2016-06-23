const express = require('express');
const router = express.Router();
const GrupoController = require('./Controller');

router.get('/', GrupoController.find );
router.post('/', GrupoController.create );
router.put('/', GrupoController.update );
router.delete('/', GrupoController.remove );

module.exports = router;
