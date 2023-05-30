<template>
  <HeaderPage />
  <PointsCle />
  <Newsletter />
  <FooterComponent />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import HeaderPage from 'src/components/QuiSommesNous/Header.vue';
import PointsCle from 'src/components/Accueil/PointsCle.vue';
import Newsletter from 'src/components/Newsletter.vue';
import FooterComponent from 'src/components/FooterComponent.vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    HeaderPage,
    PointsCle,
    Newsletter,
    FooterComponent,
  },
});
</script>
<style lang="scss" scoped></style>
