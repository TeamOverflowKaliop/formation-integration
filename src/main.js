import { createApp } from 'vue';
import App from './App.vue';

// Project styles
import '@/styles/index.scss';

// Inject icons sprite in project's body
import 'virtual:svg-icons-register';

createApp(App).mount('#app');
