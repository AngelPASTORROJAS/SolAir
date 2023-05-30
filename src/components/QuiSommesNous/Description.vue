<template>
  <div class="row justify-center items-start q-py-md q-px-xl objectif">
    <div class="column justify-evenly description">
      <h2 class="text-center">Qu’est ce que SOL’AIR ?</h2>
      <p class="text-center">
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
          <p>
            Je répond à 10 questions, dans l’objectif de trouver mes préférences
            : lieu, saison, activités, centres d’intérêt, rythme de vie..
          </p>
        </article>
        <article class="text-center">
          <img
            src="./../../assets/icons/reponse-custom.svg"
            alt="Icon reponse"
          />
          <p>
            Mes réponses sont comparées avec tous les lieux répertoriés en
            France.
          </p>
        </article>
        <article class="text-center">
          <img
            src="./../../assets/icons/destination-custom.svg"
            alt="Icon destination"
          />
          <p>
            La destination qui me correspond à 100% m’est proposée, avec des
            propositions de logements, de moyens de transports et des activités
            d’entreprises partenaires.
          </p>
        </article>
      </div>

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
  font-family: $font-family-h2;
  font-size: $font-size-h2;
  color: $titre;
}

p {
  font-family: $font-family-p;
  font-size: $font-size-p;
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
