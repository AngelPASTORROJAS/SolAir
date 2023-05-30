<template>
    <div class="accueil-div">
      <NavBar />
      <h1 class="full-width text-white text-center text-bold accueil">
        Qui sommes-nous ?
      </h1>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import NavBar from '../NavBar.vue';
  export default defineComponent({
    name: 'AccueilTop1',
    components: {
      NavBar,
    },
  });
  </script>
  
  <style lang="scss" scoped>
  .accueil-div {
    background: url('./../../assets/img/accueil.jpg') center / cover no-repeat,
      url('./../../assets/img/fumee.png') center bottom / cover no-repeat;
    background-blend-mode: screen;
    // width: 100%;
    padding-bottom: 25vh;
  }
  
  .accueil {
    font-family: 'Montserrat';
    text-transform: capitalize;
    margin: 10% 20%;
    margin-bottom: 20px;
  }
  </style>
  