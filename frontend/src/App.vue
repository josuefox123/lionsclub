<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div class="d-flex flex-column min-vh-100">

    <!-- BANDEAU TOPBAR -->
    <div class="topbar">
      <div class="container d-flex justify-content-between align-items-center">
        <span>Lions Clubs International &middot; District 403 A4</span>
        <span class="d-none d-md-inline">Abomey-Calavi, République du Bénin</span>
      </div>
    </div>

    <!-- NAVIGATION PRINCIPALE -->
    <nav class="navbar navbar-expand-lg navbar-main">
      <div class="container">

        <RouterLink class="navbar-brand d-flex align-items-center gap-3 text-decoration-none" to="/">
          <div class="brand-logo">
            <i class="bi bi-shield-fill text-white fs-5"></i>
          </div>
          <div>
            <div class="navbar-brand-text">Lions Acacia &amp; LEO Ortie</div>
            <div class="brand-sub">Abomey-Calavi &bull; District 403 A4</div>
          </div>
        </RouterLink>

        <button class="navbar-toggler border-0 text-white" type="button"
          data-bs-toggle="collapse" data-bs-target="#navMain"
          aria-controls="navMain" aria-expanded="false">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navMain">
          <ul class="navbar-nav ms-auto align-items-lg-center gap-lg-1 py-3 py-lg-0">
            <li class="nav-item"><RouterLink class="nav-link-main nav-link" to="/">Accueil</RouterLink></li>
            <li class="nav-item"><RouterLink class="nav-link-main nav-link" to="/a-propos">À Propos</RouterLink></li>
            <li class="nav-item"><RouterLink class="nav-link-main nav-link" to="/actions">Nos Actions</RouterLink></li>
            <li class="nav-item"><RouterLink class="nav-link-main nav-link" to="/contact">Contact</RouterLink></li>
            <li class="nav-item ms-lg-3 mt-2 mt-lg-0">
              <RouterLink class="btn-nav-cta nav-link" to="/adhesion">
                <i class="bi bi-person-plus me-1"></i>Adhésion
              </RouterLink>
            </li>
          </ul>
        </div>

      </div>
    </nav>

    <!-- CONTENU DE LA PAGE -->
    <main class="flex-grow-1">
      <RouterView />
    </main>

    <!-- FOOTER INSTITUTIONNEL -->
    <footer class="footer-main">
      <div class="container">
        <div class="row g-5">

          <!-- Identité Institutionnelle -->
          <div class="col-12 col-lg-5">
            <div class="footer-brand-name">Lions Club Abomey-Calavi Acacia</div>
            <div class="footer-brand-name mb-3">LEO Club Abomey-Calavi Ortie</div>
            <p class="footer-legal" style="color: rgba(255,255,255,.4); font-size: .85rem; line-height: 1.65;">
              Alliance institutionnelle de service communautaire au Bénin. Membres du District 403 A4 du Lions Clubs International, dédiés à l'action humanitaire, la lutte contre la malnutrition et l'émergence d'une jeunesse responsable.
            </p>
            <div class="d-flex gap-3 mt-3">
              <a href="#" class="footer-link" style="display:inline; padding:0;" aria-label="Facebook"><i class="bi bi-facebook fs-5"></i></a>
              <a href="#" class="footer-link" style="display:inline; padding:0;" aria-label="Instagram"><i class="bi bi-instagram fs-5"></i></a>
              <a href="https://wa.me/2290100000000" target="_blank" rel="noopener" class="footer-link" style="display:inline; padding:0;" aria-label="WhatsApp"><i class="bi bi-whatsapp fs-5"></i></a>
            </div>
          </div>

          <!-- Navigation -->
          <div class="col-6 col-lg-3">
            <div class="footer-section-title">Navigation</div>
            <RouterLink class="footer-link" to="/">Accueil</RouterLink>
            <RouterLink class="footer-link" to="/a-propos">À Propos</RouterLink>
            <RouterLink class="footer-link" to="/actions">Nos Actions</RouterLink>
            <RouterLink class="footer-link" to="/adhesion">Formulaire d'Adhésion</RouterLink>
            <RouterLink class="footer-link" to="/contact">Contact</RouterLink>
          </div>

          <!-- Contact -->
          <div class="col-6 col-lg-4">
            <div class="footer-section-title">Secrétariat</div>
            <p class="mb-2" style="font-size:.85rem; color:rgba(255,255,255,.45);">
              <i class="bi bi-geo-alt-fill text-gold me-2"></i>Abomey-Calavi, Bénin
            </p>
            <p class="mb-2" style="font-size:.85rem; color:rgba(255,255,255,.45);">
              <i class="bi bi-envelope-fill text-gold me-2"></i>contact@lions-leo-abomeycalavi.org
            </p>
            <p class="mb-0" style="font-size:.85rem; color:rgba(255,255,255,.45);">
              <i class="bi bi-telephone-fill text-gold me-2"></i>+229 01 00 00 00 00
            </p>
          </div>

        </div>

        <hr class="footer-divider" />

        <div class="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2 footer-legal">
          <span>© 2026 Lions Club Abomey-Calavi Acacia &amp; LEO Club Abomey-Calavi Ortie. Tous droits réservés.</span>
          <span>District 403 A4 &bull; Lions Clubs International</span>
        </div>
      </div>
    </footer>

  </div>
</template>
