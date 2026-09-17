<script setup>
/**
 * AboutView.vue — À Propos des Clubs
 * Présentation institutionnelle LEO Club Ortie & Lions Club Acacia
 */
import { RouterLink } from 'vue-router';
import logoAcacia from '../images/PARRAIN.png';
import logoOrtie  from '../images/projet de fanion ortie2.png';
</script>

<template>
  <div>
    <div class="page-header text-center">
      <div class="container">
        <div class="page-header-eyebrow">Présentation Institutionnelle</div>
        <h1>À Propos de nos Clubs</h1>
        <div class="section-underline center" style="margin:1rem auto 1.25rem;"></div>
        <p class="mx-auto">Découvrez l'histoire, la mission et la complémentarité des deux clubs formant l'alliance d'Abomey-Calavi.</p>
      </div>
    </div>

    <section class="py-5 bg-off-white">
      <div class="container py-4">

        <!-- Bloc Lions Clubs International -->
        <div class="d-flex flex-column flex-md-row align-items-center gap-4 p-4 p-lg-5 mb-5" style="background:#00338D; border-radius:8px; border-bottom:5px solid #EBB700;">
          <div style="width:64px;height:64px;background:#EBB700;border-radius:8px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
            <i class="bi bi-globe2" style="color:#00338D; font-size:1.8rem;"></i>
          </div>
          <div>
            <div style="font-size:.68rem; font-weight:700; letter-spacing:.12em; text-transform:uppercase; color:#EBB700; margin-bottom:.3rem;">Affiliation Mondiale</div>
            <h3 style="font-size:1.3rem; font-weight:900; color:#fff; margin-bottom:.3rem; text-transform:uppercase; letter-spacing:.02em;">Lions Clubs International — District 403 A4</h3>
            <p style="font-size:.9rem; color:rgba(255,255,255,.65); margin:0; line-height:1.65;">Plus grande organisation de service au monde · 1,4 million de membres · 208 pays et territoires · Fondée en 1917 à Chicago.</p>
          </div>
        </div>

        <!-- Cartes des deux clubs -->
        <div class="row g-4">

          <div class="col-12 col-lg-6">
            <div class="orientation-panel h-100">
              <div class="orientation-header orientation-header-purple">
                <div class="d-flex justify-content-between align-items-start">
                  <span style="font-size:.65rem; font-weight:700; letter-spacing:.12em; text-transform:uppercase; color:rgba(255,255,255,.55);">Club Filleul</span>
                  <span style="font-size:.65rem; font-weight:700; background:rgba(235,183,0,.15); color:#EBB700; border:1px solid rgba(235,183,0,.4); border-radius:50px; padding:.22rem .7rem; white-space:nowrap;">12 – 30 ans</span>
                </div>
                <div class="d-flex align-items-center gap-3 mt-2">
                  <img :src="logoOrtie" alt="Fanion LEO Club Ortie" style="height:60px; width:auto; object-fit:contain; filter:drop-shadow(0 3px 8px rgba(0,0,0,.45)); flex-shrink:0;" />
                  <div>
                    <h2 style="font-size:1.4rem; font-weight:900; color:#fff; margin-bottom:.2rem; text-transform:uppercase;">LEO Club Abomey-Calavi Ortie</h2>
                    <p style="font-size:.78rem; color:#EBB700; margin:0; font-weight:500; text-transform:uppercase; letter-spacing:.05em;">Leadership · Expérience · Opportunité</p>
                  </div>
                </div>
              </div>
              <div class="orientation-body">
                <p style="font-size:.9rem; color:#6b7280; line-height:1.75; margin-bottom:1.5rem;">
                  Le LEO Club Ortie réunit les jeunes étudiants, diplômés et jeunes actifs d'Abomey-Calavi autour d'un engagement commun : le service à la communauté comme fondement du leadership. Chaque réalisation de terrain forge les compétences de demain.
                </p>
                <div class="checklist-row"><i class="bi bi-check2-circle"></i><div><strong>Leadership :</strong> Développement personnel, gestion de projet et art oratoire.</div></div>
                <div class="checklist-row"><i class="bi bi-check2-circle"></i><div><strong>Expérience :</strong> Réalisation directe d'actions humanitaires sur le terrain.</div></div>
                <div class="checklist-row"><i class="bi bi-check2-circle"></i><div><strong>Opportunité :</strong> Accès au réseau Lions International et aux conventions régionales et mondiales.</div></div>
                <div class="checklist-row"><i class="bi bi-check2-circle"></i><div><strong>Mentorat :</strong> Encadrement par les membres expérimentés du Lions Club Acacia.</div></div>
                <div class="mt-4 pt-4" style="border-top:1px solid #e8eaef;">
                  <RouterLink to="/adhesion" class="btn-blue" style="font-size:.875rem;">Rejoindre le LEO Club Ortie</RouterLink>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-lg-6">
            <div class="orientation-panel h-100">
              <div class="orientation-header orientation-header-blue">
                <div class="d-flex justify-content-between align-items-start">
                  <span style="font-size:.65rem; font-weight:700; letter-spacing:.12em; text-transform:uppercase; color:rgba(255,255,255,.55);">Club Parrain</span>
                  <span style="font-size:.65rem; font-weight:700; background:rgba(235,183,0,.15); color:#EBB700; border:1px solid rgba(235,183,0,.4); border-radius:50px; padding:.22rem .7rem; white-space:nowrap;">Professionnels</span>
                </div>
                <div class="d-flex align-items-center gap-3 mt-2">
                  <img :src="logoAcacia" alt="Fanion Lions Club Acacia" style="height:60px; width:auto; object-fit:contain; filter:drop-shadow(0 3px 8px rgba(0,0,0,.45)); flex-shrink:0;" />
                  <div>
                    <h2 style="font-size:1.4rem; font-weight:900; color:#fff; margin-bottom:.2rem; text-transform:uppercase;">Lions Club Abomey-Calavi Acacia</h2>
                    <p style="font-size:.78rem; color:#EBB700; margin:0; font-weight:500; text-transform:uppercase; letter-spacing:.05em;">Nous Servons · We Serve</p>
                  </div>
                </div>
              </div>
              <div class="orientation-body">
                <p style="font-size:.9rem; color:#6b7280; line-height:1.75; margin-bottom:1.5rem;">
                  Club de service parrain, le Lions Club Acacia rassemble des cadres et professionnels d'Abomey-Calavi unis par la philosophie du don de soi. Il joue un rôle clé dans la gouvernance et le financement des actions sociales majeures.
                </p>
                <div class="checklist-row"><i class="bi bi-check2-circle"></i><div><strong>Philanthropie :</strong> Gouvernance et financement d'actions à fort impact social.</div></div>
                <div class="checklist-row"><i class="bi bi-check2-circle"></i><div><strong>Parrainage :</strong> Accompagnement stratégique du LEO Club Ortie.</div></div>
                <div class="checklist-row"><i class="bi bi-check2-circle"></i><div><strong>Réseau :</strong> Intégration au plus grand réseau de service mondial.</div></div>
                <div class="checklist-row"><i class="bi bi-check2-circle"></i><div><strong>Conventions :</strong> Participation aux conventions de district, nationales et internationales.</div></div>
                <div class="mt-4 pt-4" style="border-top:1px solid #e8eaef;">
                  <RouterLink to="/adhesion" class="btn-yellow" style="font-size:.875rem;">Rejoindre le Lions Club Acacia</RouterLink>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>
