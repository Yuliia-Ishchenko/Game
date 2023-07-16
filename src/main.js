import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config';

import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'

import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Row from 'primevue/row';
import Calendar from 'primevue/calendar';

createApp(App)
.use(store)
.use(PrimeVue)
   .component('Button', Button)
   .component('InputText', InputText)
   .component('DataTable', DataTable)
   .component('Column', Column)
   .component('Row', Row)
   .component('Calendar', Calendar)
.use(router)
.mount('#app')
