<script setup>
import FormulaireAdhesion from '../components/FormulaireAdhesion.vue';
</script>

<template>
  <div>
    <!-- EN-TÊTE DE PAGE -->
    <section class="bg-lions-navy text-white py-5">
      <div class="container py-3">
        <div class="text-center max-w-800 mx-auto">
          <span class="badge bg-lions-gold text-white text-uppercase px-3 py-2 rounded-pill fw-bold mb-3">Recrutement & Effectifs</span>
          <h1 class="display-5 fw-bold text-white mb-3">Rejoindre nos Clubs de Service</h1>
          <p class="lead text-white-50 fs-6">
            Remplissez le formulaire ci-dessous pour soumettre votre candidature auprès de la commission des effectifs du LEO Club Ortie et du Lions Club Acacia.
          </p>
        </div>
      </div>
    </section>

    <!-- FORMULAIRE ADHÉSION -->
    <FormulaireAdhesion />
  </div>
</template>
