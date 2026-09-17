<script setup>
/**
 * HomeView.vue — Page d'Accueil Institutionnelle
 * Structure Hopenest : Hero asymétrique · Stat Strip · Domaines d'action
 * · Présentation Clubs · Carrousel Actions · CTA Section
 */
import { ref, onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router';
import logoAcacia from '../images/PARRAIN.png';
import logoOrtie  from '../images/projet de fanion ortie2.png';

/* ─── CARROUSSEL ─────────────────────────────────────────────────────────── */
const slides = [
  {
    image: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=1920&q=80',
    eyebrow: 'Alliance LEO &amp; Lions',
    title: 'Servir, Inspirer,<br/>Construire l\'Avenir'
  },
  {
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1920&q=80',
    eyebrow: 'Axe — Lutte contre la Faim',
    title: 'Nourrir chaque\nEnfant du Bénin'
  },
  {
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1920&q=80',
    eyebrow: 'Axe — Environnement',
    title: 'Protéger la Nature\npour les Générations Futures'
  },
  {
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1920&q=80',
    eyebrow: 'Axe — Santé',
    title: 'Accès aux Soins\npour Tous'
  },
  {
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1920&q=80',
    eyebrow: 'Axe — Jeunesse &amp; Éducation',
    title: 'Former des Leaders\nResponsables'
  }
];

const activeIndex = ref(0);
let timer = null;
const next = () => { activeIndex.value = (activeIndex.value + 1) % slides.length; };
const prev = () => { activeIndex.value = (activeIndex.value - 1 + slides.length) % slides.length; };
const goTo = (i) => { activeIndex.value = i; };
onMounted(() => { timer = setInterval(next, 6000); });
onUnmounted(() => { if (timer) clearInterval(timer); });

/* ─── DOMAINES D'ACTION ──────────────────────────────────────────────────── */
const domaines = [
  { icon: 'bi-eye-fill',         label: 'Vision', desc: 'Prévention de la cécité évitable' },
  { icon: 'bi-heart-pulse-fill', label: 'Santé',  desc: 'Dépistage et soins communautaires' },
  { icon: 'bi-tree-fill',        label: 'Env.',    desc: 'Reboisement et éco-citoyenneté' },
  { icon: 'bi-box-seam-fill',    label: 'Faim',   desc: 'Assistance alimentaire et nutrition' },
  { icon: 'bi-book-fill',        label: 'Éduc.',  desc: 'Soutien scolaire et alphabétisation' },
  { icon: 'bi-mortarboard-fill', label: 'Jeunesse', desc: 'Leadership et développement des jeunes' }
];

/* ─── ACTIONS DE DÉMONSTRATION ───────────────────────────────────────────── */
const actions = [
  {
    id: 1,
    titre: 'Campagne de Dépistage du Diabète',
    desc: '300 citoyens dépistés gratuitement au marché de Calavi lors de la Journée mondiale du diabète.',
    categorie: 'Santé',
    club: 'LIONS_ACACIA',
    statut: 'Réalisée',
    date: '14 Fév. 2026',
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    titre: 'Opération Reboisement — UAC',
    desc: '200 plants mis en terre pour lutter contre l\'érosion du campus universitaire.',
    categorie: 'Environnement',
    club: 'LEO_ORTIE',
    statut: 'En cours',
    date: '5 Mars 2026',
    img: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    titre: 'Distribution de Vivres aux Orphelinats',
    desc: 'Remise de vivres et produits de première nécessité à trois orphelinats d\'Abomey-Calavi.',
    categorie: 'Faim',
    club: 'CONJOINT',
    statut: 'Réalisée',
    date: '20 Jan. 2026',
    img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80'
  }
];

const badgeClub = (c) => ({
  'LEO_ORTIE':    { label: 'LEO Ortie',   css: 'badge-leo' },
  'LIONS_ACACIA': { label: 'Lions Acacia', css: 'badge-lions' },
  'CONJOINT':     { label: 'Conjoint',    css: 'badge-conj' }
}[c] || { label: c, css: 'badge-lions' });
</script>

<template>
  <div>

    <!-- ═══════════════════════════════════════════════════════════════
         SECTION HÉRO — Carroussel + Mise en page asymétrique Hopenest
    ═══════════════════════════════════════════════════════════════ -->
    <section class="hero">

      <!-- Slides d'arrière-plan -->
      <div class="position-absolute" style="inset:0;">
        <div
          v-for="(slide, i) in slides" :key="i"
          class="hero-slide"
          :style="{ opacity: activeIndex === i ? 1 : 0, zIndex: activeIndex === i ? 1 : 0 }"
          :class="{ active: activeIndex === i }"
        >
          <img :src="slide.image" :alt="slide.eyebrow" loading="lazy" />
        </div>
        <div class="hero-overlay"></div>
      </div>

      <!-- Contenu hero (centré & aéré sans encombrement) -->
      <div class="container position-relative py-5" style="z-index:2;">
        <div class="row align-items-center justify-content-center">

          <!-- Colonne Principale — Texte du carrousel -->
          <div class="col-12 col-lg-10 col-xl-8">
            <div class="hero-text-card text-center text-md-start">
              <!-- Eyebrow Badge haute visibilité -->
              <div class="d-inline-flex align-items-center gap-2 px-3 py-1.5 rounded-pill mb-3" style="background: rgba(235,183,0,.18); border: 1px solid rgba(235,183,0,.5); color: #EBB700; font-size: .78rem; font-weight: 800; letter-spacing: .12em; text-transform: uppercase;">
                <i class="bi bi-star-fill" style="font-size:.65rem;"></i>
                <span v-html="slides[activeIndex].eyebrow"></span>
              </div>

              <!-- Titre du Slide -->
              <h1
                style="font-size:clamp(2.2rem,5.5vw,3.8rem); font-weight:900; color:#ffffff; line-height:1.12; margin-bottom:1.2rem; text-shadow:0 4px 18px rgba(0,0,0,.8), 0 1px 3px rgba(0,0,0,.9);"
                v-html="slides[activeIndex].title.replace(/\n/g,'<br/>')"
              ></h1>

              <!-- Description sous le titre -->
              <p class="mx-auto mx-md-0" style="font-size:1.08rem; color:#f1f5f9; max-width:600px; margin-bottom:1.8rem; line-height:1.7; text-shadow:0 2px 10px rgba(0,0,0,.7);">
                Alliance institutionnelle du <strong style="color:#ffffff; text-decoration: underline decoration-warning decoration-2;">Lions Club Abomey-Calavi Acacia</strong> et du <strong style="color:#EBB700; font-weight:700;">LEO Club Abomey-Calavi Ortie</strong> — au service des populations béninoises depuis leur fondation.
              </p>

              <!-- Boutons d'action -->
              <div class="d-flex flex-wrap justify-content-center justify-content-md-start gap-3 mb-4">
                <RouterLink to="/adhesion" class="btn-yellow">
                  <i class="bi bi-person-plus-fill"></i> Rejoindre l'Alliance
                </RouterLink>
                <RouterLink to="/actions" class="btn-outline-white">
                  <i class="bi bi-play-circle-fill"></i> Nos Actions
                </RouterLink>
              </div>

              <!-- Indicateurs et contrôles du carroussel -->
              <div class="d-flex align-items-center justify-content-center justify-content-md-start gap-3 pt-3" style="border-top: 1px solid rgba(255,255,255,.15);">
                <button @click="prev" aria-label="Précédent"
                  style="width:38px;height:38px;border-radius:50%;border:1.5px solid rgba(255,255,255,.5);background:rgba(255,255,255,.1);color:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .25s;">
                  <i class="bi bi-chevron-left" style="font-size:.85rem;"></i>
                </button>
                <div class="d-flex gap-2">
                  <button v-for="(s,i) in slides" :key="i" @click="goTo(i)" :aria-label="'Slide '+(i+1)"
                    style="border:none; padding:0; cursor:pointer; border-radius:4px; height:5px; transition:all .35s;"
                    :style="{ width: activeIndex===i ? '34px':'12px', background: activeIndex===i ? '#EBB700':'rgba(255,255,255,.4)' }"
                  ></button>
                </div>
                <button @click="next" aria-label="Suivant"
                  style="width:38px;height:38px;border-radius:50%;border:1.5px solid rgba(255,255,255,.5);background:rgba(255,255,255,.1);color:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .25s;">
                  <i class="bi bi-chevron-right" style="font-size:.85rem;"></i>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════════
         STAT STRIP — Bande jaune (Yellow Strip LCI)
    ═══════════════════════════════════════════════════════════════ -->
    <div class="stat-strip">
      <div class="container">
        <div class="row g-3 text-center">
          <div class="col-6 col-md-3">
            <div class="stat-item">
              <div class="stat-num">50+</div>
              <div class="stat-label">Membres Actifs</div>
            </div>
          </div>
          <div class="col-6 col-md-3">
            <div class="stat-item">
              <div class="stat-num">100+</div>
              <div class="stat-label">Actions Réalisées</div>
            </div>
          </div>
          <div class="col-6 col-md-3">
            <div class="stat-item">
              <div class="stat-num">5</div>
              <div class="stat-label">Axes d'Intervention</div>
            </div>
          </div>
          <div class="col-6 col-md-3">
            <div class="stat-item">
              <div class="stat-num">208</div>
              <div class="stat-label">Pays LCI</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ═══════════════════════════════════════════════════════════════
         DOMAINES D'ACTION — Grille 6 causes (structure Hopenest)
    ═══════════════════════════════════════════════════════════════ -->
    <section class="py-5 bg-off-white">
      <div class="container py-4">

        <div class="text-center mb-5">
          <div class="section-eyebrow mb-2">Lions Clubs International</div>
          <h2 class="section-title">
            Nos Domaines d'Action
            <div class="section-underline center"></div>
          </h2>
          <p class="section-lead mx-auto">
            Le Lions Clubs International mobilise ses ressources autour de cinq grandes causes mondiales, amplifiées localement par nos clubs à Abomey-Calavi.
          </p>
        </div>

        <div class="row g-3 g-lg-4">
          <div v-for="(d, i) in domaines" :key="i" class="col-6 col-md-4 col-lg-2">
            <div class="cause-tile h-100">
              <div class="cause-icon"><i :class="['bi', d.icon]"></i></div>
              <h6>{{ d.label }}</h6>
              <p>{{ d.desc }}</p>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════════
         SECTION CLUBS — Présentation asymétrique avec Yellow Underline
    ═══════════════════════════════════════════════════════════════ -->
    <section class="py-5 bg-white">
      <div class="container py-4">

        <div class="row g-4 align-items-stretch">

          <!-- LEO Club Ortie -->
          <div class="col-12 col-lg-6">
            <div class="orientation-panel h-100">
              <div class="orientation-header orientation-header-purple">
                <div class="d-flex justify-content-between align-items-center">
                  <span style="font-size:.65rem; font-weight:700; letter-spacing:.12em; text-transform:uppercase; color:rgba(255,255,255,.55);">Club Filleul</span>
                  <span style="font-size:.65rem; font-weight:700; letter-spacing:.08em; text-transform:uppercase; background:rgba(235,183,0,.2); color:#EBB700; border:1px solid rgba(235,183,0,.4); border-radius:50px; padding:.22rem .7rem;">12 – 30 ans</span>
                </div>
                <h3 style="font-size:1.5rem; font-weight:900; color:#fff; margin-top:.4rem; margin-bottom:0; text-transform:uppercase; letter-spacing:.02em;">LEO Club Abomey-Calavi Ortie</h3>
              </div>
              <div class="orientation-body">
                <p style="font-size:.9rem; color:#6b7280; line-height:1.75; margin-bottom:1.4rem;">
                  Le LEO Club Ortie réunit les jeunes étudiants et cadres d'Abomey-Calavi autour d'une conviction : le leadership se forge dans l'action solidaire. <strong>LEO</strong> = Leadership, Expérience, Opportunité.
                </p>
                <div class="checklist-row"><i class="bi bi-check2-circle"></i><div><strong>Leadership :</strong> Organisation, gestion d'équipe et prise de décision.</div></div>
                <div class="checklist-row"><i class="bi bi-check2-circle"></i><div><strong>Expérience :</strong> Projets humanitaires à fort impact social sur le terrain.</div></div>
                <div class="checklist-row"><i class="bi bi-check2-circle"></i><div><strong>Opportunité :</strong> Réseau éthique national et international.</div></div>
                <div class="mt-4 pt-4" style="border-top:1px solid #e8eaef;">
                  <RouterLink to="/adhesion" class="btn-blue" style="font-size:.875rem;">Rejoindre le LEO Club</RouterLink>
                </div>
              </div>
            </div>
          </div>

          <!-- Lions Club Acacia -->
          <div class="col-12 col-lg-6">
            <div class="orientation-panel h-100">
              <div class="orientation-header orientation-header-blue">
                <div class="d-flex justify-content-between align-items-center">
                  <span style="font-size:.65rem; font-weight:700; letter-spacing:.12em; text-transform:uppercase; color:rgba(255,255,255,.55);">Club Parrain</span>
                  <span style="font-size:.65rem; font-weight:700; letter-spacing:.08em; text-transform:uppercase; background:rgba(235,183,0,.2); color:#EBB700; border:1px solid rgba(235,183,0,.4); border-radius:50px; padding:.22rem .7rem;">Professionnels</span>
                </div>
                <h3 style="font-size:1.5rem; font-weight:900; color:#fff; margin-top:.4rem; margin-bottom:0; text-transform:uppercase; letter-spacing:.02em;">Lions Club Abomey-Calavi Acacia</h3>
              </div>
              <div class="orientation-body">
                <p style="font-size:.9rem; color:#6b7280; line-height:1.75; margin-bottom:1.4rem;">
                  Club parrain de l'Acacia, il rassemble des leaders communautaires et cadres professionnels unis par la philosophie du don de soi et la gouvernance de projets à fort impact social.
                </p>
                <div class="checklist-row"><i class="bi bi-check2-circle"></i><div><strong>Philanthropie :</strong> Gouvernance et financement d'actions sociales majeures.</div></div>
                <div class="checklist-row"><i class="bi bi-check2-circle"></i><div><strong>Mentorat :</strong> Accompagnement stratégique des membres du LEO Club Ortie.</div></div>
                <div class="checklist-row"><i class="bi bi-check2-circle"></i><div><strong>Réseau Mondial :</strong> Accès au réseau du Lions Clubs International — District 403 A4.</div></div>
                <div class="mt-4 pt-4" style="border-top:1px solid #e8eaef;">
                  <RouterLink to="/adhesion" class="btn-yellow" style="font-size:.875rem;">Rejoindre le Lions Club</RouterLink>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════════
         APERÇU GALERIE — 3 dernières actions (Campaign Cards Hopenest)
    ═══════════════════════════════════════════════════════════════ -->
    <section class="py-5 bg-off-white">
      <div class="container py-4">

        <div class="d-flex align-items-end justify-content-between mb-5 flex-wrap gap-3">
          <div>
            <div class="section-eyebrow mb-2">Réalisations Récentes</div>
            <h2 class="section-title mb-0">
              Nos Dernières Actions
              <div class="section-underline" style="margin-bottom:0;"></div>
            </h2>
          </div>
          <RouterLink to="/actions" class="btn-blue" style="white-space:nowrap; font-size:.875rem;">
            Voir toutes les actions <i class="bi bi-arrow-right ms-1"></i>
          </RouterLink>
        </div>

        <div class="row g-4">
          <div v-for="action in actions" :key="action.id" class="col-12 col-md-6 col-lg-4">
            <div class="campaign-card h-100">
              <div class="campaign-img">
                <img :src="action.img" :alt="action.titre" loading="lazy" />
                <span class="badge-cause" :class="badgeClub(action.club).css">
                  {{ badgeClub(action.club).label }}
                </span>
              </div>
              <div class="campaign-body">
                <div class="mb-2 d-flex gap-2">
                  <span class="badge-status" :class="action.statut === 'Réalisée' ? 'status-done' : 'status-ongoing'">
                    {{ action.statut }}
                  </span>
                  <span style="font-size:.65rem; font-weight:700; letter-spacing:.06em; text-transform:uppercase; background:#f3f4f8; color:#6b7280; border-radius:50px; padding:.25rem .65rem;">
                    {{ action.categorie }}
                  </span>
                </div>
                <h5>{{ action.titre }}</h5>
                <p>{{ action.desc }}</p>
                <div class="campaign-meta">
                  <span><i class="bi bi-calendar3 me-1"></i>{{ action.date }}</span>
                  <span style="font-weight:600; color:#00338D; font-size:.78rem;">Voir le détail</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════════
         CTA STRIP — Section violette avec angle (Hopenest-inspired)
    ═══════════════════════════════════════════════════════════════ -->
    <section class="purple-strip angled-both py-5" style="padding: 5rem 0 !important;">
      <div class="container position-relative" style="z-index:1;">
        <div class="row align-items-center g-4">
          <div class="col-12 col-lg-8 text-center text-lg-start">
            <div style="font-size:.72rem; font-weight:700; letter-spacing:.14em; text-transform:uppercase; color:rgba(235,183,0,.9); margin-bottom:.5rem;">Rejoindre l'Alliance</div>
            <h2 style="font-size:clamp(1.8rem,4vw,2.8rem); font-weight:900; color:#fff; margin-bottom:.75rem;">
              Engagez-vous pour <span class="yellow-underline">votre Communauté</span>
            </h2>
            <p style="color:rgba(255,255,255,.65); font-size:.95rem; max-width:560px;">
              Que vous soyez étudiant passionné ou professionnel accompli, il y a une place pour vous au sein de notre alliance. Rejoignez des centaines de Béninois engagés.
            </p>
          </div>
          <div class="col-12 col-lg-4 text-center text-lg-end">
            <div class="d-flex flex-column align-items-center align-items-lg-end gap-3">
              <RouterLink to="/adhesion" class="btn-yellow" style="font-size:1rem; padding:.9rem 2.5rem;">
                <i class="bi bi-person-plus-fill"></i> Soumettre ma Candidature
              </RouterLink>
              <RouterLink to="/a-propos" class="btn-outline-white" style="font-size:.9rem;">
                En savoir plus sur nos clubs
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>
