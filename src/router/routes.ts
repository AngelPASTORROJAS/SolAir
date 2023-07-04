import ComptePageVue from 'src/pages/ComptePage.vue';
import ConnexionPageVue from 'src/pages/ConnexionPage.vue';
import ContactPageVue from 'src/pages/ContactPage.vue';
import ErrorNotFoundVue from 'src/pages/ErrorNotFound.vue';
import HomePageVue from 'src/pages/HomePage.vue';
import InscriptionPageVue from 'src/pages/InscriptionPage.vue';
import QuiSommesNousVue from 'src/pages/QuiSommesNous.vue';
import RecherchePageVue from 'src/pages/RecherchePage.vue';
import DestinationPageVue from 'src/pages/DestinationPage.vue';
import { RouteRecordRaw } from 'vue-router';
import ErrorUnauthorizedVue from 'src/pages/ErrorUnauthhorized.vue';
import ErrorForbiddenVue from 'src/pages/ErrorForbidden.vue';

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
    name: 'Recherche',
    component: RecherchePageVue
  },
  {
    path: '/destination',
    name: 'Destination',
    component: DestinationPageVue
  },
  {
    path: '/forbidden',
    name: 'ErrorForbidden',
    component: ErrorForbiddenVue
  },
  {
    path: '/unauthaurized',
    name: 'ErrorUnautorized',
    component: ErrorUnauthorizedVue
  },
  {
    path: '/:catchAll(.*)*',
    name: 'ErrorNotFound',
    component: ErrorNotFoundVue,
  },
];

export default routes;
