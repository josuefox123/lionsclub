<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue';
import { RouterLink, RouterView, useRoute } from 'vue-router';
import logoAcacia from './images/PARRAIN.png';
import logoOrtie  from './images/projet de fanion ortie2.png';

/* ─── État Navbar & Offcanvas Mobile ────────────────────────────────────── */
const scrolled = ref(false);
const drawerOpen = ref(false);
const route = useRoute();

const handleScroll = () => {
  scrolled.value = window.scrollY > 60;
};

// Fermeture automatique du tiroir au changement de page
watch(() => route.path, () => {
  drawerOpen.value = false;
});

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
      <div class="container d-flex align-items-center justify-content-between">

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

        <!-- Navigation Desktop -->
        <div class="collapse navbar-collapse d-none d-lg-block" id="navOfficial">
          <ul class="navbar-nav ms-auto align-items-center gap-1">
            <li class="nav-item"><RouterLink class="nav-link-official nav-link" to="/">Accueil</RouterLink></li>
            <li class="nav-item"><RouterLink class="nav-link-official nav-link" to="/a-propos">À Propos</RouterLink></li>
            <li class="nav-item"><RouterLink class="nav-link-official nav-link" to="/actions">Nos Actions</RouterLink></li>
            <li class="nav-item"><RouterLink class="nav-link-official nav-link" to="/contact">Contact</RouterLink></li>
          </ul>
        </div>

        <!-- Bouton Trigger Menu Mobile (Design icône personnalisé de la photo) -->
        <button
          class="drawer-trigger-btn d-lg-none"
          @click="drawerOpen = !drawerOpen"
          aria-label="Ouvrir le menu"
        >
          <div class="menu-icon-bars">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

      </div>
    </nav>

    </div><!-- /.fixed-header -->

    <!-- ═══════════════════════════════════════════
         DRAWER OFF-CANVAS DROIT MOBILE
         · Ouverture fluide en longueur sur la droite
    ═══════════════════════════════════════════ -->
    <div
      class="drawer-backdrop"
      :class="{ 'show': drawerOpen }"
      @click="drawerOpen = false"
    ></div>

    <aside class="mobile-right-drawer" :class="{ 'open': drawerOpen }">
      <!-- En-tête du Drawer -->
      <div class="drawer-header d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center gap-2">
          <img :src="logoOrtie" alt="LEO Club Ortie" style="height:36px; width:auto;" />
          <img :src="logoAcacia" alt="Lions Club Acacia" style="height:36px; width:auto;" />
          <span class="fw-bold text-white fs-6 ms-1">Menu</span>
        </div>
        <button class="btn-close-drawer" @click="drawerOpen = false" aria-label="Fermer le menu">
          <i class="bi bi-x-lg"></i>
        </button>
      </div>

      <!-- Liens de navigation du Drawer -->
      <div class="drawer-body">
        <div class="drawer-nav">
          <RouterLink to="/" class="drawer-link" exact-active-class="active">
            <i class="bi bi-house-door-fill"></i>
            <span>Accueil</span>
          </RouterLink>

          <RouterLink to="/a-propos" class="drawer-link" active-class="active">
            <i class="bi bi-info-circle-fill"></i>
            <span>À Propos des Clubs</span>
          </RouterLink>

          <RouterLink to="/actions" class="drawer-link" active-class="active">
            <i class="bi bi-grid-fill"></i>
            <span>Galerie d'Actions</span>
          </RouterLink>

          <RouterLink to="/contact" class="drawer-link" active-class="active">
            <i class="bi bi-envelope-fill"></i>
            <span>Contact &amp; Secrétariat</span>
          </RouterLink>
        </div>

        <!-- Section CTA du Drawer -->
        <div class="drawer-footer mt-auto pt-4">
          <RouterLink to="/adhesion" class="btn-drawer-cta">
            <i class="bi bi-person-plus-fill me-2"></i>
            Rejoindre l'Alliance
          </RouterLink>

          <!-- Informations rapides -->
          <div class="mt-4 pt-3 border-top border-white border-opacity-10 text-white-50 small">
            <div class="d-flex align-items-center gap-2 mb-2">
              <i class="bi bi-geo-alt-fill text-warning"></i>
              <span>Abomey-Calavi, Bénin</span>
            </div>
            <div class="d-flex align-items-center gap-2">
              <i class="bi bi-telephone-fill text-warning"></i>
              <span>+229 01 00 00 00 00</span>
            </div>
          </div>
        </div>
      </div>
    </aside>

    <!-- Espaceur compensant la hauteur de la barre fixe -->
    <div class="fixed-header-spacer"></div>

    <!-- Contenu de la page -->
    <main class="flex-grow-1">
      <RouterView />
    </main>

    <!-- ═══════════════════════════════════════════
         FOOTER OFFICIEL — Structure Réorganisée & Ultra-Responsive
    ═══════════════════════════════════════════ -->
    <footer class="footer-official">
      <div class="container">
        <div class="row g-4 g-lg-5">

          <!-- Colonne 1 : Logos & Présentation Alliance -->
          <div class="col-12 col-lg-5 text-center text-lg-start">
            <div class="d-inline-flex d-lg-flex align-items-center justify-content-center justify-content-lg-start gap-3 mb-3">
              <!-- Vrais logos des deux clubs -->
              <img :src="logoOrtie"  alt="LEO Club Ortie"   style="height:50px; width:auto; object-fit:contain; filter:drop-shadow(0 2px 6px rgba(0,0,0,.5)); flex-shrink:0;" />
              <img :src="logoAcacia" alt="Lions Club Acacia" style="height:50px; width:auto; object-fit:contain; filter:drop-shadow(0 2px 6px rgba(0,0,0,.5)); flex-shrink:0;" />
              <div class="text-start">
                <div class="footer-brand-name">Lions Club Acacia</div>
                <div class="footer-brand-sub">LEO Club Ortie</div>
              </div>
            </div>
            <p class="footer-desc mx-auto mx-lg-0">
              Alliance institutionnelle de service communautaire au Bénin — District 403 A4 du Lions Clubs International. Dédiée à l'action humanitaire et au développement du leadership des jeunes.
            </p>
            <!-- Réseaux sociaux -->
            <div class="d-flex justify-content-center justify-content-lg-start gap-3 mt-3">
              <a href="#" aria-label="Facebook" class="social-btn"><i class="bi bi-facebook"></i></a>
              <a href="#" aria-label="Instagram" class="social-btn"><i class="bi bi-instagram"></i></a>
              <a href="https://wa.me/2290100000000" target="_blank" rel="noopener" aria-label="WhatsApp" class="social-btn social-btn-wa"><i class="bi bi-whatsapp"></i></a>
            </div>
          </div>

          <!-- Colonne 2 : Liens de Navigation -->
          <div class="col-12 col-sm-6 col-lg-3 text-center text-sm-start">
            <div class="footer-section-title">Navigation Rapide</div>
            <ul class="list-unstyled footer-nav-list mb-0">
              <li><RouterLink class="footer-link" to="/"><i class="bi bi-chevron-right me-1 small opacity-50"></i>Accueil</RouterLink></li>
              <li><RouterLink class="footer-link" to="/a-propos"><i class="bi bi-chevron-right me-1 small opacity-50"></i>À Propos des Clubs</RouterLink></li>
              <li><RouterLink class="footer-link" to="/actions"><i class="bi bi-chevron-right me-1 small opacity-50"></i>Galerie d'Actions</RouterLink></li>
              <li><RouterLink class="footer-link" to="/adhesion"><i class="bi bi-chevron-right me-1 small opacity-50"></i>Formulaire d'Adhésion</RouterLink></li>
              <li><RouterLink class="footer-link" to="/contact"><i class="bi bi-chevron-right me-1 small opacity-50"></i>Contact &amp; Secrétariat</RouterLink></li>
            </ul>
          </div>

          <!-- Colonne 3 : Secrétariat Officiel & Contact -->
          <div class="col-12 col-sm-6 col-lg-4 text-center text-sm-start">
            <div class="footer-section-title">Secrétariat Officiel</div>
            <div class="footer-contact-item justify-content-center justify-content-sm-start">
              <i class="bi bi-geo-alt-fill text-warning"></i>
              <span>Abomey-Calavi, République du Bénin</span>
            </div>
            <div class="footer-contact-item justify-content-center justify-content-sm-start">
              <i class="bi bi-envelope-fill text-warning"></i>
              <a href="mailto:contact@lions-leo-abomeycalavi.org">contact@lions-leo-abomeycalavi.org</a>
            </div>
            <div class="footer-contact-item justify-content-center justify-content-sm-start">
              <i class="bi bi-telephone-fill text-warning"></i>
              <a href="tel:+2290100000000">+229 01 00 00 00 00</a>
            </div>
            <div class="mt-3">
              <RouterLink to="/adhesion" class="btn-yellow w-100 text-center" style="font-size: .85rem; padding: .65rem 1rem;">
                <i class="bi bi-person-plus-fill me-1"></i> Rejoindre l'Alliance
              </RouterLink>
            </div>
          </div>

        </div>

        <hr class="footer-divider" />
        <div class="d-flex flex-column flex-md-row align-items-center justify-content-between gap-2 text-center text-md-start footer-legal">
          <span>© 2026 Lions Club Abomey-Calavi Acacia &amp; LEO Club Abomey-Calavi Ortie. Tous droits réservés.</span>
          <span class="badge-district">District 403 A4 &bull; Lions Clubs International</span>
        </div>

      </div>
    </footer>

  </div>
</template>
