const ActionGalerie = require('../models/actionGalerie.model');

/**
 * Contrôleur de la Galerie d'Actions Communautaires
 */

/**
 * @desc    Obtenir toutes les actions non archivées de la galerie (Public)
 * @route   GET /api/actions
 * @access  Public
 */
exports.obtenirActionsPubliques = async (req, res) => {
  try {
    const { categorie, clubPorteur } = req.query;
    const filtre = { estArchive: false };

    if (categorie && categorie !== 'TOUT') {
      filtre.categorie = categorie;
    }

    if (clubPorteur && clubPorteur !== 'TOUT') {
      filtre.clubPorteur = clubPorteur;
    }

    const actions = await ActionGalerie.find(filtre).sort({ dateAction: -1 });

    return res.status(200).json({
      success: true,
      message: `${actions.length} action(s) récupérée(s).`,
      data: actions
    });
  } catch (error) {
    console.error('[ActionGalerie Controller Error - obtenirActionsPubliques]:', error);
    return res.status(500).json({
      success: false,
      message: 'Erreur lors du chargement des actions de la galerie.',
      data: null
    });
  }
};

/**
 * @desc    Ajouter une nouvelle action dans la galerie
 * @route   POST /api/actions
 * @access  Protégé (JWT Admin)
 */
exports.ajouterAction = async (req, res) => {
  try {
    const { titre, description, dateAction, categorie, clubPorteur, imageUrl } = req.body;

    if (!titre || !description || !categorie || !clubPorteur || !imageUrl) {
      return res.status(400).json({
        success: false,
        message: 'Tous les champs requis (titre, description, catégorie, clubPorteur, imageUrl) doivent être renseignés.',
        data: null
      });
    }

    const nouvelleAction = await ActionGalerie.create({
      titre,
      description,
      dateAction: dateAction || Date.now(),
      categorie,
      clubPorteur,
      imageUrl
    });

    return res.status(201).json({
      success: true,
      message: 'L\'action solidaire a été ajoutée avec succès à la galerie !',
      data: nouvelleAction
    });
  } catch (error) {
    console.error('[ActionGalerie Controller Error - ajouterAction]:', error);
    return res.status(500).json({
      success: false,
      message: 'Erreur lors de la création de l\'action dans la galerie.',
      data: null
    });
  }
};

/**
 * @desc    Modifier une action existante de la galerie
 * @route   PUT /api/actions/:id
 * @access  Protégé (JWT Admin)
 */
exports.modifierAction = async (req, res) => {
  try {
    const actionModifiee = await ActionGalerie.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!actionModifiee) {
      return res.status(404).json({
        success: false,
        message: 'Action introuvable.',
        data: null
      });
    }

    return res.status(200).json({
      success: true,
      message: 'L\'action a été mise à jour avec succès.',
      data: actionModifiee
    });
  } catch (error) {
    console.error('[ActionGalerie Controller Error - modifierAction]:', error);
    return res.status(500).json({
      success: false,
      message: 'Erreur lors de la mise à jour de l\'action.',
      data: null
    });
  }
};

/**
 * @desc    Archiver / Désarchiver une action
 * @route   PATCH /api/actions/:id/archive
 * @access  Protégé (JWT Admin)
 */
exports.archiverAction = async (req, res) => {
  try {
    const action = await ActionGalerie.findById(req.params.id);
    if (!action) {
      return res.status(404).json({
        success: false,
        message: 'Action introuvable.',
        data: null
      });
    }

    action.estArchive = !action.estArchive;
    await action.save();

    return res.status(200).json({
      success: true,
      message: `L'action a été ${action.estArchive ? 'archivée' : 'réactivée'} avec succès.`,
      data: action
    });
  } catch (error) {
    console.error('[ActionGalerie Controller Error - archiverAction]:', error);
    return res.status(500).json({
      success: false,
      message: 'Erreur lors du changement d\'état de l\'action.',
      data: null
    });
  }
};
