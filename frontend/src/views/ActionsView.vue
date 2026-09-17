<script setup>
import { ref, computed, onMounted } from 'vue';
import api from '../services/api';

const axeFiltre  = ref('TOUT');
const clubFiltre = ref('TOUT');
const loading    = ref(false);

const actions = ref([
  {
    _id: '1',
    titre: 'Campagne de Dépistage Gratuit du Diabète',
    description: 'Tests de glycémie gratuits pour 300 citoyens du marché de Calavi lors de la Journée mondiale du diabète.',
    dateAction: '2026-02-14',
    categorie: 'Santé',
    clubPorteur: 'LIONS_ACACIA',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80'
  },
  {
    _id: '2',
    titre: 'Opération Reboisement — Campus UAC',
    description: 'Plantation de 200 arbres pour lutter contre l\'érosion et embellir le cadre universitaire d\'Abomey-Calavi.',
    dateAction: '2026-03-05',
    categorie: 'Environnement',
    clubPorteur: 'LEO_ORTIE',
    imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80'
  },
  {
    _id: '3',
    titre: 'Distribution de Vivres aux Orphelinats',
    description: 'Collecte et remise de fournitures alimentaires et de produits de première nécessité à trois orphelinats de la commune.',
    dateAction: '2026-01-20',
    categorie: 'Lutte contre la faim',
    clubPorteur: 'CONJOINT',
    imageUrl: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80'
  },
  {
    _id: '4',
    titre: 'Don de Kits Scolaires',
    description: 'Distribution de cahiers, stylos et manuels scolaires et réhabilitation d\'une bibliothèque communautaire.',
    dateAction: '2025-10-10',
    categorie: 'Éducation',
    clubPorteur: 'LEO_ORTIE',
    imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80'
  },
  {
    _id: '5',
    titre: 'Atelier de Leadership Jeunesse',
    description: 'Session de formation intensive en leadership et prise de parole publique pour 80 jeunes lycéens et étudiants.',
    dateAction: '2025-11-28',
    categorie: 'Jeunesse',
    clubPorteur: 'LEO_ORTIE',
    imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80'
  },
  {
    _id: '6',
    titre: 'Journée Santé — Vaccination Communautaire',
    description: 'Sensibilisation et coordination pour une campagne de vaccination gratuite dans les quartiers défavorisés.',
    dateAction: '2025-09-15',
    categorie: 'Santé',
    clubPorteur: 'CONJOINT',
    imageUrl: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=800&q=80'
  }
]);

onMounted(async () => {
  loading.value = true;
  try {
    const res = await api.get('/actions');
    if (res.data.success && res.data.data.length > 0) actions.value = res.data.data;
  } catch (_) {
    /* Utilisation des données de démonstration */
  } finally {
    loading.value = false;
  }
});

const filtered = computed(() => actions.value.filter(a => {
  const okAxe  = axeFiltre.value  === 'TOUT' || a.categorie  === axeFiltre.value;
  const okClub = clubFiltre.value === 'TOUT' || a.clubPorteur === clubFiltre.value;
  return okAxe && okClub;
}));

const fmtDate = (d) => {
  if (!d) return '';
  return new Date(d).toLocaleDateString('fr-FR', { year:'numeric', month:'long', day:'numeric' });
};

const axes = ['TOUT', 'Santé', 'Environnement', 'Lutte contre la faim', 'Éducation', 'Jeunesse'];
</script>

<template>
  <div>

    <div class="page-header text-center">
      <div class="container">
        <div class="page-header-badge">Réalisations Communautaires</div>
        <h1>Galerie des Actions de Terrain</h1>
        <p>Découvrez nos interventions et projets d'impact social réalisés à Abomey-Calavi et sur le territoire béninois.</p>
      </div>
    </div>

    <section class="py-5 bg-off-white">
      <div class="container py-3">

        <!-- Barre de filtrage -->
        <div class="filter-bar mb-4">
          <div class="row g-3 align-items-center">
            <div class="col-12 col-md-7">
              <div class="d-flex flex-wrap gap-2">
                <button
                  v-for="axe in axes"
                  :key="axe"
                  @click="axeFiltre = axe"
                  class="filter-btn"
                  :class="{ active: axeFiltre === axe }"
                >
                  {{ axe === 'TOUT' ? 'Toutes les catégories' : axe }}
                </button>
              </div>
            </div>
            <div class="col-12 col-md-5">
              <select v-model="clubFiltre" class="form-select form-select-sm rounded-3 border" style="border-color:#dde2ee; font-size:.85rem;">
                <option value="TOUT">Tous les clubs</option>
                <option value="LEO_ORTIE">LEO Club Ortie</option>
                <option value="LIONS_ACACIA">Lions Club Acacia</option>
                <option value="CONJOINT">Actions Conjointes</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Indicateur de chargement -->
        <div v-if="loading" class="text-center py-5">
          <div class="spinner-border" style="color:#002d62; width:2.5rem; height:2.5rem;" role="status"></div>
          <p class="mt-3" style="color:#6b7692; font-size:.9rem;">Chargement des réalisations...</p>
        </div>

        <!-- Grille des actions -->
        <div v-else class="row g-4">
          <div v-for="action in filtered" :key="action._id" class="col-12 col-md-6 col-lg-4">
            <div class="icard h-100">
              <div class="gallery-img-wrap">
                <img :src="action.imageUrl" :alt="action.titre" loading="lazy" />
                <!-- Badge Club en haut à droite -->
                <span
                  class="position-absolute top-0 end-0 m-3"
                  :class="{
                    'badge-leo-club':    action.clubPorteur === 'LEO_ORTIE',
                    'badge-lions-club':  action.clubPorteur === 'LIONS_ACACIA',
                    'badge-conjoint':    action.clubPorteur === 'CONJOINT'
                  }"
                >
                  {{ action.clubPorteur === 'LEO_ORTIE' ? 'LEO Ortie' : action.clubPorteur === 'LIONS_ACACIA' ? 'Lions Acacia' : 'Action Conjointe' }}
                </span>
              </div>
              <div class="p-4">
                <div class="d-flex align-items-center gap-2 mb-2">
                  <span style="font-size:.65rem; font-weight:700; letter-spacing:.07em; text-transform:uppercase; color:#6b7692; background:#f1f3f7; border-radius:50px; padding:.2rem .7rem;">{{ action.categorie }}</span>
                  <span style="font-size:.78rem; color:#b0b9cc;">{{ fmtDate(action.dateAction) }}</span>
                </div>
                <h5 style="font-family:'Cormorant Garamond',serif; font-size:1.15rem; font-weight:700; color:#111827; margin-bottom:.5rem; line-height:1.2;">{{ action.titre }}</h5>
                <p class="m-0" style="font-size:.85rem; color:#6b7692; line-height:1.65;">{{ action.description }}</p>
              </div>
            </div>
          </div>

          <!-- Vide -->
          <div v-if="filtered.length === 0" class="col-12">
            <div class="text-center py-5" style="background:#fff; border:1px solid #dde2ee; border-radius:16px;">
              <i class="bi bi-funnel" style="font-size:2rem; color:#b0b9cc;"></i>
              <h5 class="mt-3 mb-1" style="font-family:'Cormorant Garamond',serif; font-size:1.3rem; color:#111827;">Aucune action ne correspond aux critères sélectionnés</h5>
              <p style="font-size:.875rem; color:#6b7692;">Modifiez vos filtres pour afficher d'autres réalisations.</p>
              <button @click="axeFiltre='TOUT'; clubFiltre='TOUT'" class="btn-navy" style="display:inline-block; font-size:.85rem;">Réinitialiser les filtres</button>
            </div>
          </div>
        </div>

      </div>
    </section>

  </div>
</template>
