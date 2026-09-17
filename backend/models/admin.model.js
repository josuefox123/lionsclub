const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

/**
 * Schéma Mongoose pour l'Administrateur du Tableau de Bord
 */
const adminSchema = new mongoose.Schema(
  {
    nom: {
      type: String,
      required: [true, 'Le nom de l\'administrateur est obligatoire.'],
      trim: true
    },
    email: {
      type: String,
      required: [true, 'L\'e-mail est obligatoire.'],
      unique: true,
      lowercase: true,
      trim: true
    },
    motDePasse: {
      type: String,
      required: [true, 'Le mot de passe est obligatoire.'],
      minlength: [6, 'Le mot de passe doit faire au moins 6 caractères.']
    },
    role: {
      type: String,
      enum: ['ADMIN', 'SUPER_ADMIN'],
      default: 'ADMIN'
    }
  },
  {
    timestamps: true
  }
);

// Hashage automatique du mot de passe avant sauvegarde
adminSchema.pre('save', async function (next) {
  if (!this.isModified('motDePasse')) return next();
  const salt = await bcrypt.genSalt(10);
  this.motDePasse = await bcrypt.hash(this.motDePasse, salt);
  next();
});

// Méthode de vérification du mot de passe
adminSchema.methods.comparerMotDePasse = async function (motDePasseSaisi) {
  return await bcrypt.compare(motDePasseSaisi, this.motDePasse);
};

module.exports = mongoose.model('Admin', adminSchema);
