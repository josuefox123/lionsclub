const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Chargement des variables d'environnement
dotenv.config();

// Connexion à la base de données MongoDB
connectDB();

const app = express();

// Middlewares globaux
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Définition des Routes API
app.use('/api/candidats', require('./routes/candidat.routes'));
app.use('/api/actions', require('./routes/actionGalerie.routes'));
app.use('/api/auth', require('./routes/auth.routes'));

// Route de santé (Health Check)
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'API LEO Club Abomey-Calavi Ortie & Lions Club Abomey-Calavi Acacia opérationnelle.',
    statut: 'En ligne',
    timestamp: new Date()
  });
});

// Gestionnaire d'erreur 404 (Route non trouvée)
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: `La route demandée '${req.originalUrl}' n'existe pas sur ce serveur.`,
    data: null
  });
});

// Démarrage du serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`===========================================================`);
  console.log(`[SERVEUR BACKEND LIONS / LEO] en écoute sur le port ${PORT}`);
  console.log(`[ENVIRONNEMENT] : ${process.env.NODE_ENV || 'development'}`);
  console.log(`===========================================================`);
});
