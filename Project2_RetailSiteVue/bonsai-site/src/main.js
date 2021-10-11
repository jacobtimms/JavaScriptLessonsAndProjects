import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
import { BootstrapVue } from 'bootstrap-vue'

Vue.use(VueRouter)
Vue.use(BootstrapVue)

Vue.config.productionTip = false

// 1. Define route components.
// These can be imported from other files
import Index from './components/index.vue';
import Contact from './components/contact.vue';
import Account from './components/account.vue';
import StorePage from './components/storePage.vue';
import ProductPage from './components/productPage.vue';


// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: Index, name: 'Index' },
  { path: '/Contact', component: Contact, name: 'Contact' },
  { path: '/Account', component: Account, name: 'Account' },
  { path: '/storePage/:id', component: StorePage, name: 'StorePage' },
  { path: '/productPage/:Pid', component: ProductPage, name: 'ProductPage', props: true }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

