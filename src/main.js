const { createApp } = require('vue');
import {createPinia} from 'pinia'
import App from './App.vue';

createApp(App).use(createPinia()).mount('#app');
