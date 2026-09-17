const mongoose = require('mongoose');

/**
 * Schéma Mongoose pour les Candidatures (Adhésions / Prospects)
 * Plateforme LEO Club Abomey-Calavi Ortie & Lions Club Abomey-Calavi Acacia
 */
const candidatSchema = new mongoose.Schema(
  {
    nom: {
      type: String,
      required: [true, 'Le nom est obligatoire.'],
      trim: true,
      minlength: [2, 'Le nom doit contenir au moins 2 caractères.']
    },
    prenoms: {
      type: String,
      required: [true, 'Le prénom est obligatoire.'],
      trim: true,
      minlength: [2, 'Le prénom doit contenir au moins 2 caractères.']
    },
    telephone: {
      type: String,
      required: [true, 'Le numéro de téléphone / WhatsApp est obligatoire.'],
      trim: true,
      validate: {
        validator: function (v) {
          // Expression régulière pour numéros du Bénin (+229XXXXXXXX ou 01XXXXXXXX ou 8-10 chiffres)
          return /^(\+?229|00229)?[091569]\d{7}$/.test(v.replace(/\s+/g, ''));
        },
        message: 'Veuillez fournir un numéro de téléphone valide au format Bénin (+229).'
      }
    },
    email: {
      type: String,
      required: [true, "L'adresse e-mail est obligatoire."],
      trim: true,
      lowercase: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Veuillez fournir une adresse e-mail valide.'
      ]
    },
    trancheAge: {
      type: String,
      required: [true, "La tranche d'âge est obligatoire."],
      enum: {
        values: ['12-17 ans', '18-25 ans', '26-30 ans', '30+ ans'],
        message: "Tranche d'âge non valide."
      }
    },
    professionEtudes: {
      type: String,
      required: [true, 'La profession ou filière d\'études est obligatoire.'],
      trim: true
    },
    choixClub: {
      type: String,
      required: [true, 'Le choix du club est obligatoire.'],
      enum: {
        values: ['LEO', 'LIONS', 'INDECIS'],
        message: 'Choix de club invalide. Valeurs autorisées: LEO, LIONS, INDECIS.'
      }
    },
    motivations: {
      type: String,
      required: [true, 'Les motivations sont obligatoires.'],
      trim: true,
      minlength: [10, 'Veuillez exprimer vos motivations en au moins 10 caractères.']
    },
    statut: {
      type: String,
      enum: {
        values: ['Nouveau', 'Contacté', 'Invité', 'Intronisé', 'Archivé'],
        message: 'Statut invalide.'
      },
      default: 'Nouveau'
    },
    dateCandidature: {
      type: Date,
      default: Date.now
    }
  },
  {
    timestamps: true
  }
);

// Index de recherche textuelle rapide pour l'administration
candidatSchema.index({ nom: 'text', prenoms: 'text', email: 'text', telephone: 'text' });

module.exports = mongoose.model('Candidat', candidatSchema);
