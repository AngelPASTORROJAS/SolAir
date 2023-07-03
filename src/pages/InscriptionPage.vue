<template>
  <HeaderCustom label="Inscription" />
  <div class="q-pa-xl">
    <h2 class="text-custom-h2 text-h2 text-center">Créer mon compte</h2>
    <q-form @submit="submitForm">
      <div class="input-container">
        <q-input borderless class="input-style" v-model="utilisateur.login" placeholder="Nom d'utilisateur*" />
        <q-input borderless class="input-style" v-model="utilisateur.email" placeholder="E-Mail*" />
        <q-input borderless class="input-style" placeholder="Mot de passe*" v-model="utilisateur.mot_de_passe"
          :type="isPwd ? 'password' : 'text'">
          <template v-slot:append>
            <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
          </template>
        </q-input>
        <q-input borderless class="input-style" placeholder="Confirmer le Mot de passe*" v-model="password2"
          :type="isPwd2 ? 'password' : 'text'">
          <template v-slot:append>
            <q-icon :name="isPwd2 ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd2 = !isPwd2" />
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
import { Utilisateur } from 'src/api/back_solair/models/Utilisateur';
import { solairAPI } from 'src/api/back_solair';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'InscriptionPage',
  setup() {
    const $q = useQuasar();
    const utilisateur = ref({} as Utilisateur)
    const password2 = ref('')
    const isPwd = ref(true)
    const isPwd2 = ref(true)

    const submitForm = async () => {
      try {
        const isCreated = await solairAPI.user.createUtilisateurAsync(utilisateur.value)
        if (isCreated == true) {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Créer',
            position: 'bottom',
          });
        } else {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'Erreur de Création',
            position: 'bottom',
          });
        }
      } catch (error) {
        console.error(error);
        $q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'Erreur de Création',
          position: 'bottom',
        });
      }
    }
    return {
      utilisateur,
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
