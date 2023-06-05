<template>
  <HeaderPage />
  <Description />
  <PointsCle />
  <Ruban />
  <Partenaires />
  <FAQ />
  <Newsletter />
  <FooterComponent />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import HeaderPage from 'src/components/QuiSommesNous/Header.vue';
import Description from 'src/components/QuiSommesNous/Description.vue';
import PointsCle from 'src/components/Accueil/PointsCle.vue';
import Ruban from 'src/components/QuiSommesNous/Ruban.vue';
import Partenaires from 'src/components/QuiSommesNous/Partenaires.vue' ;
import FAQ from 'src/components/QuiSommesNous/FAQ.vue';
import Newsletter from 'src/components/Newsletter.vue';
import FooterComponent from 'src/components/FooterComponent.vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    HeaderPage,
    Description,
    PointsCle,
    Ruban,
    Partenaires,
    FAQ,
    Newsletter,
    FooterComponent,
  },
});
</script>
<style lang="scss" scoped></style>
