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

import DataView from 'primevue/dataview'
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions'
import Skeleton from 'primevue/skeleton'
import Image from 'primevue/image';


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)

app.component('DataView', DataView)
app.component('DataViewLayoutOptions', DataViewLayoutOptions)
app.component('Image', Image)
app.component('Skeleton', Skeleton)

app.mount('#app')
