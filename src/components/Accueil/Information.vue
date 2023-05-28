<template>
  <div class="information">
    <h2>Comment ça marche ?</h2>
    <article class="row justify-center articles">
      <article class="col-3 column questions">
        <img
          class="col"
          src="./../../assets/icons/question.svg"
          alt="Icon question"
        />
        <p class="col text-center">
          Je répond à 10 questions, dans l’objectif de trouver mes préférences :
          lieu, saison, activités, centres d’intérêt, rythme de vie..
        </p>
      </article>
      <article class="col-3 column reponses">
        <img
          class="col"
          src="./../../assets/icons/reponse.svg"
          alt="Icon reponse"
        />
        <p class="col text-center">
          Mes réponses sont comparées avec tous les lieux répertoriés en France.
        </p>
      </article>
      <article class="col-3 column destination">
        <img
          class="col icon-destination"
          src="./../../assets/icons/destination.svg"
          alt="Icon destination"
        />
        <p class="col text-center">
          LA destination qui me correspond à 100% m’est proposée, avec des
          propositions de logements, de moyens de transports et des activités
          d’entreprises partenaires.
        </p>
      </article>
    </article>
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
  text-align: center;
  padding: 1em;
}

p{
  font-size: $font-size-p;
  font-family: $font-family-p;
}

.articles{
  padding-bottom: 20em;
}

.information {
  background: url('./../../assets/img/information.jpg') center / cover no-repeat,
    url('./../../assets/img/fumee.png') center bottom / cover no-repeat;
  background-blend-mode: screen;
}

img{
  width: 50px;
  height: 50px;
}

.column {
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(7.5px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 20px;
  padding: 0 10px;
  margin: 10px;
}
</style>
