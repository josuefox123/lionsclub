import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Importation de Bootstrap CSS, JS et Bootstrap Icons
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Styles CSS globaux et personnalisés
import './assets/style.css';

const app = createApp(App);
app.use(router);
app.mount('#app');
