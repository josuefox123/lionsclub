<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router';

/* ─── Comportement navbar au défilement ─────────────────────────────────── */
const scrolled = ref(false);

const handleScroll = () => {
  scrolled.value = window.scrollY > 60;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
});
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div class="d-flex flex-column min-vh-100">

    <!-- ═══════════════════════════════════════════
         BARRE DE NAVIGATION FIXE (Topbar + Navbar)
         · Transparente en haut de page
         · Opaque + shadow au défilement
    ═══════════════════════════════════════════ -->
    <div
      class="fixed-header"
      :class="{ 'fixed-header--scrolled': scrolled }"
    >

    <!-- TOPBAR — Contacts & CTA Principal -->
    <div class="topbar" :class="{ 'topbar--scrolled': scrolled }">
      <div class="container">
        <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">

          <!-- Infos de contact -->
          <div class="d-flex align-items-center flex-wrap gap-3">
            <a href="mailto:contact@lions-leo-abomeycalavi.org" class="d-flex align-items-center gap-1">
              <i class="bi bi-envelope-fill" style="font-size:.75rem;"></i>
              <span class="d-none d-sm-inline">contact@lions-leo-abomeycalavi.org</span>
            </a>
            <div class="divider d-none d-sm-block"></div>
            <a href="tel:+2290100000000" class="d-flex align-items-center gap-1">
              <i class="bi bi-telephone-fill" style="font-size:.75rem;"></i>
              <span>+229 01 00 00 00 00</span>
            </a>
            <div class="divider d-none d-md-block"></div>
            <span class="d-none d-md-inline">District 403 A4 — Lions Clubs International</span>
          </div>

          <!-- CTA Topbar -->
          <RouterLink to="/adhesion" class="btn-cta-topbar">
            <i class="bi bi-person-plus-fill me-1"></i>
            Rejoindre le Club
          </RouterLink>

        </div>
      </div>
    </div>

    <!-- NAVBAR PRINCIPALE -->
    <nav class="navbar navbar-expand-lg navbar-official"
      :class="{ 'navbar-official--scrolled': scrolled }"
    >
      <div class="container">

        <RouterLink class="navbar-brand" to="/">
          <div class="brand-emblem">
            <i class="bi bi-shield-fill"></i>
          </div>
          <div class="brand-label">
            <div class="brand-title">Lions Acacia &amp; LEO Ortie</div>
            <div class="brand-district">Abomey-Calavi &bull; Bénin</div>
          </div>
        </RouterLink>

        <button class="navbar-toggler border-0 text-white shadow-none"
          type="button" data-bs-toggle="collapse" data-bs-target="#navOfficial"
          aria-controls="navOfficial" aria-expanded="false">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navOfficial">
          <ul class="navbar-nav ms-auto align-items-lg-center gap-0 py-3 py-lg-0">
            <li class="nav-item"><RouterLink class="nav-link-official nav-link" to="/">Accueil</RouterLink></li>
            <li class="nav-item"><RouterLink class="nav-link-official nav-link" to="/a-propos">À Propos</RouterLink></li>
            <li class="nav-item"><RouterLink class="nav-link-official nav-link" to="/actions">Nos Actions</RouterLink></li>
            <li class="nav-item"><RouterLink class="nav-link-official nav-link" to="/contact">Contact</RouterLink></li>
          </ul>
        </div>

      </div>
    </nav>

    </div><!-- /.fixed-header -->

    <!-- Espaceur compensant la hauteur de la barre fixe -->
    <div class="fixed-header-spacer"></div>

    <!-- Contenu de la page -->
    <main class="flex-grow-1">
      <RouterView />
    </main>

    <!-- ═══════════════════════════════════════════
         FOOTER OFFICIEL
    ═══════════════════════════════════════════ -->
    <footer class="footer-official">
      <div class="container">
        <div class="row g-5">

          <div class="col-12 col-lg-4">
            <div class="d-flex align-items-center gap-3 mb-3">
              <div class="brand-emblem" style="width:42px;height:42px;flex-shrink:0;">
                <i class="bi bi-shield-fill" style="font-size:1.1rem;"></i>
              </div>
              <div>
                <div class="footer-brand-name">Lions Club Acacia</div>
                <div class="footer-brand-name" style="color:rgba(255,255,255,.65); font-weight:400;">LEO Club Ortie</div>
              </div>
            </div>
            <p style="font-size:.85rem; color:rgba(255,255,255,.4); line-height:1.7; margin-bottom:1.2rem;">
              Alliance institutionnelle de service communautaire au Bénin. District 403 A4 du Lions Clubs International — dédiée à l'action humanitaire et au développement du leadership des jeunes.
            </p>
            <div class="d-flex gap-3">
              <a href="#" aria-label="Facebook" class="footer-link" style="display:inline;padding:0;"><i class="bi bi-facebook fs-5"></i></a>
              <a href="#" aria-label="Instagram" class="footer-link" style="display:inline;padding:0;"><i class="bi bi-instagram fs-5"></i></a>
              <a href="https://wa.me/2290100000000" target="_blank" rel="noopener" aria-label="WhatsApp" class="footer-link" style="display:inline;padding:0;color:#25D366;"><i class="bi bi-whatsapp fs-5"></i></a>
            </div>
          </div>

          <div class="col-6 col-lg-3">
            <div class="footer-section-title">Navigation</div>
            <RouterLink class="footer-link" to="/">Accueil</RouterLink>
            <RouterLink class="footer-link" to="/a-propos">À Propos des Clubs</RouterLink>
            <RouterLink class="footer-link" to="/actions">Galerie d'Actions</RouterLink>
            <RouterLink class="footer-link" to="/adhesion">Formulaire d'Adhésion</RouterLink>
            <RouterLink class="footer-link" to="/contact">Contact &amp; Secrétariat</RouterLink>
          </div>

          <div class="col-6 col-lg-5">
            <div class="footer-section-title">Secrétariat Officiel</div>
            <div class="d-flex align-items-start gap-2 mb-2" style="font-size:.85rem; color:rgba(255,255,255,.5);">
              <i class="bi bi-geo-alt-fill" style="color:#EBB700; flex-shrink:0; margin-top:.1rem;"></i>
              <span>Commune d'Abomey-Calavi, République du Bénin</span>
            </div>
            <div class="d-flex align-items-center gap-2 mb-2" style="font-size:.85rem; color:rgba(255,255,255,.5);">
              <i class="bi bi-envelope-fill" style="color:#EBB700;"></i>
              <span>contact@lions-leo-abomeycalavi.org</span>
            </div>
            <div class="d-flex align-items-center gap-2" style="font-size:.85rem; color:rgba(255,255,255,.5);">
              <i class="bi bi-telephone-fill" style="color:#EBB700;"></i>
              <span>+229 01 00 00 00 00</span>
            </div>
          </div>

        </div>

        <hr class="footer-divider" />
        <div class="d-flex flex-column flex-md-row justify-content-between gap-2 footer-legal">
          <span>© 2026 Lions Club Abomey-Calavi Acacia &amp; LEO Club Abomey-Calavi Ortie. Tous droits réservés.</span>
          <span>District 403 A4 &bull; Lions Clubs International</span>
        </div>

      </div>
    </footer>

  </div>
</template>
