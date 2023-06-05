<template>
  <HeaderCustom label="Effectuez votre recherche" />
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
<style lang="scss" scoped></style>
