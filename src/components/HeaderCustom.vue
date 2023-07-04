<template>
  <div class="accueil-div">
    <NavBar />
    <h1 class="full-width text-white text-center text-bold accueil">
      {{ label }}
    </h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from './NavBar.vue';
export default defineComponent({
  name: 'HeaderCustom',
  components: {
    NavBar,
  },
  props: {
    label: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.accueil-div {
  background: url('./../assets/img/header.jpg') center / cover no-repeat,
    url('./../assets/img/fumee.png') center / cover no-repeat;
  background-blend-mode: screen;
}

.accueil {
  padding-bottom: 25vh;
  font-family: 'Montserrat';
  text-transform: capitalize;
  margin: 10% 20%;
  margin-bottom: 20px;
}
</style>
