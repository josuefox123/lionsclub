<script setup>
const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<template>
  <header class="bg-gradient-hero text-white py-5 py-md-6 position-relative overflow-hidden">
    <!-- Cercles décoratifs en arrière-plan -->
    <div class="position-absolute top-0 start-0 translate-middle rounded-circle bg-warning opacity-10" style="width: 400px; height: 400px; filter: blur(80px);"></div>
    <div class="position-absolute bottom-0 end-0 translate-middle-x rounded-circle bg-info opacity-10" style="width: 500px; height: 500px; filter: blur(100px);"></div>

    <div class="container position-relative z-1 py-4 py-md-5">
      <div class="row align-items-center gy-5">
        
        <div class="col-12 col-lg-7 text-center text-lg-start">
          
          <div class="d-inline-flex align-items-center gap-2 bg-white bg-opacity-10 backdrop-blur px-3 py-2 rounded-pill mb-3 border border-white border-opacity-25">
            <span class="badge bg-warning text-dark rounded-pill">Bénin</span>
            <span class="small fw-semibold text-light">Abomey-Calavi • District 403 A4</span>
          </div>

          <h1 class="display-4 fw-extrabold text-white mb-3 lh-sm">
            Ensemble pour Servir : <br class="d-none d-md-block" />
            <span class="text-gold">Lions Club Acacia</span> & <span class="text-info">LEO Club Ortie</span>
          </h1>

          <p class="lead text-white-50 mb-4 me-lg-4 fs-5">
            Une alliance intergénérationnelle d'impact social à Abomey-Calavi. Entreprenez, développez votre leadership et transformez des vies au cœur de la communauté.
          </p>

          <!-- Boutons d'action visibles dès le chargement mobile -->
          <div class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-lg-start">
            <button @click="scrollToSection('formulaire-adhesion')" class="btn btn-gold btn-lg px-4 py-3 rounded-3 shadow-lg">
              <i class="bi bi-person-plus-fill me-2"></i> Rejoindre le club
            </button>
            <button @click="scrollToSection('galerie-actions')" class="btn btn-outline-light btn-lg px-4 py-3 rounded-3 border-2">
              <i class="bi bi-grid-3x3-gap-fill me-2"></i> Découvrir nos actions
            </button>
          </div>

          <!-- Statistiques Rapides -->
          <div class="row g-3 mt-4 pt-3 border-top border-white border-opacity-10 text-center text-lg-start">
            <div class="col-4">
              <div class="h3 fw-bold text-gold mb-0">+50</div>
              <div class="small text-white-50">Membres Actifs</div>
            </div>
            <div class="col-4">
              <div class="h3 fw-bold text-gold mb-0">+100</div>
              <div class="small text-white-50">Actions Solidaires</div>
            </div>
            <div class="col-4">
              <div class="h3 fw-bold text-gold mb-0">5</div>
              <div class="small text-white-50">Axes Mondiaux</div>
            </div>
          </div>

        </div>

        <div class="col-12 col-lg-5">
          <div class="position-relative text-center">
            
            <!-- Carte d'Illustration Institutionnelle -->
            <div class="card border-0 bg-white bg-opacity-10 backdrop-blur p-4 rounded-4 shadow-2xl border border-white border-opacity-25 text-white">
              <div class="row g-3">
                
                <!-- Carte LEO -->
                <div class="col-12">
                  <div class="p-3 rounded-3 bg-gradient-leo border border-white border-opacity-20 d-flex align-items-center gap-3">
                    <div class="bg-warning text-dark rounded-circle p-3 d-flex align-items-center justify-content-center" style="width: 55px; height: 55px;">
                      <i class="bi bi-lightning-charge-fill fs-3"></i>
                    </div>
                    <div class="text-start">
                      <h5 class="fw-bold mb-0 text-white">LEO Club Ortie</h5>
                      <span class="small opacity-75">Leadership • Expérience • Opportunité (12-30 ans)</span>
                    </div>
                  </div>
                </div>

                <!-- Carte Lions Parrain -->
                <div class="col-12">
                  <div class="p-3 rounded-3 bg-gradient-lions border border-white border-opacity-20 d-flex align-items-center gap-3">
                    <div class="bg-primary text-white rounded-circle p-3 d-flex align-items-center justify-content-center" style="width: 55px; height: 55px;">
                      <i class="bi bi-award-fill fs-3 text-gold"></i>
                    </div>
                    <div class="text-start">
                      <h5 class="fw-bold mb-0 text-gold">Lions Club Acacia</h5>
                      <span class="small opacity-75">Club Parrain • Philanthropie & Mentorat</span>
                    </div>
                  </div>
                </div>

              </div>

              <div class="mt-3 p-2 bg-dark bg-opacity-30 rounded-3 text-center">
                <small class="fst-italic opacity-75">"Nous Servons - We Serve"</small>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  </header>
</template>
