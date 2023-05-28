<template>
  <div class="row justify-center q-py-md q-px-xl pointsCle">
    <img
      class="q-ma-xl"
      width="250px"
      src="./../../assets/img/logo1.svg"
      alt="fond de carte pour voyage"
    />
    <div class="row justify-evenly articles">
      <article class="text-center">
        <img height="80px" src="./../../assets/icons/idee.svg" />
        <p>
          Sol’Air, c’est une solution rapide, gratuite et inédite pour trouver
          la destination de vos prochaines vacances en France
        </p>
      </article>
      <article class="text-center">
        <img
          height="80px"
          src="./../../assets/icons/destination-blanc.svg"
          alt=""
        />
        <p>
          Pour chacun de vos voyages, vous pourrez découvrir une destination
          différente, selon la saison à laquelle vous partez.
        </p>
      </article>
      <article class="text-center">
        <img height="80px" src="./../../assets/icons/top-chrono.svg" alt="" />
        <p>
          Pour chacun de vos voyages, vous pourrez découvrir une destination
          différente, selon la saison à laquelle vous partez.
        </p>
      </article>
      <article class="text-center">
        <img height="80px" src="./../../assets/icons/checked.svg" alt="" />
        <p>
          Pour chacun de vos voyages, vous pourrez découvrir une destination
          différente, selon la saison à laquelle vous partez.
        </p>
      </article>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'PointsCle',
  components: {},
});
</script>
<style lang="scss" scoped>
.pointsCle {
  padding: 2em;
  background: url('./../../assets/img/carte.jpg') center / cover no-repeat;
}

article {
  width: 222px;
  padding: 10px;
  margin: 15px;
}

p {
  font-size: $font-size-p;
  font-family: $font-family-p;
  color: white;
}
</style>
