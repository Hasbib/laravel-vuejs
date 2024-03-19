
import './bootstrap';
import { createApp } from 'vue';

const app = createApp({});

import Index from './components/Index.vue';
import Login from './components/Login.vue';


app.component('index', Index);
app.component('login', Login);

app.mount('#app');
