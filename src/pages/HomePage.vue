<template>
  <Accueil1 />
  <Description />
  <Information />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Accueil1 from 'src/components/Accueil/Accueil1.vue';
import Description from 'src/components/Accueil/Description.vue';
import Information from 'src/components/Accueil/Information.vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    Accueil1,
    Description,
    Information
  },
});
</script>
<style lang="scss" scoped>
</style>
