<script setup>
import { ref, reactive, computed } from 'vue';
import api from '../services/api';

// --- ÉTAT RÉACTIF DU FORMULAIRE ---
const formulaire = reactive({
  nom: '',
  prenoms: '',
  telephone: '',
  email: '',
  trancheAge: '18-25 ans',
  professionEtudes: '',
  choixClub: 'LEO',
  motivations: ''
});

// --- ÉTATS D'INTERACTIONS ET ERREURS ---
const erreurs = reactive({});
const touche = reactive({}); // Suivi des champs touchés par l'utilisateur
const enChargement = ref(false);
const messageSucces = ref(null);
const messageErreur = ref(null);
const lienWhatsAppReseau = ref('');

// --- REGEX & VALIDATIONS ---
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// Validation format Bénin : +229, 00229, ou 8-10 chiffres (numéros commençant par 01, 95, 96, 97, 61, etc.)
const regexTelephoneBenin = /^(\+?229|00229)?[091569]\d{7}$/;

const validerChamp = (nomChamp) => {
  touche[nomChamp] = true;

  switch (nomChamp) {
    case 'nom':
      if (!formulaire.nom.trim()) {
        erreurs.nom = 'Le nom de famille est obligatoire.';
      } else if (formulaire.nom.trim().length < 2) {
        erreurs.nom = 'Le nom doit comporter au moins 2 caractères.';
      } else {
        delete erreurs.nom;
      }
      break;

    case 'prenoms':
      if (!formulaire.prenoms.trim()) {
        erreurs.prenoms = 'Le prénom est obligatoire.';
      } else if (formulaire.prenoms.trim().length < 2) {
        erreurs.prenoms = 'Le prénom doit comporter au moins 2 caractères.';
      } else {
        delete erreurs.prenoms;
      }
      break;

    case 'telephone':
      const telEpure = formulaire.telephone.replace(/\s+/g, '');
      if (!telEpure) {
        erreurs.telephone = 'Le numéro WhatsApp / Téléphone est obligatoire.';
      } else if (!regexTelephoneBenin.test(telEpure)) {
        erreurs.telephone = 'Numéro invalide. Exemples valides au Bénin : +2290100000000 ou 97000000.';
      } else {
        delete erreurs.telephone;
      }
      break;

    case 'email':
      if (!formulaire.email.trim()) {
        erreurs.email = 'L\'adresse e-mail est obligatoire.';
      } else if (!regexEmail.test(formulaire.email.trim())) {
        erreurs.email = 'Veuillez saisir une adresse e-mail valide (ex: exemple@domaine.bj).';
      } else {
        delete erreurs.email;
      }
      break;

    case 'professionEtudes':
      if (!formulaire.professionEtudes.trim()) {
        erreurs.professionEtudes = 'Veuillez préciser votre profession ou votre filière d\'études.';
      } else {
        delete erreurs.professionEtudes;
      }
      break;

    case 'motivations':
      if (!formulaire.motivations.trim()) {
        erreurs.motivations = 'Veuillez rédiger quelques phrases sur vos motivations.';
      } else if (formulaire.motivations.trim().length < 10) {
        erreurs.motivations = 'Vos motivations doivent faire au moins 10 caractères.';
      } else {
        delete erreurs.motivations;
      }
      break;
  }
};

const validerToutLeFormulaire = () => {
  ['nom', 'prenoms', 'telephone', 'email', 'professionEtudes', 'motivations'].forEach(validerChamp);
  return Object.keys(erreurs).length === 0;
};

// --- SOUMISSION DU FORMULAIRE ---
const soumettreCandidature = async () => {
  messageSucces.value = null;
  messageErreur.value = null;

  if (!validerToutLeFormulaire()) {
    messageErreur.value = 'Veuillez corriger les erreurs surlignées en rouge dans le formulaire.';
    return;
  }

  enChargement.value = true;

  try {
    const reponse = await api.post('/candidats', formulaire);

    if (reponse.data.success) {
      messageSucces.value = reponse.data.message;
      lienWhatsAppReseau.value = reponse.data.data.lienWhatsAppDirect;

      // Réinitialisation du formulaire
      Object.assign(formulaire, {
        nom: '',
        prenoms: '',
        telephone: '',
        email: '',
        trancheAge: '18-25 ans',
        professionEtudes: '',
        choixClub: 'LEO',
        motivations: ''
      });

      // Réinitialisation des erreurs et suivis
      Object.keys(erreurs).forEach(key => delete erreurs[key]);
      Object.keys(touche).forEach(key => delete touche[key]);
    }
  } catch (error) {
    console.error('Erreur lors de la soumission du formulaire :', error);
    if (error.response && error.response.data && error.response.data.message) {
      messageErreur.value = error.response.data.message;
    } else {
      messageErreur.value = 'Une erreur réseau est survenue. Veuillez vérifier votre connexion et ré-essayer.';
    }
  } finally {
    enChargement.value = false;
  }
};

// Redirection WhatsApp manuelle
const ouvrirWhatsApp = () => {
  if (lienWhatsAppReseau.value) {
    window.open(lienWhatsAppReseau.value, '_blank');
  }
};
</script>

<template>
  <section id="formulaire-adhesion" class="py-5 bg-light">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-9 col-xl-8">
          
          <div class="card border-0 shadow-lg rounded-4 overflow-hidden">
            <!-- En-tête de la carte -->
            <div class="card-header bg-lions-navy text-white text-center p-4 p-md-5">
              <span class="badge bg-lions-gold text-white text-uppercase px-3 py-2 mb-2 rounded-pill fw-bold">Commission des Effectifs</span>
              <h2 class="fw-bold mb-2 text-white">Formulaire d'Adhésion Officiel</h2>
              <p class="mb-0 opacity-75 fs-6">
                Faites le premier pas pour servir la communauté aux côtés du LEO Club Ortie et du Lions Club Acacia (Bénin).
              </p>
            </div>

            <div class="card-body p-4 p-md-5">
              
              <!-- Message de Succès & Accusé de Réception Post-Soumission -->
              <div v-if="messageSucces" class="alert alert-success border-0 shadow-sm p-4 rounded-4 mb-4 text-center">
                <div class="display-4 text-success mb-2">
                  <i class="bi bi-check-circle-fill"></i>
                </div>
                <h4 class="fw-bold text-success">Candidature Transmise avec Succès !</h4>
                <p class="mb-4 text-dark fs-6">{{ messageSucces }}</p>
                
                <div class="p-3 bg-white rounded-3 shadow-sm mb-4">
                  <p class="small text-muted mb-2">
                    <i class="bi bi-lightning-charge-fill text-warning me-1"></i>
                    <strong>Action recommandée pour accélérer votre étude :</strong>
                  </p>
                  <p class="mb-0 small">
                    Cliquez sur le bouton ci-dessous pour envoyer directement un message pré-rédigé sur le WhatsApp du Responsable des Effectifs.
                  </p>
                </div>

                <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                  <button @click="ouvrirWhatsApp" class="btn btn-whatsapp btn-lg px-4 py-3 rounded-3 shadow">
                    <i class="bi bi-whatsapp me-2 fs-5"></i> Contacter le Responsable sur WhatsApp (+229)
                  </button>
                  <button @click="messageSucces = null" class="btn btn-outline-secondary btn-lg px-4 rounded-3">
                    Soumettre une autre réponse
                  </button>
                </div>
              </div>

              <!-- Message d'Erreur Global -->
              <div v-if="messageErreur" class="alert alert-danger alert-dismissible fade show rounded-3 mb-4" role="alert">
                <i class="bi bi-exclamation-triangle-fill me-2"></i> {{ messageErreur }}
                <button type="button" class="btn-close" @click="messageErreur = null"></button>
              </div>

              <!-- Formulaire interactif -->
              <form v-if="!messageSucces" @submit.prevent="soumettreCandidature" novalidate>
                
                <div class="row g-3">
                  
                  <!-- Nom -->
                  <div class="col-12 col-md-6">
                    <label for="nom" class="form-label fw-semibold">Nom de famille <span class="text-danger">*</span></label>
                    <input
                      id="nom"
                      v-model="formulaire.nom"
                      @blur="validerChamp('nom')"
                      @input="validerChamp('nom')"
                      type="text"
                      class="form-control form-control-lg"
                      :class="{ 'is-invalid': touche.nom && erreurs.nom, 'is-valid': touche.nom && !erreurs.nom }"
                      placeholder="Ex: HOUESSOU"
                      required
                    />
                    <div v-if="touche.nom && erreurs.nom" class="invalid-feedback">
                      {{ erreurs.nom }}
                    </div>
                  </div>

                  <!-- Prénoms -->
                  <div class="col-12 col-md-6">
                    <label for="prenoms" class="form-label fw-semibold">Prénoms <span class="text-danger">*</span></label>
                    <input
                      id="prenoms"
                      v-model="formulaire.prenoms"
                      @blur="validerChamp('prenoms')"
                      @input="validerChamp('prenoms')"
                      type="text"
                      class="form-control form-control-lg"
                      :class="{ 'is-invalid': touche.prenoms && erreurs.prenoms, 'is-valid': touche.prenoms && !erreurs.prenoms }"
                      placeholder="Ex: Jean-Luc"
                      required
                    />
                    <div v-if="touche.prenoms && erreurs.prenoms" class="invalid-feedback">
                      {{ erreurs.prenoms }}
                    </div>
                  </div>

                  <!-- Téléphone / WhatsApp -->
                  <div class="col-12 col-md-6">
                    <label for="telephone" class="form-label fw-semibold">
                      <i class="bi bi-whatsapp text-success me-1"></i> WhatsApp / Téléphone (Bénin +229) <span class="text-danger">*</span>
                    </label>
                    <input
                      id="telephone"
                      v-model="formulaire.telephone"
                      @blur="validerChamp('telephone')"
                      @input="validerChamp('telephone')"
                      type="tel"
                      class="form-control form-control-lg"
                      :class="{ 'is-invalid': touche.telephone && erreurs.telephone, 'is-valid': touche.telephone && !erreurs.telephone }"
                      placeholder="Ex: +229 01 97 00 00 00"
                      required
                    />
                    <div v-if="touche.telephone && erreurs.telephone" class="invalid-feedback">
                      {{ erreurs.telephone }}
                    </div>
                  </div>

                  <!-- Email -->
                  <div class="col-12 col-md-6">
                    <label for="email" class="form-label fw-semibold">Adresse E-mail <span class="text-danger">*</span></label>
                    <input
                      id="email"
                      v-model="formulaire.email"
                      @blur="validerChamp('email')"
                      @input="validerChamp('email')"
                      type="email"
                      class="form-control form-control-lg"
                      :class="{ 'is-invalid': touche.email && erreurs.email, 'is-valid': touche.email && !erreurs.email }"
                      placeholder="Ex: jean.houessou@gmail.com"
                      required
                    />
                    <div v-if="touche.email && erreurs.email" class="invalid-feedback">
                      {{ erreurs.email }}
                    </div>
                  </div>

                  <!-- Tranche d'âge -->
                  <div class="col-12 col-md-6">
                    <label for="trancheAge" class="form-label fw-semibold">Tranche d'âge <span class="text-danger">*</span></label>
                    <select id="trancheAge" v-model="formulaire.trancheAge" class="form-select form-select-lg">
                      <option value="12-17 ans">12 - 17 ans (Adolescents)</option>
                      <option value="18-25 ans">18 - 25 ans (Jeunes étudiants / Cadres)</option>
                      <option value="26-30 ans">26 - 30 ans (Jeunes professionnels)</option>
                      <option value="30+ ans">Plus de 30 ans (Professionnels établis)</option>
                    </select>
                  </div>

                  <!-- Choix du Club -->
                  <div class="col-12 col-md-6">
                    <label for="choixClub" class="form-label fw-semibold">Club de votre choix <span class="text-danger">*</span></label>
                    <select id="choixClub" v-model="formulaire.choixClub" class="form-select form-select-lg fw-bold text-primary">
                      <option value="LEO">LEO Club Ortie (Jeunes 12-30 ans)</option>
                      <option value="LIONS">Lions Club Acacia (Professionnels 30+ ans)</option>
                      <option value="INDECIS">Indécis(e) - Besoin de conseils d'orientation</option>
                    </select>
                  </div>

                  <!-- Profession ou filière d'études -->
                  <div class="col-12">
                    <label for="professionEtudes" class="form-label fw-semibold">Profession ou Filière d'études <span class="text-danger">*</span></label>
                    <input
                      id="professionEtudes"
                      v-model="formulaire.professionEtudes"
                      @blur="validerChamp('professionEtudes')"
                      @input="validerChamp('professionEtudes')"
                      type="text"
                      class="form-control form-control-lg"
                      :class="{ 'is-invalid': touche.professionEtudes && erreurs.professionEtudes, 'is-valid': touche.professionEtudes && !erreurs.professionEtudes }"
                      placeholder="Ex: Étudiant en Informatique (UAC) / Chef d'entreprise"
                      required
                    />
                    <div v-if="touche.professionEtudes && erreurs.professionEtudes" class="invalid-feedback">
                      {{ erreurs.professionEtudes }}
                    </div>
                  </div>

                  <!-- Motivations -->
                  <div class="col-12">
                    <label for="motivations" class="form-label fw-semibold">Pourquoi souhaitez-vous nous rejoindre ? <span class="text-danger">*</span></label>
                    <textarea
                      id="motivations"
                      v-model="formulaire.motivations"
                      @blur="validerChamp('motivations')"
                      @input="validerChamp('motivations')"
                      rows="4"
                      class="form-control"
                      :class="{ 'is-invalid': touche.motivations && erreurs.motivations, 'is-valid': touche.motivations && !erreurs.motivations }"
                      placeholder="Expliquez vos attentes, vos passions et vos envies d'impact solidaire à Abomey-Calavi..."
                      required
                    ></textarea>
                    <div v-if="touche.motivations && erreurs.motivations" class="invalid-feedback">
                      {{ erreurs.motivations }}
                    </div>
                  </div>

                  <!-- Bouton de Soumission -->
                  <div class="col-12 mt-4">
                    <button
                      type="submit"
                      class="btn btn-lions-gold btn-lg w-100 py-3 shadow fs-5"
                      :disabled="enChargement"
                    >
                      <span v-if="enChargement" class="spinner-border spinner-border-sm me-2" role="status"></span>
                      <span v-if="enChargement">Enregistrement de votre candidature...</span>
                      <span v-else>
                        <i class="bi bi-send-fill me-2"></i> Soumettre ma candidature
                      </span>
                    </button>
                  </div>

                </div>
              </form>

            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>
