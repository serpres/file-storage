import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router/router';
import vuetify from './vuetify';

createApp(App).use(vuetify).use(router).mount('#app');
