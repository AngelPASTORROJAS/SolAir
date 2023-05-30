<template>
  <HeaderPage />
  <Description />
  <PointsCle />
  <Ruban />
  <Newsletter />
  <FooterComponent />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import HeaderPage from 'src/components/QuiSommesNous/Header.vue';
import Description from 'src/components/QuiSommesNous/Description.vue';
import PointsCle from 'src/components/Accueil/PointsCle.vue';
import Ruban from 'src/components/QuiSommesNous/Ruban.vue';
import Newsletter from 'src/components/Newsletter.vue';
import FooterComponent from 'src/components/FooterComponent.vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    HeaderPage,
    Description,
    PointsCle,
    Ruban,
    Newsletter,
    FooterComponent,
  },
});
</script>
<style lang="scss" scoped></style>
