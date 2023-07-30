//import './assets/main.css'

import { createApp } from 'vue'
import { createVuetify } from 'vuetify';
import 'vuetify/styles'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';

import App from './App.vue'
import router from './router'

const vuetify = createVuetify({
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        },
    }
});

const app = createApp(App)

app.use(router)
app.use(vuetify)

app.mount('#app')
