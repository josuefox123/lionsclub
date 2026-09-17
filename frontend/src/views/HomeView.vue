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
    theme: 'Axe Mondial : Lutte Contre la Faim',
    description: 'Distribution de vivres et suivi nutritionnel des enfants vulnérables en Afrique.'
  },
  {
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1920&q=80',
    titre: 'Protection de l\'Environnement',
    theme: 'Axe Mondial : Écologie & Reboisement',
    description: 'Restauration des écosystèmes et reboisement solidaire au Bénin.'
  },
  {
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1920&q=80',
    titre: 'Santé & Dépistage Médical',
    theme: 'Axe Mondial : Santé Communautaire',
    description: 'Campagnes gratuites de dépistage du diabète et de soins de santé de proximité.'
  },
  {
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1920&q=80',
    titre: 'Éducation & Avenir de la Jeunesse',
    theme: 'Axe Mondial : Jeunesse Africaine',
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
  minuteurCarrousel = setInterval(slideSuivant, 5000); // Défilement automatique toutes les 5 secondes
});

onUnmounted(() => {
  if (minuteurCarrousel) clearInterval(minuteurCarrousel);
});
</script>

<template>
  <div>
    <!-- SECTION HERO AVEC CARROUSSEL D'ARRIÈRE-PLAN ANIMÉ -->
    <section class="position-relative text-white py-5 py-lg-6 overflow-hidden min-vh-75 d-flex align-items-center">
      
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

        <!-- Superposition de Gradient Sombre (Assure 100% de lisibilité sur mobile et desktop) -->
        <div class="position-absolute top-0 start-0 w-100 h-100 bg-hero-overlay"></div>
      </div>

      <!-- CONTENU INTERACTIF DU HERO (AU PREMIER PLAN) -->
      <div class="container position-relative z-2 py-4 py-lg-5">
        <div class="row align-items-center gy-5">
          
          <div class="col-12 col-lg-7 text-center text-lg-start">
            
            <!-- Badges d'information dynamique du slide -->
            <div class="d-inline-flex align-items-center gap-2 bg-white bg-opacity-15 backdrop-blur px-3 py-2 rounded-pill mb-3 border border-white border-opacity-25 shadow-sm">
              <i class="bi bi-shield-check text-lions-gold"></i>
              <span class="small fw-semibold text-white">District 403 A4 • Abomey-Calavi, Bénin</span>
            </div>

            <h1 class="display-4 fw-bold text-white mb-3 lh-tight">
              Lions Club Abomey-Calavi Acacia <br class="d-none d-md-block" />
              <span class="text-lions-gold">& LEO Club Abomey-Calavi Ortie</span>
            </h1>

            <p class="lead text-white-50 mb-4 fs-5 max-w-800">
              Alliance institutionnelle dédiée à l'action humanitaire, à la lutte contre la malnutrition infantile, à la santé et à la préservation de l'environnement au Bénin.
            </p>

            <!-- Boutons d'action optimisés mobile -->
            <div class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-lg-start mb-4">
              <RouterLink to="/adhesion" class="btn btn-lions-gold btn-lg px-4 py-3 rounded-3 shadow-lg">
                <i class="bi bi-person-plus-fill me-2"></i> Rejoindre l'Alliance
              </RouterLink>
              <RouterLink to="/actions" class="btn btn-outline-light btn-lg px-4 py-3 rounded-3 border-2">
                <i class="bi bi-grid-3x3-gap-fill me-2"></i> Nos Actions de Terrain
              </RouterLink>
            </div>

            <!-- Indicateur de Thème du Slide Actuel -->
            <div class="p-3 rounded-3 bg-white bg-opacity-10 border border-white border-opacity-20 backdrop-blur d-inline-block text-start max-w-600">
              <span class="badge bg-lions-gold text-white text-uppercase px-2 py-1 mb-1 me-2 rounded-pill" style="font-size: 0.7rem;">
                {{ slides[indexSlideActif].theme }}
              </span>
              <span class="small text-white fw-bold d-block mt-1">{{ slides[indexSlideActif].titre }}</span>
              <p class="small text-white-50 mb-0 opacity-90">{{ slides[indexSlideActif].description }}</p>
            </div>

          </div>

          <!-- CARTE INSTITUTIONNELLE DES CLUBS -->
          <div class="col-12 col-lg-5">
            <div class="card border-0 bg-white bg-opacity-10 p-4 rounded-4 backdrop-blur border border-white border-opacity-25 text-white shadow-2xl">
              
              <div class="d-flex align-items-center gap-3 p-3 rounded-3 mb-3 bg-lions-navy border border-white border-opacity-20 shadow-sm">
                <div class="bg-lions-gold text-white p-3 rounded-circle d-flex align-items-center justify-content-center" style="width: 50px; height: 50px;">
                  <i class="bi bi-award-fill fs-4"></i>
                </div>
                <div>
                  <h6 class="fw-bold mb-0 text-lions-gold">Lions Club Acacia</h6>
                  <small class="text-white-50">Club Parrain • Cadres & Philanthropie</small>
                </div>
              </div>

              <div class="d-flex align-items-center gap-3 p-3 rounded-3 bg-leo-gradient border border-white border-opacity-20 shadow-sm">
                <div class="bg-white text-leo-maroon p-3 rounded-circle d-flex align-items-center justify-content-center" style="width: 50px; height: 50px;">
                  <i class="bi bi-people-fill fs-4"></i>
                </div>
                <div>
                  <h6 class="fw-bold mb-0 text-white">LEO Club Ortie</h6>
                  <small class="text-white-50">Club Filleul • Jeunesse & Leadership (12-30 ans)</small>
                </div>
              </div>

              <div class="mt-4 pt-3 border-top border-white border-opacity-15 text-center">
                <span class="small text-white-50 fst-italic">"Nous Servons - We Serve"</span>
              </div>

            </div>
          </div>

        </div>

        <!-- CONTROLES DU CARROUSSEL ET INDICATEURS (5 BULLES) -->
        <div class="d-flex align-items-center justify-content-between mt-5 pt-3 border-top border-white border-opacity-15">
          
          <div class="d-flex align-items-center gap-2">
            <button
              v-for="(slide, index) in slides"
              :key="index"
              @click="allerAuSlide(index)"
              class="btn p-0 rounded-pill transition-all"
              :class="indexSlideActif === index ? 'bg-lions-gold' : 'bg-white bg-opacity-30'"
              :style="{ width: indexSlideActif === index ? '32px' : '10px', height: '10px', border: 'none' }"
              :aria-label="'Aller à l\'image ' + (index + 1)"
            ></button>
          </div>

          <div class="d-flex gap-2">
            <button @click="slidePrecedent" class="btn btn-outline-light btn-sm rounded-circle p-2 d-flex align-items-center justify-content-center" style="width: 38px; height: 38px;" aria-label="Image précédente">
              <i class="bi bi-chevron-left"></i>
            </button>
            <button @click="slideSuivant" class="btn btn-outline-light btn-sm rounded-circle p-2 d-flex align-items-center justify-content-center" style="width: 38px; height: 38px;" aria-label="Image suivante">
              <i class="bi bi-chevron-right"></i>
            </button>
          </div>

        </div>

      </div>
    </section>

    <!-- SECTION APERÇU APPORT & AXES D'INTERVENTION -->
    <section class="py-5 bg-white">
      <div class="container py-4">
        
        <div class="text-center max-w-800 mx-auto mb-5">
          <span class="text-uppercase text-lions-navy fw-bold small tracking-wider">Axes Mondialement Engagés</span>
          <h2 class="display-6 fw-bold text-dark mt-2">Nos Domaines d'Impact Solidaire</h2>
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
        <div class="mt-5 p-4 p-md-5 rounded-4 bg-gold-subtle border border-warning border-opacity-30 text-center">
          <h4 class="fw-bold text-dark mb-3">Vous souhaitez vous engager dans l'action communautaire ?</h4>
          <p class="text-muted max-w-800 mx-auto mb-4">
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
  transform: scale(1.05);
  transition: transform 6s ease-out;
}

.bg-hero-overlay {
  background: linear-gradient(
    135deg,
    rgba(0, 45, 98, 0.93) 0%,
    rgba(0, 31, 68, 0.88) 50%,
    rgba(128, 0, 32, 0.85) 100%
  );
}

.backdrop-blur {
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.min-vh-75 {
  min-height: 80vh;
}
</style>
