import { createWebHistory, createRouter } from "vue-router";

import Home from "../views/Home.vue";
import ViewInvoices from '../views/invoices/ViewInvoices.vue'
import ViewInvoice from '../views/invoices/ViewInvoice.vue'
import CreateInvoice from '../views/invoices/CreateInvoice.vue'
import EditInvoice from '../views/invoices/EditInvoice'

const routes = [
  { path: "/", component: Home },
  { path: "/invoices", component: ViewInvoices },
  { path: "/invoices/create", component: CreateInvoice },
  { path: '/invoices/:invoice', component: ViewInvoice },
  { path: '/invoices/:invoice/edit', component: EditInvoice },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;