<template>
  <HeaderCustom label="Connexion" />
  <div class="q-pa-xl">
    <h2 class="text-custom-h2 text-h3 q-mb-md">Connectez vous</h2>
    <q-form @submit="submitForm">
      <q-input v-model="username" placeholder="Nom d'utilisateur*" />
      <br>
      <q-input placeholder="Mot de passe*"
       v-model="password" filled :type="isPwd ? 'password' : 'text'">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
      <br>
      <div class="">
        <q-btn class=" q-app" type="submit" label="Connexion" color="red-5" />
        <q-btn type="submit" label="Inscription" color="red-5" />
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
<style lang="scss" scoped></style>
