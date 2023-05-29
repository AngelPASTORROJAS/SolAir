<template>
  <footer class="row justify-center q-py-md q-px-xl">
    <a href="#">
      <img class="q-ma-xl logo" src="./../assets/img/logo1.svg" alt="logo" />
    </a>
    <div class="row justify-center navigation">
      <div class="column items-start">
        <q-btn
          class="button-disabled"
          flat
          color="white"
          label="contactez-nous"
        />
        <q-btn
          no-caps
          flat
          color="white"
          icon="call"
          label="04 90 49 39 39"
          @click="copyPhone"
        />
        <q-btn
          no-caps
          flat
          color="white"
          icon="mail"
          label="solair@gmail.com"
          @click="copyMail"
        />
      </div>
      <div class="column items-start">
        <q-btn class="button-disabled" flat color="white" label="menu" />
        <q-btn to="/" no-caps flat color="white" label="Accueil" />
        <q-btn to="recherche" no-caps flat color="white" label="Gestionnaires d'expérience" />
        <q-btn to="qui-sommes-nous" no-caps flat color="white" label="Qui sommes-nous ?" />
        <q-btn to="contact" no-caps flat color="white" label="Contact" />
      </div>
      <div class="column items-start">
        <q-btn
          class="button-disabled"
          flat
          color="white"
          label="Suivez-nous :"
        />
        <q-btn
          no-caps
          flat
          color="white"
          icon="img:https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
          label="instagram"
          href="https://www.instagram.com"
        >
        </q-btn>
        <q-btn
          no-caps
          flat
          color="white"
          icon="img:https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png"
          label="Facebook"
          href="https://www.facebook.com"
        />
        <q-btn
          no-caps
          flat
          color="white"
          icon="img:https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg"
          label="Twitter"
          href="https://twitter.com"
        />
      </div>
    </div>
  </footer>
</template>
<script lang="ts">
import { useQuasar, copyToClipboard } from 'quasar'
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'FooterComponent',
  setup() {
    const $q = useQuasar();

    const copyMail = ()=> {
      const text = 'solair@gmail.com';
      copyToClipboard(text).then(() => {
        $q.notify({
          message: 'Copié dans le presse-papiers.',
          type: 'positive',
          color: 'green',
          icon:'content_paste'
        });
      });
    }

    const copyPhone = ()=> {
      const text = '04 90 49 39 39';
      copyToClipboard(text).then(() => {
        $q.notify({
          message: 'Copié dans le presse-papiers.',
          type: 'positive',
          color: 'green',
          icon: 'content_paste'
        });
      });
    }
    return {copyPhone, copyMail}
  },
  components: {}
})
</script>
<style lang="scss" scoped>
footer {
  background: url('./../assets/img/footer.jpg') center / cover no-repeat;
}

.logo {
  width: 250px;
}

.column {
  width: 222px;
  padding: 10px;
}

.button-disabled {
  pointer-events: none;
  cursor: default;
}
</style>
