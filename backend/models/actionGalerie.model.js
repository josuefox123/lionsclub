const mongoose = require('mongoose');

/**
 * Schéma Mongoose pour les Actions de la Galerie Communautaire
 * Permet d'exposer les réalisations du LEO Club Ortie et du Lions Club Acacia.
 */
const actionGalerieSchema = new mongoose.Schema(
  {
    titre: {
      type: String,
      required: [true, 'Le titre de l\'action est obligatoire.'],
      trim: true,
      minlength: [3, 'Le titre doit faire au moins 3 caractères.']
    },
    description: {
      type: String,
      required: [true, 'La description de l\'action est obligatoire.'],
      trim: true
    },
    dateAction: {
      type: Date,
      required: [true, 'La date de réalisation de l\'action est obligatoire.'],
      default: Date.now
    },
    categorie: {
      type: String,
      required: [true, 'La catégorie / axe d\'intervention est obligatoire.'],
      enum: {
        values: ['Santé', 'Environnement', 'Lutte contre la faim', 'Éducation', 'Jeunesse'],
        message: 'Axe d\'intervention non reconnu.'
      }
    },
    clubPorteur: {
      type: String,
      required: [true, 'Le club porteur de l\'action est obligatoire.'],
      enum: {
        values: ['LEO_ORTIE', 'LIONS_ACACIA', 'CONJOINT'],
        message: 'Club porteur invalide. Doit être LEO_ORTIE, LIONS_ACACIA ou CONJOINT.'
      }
    },
    imageUrl: {
      type: String,
      required: [true, 'L\'URL de l\'image d\'illustration est obligatoire.'],
      trim: true
    },
    estArchive: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

actionGalerieSchema.index({ categorie: 1, clubPorteur: 1 });

module.exports = mongoose.model('ActionGalerie', actionGalerieSchema);
