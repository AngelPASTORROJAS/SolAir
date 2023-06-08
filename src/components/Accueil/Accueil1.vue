<template>
  <div class="accueil-div">
    <NavBar />
    <h1 class="full-width text-white text-center text-bold accueil">
      Sol’Air :
      <br />
      voyagez à votre façon
    </h1>
    <div class="accueil-button">
      <button @click="redirect" class="button-1">Affinez votre recherche</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from '../NavBar.vue';
import { useRouter } from 'vue-router';
export default defineComponent({
  name: 'AccueilTop1',
  setup(){
    const router = useRouter();
    const routeRecherche = {
        name: 'Recherche'
        }
    const redirect = ()=>{
      router.push(routeRecherche);
    }
    return {redirect}
  },
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
  background: $cta;
  color: white;
  border: 0px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  // backdrop-filter: blur(2.5px);
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
