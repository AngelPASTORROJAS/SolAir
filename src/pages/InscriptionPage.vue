<template>
  <HeaderCustom label="Inscription" />
  <div class="q-pa-xl">
    <h2 class="text-custom-h2 text-h2 text-center">Créer mon compte</h2>
    <q-form @submit="submitForm">
      <div class="input-container">
        <q-input borderless class="input-style" v-model="username" placeholder="Nom d'utilisateur*" />
        <q-input borderless class="input-style" v-model="email" placeholder="E-Mail*" />
        <q-input borderless class="input-style" placeholder="Mot de passe*"
         v-model="password" :type="isPwd ? 'password' : 'text'">
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>
        <q-input borderless class="input-style" placeholder="Confirmer le Mot de passe*"
         v-model="password2" :type="isPwd2 ? 'password' : 'text'">
          <template v-slot:append>
            <q-icon
              :name="isPwd2 ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd2 = !isPwd2"
            />
          </template>
        </q-input>
      </div>
      <div class="row justify-evenly items-baseline">
        <q-btn type="submit" label="Créer un compte" color="red-4" />
        <q-btn type="submit" label="Connexion" color="cyan-7" to="/connexion" />
      </div>
    </q-form>
  </div>
  <FooterComponent />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import HeaderCustom from 'src/components/HeaderCustom.vue';
import FooterComponent from 'src/components/FooterComponent.vue';

export default defineComponent({
  name: 'InscriptionPage',
  setup() {
    const username = ref('')
    const email = ref('')
    const password = ref('')
    const password2 = ref('')
    const isPwd= ref(true)
    const isPwd2= ref(true)

    const submitForm = () => {
      //function of submit
      return
    }
    return {
      username,
      email,
      password,
      password2,
      isPwd,
      isPwd2,
      submitForm
    }
  },
  components: {
    HeaderCustom,
    FooterComponent,
  },
});
</script>
<style lang="scss" scoped></style>
