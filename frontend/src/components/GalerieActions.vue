<script setup>
import { ref, computed, onMounted } from 'vue';
import api from '../services/api';

const axeFiltre = ref('TOUT');
const clubFiltre = ref('TOUT');
const enChargement = ref(false);

// Actions par défaut en démonstration (en cas d'indisponibilité temporaire de la base de données)
const actionsDonnees = ref([
  {
    _id: '1',
    titre: 'Dépistage Gratuit du Diabète à Abomey-Calavi',
    description: 'Campagne de sensibilisation et tests de glycémie gratuits pour plus de 300 citoyens du marché de Calavi.',
    dateAction: '2026-02-14',
    categorie: 'Santé',
    clubPorteur: 'LIONS_ACACIA',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80'
  },
  {
    _id: '2',
    titre: 'Opération Reboisement du Campus d\'UAC',
    description: 'Mise en terre de 200 plants d\'acacia pour lutter contre l\'érosion et embellir le cadre universitaire.',
    dateAction: '2026-03-05',
    categorie: 'Environnement',
    clubPorteur: 'LEO_ORTIE',
    imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80'
  },
  {
    _id: '3',
    titre: 'Distribution de Vivres aux Orphelinats',
    description: 'Collecte et don de fournitures alimentaires pour les enfants nécessiteux de la commune.',
    dateAction: '2026-01-20',
    categorie: 'Lutte contre la faim',
    clubPorteur: 'CONJOINT',
    imageUrl: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&q=80'
  },
  {
    _id: '4',
    titre: 'Don de Kits Scolaires et Livres aux Écoles',
    description: 'Distribution de fournitures et rénovation d\'une bibliothèque scolaire communautaire.',
    dateAction: '2025-10-10',
    categorie: 'Éducation',
    clubPorteur: 'LEO_ORTIE',
    imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80'
  },
  {
    _id: '5',
    titre: 'Atelier de Leadership & Art Oratoire Jeunesse',
    description: 'Session de formation intensive pour 80 jeunes lycéens et étudiants d\'Abomey-Calavi.',
    dateAction: '2025-11-28',
    categorie: 'Jeunesse',
    clubPorteur: 'LEO_ORTIE',
    imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80'
  }
]);

// Charger les actions depuis l'API si le backend est actif
const chargerActions = async () => {
  enChargement.value = true;
  try {
    const reponse = await api.get('/actions');
    if (reponse.data.success && reponse.data.data.length > 0) {
      actionsDonnees.value = reponse.data.data;
    }
  } catch (err) {
    console.warn('Utilisation des données de démonstration pour la galerie.');
  } finally {
    enChargement.value = false;
  }
};

onMounted(() => {
  chargerActions();
});

// Filtrage réactif des actions
const actionsFiltrees = computed(() => {
  return actionsDonnees.value.filter((action) => {
    const correspondanceAxe = axeFiltre.value === 'TOUT' || action.categorie === axeFiltre.value;
    const correspondanceClub = clubFiltre.value === 'TOUT' || action.clubPorteur === clubFiltre.value;
    return correspondanceAxe && correspondanceClub;
  });
});

const formaterDate = (dateStr) => {
  if (!dateStr) return '';
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateStr).toLocaleDateString('fr-FR', options);
};
</script>

<template>
  <section id="galerie-actions" class="py-5 bg-light border-top border-bottom">
    <div class="container py-4">
      
      <div class="text-center max-w-700 mx-auto mb-4">
        <span class="badge bg-primary text-uppercase px-3 py-2 rounded-pill mb-2">Impact Communautaire</span>
        <h2 class="display-6 fw-bold text-dark">Nos Actions sur le Terrain</h2>
        <p class="text-muted fs-5">
          Découvrez la concrétisation de notre engagement solidaire à Abomey-Calavi et au Bénin.
        </p>
      </div>

      <!-- Barre de Filtrage Responsive -->
      <div class="card border-0 shadow-sm rounded-4 p-3 mb-4 bg-white">
        <div class="row g-3 align-items-center">
          
          <!-- Filtre par Axe d'intervention -->
          <div class="col-12 col-md-7">
            <label class="form-label small text-muted fw-bold text-uppercase mb-2">Axe d'intervention :</label>
            <div class="d-flex flex-wrap gap-2">
              <button
                v-for="axe in ['TOUT', 'Santé', 'Environnement', 'Lutte contre la faim', 'Éducation', 'Jeunesse']"
                :key="axe"
                @click="axeFiltre = axe"
                class="btn btn-sm rounded-pill px-3 py-2 fw-semibold transition-all"
                :class="axeFiltre === axe ? 'btn-lions-navy shadow-sm' : 'btn-outline-secondary'"
              >
                {{ axe === 'TOUT' ? 'Toutes les catégories' : axe }}
              </button>
            </div>
          </div>

          <!-- Filtre par Club Initiateur -->
          <div class="col-12 col-md-5">
            <label class="form-label small text-muted fw-bold text-uppercase mb-2">Club Initiateur :</label>
            <select v-model="clubFiltre" class="form-select rounded-3">
              <option value="TOUT">Tous les clubs (LEO & Lions)</option>
              <option value="LEO_ORTIE">LEO Club Ortie uniquement</option>
              <option value="LIONS_ACACIA">Lions Club Acacia uniquement</option>
              <option value="CONJOINT">Actions Conjointes</option>
            </select>
          </div>

        </div>
      </div>

      <!-- Indicateur de Chargement -->
      <div v-if="enChargement" class="text-center py-5">
        <div class="spinner-border text-primary" role="status" style="width: 3rem; height: 3rem;"></div>
        <p class="text-muted mt-3">Chargement des réalisations communautaires...</p>
      </div>

      <!-- Grille Responsive des Actions -->
      <div v-else class="row g-4">
        
        <div
          v-for="action in actionsFiltrees"
          :key="action._id"
          class="col-12 col-md-6 col-lg-4"
        >
          <div class="card h-100 border-0 shadow-sm hover-lift rounded-4 overflow-hidden bg-white">
            
            <!-- Image d'illustration -->
            <div class="position-relative" style="height: 220px; overflow: hidden;">
              <img
                :src="action.imageUrl"
                :alt="action.titre"
                class="w-100 h-100 object-fit-cover"
              />
              
              <!-- Badge Club Porteur -->
              <span
                class="position-absolute top-0 end-0 m-3 badge rounded-pill px-3 py-2 shadow-sm"
                :class="{
                  'bg-teal text-white': action.clubPorteur === 'LEO_ORTIE',
                  'bg-primary text-white': action.clubPorteur === 'LIONS_ACACIA',
                  'bg-warning text-dark': action.clubPorteur === 'CONJOINT'
                }"
              >
                {{
                  action.clubPorteur === 'LEO_ORTIE'
                    ? 'LEO Club Ortie'
                    : action.clubPorteur === 'LIONS_ACACIA'
                    ? 'Lions Club Acacia'
                    : 'Action Conjointe'
                }}
              </span>

              <!-- Badge Categorie -->
              <span class="position-absolute bottom-0 start-0 m-3 badge bg-dark bg-opacity-75 text-white backdrop-blur px-2 py-1">
                {{ action.categorie }}
              </span>
            </div>

            <!-- Contenu de la carte -->
            <div class="card-body p-4 d-flex flex-column">
              <div class="small text-muted mb-2">
                <i class="bi bi-calendar-event me-1"></i> {{ formaterDate(action.dateAction) }}
              </div>
              <h5 class="fw-bold text-dark mb-2">{{ action.titre }}</h5>
              <p class="card-text text-muted flex-grow-1 small leading-relaxed">
                {{ action.description }}
              </p>
            </div>

          </div>
        </div>

        <!-- État vide (Aucune action trouvée) -->
        <div v-if="actionsFiltrees.length === 0" class="col-12 text-center py-5">
          <div class="p-5 bg-white rounded-4 shadow-sm">
            <i class="bi bi-search display-4 text-muted mb-3 d-block"></i>
            <h4 class="fw-bold text-dark">Aucune action ne correspond à ces critères</h4>
            <p class="text-muted mb-3">Essayez de modifier vos filtres pour afficher davantage de projets.</p>
            <button @click="axeFiltre = 'TOUT'; clubFiltre = 'TOUT';" class="btn btn-outline-primary rounded-pill">
              Réinitialiser les filtres
            </button>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>
