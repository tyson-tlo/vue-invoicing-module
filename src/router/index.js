import { createWebHistory, createRouter } from "vue-router";

import Home from "../views/Home.vue";
import ViewInvoices from '../views/invoices/ViewInvoices.vue'
import ViewInvoice from '../views/invoices/ViewInvoice.vue'
import CreateInvoice from '../views/invoices/CreateInvoice.vue'

const routes = [
  { path: "/", component: Home },
  { path: "/invoices", component: ViewInvoices },
  { path: "/invoices/create", component: CreateInvoice },
  { path: '/invoices/:invoice', component: ViewInvoice }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;