<script setup>
import HeroSection from './components/HeroSection.vue';
import OrientationSection from './components/OrientationSection.vue';
import GalerieActions from './components/GalerieActions.vue';
import FormulaireAdhesion from './components/FormulaireAdhesion.vue';

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<template>
  <div class="min-vh-100 d-flex flex-column bg-light">
    
    <!-- BARRE DE NAVIGATION (MOBILE-FIRST) -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-gradient-lions sticky-top shadow-sm py-3">
      <div class="container">
        
        <!-- Logo / Titre Institutionnel -->
        <a class="navbar-brand d-flex align-items-center gap-2 fw-bold" href="#">
          <div class="bg-warning text-dark rounded-circle p-2 d-flex align-items-center justify-content-center" style="width: 40px; height: 40px;">
            <i class="bi bi-shield-fill-check fs-5"></i>
          </div>
          <div class="d-flex flex-column leading-tight">
            <span class="fs-6 text-white fw-bold">LEO Ortie & Lions Acacia</span>
            <small class="text-gold opacity-90" style="font-size: 0.72rem;">Abomey-Calavi • Bénin</small>
          </div>
        </a>

        <!-- Bouton Burger Mobile -->
        <button
          class="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContenu"
          aria-controls="navbarContenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Liens de Navigation -->
        <div class="collapse navbar-collapse" id="navbarContenu">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center gap-lg-3">
            <li class="nav-item">
              <a class="nav-link text-white active" href="#">Accueil</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white-50" href="#orientation" @click.prevent="scrollToSection('orientation')">Orientation</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white-50" href="#galerie-actions" @click.prevent="scrollToSection('galerie-actions')">Nos Actions</a>
            </li>
            <li class="nav-item mt-2 mt-lg-0">
              <a class="btn btn-gold btn-sm px-3 py-2 rounded-pill fw-bold" href="#formulaire-adhesion" @click.prevent="scrollToSection('formulaire-adhesion')">
                <i class="bi bi-person-plus-fill me-1"></i> Rejoindre
              </a>
            </li>
          </ul>
        </div>

      </div>
    </nav>

    <!-- MAIN CONTENT SECTIONS -->
    <main class="flex-grow-1">
      <HeroSection />
      
      <div id="orientation">
        <OrientationSection />
      </div>

      <GalerieActions />

      <FormulaireAdhesion />
    </main>

    <!-- PIED DE PAGE (FOOTER INSTITUTIONNEL) -->
    <footer class="bg-gradient-lions text-white py-5 mt-auto border-top border-warning border-4">
      <div class="container">
        <div class="row g-4 justify-content-between">
          
          <div class="col-12 col-md-5">
            <h5 class="fw-bold text-gold mb-3">LEO Club Ortie & Lions Club Acacia</h5>
            <p class="text-white-50 small mb-3">
              Clubs de service engagés pour le bien-être des populations d'Abomey-Calavi et du Bénin. Membres du District 403 A4 du Lions Clubs International.
            </p>
            <div class="d-flex gap-3 fs-5">
              <a href="#" class="text-white-50 hover-text-gold"><i class="bi bi-facebook"></i></a>
              <a href="#" class="text-white-50 hover-text-gold"><i class="bi bi-instagram"></i></a>
              <a href="https://wa.me/2290100000000" target="_blank" class="text-success"><i class="bi bi-whatsapp"></i></a>
            </div>
          </div>

          <div class="col-12 col-md-3">
            <h6 class="fw-bold text-white mb-3">Liens Rapides</h6>
            <ul class="list-unstyled small space-y-2 text-white-50">
              <li><a href="#" class="text-white-50 text-decoration-none">Présentation</a></li>
              <li><a href="#orientation" @click.prevent="scrollToSection('orientation')" class="text-white-50 text-decoration-none">Orientation LEO vs Lions</a></li>
              <li><a href="#galerie-actions" @click.prevent="scrollToSection('galerie-actions')" class="text-white-50 text-decoration-none">Galerie d'actions</a></li>
              <li><a href="#formulaire-adhesion" @click.prevent="scrollToSection('formulaire-adhesion')" class="text-white-50 text-decoration-none">Adhésion / Contact</a></li>
            </ul>
          </div>

          <div class="col-12 col-md-4">
            <h6 class="fw-bold text-white mb-3">Contact & Localisation</h6>
            <p class="small text-white-50 mb-1"><i class="bi bi-geo-alt-fill text-gold me-2"></i> Abomey-Calavi, République du Bénin</p>
            <p class="small text-white-50 mb-1"><i class="bi bi-envelope-fill text-gold me-2"></i> contact@lions-leo-abomeycalavi.org</p>
            <p class="small text-white-50 mb-0"><i class="bi bi-telephone-fill text-gold me-2"></i> +229 01 00 00 00 00</p>
          </div>

        </div>

        <hr class="my-4 border-white border-opacity-10" />

        <div class="row align-items-center text-center text-md-start small text-white-50">
          <div class="col-md-6">
            © 2026 LEO Club Abomey-Calavi Ortie & Lions Club Abomey-Calavi Acacia. Tous droits réservés.
          </div>
          <div class="col-md-6 text-md-end mt-2 mt-md-0">
            Conçu avec passion pour la communauté • District 403 A4
          </div>
        </div>

      </div>
    </footer>

  </div>
</template>
