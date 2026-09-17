import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ActionsView from '../views/ActionsView.vue';
import AdhesionView from '../views/AdhesionView.vue';
import ContactView from '../views/ContactView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: { title: 'Accueil - Lions Club Acacia & LEO Club Ortie' }
  },
  {
    path: '/a-propos',
    name: 'About',
    component: AboutView,
    meta: { title: 'À Propos - Lions Club Acacia & LEO Club Ortie' }
  },
  {
    path: '/actions',
    name: 'Actions',
    component: ActionsView,
    meta: { title: 'Nos Actions Communautaires - Galerie Officielle' }
  },
  {
    path: '/adhesion',
    name: 'Adhesion',
    component: AdhesionView,
    meta: { title: 'Rejoindre le Club - Formulaire d\'Adhésion' }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView,
    meta: { title: 'Contact - LEO Club Ortie & Lions Club Acacia' }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  }
});

router.afterEach((to) => {
  document.title = to.meta.title || 'Lions Club Acacia & LEO Club Ortie';
});

export default router;
