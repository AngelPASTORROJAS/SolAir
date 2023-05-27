<template>
  <div class="accueil-div">
    <NavBar />
    <p class="full-width text-h1 text-white text-center text-bold accueil">
      Sol’Air :
      <br />
      voyagez à votre façon
    </p>
    <div class="accueil-button">
      <button class="button-1">Affinez votre recherche</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from './NavBar.vue';
export default defineComponent({
  name: 'AccueilTop1',
  components: {
    NavBar,
  },
});
</script>

<style lang="scss" scoped>
.accueil-div {
  background: url('./../assets/img/header.png') center / cover no-repeat,
    url('./../assets/img/fumée.png') center bottom / cover no-repeat;
  background-blend-mode: screen;
  // width: 100%;
}

.accueil {
  font-family: 'Montserrat';
  text-transform: capitalize;
  margin: 10% 20%;
  margin-bottom: 20px;
}

.button-1 {
  font-family: 'Inter';
  font-size: 16px;
  background: #fa6f6f;
  color: white;
  border: 0px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(2.5px);
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
}
.button-1:hover {
  background-color: #d26969;
}

.accueil-button {
  padding-bottom: 30%;
  padding-top: 4%;
  text-align: center;
}
</style>
