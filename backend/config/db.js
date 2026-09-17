const mongoose = require('mongoose');

/**
 * Connexion à la base de données MongoDB via Mongoose.
 */
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/lions_leo_abomey_calavi');
    console.log(`[MongoDB] Connexion réussie à l'hôte : ${conn.connection.host}`);
  } catch (error) {
    console.error(`[MongoDB Error] Échec de connexion à la base de données : ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
