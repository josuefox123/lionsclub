# Plateforme Web LEO Club Abomey-Calavi Ortie & Lions Club Abomey-Calavi Acacia

Plateforme web institutionnelle, galerie d'actions solidaire et canal d'adhésion pour le **LEO Club Abomey-Calavi Ortie** et son club parrain le **Lions Club Abomey-Calavi Acacia** (République du Bénin).

---

## 🚀 Stacks Techniques

- **Frontend :** Vue 3 (Composition API, `<script setup>`), Bootstrap 5, Bootstrap Icons, Axios, Vite.
- **Backend :** Node.js avec Express, MongoDB (Mongoose), Authentification JWT.
- **Déploiement Frontend :** Prêt pour Vercel.

---

## 📁 Arborescence du Dépôt

```
lionsclub/
├── frontend/             # Application Vue 3 Mobile-First (Prêt pour Vercel)
│   ├── src/
│   │   ├── components/   # FormulaireAdhesion.vue, HeroSection.vue, GalerieActions.vue...
│   │   └── services/     # Configuration Axios
│   ├── vercel.json       # Configuration Vercel SPA
│   ├── .env.example      # Variables d'environnement frontend
│   └── package.json
│
└── backend/              # API REST Express & MongoDB
    ├── config/           # Connexion Mongoose
    ├── controllers/      # Candidat, ActionGalerie, Auth
    ├── models/           # Modèles Candidat, ActionGalerie, Admin
    ├── routes/           # Routes API RESTful
    ├── .env.example      # Variables d'environnement backend
    └── package.json
```

---

## ⚙️ Installation & Démarrage Local

### 1. Démarrer le Backend Express
```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

### 2. Démarrer le Frontend Vue 3
```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```
L'application frontend sera accessible sur `http://localhost:3000` et dialoguera avec le backend sur `http://localhost:5000`.

---

## 🌐 Déploiement sur Vercel (Frontend)

1. Connectez ce dépôt Git à votre compte **Vercel**.
2. Sélectionnez le dossier racine **Root Directory** : `frontend`.
3. Ajoutez la variable d'environnement dans le dashboard Vercel :
   - `VITE_API_BASE_URL` = `https://votre-backend.onrender.com/api`
4. Déployez !
