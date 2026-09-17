<script setup>
const scrollToFormulaire = () => {
  const el = document.getElementById('formulaire-adhesion');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<template>
  <section class="py-5 bg-white">
    <div class="container py-4">
      
      <div class="text-center max-w-700 mx-auto mb-5">
        <span class="text-uppercase text-primary fw-bold small tracking-wider">Orientation & Découverte</span>
        <h2 class="display-6 fw-bold mt-1 text-dark">Quel club correspond à votre profil ?</h2>
        <p class="text-muted fs-5">
          Que vous soyez jeune étudiant désireux d'impacter votre communauté ou professionnel aguerri souhaitant transmettre et financer des œuvres, nous avons un espace pour vous.
        </p>
      </div>

      <div class="row g-4 justify-content-center">
        
        <!-- CARTE LEO CLUB ORTIE -->
        <div class="col-12 col-md-6 col-lg-5">
          <div class="card h-100 border-0 shadow-sm hover-lift rounded-4 overflow-hidden border-top border-5 border-teal">
            <div class="card-body p-4 p-md-5 d-flex flex-column">
              
              <div class="d-flex align-items-center justify-content-between mb-4">
                <div class="bg-teal bg-opacity-10 p-3 rounded-circle text-teal">
                  <i class="bi bi-people-fill fs-2 text-success"></i>
                </div>
                <span class="badge bg-success bg-opacity-10 text-success px-3 py-2 rounded-pill fw-semibold">12 à 30 Ans</span>
              </div>

              <h3 class="fw-bold text-dark mb-2">LEO Club Abomey-Calavi Ortie</h3>
              <p class="text-muted mb-4">
                Le club idéal pour les jeunes dynamiques, étudiants et jeunes professionnels désirant développer leur leadership et agir sur le terrain.
              </p>

              <hr class="my-3 opacity-10" />

              <ul class="list-unstyled space-y-3 flex-grow-1 text-secondary mb-4">
                <li class="d-flex align-items-start mb-2">
                  <i class="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                  <span><strong>Développement du Leadership :</strong> Formations, prises de parole et gestion de projets humanitaires.</span>
                </li>
                <li class="d-flex align-items-start mb-2">
                  <i class="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                  <span><strong>Réseau Dynamique :</strong> Rencontrez des jeunes motivés d'Abomey-Calavi et de tout le Bénin.</span>
                </li>
                <li class="d-flex align-items-start mb-2">
                  <i class="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                  <span><strong>Actions de Terrain :</strong> Organisation directe de don de sang, reboisement et soutien scolaire.</span>
                </li>
              </ul>

              <button @click="scrollToFormulaire" class="btn btn-outline-success btn-lg w-100 rounded-3 fw-bold mt-auto">
                Rejoindre le LEO Club Ortie
              </button>

            </div>
          </div>
        </div>

        <!-- CARTE LIONS CLUB ACACIA -->
        <div class="col-12 col-md-6 col-lg-5">
          <div class="card h-100 border-0 shadow-sm hover-lift rounded-4 overflow-hidden border-top border-5 border-primary">
            <div class="card-body p-4 p-md-5 d-flex flex-column">
              
              <div class="d-flex align-items-center justify-content-between mb-4">
                <div class="bg-primary bg-opacity-10 p-3 rounded-circle text-primary">
                  <i class="bi bi-award-fill fs-2 text-primary"></i>
                </div>
                <span class="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill fw-semibold">30+ Ans / Pros</span>
              </div>

              <h3 class="fw-bold text-dark mb-2">Lions Club Abomey-Calavi Acacia</h3>
              <p class="text-muted mb-4">
                Destiné aux dirigeants, cadres et leaders d'expérience souhaitant structurer des projets philanthropiques majeurs et mentorer la jeunesse.
              </p>

              <hr class="my-3 opacity-10" />

              <ul class="list-unstyled space-y-3 flex-grow-1 text-secondary mb-4">
                <li class="d-flex align-items-start mb-2">
                  <i class="bi bi-check-circle-fill text-primary me-2 mt-1"></i>
                  <span><strong>Philanthropie & Subventions :</strong> Gouvernance et financement d'infrastructures d'impact social.</span>
                </li>
                <li class="d-flex align-items-start mb-2">
                  <i class="bi bi-check-circle-fill text-primary me-2 mt-1"></i>
                  <span><strong>Mentorat & Parrainage :</strong> Accompagnement stratégique des jeunes du LEO Club Ortie.</span>
                </li>
                <li class="d-flex align-items-start mb-2">
                  <i class="bi bi-check-circle-fill text-primary me-2 mt-1"></i>
                  <span><strong>Réseau International :</strong> Intégration au plus grand club de service au monde (Lions Clubs International).</span>
                </li>
              </ul>

              <button @click="scrollToFormulaire" class="btn btn-primary btn-lg w-100 rounded-3 fw-bold mt-auto">
                Rejoindre le Lions Club Acacia
              </button>

            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
