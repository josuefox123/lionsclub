import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Importation de Bootstrap CSS et JS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Styles CSS globaux et personnalisés
import './assets/style.css';

const app = createApp(App);
app.use(router);
app.mount('#app');
