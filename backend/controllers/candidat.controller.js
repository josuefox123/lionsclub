const Candidat = require('../models/candidat.model');

/**
 * Contrôleur des Candidatures pour le LEO Club Abomey-Calavi Ortie et Lions Club Acacia.
 * Assure la réception, la validation, le filtrage et la mise à jour des candidats.
 */

/**
 * @desc    Soumettre une nouvelle candidature d'adhésion
 * @route   POST /api/candidats
 * @access  Public
 */
exports.creerCandidat = async (req, res) => {
  try {
    const { nom, prenoms, telephone, email, trancheAge, professionEtudes, choixClub, motivations } = req.body;

    // Validation manuelle de secours pour des retours clairs en français
    const champsManquants = [];
    if (!nom) champsManquants.push('Nom');
    if (!prenoms) champsManquants.push('Prénoms');
    if (!telephone) champsManquants.push('Numéro de téléphone / WhatsApp');
    if (!email) champsManquants.push('Adresse e-mail');
    if (!trancheAge) champsManquants.push('Tranche d\'âge');
    if (!professionEtudes) champsManquants.push('Profession ou filière d\'études');
    if (!choixClub) champsManquants.push('Choix du club');
    if (!motivations) champsManquants.push('Motivations');

    if (champsManquants.length > 0) {
      return res.status(400).json({
        success: false,
        message: `Les champs suivants sont obligatoires : ${champsManquants.join(', ')}.`,
        data: null
      });
    }

    // Création de la candidature dans MongoDB
    const nouveauCandidat = await Candidat.create({
      nom,
      prenoms,
      telephone,
      email,
      trancheAge,
      professionEtudes,
      choixClub,
      motivations,
      statut: 'Nouveau'
    });

    // Numéro du responsable effectif défini dans l'environnement (ou défaut Bénin)
    const whatsappResponsable = process.env.WHATSAPP_RESPONSABLE_NUMERO || '2290100000000';
    
    // Génération du texte pré-rédigé pour redirection WhatsApp
    const messageDeChapeau = `Bonjour Responsable des Effectifs, je suis ${prenoms} ${nom}. Je viens de soumettre ma candidature sur la plateforme web pour rejoindre le ${choixClub === 'LEO' ? 'LEO Club Ortie' : choixClub === 'LIONS' ? 'Lions Club Acacia' : 'club'}.`;
    const whatsappUrl = `https://wa.me/${whatsappResponsable}?text=${encodeURIComponent(messageDeChapeau)}`;

    return res.status(201).json({
      success: true,
      message: 'Votre demande d\'adhésion a été enregistrée avec succès ! Notre responsable des effectifs prendra contact avec vous rapidement.',
      data: {
        candidat: nouveauCandidat,
        lienWhatsAppDirect: whatsappUrl
      }
    });

  } catch (error) {
    console.error('[Candidat Controller Error - creerCandidat]:', error);

    // Erreur de validation Mongoose
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((val) => val.message);
      return res.status(400).json({
        success: false,
        message: 'Erreur de validation des données transmises.',
        erreurs: messages,
        data: null
      });
    }

    return res.status(500).json({
      success: false,
      message: 'Une erreur serveur est survenue lors de l\'enregistrement de votre candidature. Veuillez réessayer ultérieurement.',
      data: null
    });
  }
};

/**
 * @desc    Obtenir la liste des candidatures (avec filtres optionnels par statut et choix de club)
 * @route   GET /api/candidats
 * @access  Protégé (JWT Admin)
 */
exports.obtenirCandidats = async (req, res) => {
  try {
    const { statut, choixClub, recherche } = req.query;
    const filtre = {};

    if (statut) {
      filtre.statut = statut;
    }

    if (choixClub) {
      filtre.choixClub = choixClub;
    }

    if (recherche) {
      filtre.$or = [
        { nom: { $regex: recherche, $options: 'i' } },
        { prenoms: { $regex: recherche, $options: 'i' } },
        { email: { $regex: recherche, $options: 'i' } },
        { telephone: { $regex: recherche, $options: 'i' } }
      ];
    }

    const candidats = await Candidat.find(filtre).sort({ dateCandidature: -1 });

    return res.status(200).json({
      success: true,
      message: `${candidats.length} candidature(s) récupérée(s) avec succès.`,
      compte: candidats.length,
      data: candidats
    });

  } catch (error) {
    console.error('[Candidat Controller Error - obtenirCandidats]:', error);
    return res.status(500).json({
      success: false,
      message: 'Impossible de récupérer la liste des candidatures.',
      data: null
    });
  }
};

/**
 * @desc    Obtenir les détails d'un candidat spécifique par son ID
 * @route   GET /api/candidats/:id
 * @access  Protégé (JWT Admin)
 */
exports.obtenirCandidatParId = async (req, res) => {
  try {
    const candidat = await Candidat.findById(req.params.id);

    if (!candidat) {
      return res.status(404).json({
        success: false,
        message: 'Aucun candidat trouvé avec cet identifiant.',
        data: null
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Fiche candidat récupérée avec succès.',
      data: candidat
    });

  } catch (error) {
    console.error('[Candidat Controller Error - obtenirCandidatParId]:', error);
    return res.status(500).json({
      success: false,
      message: 'Erreur lors de la récupération de la fiche du candidat.',
      data: null
    });
  }
};

/**
 * @desc    Mettre à jour le statut d'un candidat (Nouveau -> Contacté -> Invité -> Intronisé -> Archivé)
 * @route   PATCH /api/candidats/:id/statut
 * @access  Protégé (JWT Admin)
 */
exports.mettreAJourStatutCandidat = async (req, res) => {
  try {
    const { statut } = req.body;
    const statutsValides = ['Nouveau', 'Contacté', 'Invité', 'Intronisé', 'Archivée', 'Archivé'];

    if (!statut || !statutsValides.includes(statut)) {
      return res.status(400).json({
        success: false,
        message: `Statut invalide. Les statuts valides sont : Nouveau, Contacté, Invité, Intronisé, Archivé.`,
        data: null
      });
    }

    const candidatModifie = await Candidat.findByIdAndUpdate(
      req.params.id,
      { statut },
      { new: true, runValidators: true }
    );

    if (!candidatModifie) {
      return res.status(404).json({
        success: false,
        message: 'Candidat introuvable.',
        data: null
      });
    }

    return res.status(200).json({
      success: true,
      message: `Le statut du prospect ${candidatModifie.prenoms} ${candidatModifie.nom} a été mis à jour vers "${statut}".`,
      data: candidatModifie
    });

  } catch (error) {
    console.error('[Candidat Controller Error - mettreAJourStatutCandidat]:', error);
    return res.status(500).json({
      success: false,
      message: 'Erreur lors de la mise à jour du statut du candidat.',
      data: null
    });
  }
};

/**
 * @desc    Supprimer ou archiver une candidature
 * @route   DELETE /api/candidats/:id
 * @access  Protégé (JWT Admin)
 */
exports.supprimerCandidat = async (req, res) => {
  try {
    const candidatSupprime = await Candidat.findByIdAndDelete(req.params.id);

    if (!candidatSupprime) {
      return res.status(404).json({
        success: false,
        message: 'Candidat introuvable.',
        data: null
      });
    }

    return res.status(200).json({
      success: true,
      message: 'La candidature a été supprimée définitivement avec succès.',
      data: candidatSupprime
    });

  } catch (error) {
    console.error('[Candidat Controller Error - supprimerCandidat]:', error);
    return res.status(500).json({
      success: false,
      message: 'Erreur lors de la suppression de la candidature.',
      data: null
    });
  }
};
