<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div>
    <!-- EN-TÊTE DE PAGE -->
    <section class="bg-lions-navy text-white py-5">
      <div class="container py-3">
        <div class="text-center max-w-800 mx-auto">
          <span class="badge bg-white text-lions-navy text-uppercase px-3 py-2 rounded-pill fw-bold mb-3">Institutionnel</span>
          <h1 class="display-5 fw-bold text-white mb-3">À Propos de nos Clubs</h1>
          <p class="lead text-white-50 fs-6">
            Découvrez l'histoire, la vision et la structure de l'alliance entre le Lions Club Abomey-Calavi Acacia et le LEO Club Abomey-Calavi Ortie.
          </p>
        </div>
      </div>
    </section>

    <!-- SECTION PRÉSENTATION PARRAIN / FILLEUL -->
    <section class="py-5 bg-white">
      <div class="container py-4">
        
        <div class="row g-5 align-items-center mb-5">
          
          <!-- LEO CLUB ORTIE -->
          <div class="col-12 col-lg-6">
            <div class="p-4 p-md-5 rounded-4 bg-light border border-start border-5 border-danger shadow-sm">
              <div class="d-flex align-items-center justify-content-between mb-3">
                <span class="badge badge-leo px-3 py-2 rounded-pill">Jeunesse & Leadership</span>
                <span class="small fw-semibold text-muted">12 - 30 Ans</span>
              </div>
              <h3 class="fw-bold text-leo-maroon mb-3">LEO Club Abomey-Calavi Ortie</h3>
              <p class="text-muted leading-relaxed mb-4">
                Le LEO Club Ortie réunit les jeunes étudiants, diplômés et jeunes professionnels d'Abomey-Calavi. L'acronyme <strong>LEO</strong> incarne trois piliers fondamentaux :
              </p>
              <ul class="list-unstyled space-y-3 text-secondary mb-4">
                <li class="d-flex align-items-start mb-2">
                  <i class="bi bi-check2-square text-leo-maroon me-2 mt-1"></i>
                  <span><strong>Leadership :</strong> Apprentissage de l'organisation, de la gestion d'équipe et de la prise de décision.</span>
                </li>
                <li class="d-flex align-items-start mb-2">
                  <i class="bi bi-check2-square text-leo-maroon me-2 mt-1"></i>
                  <span><strong>Expérience :</strong> Mise en œuvre directe de projets communautaires à fort impact social.</span>
                </li>
                <li class="d-flex align-items-start mb-2">
                  <i class="bi bi-check2-square text-leo-maroon me-2 mt-1"></i>
                  <span><strong>Opportunité :</strong> Développement d'un réseau éthique et engagé à l'échelle nationale et internationale.</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- LIONS CLUB ACACIA -->
          <div class="col-12 col-lg-6">
            <div class="p-4 p-md-5 rounded-4 bg-light border border-start border-5 border-primary shadow-sm">
              <div class="d-flex align-items-center justify-content-between mb-3">
                <span class="badge badge-lions px-3 py-2 rounded-pill">Club Parrain</span>
                <span class="small fw-semibold text-muted">Professionnels & Cadres</span>
              </div>
              <h3 class="fw-bold text-lions-navy mb-3">Lions Club Abomey-Calavi Acacia</h3>
              <p class="text-muted leading-relaxed mb-4">
                Club de service parrain, le Lions Club Acacia rassemble des hommes et des femmes d'expérience, leaders communautaires et cadres professionnels unis par la philosophie du don de soi.
              </p>
              <ul class="list-unstyled space-y-3 text-secondary mb-4">
                <li class="d-flex align-items-start mb-2">
                  <i class="bi bi-check2-square text-lions-navy me-2 mt-1"></i>
                  <span><strong>Gouvernance & Philanthropie :</strong> Financement et parrainage de grands travaux sociaux.</span>
                </li>
                <li class="d-flex align-items-start mb-2">
                  <i class="bi bi-check2-square text-lions-navy me-2 mt-1"></i>
                  <span><strong>Mentorat :</strong> Accompagnement stratégique et coaching des jeunes membres du LEO Club Ortie.</span>
                </li>
                <li class="d-flex align-items-start mb-2">
                  <i class="bi bi-check2-square text-lions-navy me-2 mt-1"></i>
                  <span><strong>Réseau Mondial :</strong> Intégration dans le réseau global du Lions Clubs International (District 403 A4).</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        <!-- APPEL AU FORMULAIRE -->
        <div class="text-center mt-4">
          <RouterLink to="/adhesion" class="btn btn-lions-gold btn-lg px-5 py-3 rounded-3 shadow">
            Déposer une Candidature d'Adhésion
          </RouterLink>
        </div>

      </div>
    </section>
  </div>
</template>
