<template>
  <Accueil1 />
  <Description />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Accueil1 from 'src/components/Accueil/Accueil1.vue';
import Description from 'src/components/Accueil/Description.vue';
export default defineComponent({
  name: 'HomePage',
  setup() {
    return;
  },
  components: {
    Accueil1,
    Description,
  },
});
</script>
<style lang="scss" scoped>
template {
  background-color: black;
}
</style>
