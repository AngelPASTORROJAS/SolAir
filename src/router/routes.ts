import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('pages/HomePage.vue'),
  },
  {
    path: '/qui-sommes-nous',
    component: () => import('pages/QuiSommesNous.vue'),
  },
  {
    path: '/contact',
    component: () => import('pages/ContactPage.vue')
  },
  {
    path: '/mon-compte',
    component: () => import('pages/ComptePage.vue')
  },
  {
    path: '/connexion',
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
