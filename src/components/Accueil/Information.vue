<template>
  <div class="q-py-md q-px-xl information">
    <h2 class="text-center">Comment ça marche ?</h2>
    <div class="row justify-evenly articles">
      <article class="text-center questions">
        <img src="./../../assets/icons/question.svg" alt="Icon question" />
        <p>
          Je répond à 10 questions, dans l’objectif de trouver mes préférences :
          lieu, saison, activités, centres d’intérêt, rythme de vie..
        </p>
      </article>
      <article class="text-center reponses">
        <img src="./../../assets/icons/reponse.svg" alt="Icon reponse" />
        <p>
          Mes réponses sont comparées avec tous les lieux répertoriés en France.
        </p>
      </article>
      <article class="text-center destination">
        <img
          src="./../../assets/icons/destination.svg"
          alt="Icon destination"
        />
        <p>
          LA destination qui me correspond à 100% m’est proposée, avec des
          propositions de logements, de moyens de transports et des activités
          d’entreprises partenaires.
        </p>
      </article>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'AccueilInformation',
  components: {},
});
</script>
<style lang="scss" scoped>
h2 {
  font-family: $font-family-h2;
  font-size: $font-size-h2;
  color: white;
  padding-bottom: 1em;
}

p {
  font-size: $font-size-p;
  font-family: $font-family-p;
}

article {
  width: 222px;
  padding: 10px;
  margin: 15px;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(7.5px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 20px;
}

.information {
  background: url('./../../assets/img/information.jpg') center / cover no-repeat,
    url('./../../assets/img/fumee.png') center bottom / cover no-repeat;
  background-blend-mode: screen;
  padding-bottom: 15em;
}

img {
  width: 55px;
  height: 55px;
}
</style>
