<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div class="min-vh-100 d-flex flex-column bg-light">
    
    <!-- BARRE DE NAVIGATION MULTI-PAGE INSTITUTIONNELLE -->
    <header class="sticky-top shadow-sm">
      
      <!-- Bandeau Supérieur District -->
      <div class="bg-lions-navy-dark text-white py-1 fs-7">
        <div class="container d-flex justify-content-between align-items-center">
          <div class="small text-white-50">
            <i class="bi bi-shield-check text-lions-gold me-1"></i> Lions Clubs International • District 403 A4 (Bénin)
          </div>
          <div class="small d-none d-md-block text-white-50">
            Abomey-Calavi • Alliance Acacia & Ortie
          </div>
        </div>
      </div>

      <!-- Navigation Principale -->
      <nav class="navbar navbar-expand-lg navbar-dark bg-lions-navy py-3">
        <div class="container">
          
          <!-- Logo Institutionnel -->
          <RouterLink class="navbar-brand d-flex align-items-center gap-3" to="/">
            <div class="bg-lions-gold text-white rounded-circle p-2 d-flex align-items-center justify-content-center" style="width: 44px; height: 44px;">
              <i class="bi bi-award-fill fs-5"></i>
            </div>
            <div class="d-flex flex-column leading-tight">
              <span class="fs-6 text-white fw-bold">Lions Acacia & LEO Ortie</span>
              <small class="text-lions-gold" style="font-size: 0.75rem;">Abomey-Calavi • Bénin</small>
            </div>
          </RouterLink>

          <!-- Bouton Burger Mobile -->
          <button
            class="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarPublic"
            aria-controls="navbarPublic"
            aria-expanded="false"
            aria-label="Basculer la navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <!-- Menu de Navigation Multi-Page -->
          <div class="collapse navbar-collapse" id="navbarPublic">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center gap-lg-1">
              <li class="nav-item">
                <RouterLink class="nav-link nav-link-custom" to="/">Accueil</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link nav-link-custom" to="/a-propos">À Propos</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link nav-link-custom" to="/actions">Nos Actions</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link nav-link-custom" to="/contact">Contact</RouterLink>
              </li>
              <li class="nav-item ms-lg-2 mt-2 mt-lg-0">
                <RouterLink class="btn btn-lions-gold btn-sm px-4 py-2 rounded-3 text-white fw-semibold" to="/adhesion">
                  <i class="bi bi-person-plus-fill me-1"></i> Rejoindre le Club
                </RouterLink>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </header>

    <!-- ROUTER VIEW (PAGE CONTENU DYNAMIQUE) -->
    <main class="flex-grow-1">
      <RouterView />
    </main>

    <!-- PIED DE PAGE INSTITUTIONNEL -->
    <footer class="bg-lions-gradient text-white py-5 mt-auto border-top border-warning border-3">
      <div class="container">
        <div class="row g-4 justify-content-between">
          
          <div class="col-12 col-md-5">
            <h5 class="fw-bold text-lions-gold mb-3">Lions Club Acacia & LEO Club Ortie</h5>
            <p class="text-white-50 small mb-3 leading-relaxed">
              Clubs de service engagés pour le bien-être des populations d'Abomey-Calavi et du Bénin. Membres du District 403 A4 du Lions Clubs International.
            </p>
            <div class="d-flex gap-3 fs-5">
              <a href="#" class="text-white-50 hover-text-gold" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
              <a href="#" class="text-white-50 hover-text-gold" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
              <a href="https://wa.me/2290100000000" target="_blank" class="text-success" aria-label="WhatsApp"><i class="bi bi-whatsapp"></i></a>
            </div>
          </div>

          <div class="col-12 col-md-3">
            <h6 class="fw-bold text-white mb-3">Navigation</h6>
            <ul class="list-unstyled small space-y-2 text-white-50">
              <li class="mb-1"><RouterLink to="/" class="text-white-50 text-decoration-none">Accueil</RouterLink></li>
              <li class="mb-1"><RouterLink to="/a-propos" class="text-white-50 text-decoration-none">À Propos de nos Clubs</RouterLink></li>
              <li class="mb-1"><RouterLink to="/actions" class="text-white-50 text-decoration-none">Galerie des Actions</RouterLink></li>
              <li class="mb-1"><RouterLink to="/adhesion" class="text-white-50 text-decoration-none">Formulaire d'Adhésion</RouterLink></li>
              <li class="mb-1"><RouterLink to="/contact" class="text-white-50 text-decoration-none">Contact & Secrétariat</RouterLink></li>
            </ul>
          </div>

          <div class="col-12 col-md-4">
            <h6 class="fw-bold text-white mb-3">Contact & Secrétariat</h6>
            <p class="small text-white-50 mb-2"><i class="bi bi-geo-alt-fill text-lions-gold me-2"></i> Abomey-Calavi, République du Bénin</p>
            <p class="small text-white-50 mb-2"><i class="bi bi-envelope-fill text-lions-gold me-2"></i> contact@lions-leo-abomeycalavi.org</p>
            <p class="small text-white-50 mb-0"><i class="bi bi-telephone-fill text-lions-gold me-2"></i> +229 01 00 00 00 00</p>
          </div>

        </div>

        <hr class="my-4 border-white border-opacity-10" />

        <div class="row align-items-center text-center text-md-start small text-white-50">
          <div class="col-md-6">
            © 2026 Lions Club Abomey-Calavi Acacia & LEO Club Abomey-Calavi Ortie. Tous droits réservés.
          </div>
          <div class="col-md-6 text-md-end mt-2 mt-md-0">
            District 403 A4 • Lions Clubs International
          </div>
        </div>

      </div>
    </footer>

  </div>
</template>
