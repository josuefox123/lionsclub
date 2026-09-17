<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div>

    <div class="page-header text-center">
      <div class="container">
        <div class="page-header-badge">Présentation Institutionnelle</div>
        <h1>À Propos de nos Clubs</h1>
        <p>Découvrez l'histoire, la vision et la complémentarité de l'alliance entre le Lions Club Abomey-Calavi Acacia et le LEO Club Abomey-Calavi Ortie.</p>
      </div>
    </div>

    <section class="py-5 bg-off-white">
      <div class="container py-4">

        <div class="row g-4">

          <!-- LEO Club Ortie -->
          <div class="col-12 col-lg-6">
            <div class="orientation-card-leo h-100">
              <div class="orientation-header-leo">
                <div class="d-flex align-items-center justify-content-between mb-1">
                  <span style="font-size:.65rem; font-weight:700; letter-spacing:.1em; text-transform:uppercase; color:rgba(255,255,255,.6);">Club Filleul</span>
                  <span style="font-size:.65rem; font-weight:700; letter-spacing:.08em; text-transform:uppercase; color:#c59b27; border:1px solid rgba(197,155,39,.5); border-radius:50px; padding:.2rem .7rem;">12 – 30 ans</span>
                </div>
                <h2 style="font-family:'Cormorant Garamond',serif; font-size:1.65rem; font-weight:700; color:#fff; margin:0;">LEO Club Abomey-Calavi Ortie</h2>
              </div>
              <div class="p-4 p-lg-5">
                <p style="font-size:.9rem; color:#374151; line-height:1.7; margin-bottom:1.5rem;">
                  Le LEO Club Ortie réunit les jeunes étudiants, diplômés et jeunes cadres d'Abomey-Calavi autour d'une conviction commune : le leadership se forge dans l'action solidaire. L'acronyme <strong>LEO</strong> incarne trois piliers fondamentaux de développement personnel.
                </p>
                <div class="checklist-item">
                  <i class="bi bi-check2-circle text-maroon mt-1"></i>
                  <div>
                    <strong style="color:#111827;">Leadership :</strong>
                    <span style="color:#6b7692;"> Formation à l'organisation, à la gestion d'équipe et à la prise de décision en situation réelle.</span>
                  </div>
                </div>
                <div class="checklist-item">
                  <i class="bi bi-check2-circle text-maroon mt-1"></i>
                  <div>
                    <strong style="color:#111827;">Expérience :</strong>
                    <span style="color:#6b7692;"> Mise en œuvre directe de projets humanitaires à fort impact social sur le terrain.</span>
                  </div>
                </div>
                <div class="checklist-item">
                  <i class="bi bi-check2-circle text-maroon mt-1"></i>
                  <div>
                    <strong style="color:#111827;">Opportunité :</strong>
                    <span style="color:#6b7692;"> Intégration dans un réseau éthique et engagé à l'échelle nationale et internationale.</span>
                  </div>
                </div>
                <div class="mt-4 pt-4" style="border-top:1px solid #dde2ee;">
                  <RouterLink to="/adhesion" class="btn-navy" style="display:inline-block; text-decoration:none; font-size:.875rem;">
                    Rejoindre le LEO Club Ortie
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>

          <!-- Lions Club Acacia -->
          <div class="col-12 col-lg-6">
            <div class="orientation-card-lions h-100">
              <div class="orientation-header-lions">
                <div class="d-flex align-items-center justify-content-between mb-1">
                  <span style="font-size:.65rem; font-weight:700; letter-spacing:.1em; text-transform:uppercase; color:rgba(255,255,255,.6);">Club Parrain</span>
                  <span style="font-size:.65rem; font-weight:700; letter-spacing:.08em; text-transform:uppercase; color:#c59b27; border:1px solid rgba(197,155,39,.5); border-radius:50px; padding:.2rem .7rem;">Professionnels</span>
                </div>
                <h2 style="font-family:'Cormorant Garamond',serif; font-size:1.65rem; font-weight:700; color:#fff; margin:0;">Lions Club Abomey-Calavi Acacia</h2>
              </div>
              <div class="p-4 p-lg-5">
                <p style="font-size:.9rem; color:#374151; line-height:1.7; margin-bottom:1.5rem;">
                  Club de service parrain, le Lions Club Acacia rassemble des hommes et des femmes d'expérience, leaders communautaires et cadres professionnels, unis par la philosophie du don de soi et la gouvernance de projets à fort impact social.
                </p>
                <div class="checklist-item">
                  <i class="bi bi-check2-circle text-navy mt-1"></i>
                  <div>
                    <strong style="color:#111827;">Philanthropie &amp; Subventions :</strong>
                    <span style="color:#6b7692;"> Gouvernance et financement d'infrastructures d'impact social sur le territoire béninois.</span>
                  </div>
                </div>
                <div class="checklist-item">
                  <i class="bi bi-check2-circle text-navy mt-1"></i>
                  <div>
                    <strong style="color:#111827;">Mentorat &amp; Parrainage :</strong>
                    <span style="color:#6b7692;"> Accompagnement stratégique et coaching des jeunes membres du LEO Club Ortie.</span>
                  </div>
                </div>
                <div class="checklist-item">
                  <i class="bi bi-check2-circle text-navy mt-1"></i>
                  <div>
                    <strong style="color:#111827;">Réseau Mondial :</strong>
                    <span style="color:#6b7692;"> Accès au plus grand club de service au monde — Lions Clubs International, District 403 A4.</span>
                  </div>
                </div>
                <div class="mt-4 pt-4" style="border-top:1px solid #dde2ee;">
                  <RouterLink to="/adhesion" class="btn-gold" style="display:inline-block; text-decoration:none; font-size:.875rem;">
                    Rejoindre le Lions Club Acacia
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>

  </div>
</template>
