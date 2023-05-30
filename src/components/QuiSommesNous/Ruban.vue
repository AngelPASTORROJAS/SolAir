<template>
  <div class="row full-width ruban">
    <img
      class="col"
      src="./../../assets/img/lagune.jpg"
      alt="une lagune transparente"
    />
    <img
      class="col"
      src="./../../assets/img/plage-vue-ciel.jpg"
      alt="une vue du ciel d'une plage avec des bateaux"
    />
    <img
      class="col"
      src="./../../assets/img/montagne-sombre.jpg"
      alt="des montagnes au aurore"
    />
    <img
      class="col"
      src="./../../assets/img/mongolfiere.jpg"
      alt="des mongolfières vue sur un ciel sans nuage"
    />
    <img
      class="col"
      src="./../../assets/img/riviere.jpg"
      alt="une rivière transparente avec des cocotièrs sur les rivages"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'RubanImages',
});
</script>
<style lang="scss" scoped>
.ruban {
  width: 100%;
}
</style>
