import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import GAuth from 'vue3-google-oauth2'
const app = createApp(App)

const gAuthOptions = { clientId: '921534492360-0p4o8gg4coi65c2s3d35hit1vfh7veoq.apps.googleusercontent.com' }

app.use(router).use(GAuth, gAuthOptions).mount('#app')
