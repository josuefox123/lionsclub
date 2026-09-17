<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=1920&q=80',
    theme: 'Fraternité & Engagement',
    titre: 'Membres LEO & Lions d\'Abomey-Calavi'
  },
  {
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1920&q=80',
    theme: 'Axe — Lutte contre la faim',
    titre: 'Malnutrition infantile en Afrique'
  },
  {
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1920&q=80',
    theme: 'Axe — Environnement',
    titre: 'Reboisement & Protection de l\'Écosystème'
  },
  {
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1920&q=80',
    theme: 'Axe — Santé',
    titre: 'Santé communautaire & Dépistage médical'
  },
  {
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1920&q=80',
    theme: 'Axe — Jeunesse & Éducation',
    titre: 'Soutien scolaire & Leadership des jeunes'
  }
];

const activeIndex = ref(0);
let timer = null;

const next  = () => { activeIndex.value = (activeIndex.value + 1) % slides.length; };
const prev  = () => { activeIndex.value = (activeIndex.value - 1 + slides.length) % slides.length; };
const goTo  = (i) => { activeIndex.value = i; };

onMounted(() => { timer = setInterval(next, 5500); });
onUnmounted(() => { if (timer) clearInterval(timer); });
</script>

<template>
  <div>

    <!-- ========================================================
         SECTION HERO — CARROUSSEL PLEIN ÉCRAN
    ========================================================= -->
    <section class="hero-section">

      <!-- SLIDES EN FOND -->
      <div class="position-absolute inset-0 w-100 h-100">
        <div
          v-for="(slide, i) in slides" :key="i"
          class="hero-slide"
          :class="{ active: activeIndex === i }"
          :style="{ opacity: activeIndex === i ? 1 : 0, zIndex: activeIndex === i ? 1 : 0 }"
        >
          <img :src="slide.image" :alt="slide.titre" loading="lazy" />
        </div>
        <div class="hero-overlay"></div>
      </div>

      <!-- CONTENU HERO -->
      <div class="container position-relative py-5" style="z-index: 2;">
        <div class="row align-items-center g-4 g-lg-5">

          <!-- Colonne principale -->
          <div class="col-12 col-lg-7">

            <h1 style="font-family:'Cormorant Garamond',serif; font-size:clamp(2rem,5.5vw,3.5rem); font-weight:700; color:#fff; line-height:1.1; margin-bottom:1rem;">
              Lions Club Abomey-Calavi<br/>
              <span style="color:#c59b27;">Acacia &amp; LEO Club Ortie</span>
            </h1>

            <p style="color:rgba(255,255,255,.65); font-size:1rem; max-width:560px; margin-bottom:1.75rem; line-height:1.7;">
              Alliance institutionnelle dédiée à l'action humanitaire, à la lutte contre la malnutrition, à la santé communautaire et à la préservation de l'environnement au Bénin.
            </p>

            <!-- CTAs -->
            <div class="d-flex flex-wrap gap-3 mb-4">
              <RouterLink to="/adhesion" class="btn-gold" style="display:inline-block; text-decoration:none;">
                <i class="bi bi-person-plus me-2"></i>Rejoindre l'Alliance
              </RouterLink>
              <RouterLink to="/actions" class="btn-outline-gold" style="display:inline-block; text-decoration:none;">
                <i class="bi bi-grid-3x3-gap me-2"></i>Nos Actions de Terrain
              </RouterLink>
            </div>

            <!-- Badge dynamique du slide -->
            <div class="slide-badge">
              <span class="slide-badge-chip">{{ slides[activeIndex].theme }}</span>
              <span class="text-truncate">{{ slides[activeIndex].titre }}</span>
            </div>

          </div>

          <!-- Carte clubs PREMIUM -->
          <div class="col-12 col-lg-5">
            <div class="clubs-card">

              <!-- Lions Club Acacia -->
              <div class="club-item">
                <div class="club-icon-wrap club-icon-lions">
                  <i class="bi bi-shield-check"></i>
                </div>
                <div>
                  <p class="club-name">Lions Club Acacia</p>
                  <p class="club-desc">Club Parrain &bull; Cadres &amp; Philanthropie</p>
                </div>
                <span class="ms-auto" style="font-size:.65rem; font-weight:700; letter-spacing:.08em; text-transform:uppercase; color:rgba(255,255,255,.3); white-space:nowrap;">30+ ans</span>
              </div>

              <div class="club-divider"></div>

              <!-- LEO Club Ortie -->
              <div class="club-item">
                <div class="club-icon-wrap club-icon-leo">
                  <i class="bi bi-people-fill"></i>
                </div>
                <div>
                  <p class="club-name">LEO Club Ortie</p>
                  <p class="club-desc">Club Filleul &bull; Leadership &amp; Jeunesse</p>
                </div>
                <span class="ms-auto" style="font-size:.65rem; font-weight:700; letter-spacing:.08em; text-transform:uppercase; color:rgba(255,255,255,.3); white-space:nowrap;">12 – 30 ans</span>
              </div>

              <div class="club-motto">
                "Nous Servons &nbsp;&bull;&nbsp; We Serve"
              </div>

            </div>
          </div>

        </div>

        <!-- Contrôles carroussel -->
        <div class="d-flex align-items-center justify-content-between mt-4 pt-3" style="border-top:1px solid rgba(255,255,255,.12);">
          <div class="d-flex align-items-center gap-2">
            <button
              v-for="(s, i) in slides" :key="i"
              @click="goTo(i)"
              class="carousel-dot"
              :class="{ active: activeIndex === i }"
              :style="{ width: activeIndex === i ? '28px' : '8px' }"
              :aria-label="'Image ' + (i+1)"
            ></button>
          </div>
          <div class="d-flex gap-2">
            <button @click="prev" aria-label="Précédent" style="width:34px;height:34px;border-radius:50%;border:1.5px solid rgba(255,255,255,.35);background:transparent;color:#fff;display:flex;align-items:center;justify-content:center;transition:all .25s;">
              <i class="bi bi-chevron-left" style="font-size:.8rem;"></i>
            </button>
            <button @click="next" aria-label="Suivant" style="width:34px;height:34px;border-radius:50%;border:1.5px solid rgba(255,255,255,.35);background:transparent;color:#fff;display:flex;align-items:center;justify-content:center;transition:all .25s;">
              <i class="bi bi-chevron-right" style="font-size:.8rem;"></i>
            </button>
          </div>
        </div>

      </div>
    </section>

    <!-- ========================================================
         SECTION AXES D'INTERVENTION
    ========================================================= -->
    <section class="py-5 bg-off-white">
      <div class="container py-3">

        <div class="text-center mb-5">
          <div class="section-eyebrow mb-2">Lions Clubs International — 5 Axes Mondiaux</div>
          <h2 class="section-title">Nos Domaines d'Impact</h2>
          <p class="section-lead mx-auto">
            Le Lions Clubs International concentre ses ressources sur cinq grandes causes mondiales pour répondre aux défis majeurs des communautés africaines.
          </p>
        </div>

        <div class="row g-3">

          <div class="col-12 col-sm-6 col-lg-4">
            <div class="icard h-100 p-4 p-lg-5">
              <div class="icard-icon icard-icon-navy mb-3"><i class="bi bi-heart-pulse-fill"></i></div>
              <h5 style="font-family:'Cormorant Garamond',serif; font-size:1.2rem; font-weight:700; color:#111827; margin-bottom:.5rem;">Santé &amp; Prévention</h5>
              <p class="m-0" style="font-size:.875rem; color:#6b7692; line-height:1.65;">
                Dépistage du diabète, lutte contre la cécité évitable et accompagnement médical des populations vulnérables d'Abomey-Calavi.
              </p>
            </div>
          </div>

          <div class="col-12 col-sm-6 col-lg-4">
            <div class="icard h-100 p-4 p-lg-5">
              <div class="icard-icon icard-icon-green mb-3"><i class="bi bi-tree-fill"></i></div>
              <h5 style="font-family:'Cormorant Garamond',serif; font-size:1.2rem; font-weight:700; color:#111827; margin-bottom:.5rem;">Environnement</h5>
              <p class="m-0" style="font-size:.875rem; color:#6b7692; line-height:1.65;">
                Campagnes de reboisement, gestion durable des déchets et sensibilisation à l'éco-citoyenneté.
              </p>
            </div>
          </div>

          <div class="col-12 col-sm-6 col-lg-4">
            <div class="icard h-100 p-4 p-lg-5">
              <div class="icard-icon icard-icon-gold mb-3"><i class="bi bi-box-seam-fill"></i></div>
              <h5 style="font-family:'Cormorant Garamond',serif; font-size:1.2rem; font-weight:700; color:#111827; margin-bottom:.5rem;">Lutte contre la Faim</h5>
              <p class="m-0" style="font-size:.875rem; color:#6b7692; line-height:1.65;">
                Distribution de vivres, suivi nutritionnel des enfants et soutien aux familles en situation de précarité alimentaire.
              </p>
            </div>
          </div>

          <div class="col-12 col-sm-6 col-lg-6">
            <div class="icard h-100 p-4 p-lg-5">
              <div class="icard-icon icard-icon-maroon mb-3"><i class="bi bi-book-fill"></i></div>
              <h5 style="font-family:'Cormorant Garamond',serif; font-size:1.2rem; font-weight:700; color:#111827; margin-bottom:.5rem;">Éducation &amp; Alphabétisation</h5>
              <p class="m-0" style="font-size:.875rem; color:#6b7692; line-height:1.65;">
                Dons de fournitures scolaires, réhabilitation de bibliothèques et programmes d'alphabétisation des adultes.
              </p>
            </div>
          </div>

          <div class="col-12 col-sm-12 col-lg-6">
            <div class="icard h-100 p-4 p-lg-5">
              <div class="icard-icon icard-icon-navy mb-3"><i class="bi bi-mortarboard-fill"></i></div>
              <h5 style="font-family:'Cormorant Garamond',serif; font-size:1.2rem; font-weight:700; color:#111827; margin-bottom:.5rem;">Leadership de la Jeunesse</h5>
              <p class="m-0" style="font-size:.875rem; color:#6b7692; line-height:1.65;">
                Formation au leadership, ateliers d'art oratoire et programmes de mentorat pour les jeunes de 12 à 30 ans à Abomey-Calavi.
              </p>
            </div>
          </div>

        </div>

        <!-- CTA Bannière -->
        <div class="mt-5 p-4 p-lg-5 rounded-4 text-center" style="background:linear-gradient(135deg, #002d62 0%, #001838 100%); border:1px solid rgba(197,155,39,.25);">
          <div style="font-size:.72rem; font-weight:700; letter-spacing:.12em; text-transform:uppercase; color:rgba(197,155,39,.8); margin-bottom:.5rem;">Rejoindre l'Alliance</div>
          <h3 style="font-family:'Cormorant Garamond',serif; font-size:1.8rem; color:#fff; font-weight:600; margin-bottom:.75rem;">Engagez-vous pour votre communauté</h3>
          <p style="color:rgba(255,255,255,.55); max-width:560px; margin:0 auto 1.5rem; font-size:.9rem;">
            Découvrez quel club correspond à votre profil et rejoignez une communauté de service active au Bénin et à l'international.
          </p>
          <div class="d-flex flex-wrap justify-content-center gap-3">
            <RouterLink to="/a-propos" class="btn-outline-gold" style="display:inline-block; text-decoration:none;">Découvrir nos Missions</RouterLink>
            <RouterLink to="/adhesion" class="btn-gold" style="display:inline-block; text-decoration:none;">Formulaire d'Adhésion</RouterLink>
          </div>
        </div>

      </div>
    </section>

  </div>
</template>

<style scoped>
.inset-0 { inset: 0; }
</style>
