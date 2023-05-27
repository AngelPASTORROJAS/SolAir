<template>
  <h2>Avec Sol’Air, trouvez des voyages qui vous ressemblent.</h2>
  <p>
    Sol’Air est une agence de voyage qui trouve pour vous la destination qui
    vous correspond, en France. Le concept ? Vous répondez à une série de 10
    questions, et vous n’avez plus qu’à faire vos valises et partir !
  </p>
  <p>
    En bonus : retrouvez une sélection de logements, de moyens de transport et
    d’activité, ainsi que d’autres destinations similaires.
  </p>
  <button>En savoir plus</button>
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
  font-family: $font-family-h2;
  font-size: $font-size-h2; 
  color: $titre;
}

p {
  font-family: $font-family-p;
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
</style>
