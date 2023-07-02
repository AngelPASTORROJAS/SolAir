<template>
  <HeaderCustom label="Connexion" />
  <div class="q-pa-xl">
    <h2 class="text-custom-h2 text-h3 text-center">Connectez vous</h2>
    <q-form @submit="submitForm">
      <div class="input-container">
        <q-input borderless class="input-style" v-model="username" placeholder="Nom d'utilisateur*" />
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
      </div>
      <div class="row justify-evenly items-baseline">
        <q-btn type="submit" label="Connexion" class="button-select-custom" />
        <q-btn to="Inscription" type="submit" label="Créer un compte" color="cyan-7" />
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
  name: 'ConnexionPage',
  setup() {
    const username = ref('')
    const password = ref('')
    const isPwd= ref(true)

    const submitForm = () => {
      //function of submit
      return
    }
    return {
      username,
      password,
      isPwd,
      submitForm
    }
  },
  components: {
    HeaderCustom,
    FooterComponent,
  },
});
</script>
<style lang="scss" scoped>
</style>
