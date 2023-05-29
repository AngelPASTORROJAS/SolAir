<template>
  <Accueil1 />
  <Description />
  <Information />
  <Objectif />
  <PointsCle />
  <Newsletter />
  <FooterComponent />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Accueil1 from 'src/components/Accueil/Accueil1.vue';
import Description from 'src/components/Accueil/Description.vue';
import Information from 'src/components/Accueil/Information.vue';
import Objectif from 'src/components/Accueil/Objectif.vue';
import PointsCle from 'src/components/Accueil/PointsCle.vue';
import Newsletter from 'src/components/Newsletter.vue';
import FooterComponent from 'src/components/FooterComponent.vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    Accueil1,
    Description,
    Information,
    PointsCle,
    Objectif,    
    Newsletter,
    FooterComponent
},
});
</script>
<style lang="scss" scoped>
</style>
