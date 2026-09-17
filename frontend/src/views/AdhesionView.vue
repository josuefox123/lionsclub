<script setup>
/**
 * AdhesionView.vue — Formulaire Officiel d'Adhésion
 * Charte LCI : #00338D · #EBB700 · #7A2582 · Roboto
 * Validation temps réel & lien WhatsApp pré-rempli
 */
import { ref, reactive } from 'vue';
import api from '../services/api';

const form = reactive({
  nom: '', prenoms: '', telephone: '',
  email: '', trancheAge: '18-25 ans',
  professionEtudes: '', choixClub: 'LEO', motivations: ''
});

const errors  = reactive({});
const touched = reactive({});
const loading  = ref(false);
const success  = ref(null);
const apiError = ref(null);
const waUrl    = ref('');

const rgxEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const rgxTel   = /^(\+?229|00229)?[091569]\d{7}$/;

const validate = (f) => {
  touched[f] = true;
  switch (f) {
    case 'nom':             errors.nom             = !form.nom.trim() ? 'Le nom est requis.' : form.nom.trim().length < 2 ? 'Minimum 2 caractères.' : null; break;
    case 'prenoms':         errors.prenoms         = !form.prenoms.trim() ? 'Le prénom est requis.' : form.prenoms.trim().length < 2 ? 'Minimum 2 caractères.' : null; break;
    case 'telephone':       errors.telephone       = !form.telephone.trim() ? 'Le numéro est requis.' : !rgxTel.test(form.telephone.replace(/\s/g,'')) ? 'Format invalide (ex : +229 01 97 00 00 00).' : null; break;
    case 'email':           errors.email           = !form.email.trim() ? 'L\'e-mail est requis.' : !rgxEmail.test(form.email) ? 'Adresse e-mail invalide.' : null; break;
    case 'professionEtudes':errors.professionEtudes= !form.professionEtudes.trim() ? 'Ce champ est obligatoire.' : null; break;
    case 'motivations':     errors.motivations     = !form.motivations.trim() ? 'Veuillez rédiger vos motivations.' : form.motivations.trim().length < 10 ? 'Minimum 10 caractères.' : null; break;
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
  if (!validateAll()) { apiError.value = 'Veuillez corriger les champs signalés avant de soumettre.'; return; }
  loading.value = true;
  try {
    const res = await api.post('/candidats', form);
    if (res.data.success) {
      success.value = res.data.message;
      waUrl.value   = res.data.data.lienWhatsAppDirect;
      Object.assign(form, { nom:'', prenoms:'', telephone:'', email:'', trancheAge:'18-25 ans', professionEtudes:'', choixClub:'LEO', motivations:'' });
      ['nom','prenoms','telephone','email','professionEtudes','motivations'].forEach(f => { delete errors[f]; delete touched[f]; });
    }
  } catch (e) {
    apiError.value = e?.response?.data?.message || 'Une erreur réseau est survenue. Veuillez réessayer.';
  } finally {
    loading.value = false;
  }
};

const ouvrirWhatsApp = () => { if (waUrl.value) window.open(waUrl.value, '_blank'); };
</script>

<template>
  <div>

    <!-- En-tête de page -->
    <div class="page-header text-center">
      <div class="container">
        <div class="page-header-eyebrow">Commission des Effectifs</div>
        <h1>Formulaire d'Adhésion Officiel</h1>
        <div class="section-underline center" style="margin:1rem auto 1.25rem;"></div>
        <p class="mx-auto">Soumettez votre candidature pour intégrer le LEO Club Ortie ou le Lions Club Acacia d'Abomey-Calavi.</p>
      </div>
    </div>

    <section class="py-5 bg-off-white">
      <div class="container py-4">

        <div class="row g-4 align-items-start justify-content-center">

          <!-- Colonne gauche — Carte d'orientation -->
          <div class="col-12 col-lg-4">
            <div style="background:#00338D; border-radius:8px; padding:2rem; margin-bottom:1rem;">
              <div style="font-size:.68rem; font-weight:700; letter-spacing:.12em; text-transform:uppercase; color:#EBB700; margin-bottom:.8rem;">Choisir son Club</div>
              <div style="margin-bottom:1.25rem;">
                <div style="display:flex; align-items:center; gap:.8rem; margin-bottom:.6rem;">
                  <div style="width:40px;height:40px;background:#EBB700;border-radius:8px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                    <i class="bi bi-people-fill" style="color:#00338D; font-size:1.1rem;"></i>
                  </div>
                  <div>
                    <div style="font-weight:900; font-size:.88rem; color:#fff; text-transform:uppercase; letter-spacing:.03em;">LEO Club Ortie</div>
                    <div style="font-size:.73rem; color:rgba(255,255,255,.55);">Jeunes de 12 à 30 ans</div>
                  </div>
                </div>
                <p style="font-size:.82rem; color:rgba(255,255,255,.6); line-height:1.6; margin-left:3.25rem; margin-bottom:0;">Leadership, Expérience, Opportunité. Idéal pour les étudiants et jeunes actifs.</p>
              </div>

              <div style="border-top:1px solid rgba(255,255,255,.1); padding-top:1.25rem;">
                <div style="display:flex; align-items:center; gap:.8rem; margin-bottom:.6rem;">
                  <div style="width:40px;height:40px;background:rgba(235,183,0,.15);border:1px solid rgba(235,183,0,.4);border-radius:8px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                    <i class="bi bi-shield-check" style="color:#EBB700; font-size:1.1rem;"></i>
                  </div>
                  <div>
                    <div style="font-weight:900; font-size:.88rem; color:#fff; text-transform:uppercase; letter-spacing:.03em;">Lions Club Acacia</div>
                    <div style="font-size:.73rem; color:rgba(255,255,255,.55);">Cadres et Professionnels</div>
                  </div>
                </div>
                <p style="font-size:.82rem; color:rgba(255,255,255,.6); line-height:1.6; margin-left:3.25rem; margin-bottom:0;">Philanthropie, mentorat et réseau mondial. Pour les professionnels engagés.</p>
              </div>
            </div>

            <div style="background:#EBB700; border-radius:8px; padding:1.5rem;">
              <div style="font-size:.68rem; font-weight:700; letter-spacing:.12em; text-transform:uppercase; color:#00338D; margin-bottom:.6rem;">Nous Contacter</div>
              <p style="font-size:.85rem; color:#00338D; margin-bottom:1rem; line-height:1.6;">Questions sur l'adhésion ? Notre secrétariat répond rapidement sur WhatsApp.</p>
              <a href="https://wa.me/2290100000000" target="_blank" rel="noopener" class="btn-whatsapp w-100 justify-content-center" style="font-size:.875rem;">
                <i class="bi bi-whatsapp"></i> Écrire sur WhatsApp
              </a>
            </div>
          </div>

          <!-- Colonne droite — Formulaire -->
          <div class="col-12 col-lg-8">
            <div class="form-card">

              <div class="form-header">
                <h2>Demande d'Adhésion</h2>
                <p>Tous les champs marqués <span style="color:#EBB700;">*</span> sont obligatoires.</p>
              </div>

              <div class="p-4 p-md-5">

                <!-- SUCCÈS -->
                <div v-if="success" class="success-panel mb-0">
                  <i class="bi bi-check-circle-fill d-block mb-3" style="font-size:2.5rem; color:#2e7d32;"></i>
                  <h4 style="font-size:1.4rem; font-weight:900; color:#1b5e20; margin-bottom:.5rem;">Candidature enregistrée avec succès</h4>
                  <p style="color:#388e3c; font-size:.9rem; margin-bottom:1.75rem;">{{ success }}</p>
                  <div class="d-flex flex-wrap justify-content-center gap-3">
                    <button @click="ouvrirWhatsApp" class="btn-whatsapp">
                      <i class="bi bi-whatsapp"></i> Contacter le Responsable WhatsApp
                    </button>
                    <button @click="success = null" style="padding:.75rem 1.75rem; border-radius:4px; border:1.5px solid #e8eaef; background:#fff; color:#374151; font-weight:700; cursor:pointer; font-family:var(--font); font-size:.875rem;">
                      Nouvelle candidature
                    </button>
                  </div>
                </div>

                <!-- ERREUR GLOBALE -->
                <div v-if="apiError && !success" class="d-flex align-items-start gap-3 p-3 rounded-2 mb-4" style="background:#fff5f5; border:1.5px solid #fecaca;">
                  <i class="bi bi-exclamation-triangle-fill mt-1" style="color:#ef4444; flex-shrink:0;"></i>
                  <span style="font-size:.875rem; color:#991b1b; flex:1;">{{ apiError }}</span>
                  <button @click="apiError=null" style="background:none;border:none;cursor:pointer;color:#9ca3af;font-size:1.1rem;padding:0;line-height:1;">&times;</button>
                </div>

                <!-- FORMULAIRE -->
                <form v-if="!success" @submit.prevent="submit" novalidate>
                  <div class="row g-4">

                    <div class="col-12 col-md-6">
                      <label class="field-label">Nom de famille <span style="color:#EBB700;">*</span></label>
                      <input v-model="form.nom" @blur="validate('nom')" @input="validate('nom')" type="text"
                        class="field-input"
                        :class="{ valid: touched.nom && !errors.nom, invalid: touched.nom && errors.nom }"
                        placeholder="HOUESSOU" />
                      <span v-if="touched.nom && errors.nom" class="field-error">{{ errors.nom }}</span>
                    </div>

                    <div class="col-12 col-md-6">
                      <label class="field-label">Prénoms <span style="color:#EBB700;">*</span></label>
                      <input v-model="form.prenoms" @blur="validate('prenoms')" @input="validate('prenoms')" type="text"
                        class="field-input"
                        :class="{ valid: touched.prenoms && !errors.prenoms, invalid: touched.prenoms && errors.prenoms }"
                        placeholder="Jean-Luc" />
                      <span v-if="touched.prenoms && errors.prenoms" class="field-error">{{ errors.prenoms }}</span>
                    </div>

                    <div class="col-12 col-md-6">
                      <label class="field-label">WhatsApp (+229) <span style="color:#EBB700;">*</span></label>
                      <input v-model="form.telephone" @blur="validate('telephone')" @input="validate('telephone')" type="tel"
                        class="field-input"
                        :class="{ valid: touched.telephone && !errors.telephone, invalid: touched.telephone && errors.telephone }"
                        placeholder="+229 01 97 00 00 00" />
                      <span v-if="touched.telephone && errors.telephone" class="field-error">{{ errors.telephone }}</span>
                    </div>

                    <div class="col-12 col-md-6">
                      <label class="field-label">Adresse e-mail <span style="color:#EBB700;">*</span></label>
                      <input v-model="form.email" @blur="validate('email')" @input="validate('email')" type="email"
                        class="field-input"
                        :class="{ valid: touched.email && !errors.email, invalid: touched.email && errors.email }"
                        placeholder="jean.houessou@gmail.com" />
                      <span v-if="touched.email && errors.email" class="field-error">{{ errors.email }}</span>
                    </div>

                    <div class="col-12 col-md-6">
                      <label class="field-label">Tranche d'âge <span style="color:#EBB700;">*</span></label>
                      <select v-model="form.trancheAge" class="field-input">
                        <option value="12-17 ans">12 – 17 ans</option>
                        <option value="18-25 ans">18 – 25 ans</option>
                        <option value="26-30 ans">26 – 30 ans</option>
                        <option value="30+ ans">Plus de 30 ans</option>
                      </select>
                    </div>

                    <div class="col-12 col-md-6">
                      <label class="field-label">Club souhaité <span style="color:#EBB700;">*</span></label>
                      <select v-model="form.choixClub" class="field-input">
                        <option value="LEO">LEO Club Ortie (12 – 30 ans)</option>
                        <option value="LIONS">Lions Club Acacia (Professionnels)</option>
                        <option value="INDECIS">Indécis — Besoin d'orientation</option>
                      </select>
                    </div>

                    <div class="col-12">
                      <label class="field-label">Profession ou Filière d'études <span style="color:#EBB700;">*</span></label>
                      <input v-model="form.professionEtudes" @blur="validate('professionEtudes')" @input="validate('professionEtudes')" type="text"
                        class="field-input"
                        :class="{ valid: touched.professionEtudes && !errors.professionEtudes, invalid: touched.professionEtudes && errors.professionEtudes }"
                        placeholder="Ex : Étudiant en Génie Civil (UAC) / Médecin / Chef d'entreprise..." />
                      <span v-if="touched.professionEtudes && errors.professionEtudes" class="field-error">{{ errors.professionEtudes }}</span>
                    </div>

                    <div class="col-12">
                      <label class="field-label">Motivations &amp; Aspirations <span style="color:#EBB700;">*</span></label>
                      <textarea v-model="form.motivations" @blur="validate('motivations')" @input="validate('motivations')"
                        rows="4" class="field-input"
                        :class="{ valid: touched.motivations && !errors.motivations, invalid: touched.motivations && errors.motivations }"
                        placeholder="Expliquez pourquoi vous souhaitez rejoindre notre alliance, votre vision de l'impact communautaire à Abomey-Calavi..."></textarea>
                      <span v-if="touched.motivations && errors.motivations" class="field-error">{{ errors.motivations }}</span>
                    </div>

                    <div class="col-12">
                      <button type="submit" class="btn-yellow w-100 justify-content-center" style="padding:1rem; font-size:1rem; font-weight:900;" :disabled="loading">
                        <span v-if="loading">
                          <span class="spinner-border spinner-border-sm me-2" role="status"></span>
                          Envoi en cours...
                        </span>
                        <span v-else>
                          <i class="bi bi-send-fill me-2"></i>Soumettre ma candidature officielle
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
