<template>
  <div class="column items-center q-py-md q-px-xl newsletters">
    <h2 class="text-center">INSCRIVEZ-VOUS À LA NEWSLETTER</h2>
    <p class="text-center">
      Au programme : top des destinations, bons plans, conseils astuces...
      Découvrez tout ce qu’il faut savoir pour passer vos meilleures vacances en
      France.
    </p>
    <q-form @submit="onSubmit" class="q-gutter-md">
      <q-input
        v-model="mailInput"
        bg-color="white"
        type="text"
        label="solair@gmail.com"
      >
        <template v-slot:append>
          <q-btn icon="check" type="submit" color="primary" />
        </template>
      </q-input>
    </q-form>
  </div>
</template>
<script lang="ts">
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'NewsLetter',
  setup() {
    const $q = useQuasar();
    const mailInput = ref(null);
    return {
      mailInput,
      onSubmit() {
        if (!mailInput.value) {
          $q.notify({
            color: 'red',
            textColor: 'white',
            icon: 'warning',
            message: 'Ecrit',
          });
        }
      },
    };
  },
  components: {},
});
</script>
<style lang="scss" scoped>
.newsletters {
  background: url('./../assets/img/envole-avion.jpg') center / cover no-repeat,
    url('./../assets/img/fumee-reverse.png') center bottom / cover no-repeat;
  background-blend-mode: screen;
}

h2 {
  font-size: $font-size-h2;
  font-family: $font-family-h2;
  color: $titre;
}

p {
  font-size: $font-size-p;
  font-family: $font-family-p;
  color: $paragraphe;
  max-width: 684px;
}
</style>
