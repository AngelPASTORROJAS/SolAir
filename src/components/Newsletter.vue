<template>
  <div class="column items-center q-py-md q-px-xl newsletters">
    <h2 class="text-center">INSCRIVEZ-VOUS À LA NEWSLETTER</h2>
    <p class="text-center">
      Au programme : top des destinations, bons plans, conseils astuces...
      Découvrez tout ce qu’il faut savoir pour passer vos meilleures vacances en
      France.
    </p>
    <q-input
      class="q-pa-lg"
      v-model="mailInput"
      type="text"
      placeholder="solair@gmail.com"
      standout="text-white bg-red-4"
      bg-color="white"
      rounded
    >
      <template v-slot:append>
        <div>
          <q-btn
            class="button-custom"
            @click="onSubmit"
            round
            icon="check"
            type="submit"
          />
        </div>
      </template>
    </q-input>
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
    const onSubmit = () => {
      if (mailInput.value) {
        $q.notify({
          color: 'red',
          textColor: 'white',
          icon: 'warning',
          message: 'Ecrit ' + mailInput.value,
        });
      }
    };
    return {
      onSubmit,
      mailInput,
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
  padding: 20em 2em;
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

.button-custom {
  color: white;
  background-color: $cta;
}

.button-custom:hover {
  background-color: #cc6565;
}
</style>
