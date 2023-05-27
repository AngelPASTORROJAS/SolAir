<template>
  <Accueil1 />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Accueil1 from 'src/components/Accueil1.vue';

export default defineComponent({
  name: 'HomePage',
  setup() {
    return;
  },
  components: {
    Accueil1,
  },
});
</script>
<style lang="scss" scoped>
template {
  background-color: black;
}
</style>
