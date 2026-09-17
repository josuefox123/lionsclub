<script setup>
/**
 * ActionsView.vue — Galerie des Actions de Terrain
 * Filtrable par catégorie et par club porteur
 */
import { ref, computed, onMounted } from 'vue';
import api from '../services/api';

const axeFiltre  = ref('TOUT');
const clubFiltre = ref('TOUT');
const loading    = ref(false);

const actions = ref([
  { _id:'1', titre:'Campagne de Dépistage du Diabète', description:'Tests de glycémie gratuits pour 300 citoyens du marché de Calavi lors de la Journée mondiale du diabète.', dateAction:'2026-02-14', categorie:'Santé', clubPorteur:'LIONS_ACACIA', statut:'Réalisée', imageUrl:'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80' },
  { _id:'2', titre:'Opération Reboisement — Campus UAC', description:'Plantation de 200 arbres pour lutter contre l\'érosion et embellir le cadre universitaire d\'Abomey-Calavi.', dateAction:'2026-03-05', categorie:'Environnement', clubPorteur:'LEO_ORTIE', statut:'En cours', imageUrl:'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80' },
  { _id:'3', titre:'Distribution de Vivres aux Orphelinats', description:'Collecte et remise de vivres et produits de première nécessité à trois orphelinats de la commune.', dateAction:'2026-01-20', categorie:'Faim', clubPorteur:'CONJOINT', statut:'Réalisée', imageUrl:'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80' },
  { _id:'4', titre:'Don de Kits Scolaires', description:'Distribution de cahiers, stylos et manuels scolaires à 150 élèves démunis et réhabilitation d\'une bibliothèque communautaire.', dateAction:'2025-10-10', categorie:'Éducation', clubPorteur:'LEO_ORTIE', statut:'Réalisée', imageUrl:'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80' },
  { _id:'5', titre:'Atelier de Leadership Jeunesse', description:'Session intensive de formation en leadership et prise de parole publique pour 80 jeunes lycéens et étudiants.', dateAction:'2025-11-28', categorie:'Jeunesse', clubPorteur:'LEO_ORTIE', statut:'Réalisée', imageUrl:'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80' },
  { _id:'6', titre:'Journée Santé — Vaccination Communautaire', description:'Sensibilisation et coordination pour une campagne de vaccination gratuite dans les quartiers défavorisés.', dateAction:'2025-09-15', categorie:'Santé', clubPorteur:'CONJOINT', statut:'Réalisée', imageUrl:'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=800&q=80' }
]);

onMounted(async () => {
  loading.value = true;
  try {
    const res = await api.get('/actions');
    if (res.data.success && res.data.data.length > 0) actions.value = res.data.data;
  } catch (_) { /* Données de démonstration */ } finally { loading.value = false; }
});

const filtered = computed(() => actions.value.filter(a => {
  const okAxe  = axeFiltre.value  === 'TOUT' || a.categorie  === axeFiltre.value;
  const okClub = clubFiltre.value === 'TOUT' || a.clubPorteur === clubFiltre.value;
  return okAxe && okClub;
}));

const fmtDate = (d) => d ? new Date(d).toLocaleDateString('fr-FR', { year:'numeric', month:'long', day:'numeric' }) : '';
const axes   = ['TOUT','Santé','Environnement','Faim','Éducation','Jeunesse'];

const badgeCss = (c) => ({ 'LEO_ORTIE':'badge-leo','LIONS_ACACIA':'badge-lions','CONJOINT':'badge-conj' }[c] || 'badge-lions');
const badgeLbl = (c) => ({ 'LEO_ORTIE':'LEO Ortie','LIONS_ACACIA':'Lions Acacia','CONJOINT':'Conjoint' }[c] || c);
</script>

<template>
  <div>

    <div class="page-header text-center">
      <div class="container">
        <div class="page-header-eyebrow">Impact Communautaire</div>
        <h1>Galerie des Actions de Terrain</h1>
        <div class="section-underline center" style="margin:1rem auto 1.25rem;"></div>
        <p class="mx-auto">Découvrez nos interventions et projets d'impact social réalisés à Abomey-Calavi et sur le territoire béninois.</p>
      </div>
    </div>

    <section class="py-5 bg-off-white">
      <div class="container py-4">

        <!-- Barre de filtre -->
        <div class="d-flex flex-column flex-md-row align-items-md-center gap-3 mb-4 p-4" style="background:#fff; border:1px solid #e8eaef; border-radius:8px;">
          <div class="d-flex flex-wrap gap-2 flex-grow-1">
            <button v-for="axe in axes" :key="axe" @click="axeFiltre = axe"
              class="filter-pill" :class="{ active: axeFiltre === axe }">
              {{ axe === 'TOUT' ? 'Toutes les causes' : axe }}
            </button>
          </div>
          <div style="flex-shrink:0; min-width:200px;">
            <select v-model="clubFiltre" style="width:100%; border:1.5px solid #e8eaef; border-radius:4px; padding:.45rem .75rem; font-family:var(--font); font-size:.82rem; color:#374151; background:#fff; outline:none;">
              <option value="TOUT">Tous les clubs</option>
              <option value="LEO_ORTIE">LEO Club Ortie</option>
              <option value="LIONS_ACACIA">Lions Club Acacia</option>
              <option value="CONJOINT">Actions Conjointes</option>
            </select>
          </div>
        </div>

        <!-- Chargement -->
        <div v-if="loading" class="text-center py-5">
          <div class="spinner-border" style="color:#00338D; width:2.5rem; height:2.5rem;" role="status"></div>
          <p class="mt-3" style="color:#6b7280; font-size:.9rem;">Chargement des réalisations...</p>
        </div>

        <!-- Grille -->
        <div v-else class="row g-4">
          <div v-for="action in filtered" :key="action._id" class="col-12 col-md-6 col-lg-4">
            <div class="campaign-card h-100">
              <div class="campaign-img">
                <img :src="action.imageUrl" :alt="action.titre" loading="lazy" />
                <span class="badge-cause" :class="badgeCss(action.clubPorteur)">{{ badgeLbl(action.clubPorteur) }}</span>
              </div>
              <div class="campaign-body">
                <div class="d-flex gap-2 mb-2">
                  <span class="badge-status" :class="action.statut === 'Réalisée' ? 'status-done' : 'status-ongoing'">{{ action.statut }}</span>
                  <span style="font-size:.63rem; font-weight:700; text-transform:uppercase; letter-spacing:.06em; background:#f3f4f8; color:#6b7280; border-radius:50px; padding:.22rem .65rem;">{{ action.categorie }}</span>
                </div>
                <h5>{{ action.titre }}</h5>
                <p>{{ action.description }}</p>
                <div class="campaign-meta">
                  <span><i class="bi bi-calendar3 me-1"></i>{{ fmtDate(action.dateAction) }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- État vide -->
          <div v-if="filtered.length === 0" class="col-12">
            <div class="text-center py-5" style="background:#fff; border:1px solid #e8eaef; border-radius:8px;">
              <i class="bi bi-funnel" style="font-size:2.2rem; color:#b5bac8;"></i>
              <h5 style="font-size:1.2rem; font-weight:700; color:#0a0e1a; margin-top:1rem; margin-bottom:.5rem;">Aucune action ne correspond aux filtres sélectionnés</h5>
              <p style="font-size:.875rem; color:#6b7280; margin-bottom:1.25rem;">Modifiez les filtres pour afficher d'autres réalisations.</p>
              <button @click="axeFiltre='TOUT'; clubFiltre='TOUT'" class="btn-blue" style="font-size:.875rem;">Réinitialiser les filtres</button>
            </div>
          </div>
        </div>

      </div>
    </section>

  </div>
</template>
