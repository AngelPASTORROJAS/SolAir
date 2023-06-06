<template>
  <HeaderCustom label="Effectuez votre recherche" />
  <div class="text-center items-center justify-center">
    <h1>Question 1</h1>
    <h2 class="text-custom-h2">Quels types de lieu préférez-vous pour vos vacances ?</h2>
    <div class="row justify-center">
      <article class="text-center montagne q-pa-lg">
        <img src="../assets/questions/montagne.svg" alt=""/>
        <p class="text-custom-p">
          Montagne
        </p>
      </article>
      <article class="text-center mer q-pa-lg">
        <img src="../assets/questions/mer.svg" alt=""/>
        <p class="text-custom-p">
          Mer
        </p>
      </article>
      <article class="text-center compagne q-pa-lg">
        <img src="../assets/questions/compagne.svg" alt=""/>
        <p class="text-custom-p">
          Compagne
        </p>
      </article>
    </div>
    <button class="button-select-custom q-mb-lg">Suivant</button>
  </div>
  <FooterComponent />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import HeaderCustom from 'src/components/HeaderCustom.vue';
import FooterComponent from 'src/components/FooterComponent.vue';

export default defineComponent({
  name: 'ConnexionPage',
  components: {
    HeaderCustom,
    FooterComponent,
  },
});
</script>
<style lang="scss" scoped>
article {
  width: 222px;
  margin: 15px;
  backdrop-filter: blur(7.5px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 20px;
  border: 1px solid $paragraphe;
}

.montagne:hover {
    cursor: pointer;
  background-color: $titre;
  border: 0;
  img{
    content: url('./../assets/questions/montagne-hover.svg');
  }
  p {
    color: white;
  }
}

.mer:hover {
    cursor: pointer;
  background-color: $titre;
  border: 0;
  img{
    content: url('./../assets/questions/mer-hover.svg');
  }
  p {
    color: white;
  }
}

.compagne:hover {
    cursor: pointer;
  background-color: $titre;
  border: 0;
  img{
    content: url('./../assets/questions/compagne-hover.svg');
  }
  p {
    color: white;
  }

}

h1 {
  font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 62px;
line-height: 76px;
text-transform: capitalize;

/* Paragraphe */
color: #494949;
}
</style>
