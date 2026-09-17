import { createApp } from 'vue';
import App from './App.vue';

// Importation de Bootstrap CSS et JS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Styles CSS globaux et personnalisés
import './assets/style.css';

createApp(App).mount('#app');
