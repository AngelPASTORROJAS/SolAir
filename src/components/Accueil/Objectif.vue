<template>
  <div class="q-pa-md q-gutter-md q-layout-column q-layout-wrap objectif">
    <div class="q-col-xs-12 q-col-md-6 text-center description">
      <h2 class="text-center text-custom-h2">
        L’objectif de Sol’Air ? Trouver la destination de vos rêves !
      </h2>
      <p class="text-center text-custom-p">
        Notre système de comparaison permet de prendre en compte vos critère,
        sans porter d’attention particulière à la notoriété des différents
        endroits et de vous faire découvrir des endroits auxquels vous n’auriez
        pas pensé ! Selon vos préférences, vous pourrez tout à fait vous
        retrouver sur les plages des grandes stations balnéaires de la French
        Rivera, ou au contraire découvrir un petit village au bord de la
        Méditerranée.
      </p>
      <p class="text-center text-custom-p">
        Et n’ayez pas peur, il y en a pour tous les goûts : plage, montagne,
        ville, campagne, nature...
      </p>
      <a class="text-center" href="#/recherche">
        <button class="button-select-custom">Découvrir</button>
      </a>
    </div>
    <div class="q-col-xs-12 q-col-md-6 carrousel">
      <article
        style="
          color: white;
          font-family: 'Bebas Neue';
          font-style: normal;
          font-weight: 400;
          font-size: 46px;
          line-height: 55px;
          padding: 1rem;
        "
        class="card mont-blanc"
      >
        MONT BLANC
      </article>
      <article style="
          color: white;
          font-family: 'Bebas Neue';
          font-style: normal;
          font-weight: 400;
          font-size: 46px;
          line-height: 55px;
          padding: 1rem;
        " class="card monaco">MONACO</article>
      <article style="
          color: white;
          font-family: 'Bebas Neue';
          font-style: normal;
          font-weight: 400;
          font-size: 46px;
          line-height: 55px;
          padding: 1rem;
        " class="card paris">PARIS</article>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'AccueilDescription',
});
</script>

<style lang="scss" scoped>

h2 {
  text-transform: capitalize;
}

.objectif {
  padding: 4em 4em;
}

.carrousel {
  display: grid;
  grid-auto-flow: column;
  scroll-behavior: auto;
  gap: 1.2rem;
  overflow-y: auto;
  overscroll-behavior-x: contain;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
}

.card {
  scroll-snap-align: start;
  border-radius: 20px;
  min-height: 438px;
  min-width: 284px;
  align-items: center;
  justify-content: center;
}

.mont-blanc {
  background: url('../../assets/publicitaire/mont-blanc.jpg') center / cover
    no-repeat;
}
.monaco {
  background: url('../../assets/publicitaire/monaco.jpg') center / cover
    no-repeat;
}
.paris {
  background: url("../../assets/publicitaire/paris.jpg") center / cover
    no-repeat;
}

.q-pa-md {
  padding: 16px;
}

.q-gutter-md {
  margin: -8px;
}

.q-layout-column {
  display: flex;
  flex-wrap: wrap;
}

.q-layout-wrap {
  flex-wrap: wrap;
}

.q-col-xs-12 {
  flex-basis: 100%;
  max-width: 100%;
}

.q-col-md-6 {
  flex-basis: calc(50% - 16px);
  max-width: calc(50% - 16px);
  margin: 8px;
}

@media (max-width: 599px) {
  .q-col-md-6 {
    flex-basis: 100%;
    max-width: 100%;
    margin: 8px 0;
  }
}
</style>
