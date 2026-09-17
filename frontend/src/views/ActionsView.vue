<script setup>
import GalerieActions from '../components/GalerieActions.vue';
</script>

<template>
  <div>
    <!-- EN-TÊTE DE PAGE -->
    <section class="bg-lions-navy text-white py-5">
      <div class="container py-3">
        <div class="text-center max-w-800 mx-auto">
          <span class="badge bg-white text-lions-navy text-uppercase px-3 py-2 rounded-pill fw-bold mb-3">Réalisations</span>
          <h1 class="display-5 fw-bold text-white mb-3">Galerie des Actions Communautaires</h1>
          <p class="lead text-white-50 fs-6">
            Découvrez nos interventions et projets d'impact social réalisés à Abomey-Calavi et sur l'ensemble du territoire béninois.
          </p>
        </div>
      </div>
    </section>

    <!-- COMPOSANT GALERIE RESTRUCTURÉ -->
    <GalerieActions />
  </div>
</template>
