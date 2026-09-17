const jwt = require('jsonwebtoken');
const Admin = require('../models/admin.model');

/**
 * Middleware de protection des routes d'administration par JWT.
 */
const protegerAdmin = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'super_cle_secrete_leo_ortie_lions_acacia_229_2026');

      req.admin = await Admin.findById(decoded.id).select('-motDePasse');
      if (!req.admin) {
        return res.status(401).json({
          success: false,
          message: 'Administrateur non trouvé. Accès refusé.',
          data: null
        });
      }

      return next();
    } catch (error) {
      console.error('[Auth Middleware Error]: Token invalide ou expiré.', error.message);
      return res.status(401).json({
        success: false,
        message: 'Jeton de sécurité invalide ou expiré. Veuillez vous re-connecter.',
        data: null
      });
    }
  }

  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Accès non autorisé. Aucun jeton d\'authentification fourni.',
      data: null
    });
  }
};

module.exports = { protegerAdmin };
