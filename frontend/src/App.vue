<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import logoAcacia from './images/PARRAIN.png';
import logoOrtie  from './images/projet de fanion ortie2.png';

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

    <!-- NAVBAR PRINCIPALE (Desktop & Header Mobile) -->
    <nav class="navbar navbar-expand-lg navbar-official"
      :class="{ 'navbar-official--scrolled': scrolled }"
    >
      <div class="container">

        <RouterLink class="navbar-brand me-auto" to="/">
          <!-- Logos des deux clubs côte à côte dans la navbar -->
          <div class="d-flex align-items-center gap-2" style="flex-shrink:0;">
            <img :src="logoOrtie"  alt="Logo LEO Club Ortie"  style="height:44px; width:auto; object-fit:contain; filter:drop-shadow(0 2px 6px rgba(0,0,0,.4));" />
            <img :src="logoAcacia" alt="Logo Lions Club Acacia" style="height:44px; width:auto; object-fit:contain; filter:drop-shadow(0 2px 6px rgba(0,0,0,.4));" />
          </div>
          <div class="brand-label">
            <div class="brand-title">Lions Acacia &amp; LEO Ortie</div>
            <div class="brand-district">Abomey-Calavi &bull; Bénin</div>
          </div>
        </RouterLink>

        <!-- Navigation Desktop uniquement -->
        <div class="collapse navbar-collapse d-none d-lg-block" id="navOfficial">
          <ul class="navbar-nav ms-auto align-items-center gap-1">
            <li class="nav-item"><RouterLink class="nav-link-official nav-link" to="/">Accueil</RouterLink></li>
            <li class="nav-item"><RouterLink class="nav-link-official nav-link" to="/a-propos">À Propos</RouterLink></li>
            <li class="nav-item"><RouterLink class="nav-link-official nav-link" to="/actions">Nos Actions</RouterLink></li>
            <li class="nav-item"><RouterLink class="nav-link-official nav-link" to="/contact">Contact</RouterLink></li>
          </ul>
        </div>

      </div>
    </nav>

    </div><!-- /.fixed-header -->

    <!-- BARRE DE NAVIGATION MOBILE BASSE (Material Design 3.0 Floating Pill Tabs) -->
    <nav class="mobile-bottom-nav">
      <RouterLink to="/" class="mobile-nav-item" exact-active-class="active">
        <div class="mobile-nav-icon">
          <i class="bi bi-house-door-fill"></i>
        </div>
        <span class="mobile-nav-label">Accueil</span>
      </RouterLink>

      <RouterLink to="/a-propos" class="mobile-nav-item" active-class="active">
        <div class="mobile-nav-icon">
          <i class="bi bi-info-circle-fill"></i>
        </div>
        <span class="mobile-nav-label">À Propos</span>
      </RouterLink>

      <RouterLink to="/actions" class="mobile-nav-item" active-class="active">
        <div class="mobile-nav-icon">
          <i class="bi bi-grid-fill"></i>
        </div>
        <span class="mobile-nav-label">Actions</span>
      </RouterLink>

      <RouterLink to="/contact" class="mobile-nav-item" active-class="active">
        <div class="mobile-nav-icon">
          <i class="bi bi-envelope-fill"></i>
        </div>
        <span class="mobile-nav-label">Contact</span>
      </RouterLink>

      <RouterLink to="/adhesion" class="mobile-nav-item mobile-nav-cta" active-class="active">
        <div class="mobile-nav-icon">
          <i class="bi bi-person-plus-fill"></i>
        </div>
        <span class="mobile-nav-label">Rejoindre</span>
      </RouterLink>
    </nav>

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
              <!-- Vrais logos des clubs dans le footer -->
              <img :src="logoOrtie"  alt="LEO Club Ortie"   style="height:48px; width:auto; object-fit:contain; filter:drop-shadow(0 2px 6px rgba(0,0,0,.5)); flex-shrink:0;" />
              <img :src="logoAcacia" alt="Lions Club Acacia" style="height:48px; width:auto; object-fit:contain; filter:drop-shadow(0 2px 6px rgba(0,0,0,.5)); flex-shrink:0;" />
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
