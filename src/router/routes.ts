import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name:'Home',
    component: () => import('pages/HomePage.vue'),
  },
  {
    path: '/qui-sommes-nous',
    name: 'QuiSommeNous',
    component: () => import('pages/QuiSommesNous.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('pages/ContactPage.vue')
  },
  {
    path: '/mon-compte',
    name: 'Compte',
    component: () => import('pages/ComptePage.vue')
  },
  {
    path: '/connexion',
    name: 'Login',
    component: () => import('pages/ConnexionPage.vue')
  },
  {
    path: '/inscription',
    component: () => import('pages/InscriptionPage.vue')
  },
  {
    path: '/recherche',
    component: () => import('pages/RecherchePage.vue')
  },
  {
    path: '/test',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
