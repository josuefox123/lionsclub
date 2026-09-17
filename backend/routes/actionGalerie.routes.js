const express = require('express');
const router = express.Router();
const actionGalerieController = require('../controllers/actionGalerie.controller');
const { protegerAdmin } = require('../middlewares/auth.middleware');

// Route publique : Consultation de la galerie
router.get('/', actionGalerieController.obtenirActionsPubliques);

// Routes protégées pour la gestion administrative de la galerie
router.post('/', protegerAdmin, actionGalerieController.ajouterAction);
router.put('/:id', protegerAdmin, actionGalerieController.modifierAction);
router.patch('/:id/archive', protegerAdmin, actionGalerieController.archiverAction);

module.exports = router;
