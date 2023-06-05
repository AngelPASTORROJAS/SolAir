<template>
  <div class="row justify-center items-start q-py-md q-px-xl objectif">
    <div class="column justify-evenly description">
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
        <button>Découvrir</button>
      </a>
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

button {
  margin-top: 3em;
  background-color: white;
  color: $cta;
  font-family: $font-family-p;
  font-size: $font-size-p;
  border: 2px solid $cta;
  border-color: $cta;
  border-radius: 10px;
}

button:hover {
  background: $cta;
  color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
}

.objectif {
  padding: 4em 4em;
}
</style>
