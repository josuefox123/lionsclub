const express = require('express');
const router = express.Router();
const candidatController = require('../controllers/candidat.controller');
const { protegerAdmin } = require('../middlewares/auth.middleware');

// Route publique : Soumission d'une candidature
router.post('/', candidatController.creerCandidat);

// Routes protégées par JWT (Tableau de Bord Administratif)
router.get('/', protegerAdmin, candidatController.obtenirCandidats);
router.get('/:id', protegerAdmin, candidatController.obtenirCandidatParId);
router.patch('/:id/statut', protegerAdmin, candidatController.mettreAJourStatutCandidat);
router.delete('/:id', protegerAdmin, candidatController.supprimerCandidat);

module.exports = router;
