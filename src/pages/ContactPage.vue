<template>
  <HeaderCustom label="Contact" />
  <div class="q-px-lg div-contactez-nous">
    <h2 class="text-custom-h2 text-center">CONTACTEZ NOUS</h2>
    <p class="text-custom-p text-center">
      Un message ou un avis à nous adresser ? N’hésitez pas à remplir notre
      questionnaire et nous partager ce que vous en pensez. Tout avis est bon à
      prendre.
    </p>
    <q-form class="q-gutter-md" @submit="envoyerFormulaire">
      <div class="q-pa-md text-center" style="align-items: center;max-width: 300px; margin: 0 auto;">
        <q-input
          outlined
          v-model="nom"
          placeholder="Nom*"
          :rules="[(val) => !!val || 'Le nom est obligatoire*']"
          lazy-rules
        />
        <q-input
          outlined
          v-model="prenom"
          placeholder="Prénom*"
          :rules="[(val) => !!val || 'Le Prénom est obligatoire*']"
          lazy-rules
        />
        <q-input
          outlined
          v-model="mail"
          placeholder="E-mail*"
          :rules="[
            (val) => !!val || 'Le E-mail est obligatoire*',
            (val) =>
              /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) ||
              'L\'adresse e-mail doit être valide',
          ]"
          lazy-rules
        />
        <q-input
          outlined
          v-model="telephone"
          placeholder="Téléphone*"
          :rules="[(val) => !!val || 'Le Téléphone est obligatoire*']"
          lazy-rules
        />
        <q-input
          autogrow
          outlined
          v-model="message"
          placeholder="Message*"
          :rules="[(val) => !!val || 'Le Message est obligatoire*']"
          lazy-rules
        />
        <button
          type="submit"
          @click="envoyerFormulaire"
          class="button-select-custom"
        >
          ENVOYER
        </button>
      </div>
    </q-form>
  </div>
  <div hidden class="div-informations">
    <h2 class="text-custom-h2">NOS INFORMATIONS</h2>
    <p class="text-custom-p">
      Si vous souhaitez nous contacter, voici nos coordonnées ainsi que nos
      réseaux sociaux.
    </p>
    <p class="text-custom-p">
      <q-icon size="20px" name="call" style="color: #fa6f6f" />
      <span style="margin-left: 8px">04 90 49 39 39</span>
    </p>
    <p class="text-custom-p">
      <q-icon name="mail" style="color: #fa6f6f" />
      <span style="margin-left: 8px">solair@gmail.com</span>
    </p>
  </div>
  <FooterComponent />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import HeaderCustom from 'src/components/HeaderCustom.vue';
import FooterComponent from 'src/components/FooterComponent.vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'ContactPage',
  setup() {
    const $q = useQuasar();
    const nom = ref('');
    const prenom = ref('');
    const mail = ref('');
    const telephone = ref('');
    const message = ref('');

    const envoyerFormulaire = () => {
      if (validerFormulaire()) {
        location.href =
          'mailto:solair@gmail.com?' +
          'subject=Nouveau message de contact&body=Nom: ' +
          nom.value +
          '%0D%0APrénom: ' +
          prenom.value +
          '%0D%0AE-mail: ' +
          mail.value +
          '%0D%0ATéléphone: ' +
          telephone.value +
          '%0D%0AMessage: ' +
          message.value;
      } else {
        $q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'Remplisser les champs obligatoire',
          position: 'bottom',
        });
      }
    };

    const validerFormulaire = () => {
      return (
        !!nom?.value &&
        !!prenom?.value &&
        !!mail?.value &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail.value) &&
        !!telephone?.value &&
        !!message?.value
      );
    };

    return {
      nom,
      prenom,
      mail,
      telephone,
      message,
      envoyerFormulaire,
    };
  },
  components: {
    HeaderCustom,
    FooterComponent,
  },
});
</script>
<style lang="scss" scoped></style>
