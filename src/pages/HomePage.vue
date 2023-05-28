<template>
  <Accueil1 />
  <Description />
  <Information />
  <PointsCle />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Accueil1 from 'src/components/Accueil/Accueil1.vue';
import Description from 'src/components/Accueil/Description.vue';
import Information from 'src/components/Accueil/Information.vue';
import PointsCle from 'src/components/Accueil/PointsCle.vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    Accueil1,
    Description,
    Information,
    PointsCle
  },
});
</script>
<style lang="scss" scoped>
</style>
