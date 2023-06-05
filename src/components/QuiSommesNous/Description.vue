<template>
  <div class="row justify-center items-start q-py-md q-px-xl objectif">
    <div class="column justify-evenly description">
      <h2 class="text-custom-h2 text-center">Qu’est ce que SOL’AIR ?</h2>
      <p class="text-custom-p text-center">
        Sol’Air est une agence de voyage qui trouve pour vous la destination qui
        vous correspond, en France. Le concept ? Vous répondez à une série de 10
        questions, et vous n’avez plus qu’à faire vos valises et partir ! En
        bonus : retrouvez une sélection de logements, de moyens de transport et
        d’activité, ainsi que d’autres destinations similaires.
      </p>
      <div class="row justify-evenly articles">
        <article class="text-center">
          <img
            src="./../../assets/icons/question-custom.svg"
            alt="Icon question"
          />
          <p class="text-custom-p">
            Je répond à 10 questions, dans l’objectif de trouver mes préférences
            : lieu, saison, activités, centres d’intérêt, rythme de vie..
          </p>
        </article>
        <article class="text-center">
          <img
            src="./../../assets/icons/reponse-custom.svg"
            alt="Icon reponse"
          />
          <p class="text-custom-p">
            Mes réponses sont comparées avec tous les lieux répertoriés en
            France.
          </p>
        </article>
        <article class="text-center">
          <img
            src="./../../assets/icons/destination-custom.svg"
            alt="Icon destination"
          />
          <p class="text-custom-p">
            La destination qui me correspond à 100% m’est proposée, avec des
            propositions de logements, de moyens de transports et des activités
            d’entreprises partenaires.
          </p>
        </article>
      </div>

      <a class="text-custom-p text-center" href="#/recherche">
        <button class="button-select-custom">Découvrir</button>
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
.objectif {
  padding: 4em 4em;
}

article {
  width: 222px;
  padding: 10px;
  margin: 15px;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(7.5px);
  border-radius: 20px;
  border: 2px solid $cta;
}

img {
  width: 90px;
  height: 90px;
}

.articles {
  background: url('./../../assets/icons/fly.png') center no-repeat;
  background-size: 100%;
}
</style>
