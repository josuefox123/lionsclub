<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router';

// Liste des 5 images thématiques du carrousel d'arrière-plan (membres africains, malnutrition, santé, environnement, éducation)
const slides = [
  {
    image: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=1920&q=80',
    titre: 'Membres LEO & Lions Africains',
    theme: 'Leadership & Fraternité',
    description: 'Une alliance de leaders africains unis pour le développement d\'Abomey-Calavi.'
  },
  {
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1920&q=80',
    titre: 'Lutte Contre la Malnutrition',
    theme: 'Lutte Contre la Faim',
    description: 'Distribution de vivres et suivi nutritionnel des enfants vulnérables au Bénin.'
  },
  {
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1920&q=80',
    titre: 'Protection de l\'Environnement',
    theme: 'Écologie & Reboisement',
    description: 'Restauration des écosystèmes et reboisement solidaire à Abomey-Calavi.'
  },
  {
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1920&q=80',
    titre: 'Santé & Dépistage Médical',
    theme: 'Santé Communautaire',
    description: 'Campagnes gratuites de dépistage du diabète et de soins de santé de proximité.'
  },
  {
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1920&q=80',
    titre: 'Éducation & Jeunesse',
    theme: 'Jeunesse Africaine',
    description: 'Mentorat, dons de fournitures et soutien scolaire aux élèves du Bénin.'
  }
];

const indexSlideActif = ref(0);
let minuteurCarrousel = null;

const slideSuivant = () => {
  indexSlideActif.value = (indexSlideActif.value + 1) % slides.length;
};

const slidePrecedent = () => {
  indexSlideActif.value = (indexSlideActif.value - 1 + slides.length) % slides.length;
};

const allerAuSlide = (index) => {
  indexSlideActif.value = index;
};

onMounted(() => {
  minuteurCarrousel = setInterval(slideSuivant, 5000);
});

onUnmounted(() => {
  if (minuteurCarrousel) clearInterval(minuteurCarrousel);
});
</script>

<template>
  <div>
    <!-- SECTION HERO COMPACTE ET OPTIMISÉE MOBILE -->
    <section class="position-relative text-white py-4 py-md-5 overflow-hidden d-flex align-items-center">
      
      <!-- CONTENEUR DU CARROUSSEL D'IMAGES EN FOND (5 IMAGES) -->
      <div class="position-absolute top-0 start-0 w-100 h-100 z-0 overflow-hidden">
        <div
          v-for="(slide, i) in slides"
          :key="i"
          class="position-absolute top-0 start-0 w-100 h-100 transition-fade"
          :class="{ 'opacity-100': indexSlideActif === i, 'opacity-0': indexSlideActif !== i }"
        >
          <img
            :src="slide.image"
            :alt="slide.titre"
            class="w-100 h-100 object-fit-cover scale-animation"
          />
        </div>

        <!-- Superposition de Gradient Sombre -->
        <div class="position-absolute top-0 start-0 w-100 h-100 bg-hero-overlay"></div>
      </div>

      <!-- CONTENU DU HERO -->
      <div class="container position-relative z-2 py-2 py-md-3">
        <div class="row align-items-center gy-4">
          
          <!-- COLONNE TEXTE ET ACTIONS -->
          <div class="col-12 col-lg-7 text-center text-lg-start">
            
            <h1 class="display-5 fw-bold text-white mb-2 lh-tight">
              Lions Club Abomey-Calavi Acacia <br class="d-none d-md-block" />
              <span class="text-lions-gold">& LEO Club Abomey-Calavi Ortie</span>
            </h1>

            <p class="text-white-50 mb-3 fs-6 max-w-700 mx-auto mx-lg-0 leading-snug">
              Alliance institutionnelle dédiée à l'action humanitaire, à la santé, la nutrition et l'émergence d'une jeunesse leader au Bénin.
            </p>

            <!-- Boutons d'action compacts mobile-first -->
            <div class="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start gap-2.5 mb-3">
              <RouterLink to="/adhesion" class="btn btn-lions-gold px-4 py-2.5 rounded-3 shadow text-nowrap">
                <i class="bi bi-person-plus-fill me-1.5"></i> Rejoindre l'Alliance
              </RouterLink>
              <RouterLink to="/actions" class="btn btn-outline-light px-4 py-2.5 rounded-3 text-nowrap">
                <i class="bi bi-grid-3x3-gap-fill me-1.5"></i> Nos Actions de Terrain
              </RouterLink>
            </div>

            <!-- Badge synthétique du slide actif -->
            <div class="p-2.5 px-3 rounded-3 bg-white bg-opacity-10 border border-white border-opacity-20 backdrop-blur d-inline-flex align-items-center gap-2 text-start max-w-600">
              <span class="badge bg-lions-gold text-white text-uppercase px-2 py-1 rounded-pill" style="font-size: 0.65rem;">
                {{ slides[indexSlideActif].theme }}
              </span>
              <span class="small text-white opacity-90 truncate-1-line" style="font-size: 0.82rem;">
                <strong>{{ slides[indexSlideActif].titre }} :</strong> {{ slides[indexSlideActif].description }}
              </span>
            </div>

          </div>

          <!-- CARTE INSTITUTIONNELLE DES CLUBS (VISIBILITY DESKTOP/TABLET SANS ENCOMBRER MOBILE) -->
          <div class="col-12 col-lg-5">
            <div class="card border-0 bg-white bg-opacity-10 p-3.5 rounded-4 backdrop-blur border border-white border-opacity-20 text-white shadow-lg">
              
              <div class="d-flex align-items-center gap-3 p-2.5 rounded-3 mb-2.5 bg-lions-navy border border-white border-opacity-15">
                <div class="bg-lions-gold text-white p-2.5 rounded-circle d-flex align-items-center justify-content-center" style="width: 42px; height: 42px;">
                  <i class="bi bi-award-fill fs-5"></i>
                </div>
                <div>
                  <h6 class="fw-bold mb-0 text-lions-gold fs-6">Lions Club Acacia</h6>
                  <small class="text-white-50" style="font-size: 0.75rem;">Club Parrain • Cadres & Philanthropie</small>
                </div>
              </div>

              <div class="d-flex align-items-center gap-3 p-2.5 rounded-3 bg-leo-gradient border border-white border-opacity-15">
                <div class="bg-white text-leo-maroon p-2.5 rounded-circle d-flex align-items-center justify-content-center" style="width: 42px; height: 42px;">
                  <i class="bi bi-people-fill fs-5"></i>
                </div>
                <div>
                  <h6 class="fw-bold mb-0 text-white fs-6">LEO Club Ortie</h6>
                  <small class="text-white-50" style="font-size: 0.75rem;">Club Filleul • Jeunesse & Leadership (12-30 ans)</small>
                </div>
              </div>

              <div class="mt-2.5 pt-2 border-top border-white border-opacity-15 text-center">
                <span class="small text-white-50 fst-italic" style="font-size: 0.78rem;">"Nous Servons - We Serve"</span>
              </div>

            </div>
          </div>

        </div>

        <!-- BARRE COMPACTE DE CONTRÔLE DU CARROUSSEL -->
        <div class="d-flex align-items-center justify-content-between mt-3.5 pt-2 border-top border-white border-opacity-15">
          
          <div class="d-flex align-items-center gap-2">
            <button
              v-for="(slide, index) in slides"
              :key="index"
              @click="allerAuSlide(index)"
              class="btn p-0 rounded-pill transition-all"
              :class="indexSlideActif === index ? 'bg-lions-gold' : 'bg-white bg-opacity-30'"
              :style="{ width: indexSlideActif === index ? '28px' : '8px', height: '8px', border: 'none' }"
              :aria-label="'Aller à l\'image ' + (index + 1)"
            ></button>
          </div>

          <div class="d-flex gap-2">
            <button @click="slidePrecedent" class="btn btn-outline-light btn-sm rounded-circle p-1.5 d-flex align-items-center justify-content-center" style="width: 32px; height: 32px;" aria-label="Image précédente">
              <i class="bi bi-chevron-left small"></i>
            </button>
            <button @click="slideSuivant" class="btn btn-outline-light btn-sm rounded-circle p-1.5 d-flex align-items-center justify-content-center" style="width: 32px; height: 32px;" aria-label="Image suivante">
              <i class="bi bi-chevron-right small"></i>
            </button>
          </div>

        </div>

      </div>
    </section>

    <!-- SECTION APERÇU APPORT & AXES D'INTERVENTION -->
    <section class="py-5 bg-white">
      <div class="container py-3">
        
        <div class="text-center max-w-800 mx-auto mb-4">
          <span class="text-uppercase text-lions-navy fw-bold small tracking-wider">Axes Mondialement Engagés</span>
          <h2 class="display-6 fw-bold text-dark mt-1">Nos Domaines d'Impact Solidaire</h2>
          <p class="text-muted">
            Le Lions Clubs International concentre ses efforts sur les grandes causes mondiales pour répondre aux défis majeurs des communautés béninoises.
          </p>
        </div>

        <div class="row g-4">
          
          <div class="col-12 col-md-6 col-lg-4">
            <div class="card card-institution h-100 p-4">
              <div class="bg-primary bg-opacity-10 p-3 rounded-3 text-primary d-inline-block mb-3" style="width: fit-content;">
                <i class="bi bi-heart-pulse-fill fs-3 text-lions-navy"></i>
              </div>
              <h5 class="fw-bold text-dark mb-2">Santé & Prévention</h5>
              <p class="text-muted small">
                Dépistage du diabète, lutte contre la cécité évitable et soutien à l'oncologie pédiatrique à Abomey-Calavi.
              </p>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-4">
            <div class="card card-institution h-100 p-4">
              <div class="bg-success bg-opacity-10 p-3 rounded-3 text-success d-inline-block mb-3" style="width: fit-content;">
                <i class="bi bi-tree-fill fs-3 text-success"></i>
              </div>
              <h5 class="fw-bold text-dark mb-2">Environnement & Reboisement</h5>
              <p class="text-muted small">
                Campagnes de reboisement universitaire, salubrité publique et sensibilisation à l'éco-citoyenneté.
              </p>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-4">
            <div class="card card-institution h-100 p-4">
              <div class="bg-warning bg-opacity-10 p-3 rounded-3 text-warning d-inline-block mb-3" style="width: fit-content;">
                <i class="bi bi-box-seam-fill fs-3 text-lions-gold"></i>
              </div>
              <h5 class="fw-bold text-dark mb-2">Lutte contre la Malnutrition</h5>
              <p class="text-muted small">
                Distribution de vivre et assistance alimentaire auprès des orphelinats et familles vulnérables.
              </p>
            </div>
          </div>

        </div>

        <!-- APPEL A L'ACTION ORIENTATION -->
        <div class="mt-4 p-4 p-md-5 rounded-4 bg-gold-subtle border border-warning border-opacity-30 text-center">
          <h4 class="fw-bold text-dark mb-2">Vous souhaitez vous engager dans l'action communautaire ?</h4>
          <p class="text-muted max-w-800 mx-auto mb-3">
            Découvrez quel club vous correspond le mieux selon votre tranche d'âge et votre parcours professionnel.
          </p>
          <div class="d-flex justify-content-center gap-3 flex-wrap">
            <RouterLink to="/a-propos" class="btn btn-lions-navy px-4 py-2 rounded-3">
              Découvrir nos Missions
            </RouterLink>
            <RouterLink to="/adhesion" class="btn btn-lions-gold px-4 py-2 rounded-3">
              Formulaire d'Adhésion
            </RouterLink>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<style scoped>
/* Transitions réactives du carrousel d'arrière-plan */
.transition-fade {
  transition: opacity 1.2s ease-in-out;
}

.scale-animation {
  transform: scale(1.04);
  transition: transform 6s ease-out;
}

.bg-hero-overlay {
  background: linear-gradient(
    135deg,
    rgba(0, 45, 98, 0.94) 0%,
    rgba(0, 31, 68, 0.89) 50%,
    rgba(128, 0, 32, 0.86) 100%
  );
}

.backdrop-blur {
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.truncate-1-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 480px;
}
</style>
