const express = require('express');
const router = express.Router();
const ChamadaController = require('./Controller');

router.get('/', ChamadaController.find );
router.post('/', ChamadaController.create );
router.put('/', ChamadaController.update );
router.delete('/', ChamadaController.remove );

module.exports = router;
