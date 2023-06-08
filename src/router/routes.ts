import ComptePageVue from 'src/pages/ComptePage.vue';
import ConnexionPageVue from 'src/pages/ConnexionPage.vue';
import ContactPageVue from 'src/pages/ContactPage.vue';
import HomePageVue from 'src/pages/HomePage.vue';
import InscriptionPageVue from 'src/pages/InscriptionPage.vue';
import QuiSommesNousVue from 'src/pages/QuiSommesNous.vue';
import RecherchePageVue from 'src/pages/RecherchePage.vue';
import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name:'Home',
    component: HomePageVue,
  },
  {
    path: '/qui-sommes-nous',
    name: 'QuiSommeNous',
    component: QuiSommesNousVue,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPageVue
  },
  {
    path: '/mon-compte',
    name: 'Compte',
    component: ComptePageVue
  },
  {
    path: '/connexion',
    name: 'Login',
    component: ConnexionPageVue
  },
  {
    path: '/inscription',
    name: 'Inscription',
    component: InscriptionPageVue
  },
  {
    path: '/recherche',
    component: RecherchePageVue
  },
  {
    path: '/test',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
