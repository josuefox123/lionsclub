<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div>
    <!-- SECTION HERO INSTITUTIONNELLE -->
    <section class="bg-lions-gradient text-white py-5 py-lg-6 position-relative overflow-hidden">
      <div class="container py-4 py-lg-5">
        <div class="row align-items-center gy-5">
          
          <div class="col-12 col-lg-7 text-center text-lg-start">
            
            <div class="d-inline-flex align-items-center gap-2 bg-white bg-opacity-10 px-3 py-2 rounded-pill mb-4 border border-white border-opacity-20">
              <i class="bi bi-geo-alt-fill text-lions-gold"></i>
              <span class="small fw-semibold text-white">District 403 A4 • Abomey-Calavi, Bénin</span>
            </div>

            <h1 class="display-4 fw-bold text-white mb-4 lh-tight">
              Lions Club Abomey-Calavi Acacia <br class="d-none d-md-block" />
              <span class="text-lions-gold">& LEO Club Abomey-Calavi Ortie</span>
            </h1>

            <p class="lead text-white-50 mb-5 fs-5 max-w-800">
              Alliance institutionnelle dédiée à l'action humanitaire, à la philanthropie et à l'émergence d'une jeunesse leader au service des populations béninoises.
            </p>

            <div class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-lg-start">
              <RouterLink to="/adhesion" class="btn btn-lions-gold btn-lg px-4 py-3 rounded-3 shadow">
                <i class="bi bi-person-plus-fill me-2"></i> Rejoindre l'Alliance
              </RouterLink>
              <RouterLink to="/actions" class="btn btn-outline-light btn-lg px-4 py-3 rounded-3">
                <i class="bi bi-grid-3x3-gap-fill me-2"></i> Nos Réalisations
              </RouterLink>
            </div>

          </div>

          <div class="col-12 col-lg-5">
            <div class="card border-0 bg-white bg-opacity-10 p-4 rounded-4 backdrop-blur border border-white border-opacity-20 text-white shadow-lg">
              
              <div class="d-flex align-items-center gap-3 p-3 rounded-3 mb-3 bg-lions-navy border border-white border-opacity-10">
                <div class="bg-lions-gold text-white p-3 rounded-circle d-flex align-items-center justify-content-center" style="width: 50px; height: 50px;">
                  <i class="bi bi-award-fill fs-4"></i>
                </div>
                <div>
                  <h6 class="fw-bold mb-0 text-lions-gold">Lions Club Acacia</h6>
                  <small class="text-white-50">Club Parrain • Philanthropie & Gouvernance</small>
                </div>
              </div>

              <div class="d-flex align-items-center gap-3 p-3 rounded-3 bg-leo-gradient border border-white border-opacity-10">
                <div class="bg-white text-leo-maroon p-3 rounded-circle d-flex align-items-center justify-content-center" style="width: 50px; height: 50px;">
                  <i class="bi bi-people-fill fs-4"></i>
                </div>
                <div>
                  <h6 class="fw-bold mb-0 text-white">LEO Club Ortie</h6>
                  <small class="text-white-50">Club Filleul • Leadership & Jeunesse (12-30 ans)</small>
                </div>
              </div>

              <div class="mt-4 pt-3 border-top border-white border-opacity-10 text-center">
                <span class="small text-white-50 fst-italic">"Nous Servons" — Devise du Lions Clubs International</span>
              </div>

            </div>
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
            Le Lions Clubs International concentre ses efforts sur les grandes causes mondiales pour répondre aux défis majeurs des communautés.
          </p>
        </div>

        <div class="row g-4">
          
          <div class="col-12 col-md-6 col-lg-4">
            <div class="card card-institution h-100 p-4">
              <div class="bg-primary bg-opacity-10 p-3 rounded-3 text-primary d-inline-block mb-3" style="width: fit-content;">
                <i class="bi bi-heart-pulse-fill fs-3 text-lions-navy"></i>
              </div>
              <h5 class="fw-bold text-dark mb-2">Santé & Lutte contre les Maladies</h5>
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
              <h5 class="fw-bold text-dark mb-2">Protection de l'Environnement</h5>
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
              <h5 class="fw-bold text-dark mb-2">Lutte contre la Faim</h5>
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
          <div class="d-flex justify-content-center gap-3">
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
