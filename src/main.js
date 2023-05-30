import { createApp } from 'vue'
import ToastService from 'primevue/toastservice';
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
import Toast from 'primevue/toast';
import Image from 'primevue/image';
import InputText from 'primevue/inputtext';



const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ToastService)
app.use(PrimeVue)

app.component('Button', Button)
app.component('DataView', DataView)
app.component('DataViewLayoutOptions', DataViewLayoutOptions)
app.component('Toast', Toast)
app.component('Image', Image)
app.component('InputText', InputText)
app.component('ProgressSpinner', ProgressSpinner)

app.mount('#app')
