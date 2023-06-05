<template>
  <div class="row container items-center">
    <div class="row justify-center logo-partenaires">
      <img
        src="../../assets/logo-partenaires/Ryanair.svg"
        alt="logo de ryanair"
      />
      <img
        src="./../../assets/logo-partenaires/vanners-Logo.png"
        alt="logo de vanners"
      />
      <img
        src="../../assets/logo-partenaires/Airbnb_Logo.svg"
        alt="logo de airbnb"
      />
      <img
        src="../../assets/logo-partenaires/Sixt_Logo_2023.svg"
        alt="logo de sixt"
      />
    </div>
    <div class="col column justify-evenly description">
      <h2>
        Avec Sol’Air, trouvez des voyages qui vous ressemblent.
      </h2>
      <p>
        Sol’Air est une agence de voyage qui trouve pour vous la destination qui
        vous correspond, en France. Le concept ? Vous répondez à une série de 10
        questions, et vous n’avez plus qu’à faire vos valises et partir !
      </p>
      <p>
        En bonus : retrouvez une sélection de logements, de moyens de transport
        et d’activité, ainsi que d’autres destinations similaires.
      </p>
      <a href="#/qui-sommes-nous">
        <button hidden>Découvrir</button>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'PartenairesComposant',
});
</script>

<style lang="scss" scoped>
h2 {
  text-transform: capitalize;
  font-family: $font-family-h2;
  font-size: $font-size-h2;
  color: $titre;
}

p {
  font-family: $font-family-p;
  font-size: $font-size-p;
}

button {
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

.container {
    display: flex;
    flex-wrap: wrap;
    padding: 3em;
}

.description {
    width: 50%;
    padding: 20px;
}

.logo-partenaires {
    width: 50%;
}

img {
    padding: 1em;
    width: 30vh;
    height: auto}
</style>
