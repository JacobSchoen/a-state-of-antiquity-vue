import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import 'primeflex/primeflex.css'
//theme
import 'primevue/resources/themes/bootstrap4-light-blue/theme.css'

//core
import 'primevue/resources/primevue.min.css'
import 'primeflex/primeflex.css'

import Button from 'primevue/button'
import DataView from 'primevue/dataview'
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions'
import ProgressSpinner from 'primevue/progressspinner';
import Image from 'primevue/image';


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)

app.component('Button', Button)
app.component('DataView', DataView)
app.component('DataViewLayoutOptions', DataViewLayoutOptions)
app.component('Image', Image)
app.component('ProgressSpinner', ProgressSpinner)

app.mount('#app')
