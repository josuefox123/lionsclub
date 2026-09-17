<script setup>
import { ref, reactive } from 'vue';
import api from '../services/api';

const form = reactive({
  nom: '', prenoms: '', telephone: '', email: '',
  trancheAge: '18-25 ans', professionEtudes: '', choixClub: 'LEO', motivations: ''
});

const errors  = reactive({});
const touched = reactive({});
const loading = ref(false);
const success = ref(null);
const apiError = ref(null);
const whatsappUrl = ref('');

const rgxEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const rgxTel   = /^(\+?229|00229)?[091569]\d{7}$/;

const validate = (f) => {
  touched[f] = true;
  switch (f) {
    case 'nom':
      errors.nom = !form.nom.trim() ? 'Le nom est requis.' : form.nom.trim().length < 2 ? 'Au moins 2 caractères.' : null;
      break;
    case 'prenoms':
      errors.prenoms = !form.prenoms.trim() ? 'Le prénom est requis.' : form.prenoms.trim().length < 2 ? 'Au moins 2 caractères.' : null;
      break;
    case 'telephone':
      errors.telephone = !form.telephone.trim() ? 'Le numéro est requis.' : !rgxTel.test(form.telephone.replace(/\s/g,'')) ? 'Format invalide (+229XXXXXXXX).' : null;
      break;
    case 'email':
      errors.email = !form.email.trim() ? 'L\'e-mail est requis.' : !rgxEmail.test(form.email) ? 'Adresse e-mail invalide.' : null;
      break;
    case 'professionEtudes':
      errors.professionEtudes = !form.professionEtudes.trim() ? 'Ce champ est requis.' : null;
      break;
    case 'motivations':
      errors.motivations = !form.motivations.trim() ? 'Veuillez rédiger vos motivations.' : form.motivations.trim().length < 10 ? 'Au moins 10 caractères.' : null;
      break;
  }
  if (errors[f] === null) delete errors[f];
};

const validateAll = () => {
  ['nom','prenoms','telephone','email','professionEtudes','motivations'].forEach(validate);
  return Object.keys(errors).length === 0;
};

const submit = async () => {
  apiError.value = null;
  success.value  = null;
  if (!validateAll()) { apiError.value = 'Veuillez corriger les champs indiqués.'; return; }
  loading.value = true;
  try {
    const res = await api.post('/candidats', form);
    if (res.data.success) {
      success.value   = res.data.message;
      whatsappUrl.value = res.data.data.lienWhatsAppDirect;
      Object.assign(form, { nom:'', prenoms:'', telephone:'', email:'', trancheAge:'18-25 ans', professionEtudes:'', choixClub:'LEO', motivations:'' });
      Object.keys(errors).forEach(k => delete errors[k]);
      Object.keys(touched).forEach(k => delete touched[k]);
    }
  } catch (e) {
    apiError.value = e?.response?.data?.message || 'Une erreur est survenue. Veuillez réessayer.';
  } finally {
    loading.value = false;
  }
};

const openWa = () => { if (whatsappUrl.value) window.open(whatsappUrl.value, '_blank'); };
</script>

<template>
  <div>

    <div class="page-header text-center">
      <div class="container">
        <div class="page-header-badge">Recrutement — Commission des Effectifs</div>
        <h1>Formulaire d'Adhésion Officiel</h1>
        <p>Remplissez ce formulaire pour soumettre votre candidature auprès de la commission des effectifs du LEO Club Ortie et du Lions Club Acacia.</p>
      </div>
    </div>

    <section class="py-5 bg-off-white">
      <div class="container py-3">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-9 col-xl-8">
            <div class="form-card">

              <!-- En-tête du formulaire -->
              <div class="form-card-header">
                <h2 style="font-family:'Cormorant Garamond',serif; font-size:1.7rem; font-weight:700; color:#fff; margin-bottom:.35rem;">Demande d'Adhésion</h2>
                <p style="color:rgba(255,255,255,.6); font-size:.9rem; margin:0;">Tous les champs marqués d'un astérisque sont obligatoires.</p>
              </div>

              <div class="p-4 p-md-5">

                <!-- SUCCÈS -->
                <div v-if="success" class="success-box mb-4">
                  <i class="bi bi-check-circle-fill fs-1 text-success d-block mb-3"></i>
                  <h4 style="font-family:'Cormorant Garamond',serif; font-size:1.5rem; color:#1b5e20; margin-bottom:.5rem;">Candidature enregistrée avec succès</h4>
                  <p style="color:#388e3c; font-size:.9rem; margin-bottom:1.5rem;">{{ success }}</p>
                  <div class="d-flex flex-wrap justify-content-center gap-3">
                    <button @click="openWa" class="btn-whatsapp" style="display:inline-block;">
                      <i class="bi bi-whatsapp me-2"></i>Contacter le Responsable WhatsApp (+229)
                    </button>
                    <button @click="success = null" style="display:inline-block; padding:.65rem 1.6rem; border-radius:50px; border:1.5px solid #dde2ee; background:#fff; color:#374151; font-weight:600; cursor:pointer; font-size:.875rem;">
                      Soumettre une nouvelle demande
                    </button>
                  </div>
                </div>

                <!-- ERREUR GLOBALE -->
                <div v-if="apiError" class="d-flex align-items-center gap-3 p-3 rounded-3 mb-4" style="background:#fef2f2; border:1px solid #fecaca;">
                  <i class="bi bi-exclamation-triangle-fill" style="color:#ef4444; font-size:1.1rem;"></i>
                  <span style="font-size:.875rem; color:#991b1b;">{{ apiError }}</span>
                  <button @click="apiError = null" style="margin-left:auto; background:none; border:none; cursor:pointer; color:#9ca3af; font-size:1rem;">&times;</button>
                </div>

                <!-- FORMULAIRE -->
                <form v-if="!success" @submit.prevent="submit" novalidate>
                  <div class="row g-4">

                    <!-- Nom -->
                    <div class="col-12 col-md-6">
                      <label class="form-label-custom">Nom de famille <span style="color:#ef4444;">*</span></label>
                      <input
                        v-model="form.nom"
                        @blur="validate('nom')" @input="validate('nom')"
                        type="text"
                        class="form-control-custom w-100"
                        :class="{ 'is-valid': touched.nom && !errors.nom, 'is-invalid': touched.nom && errors.nom }"
                        placeholder="HOUESSOU"
                      />
                      <div v-if="touched.nom && errors.nom" class="invalid-msg">{{ errors.nom }}</div>
                    </div>

                    <!-- Prénoms -->
                    <div class="col-12 col-md-6">
                      <label class="form-label-custom">Prénoms <span style="color:#ef4444;">*</span></label>
                      <input
                        v-model="form.prenoms"
                        @blur="validate('prenoms')" @input="validate('prenoms')"
                        type="text"
                        class="form-control-custom w-100"
                        :class="{ 'is-valid': touched.prenoms && !errors.prenoms, 'is-invalid': touched.prenoms && errors.prenoms }"
                        placeholder="Jean-Luc"
                      />
                      <div v-if="touched.prenoms && errors.prenoms" class="invalid-msg">{{ errors.prenoms }}</div>
                    </div>

                    <!-- Téléphone -->
                    <div class="col-12 col-md-6">
                      <label class="form-label-custom">WhatsApp / Téléphone (+229) <span style="color:#ef4444;">*</span></label>
                      <input
                        v-model="form.telephone"
                        @blur="validate('telephone')" @input="validate('telephone')"
                        type="tel"
                        class="form-control-custom w-100"
                        :class="{ 'is-valid': touched.telephone && !errors.telephone, 'is-invalid': touched.telephone && errors.telephone }"
                        placeholder="+229 01 97 00 00 00"
                      />
                      <div v-if="touched.telephone && errors.telephone" class="invalid-msg">{{ errors.telephone }}</div>
                    </div>

                    <!-- Email -->
                    <div class="col-12 col-md-6">
                      <label class="form-label-custom">Adresse e-mail <span style="color:#ef4444;">*</span></label>
                      <input
                        v-model="form.email"
                        @blur="validate('email')" @input="validate('email')"
                        type="email"
                        class="form-control-custom w-100"
                        :class="{ 'is-valid': touched.email && !errors.email, 'is-invalid': touched.email && errors.email }"
                        placeholder="jean.houessou@gmail.com"
                      />
                      <div v-if="touched.email && errors.email" class="invalid-msg">{{ errors.email }}</div>
                    </div>

                    <!-- Tranche d'âge -->
                    <div class="col-12 col-md-6">
                      <label class="form-label-custom">Tranche d'âge <span style="color:#ef4444;">*</span></label>
                      <select v-model="form.trancheAge" class="form-select-custom form-control-custom w-100">
                        <option value="12-17 ans">12 - 17 ans</option>
                        <option value="18-25 ans">18 - 25 ans</option>
                        <option value="26-30 ans">26 - 30 ans</option>
                        <option value="30+ ans">Plus de 30 ans</option>
                      </select>
                    </div>

                    <!-- Club souhaité -->
                    <div class="col-12 col-md-6">
                      <label class="form-label-custom">Club souhaité <span style="color:#ef4444;">*</span></label>
                      <select v-model="form.choixClub" class="form-select-custom form-control-custom w-100">
                        <option value="LEO">LEO Club Ortie (12 – 30 ans)</option>
                        <option value="LIONS">Lions Club Acacia (Professionnels)</option>
                        <option value="INDECIS">Indécis — Besoin d'orientation</option>
                      </select>
                    </div>

                    <!-- Profession -->
                    <div class="col-12">
                      <label class="form-label-custom">Profession ou Filière d'études <span style="color:#ef4444;">*</span></label>
                      <input
                        v-model="form.professionEtudes"
                        @blur="validate('professionEtudes')" @input="validate('professionEtudes')"
                        type="text"
                        class="form-control-custom w-100"
                        :class="{ 'is-valid': touched.professionEtudes && !errors.professionEtudes, 'is-invalid': touched.professionEtudes && errors.professionEtudes }"
                        placeholder="Étudiant en Informatique (UAC) / Ingénieur civil / Chef d'entreprise..."
                      />
                      <div v-if="touched.professionEtudes && errors.professionEtudes" class="invalid-msg">{{ errors.professionEtudes }}</div>
                    </div>

                    <!-- Motivations -->
                    <div class="col-12">
                      <label class="form-label-custom">Motivations & Aspirations <span style="color:#ef4444;">*</span></label>
                      <textarea
                        v-model="form.motivations"
                        @blur="validate('motivations')" @input="validate('motivations')"
                        rows="4"
                        class="form-control-custom w-100"
                        :class="{ 'is-valid': touched.motivations && !errors.motivations, 'is-invalid': touched.motivations && errors.motivations }"
                        placeholder="Expliquez pourquoi vous souhaitez rejoindre notre alliance, vos attentes et votre vision d'un impact communautaire à Abomey-Calavi..."
                      ></textarea>
                      <div v-if="touched.motivations && errors.motivations" class="invalid-msg">{{ errors.motivations }}</div>
                    </div>

                    <!-- Bouton de soumission -->
                    <div class="col-12">
                      <button type="submit" class="btn-gold w-100 py-3" style="display:block; font-size:1rem; border-radius:10px;" :disabled="loading">
                        <span v-if="loading">
                          <span class="spinner-border spinner-border-sm me-2" role="status"></span>
                          Enregistrement en cours...
                        </span>
                        <span v-else>
                          <i class="bi bi-send-fill me-2"></i>Soumettre ma candidature
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

  </div>
</template>
