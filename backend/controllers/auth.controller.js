const Admin = require('../models/admin.model');
const jwt = require('jsonwebtoken');

/**
 * Génère un Token JWT pour un administrateur connecté
 */
const genererToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || 'super_cle_secrete_leo_ortie_lions_acacia_229_2026', {
    expiresIn: process.env.JWT_EXPIRES_IN || '24h'
  });
};

/**
 * @desc    Connexion de l'administrateur et obtention du Token JWT
 * @route   POST /api/auth/connexion
 * @access  Public
 */
exports.connexion = async (req, res) => {
  try {
    const { email, motDePasse } = req.body;

    if (!email || !motDePasse) {
      return res.status(400).json({
        success: false,
        message: 'Veuillez saisir votre e-mail et votre mot de passe.',
        data: null
      });
    }

    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(401).json({
        success: false,
        message: 'Identifiants de connexion incorrects.',
        data: null
      });
    }

    const estValide = await admin.comparerMotDePasse(motDePasse);
    if (!estValide) {
      return res.status(401).json({
        success: false,
        message: 'Identifiants de connexion incorrects.',
        data: null
      });
    }

    const token = genererToken(admin._id);

    return res.status(200).json({
      success: true,
      message: 'Connexion réussie ! Bienvenue sur le tableau de bord d\'administration.',
      data: {
        admin: {
          id: admin._id,
          nom: admin.nom,
          email: admin.email,
          role: admin.role
        },
        token
      }
    });
  } catch (error) {
    console.error('[Auth Controller Error - connexion]:', error);
    return res.status(500).json({
      success: false,
      message: 'Erreur lors de la tentative de connexion administrative.',
      data: null
    });
  }
};

/**
 * @desc    Initialisation d'un compte administrateur initial s'il n'en existe aucun
 * @route   POST /api/auth/initialiser
 * @access  Public (uniquement au premier démarrage)
 */
exports.initialiserAdmin = async (req, res) => {
  try {
    const nombreAdmins = await Admin.countDocuments();
    if (nombreAdmins > 0) {
      return res.status(400).json({
        success: false,
        message: 'Un compte administrateur existe déjà. L\'initialisation automatique est désactivée.',
        data: null
      });
    }

    const { nom, email, motDePasse } = req.body;
    const adminInitial = await Admin.create({
      nom: nom || 'Administrateur Principal',
      email: email || 'admin@lions-leo-abomeycalavi.org',
      motDePasse: motDePasse || 'AdminOrtieAcacia2026',
      role: 'SUPER_ADMIN'
    });

    return res.status(201).json({
      success: true,
      message: 'Compte administrateur principal créé avec succès.',
      data: {
        id: adminInitial._id,
        email: adminInitial.email
      }
    });
  } catch (error) {
    console.error('[Auth Controller Error - initialiserAdmin]:', error);
    return res.status(500).json({
      success: false,
      message: 'Erreur lors de l\'initialisation de l\'administrateur.',
      data: null
    });
  }
};
