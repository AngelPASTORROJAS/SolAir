<template>
  <HeaderCustom label="Connexion" />
  <div class="q-pa-xl">
    <h2 class="text-custom-h2 text-h2 text-center">Connectez vous</h2>
    <q-form @submit="submitForm">
      <div class="input-container">
        <q-input :maxlength="login_maxlength"
          :rules="[(val) => !!val || 'Le champ est obligatoire', (val: string) => val.length <= login_maxlength || 'Le login est trop long']"
          borderless class="input-style" v-model="utilisateur.login" placeholder="Nom d'utilisateur*" />
        <q-input :maxlength="mot_de_passe_maxlength"
          :rules="[(val) => !!val || 'Le champ est obligatoire', (val: string) => val.length <= mot_de_passe_maxlength || 'Le mot de passe est trop long']"
          borderless class="input-style" placeholder="Mot de passe*" v-model="utilisateur.mot_de_passe"
          :type="isPwd ? 'password' : 'text'">
          <template v-slot:append>
            <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
          </template>
        </q-input>
      </div>
      <div class="row justify-evenly items-baseline">
        <q-btn type="submit" label="Connexion" color="red-4" />
        <q-btn type="submit" label="Créer un compte" color="cyan-7" to="/inscription" />
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
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'ConnexionPage',
  setup() {
    const $q = useQuasar();
    const route = useRouter();

    const utilisateur = ref({} as Utilisateur)
    const isPwd = ref(true)
    const login_maxlength = 50
    const mot_de_passe_maxlength = 60

    const submitForm = async () => {
      try {
        const isAuthentificate = await solairAPI.user.authentificationUtilisateurAsync(utilisateur.value)
        if (isAuthentificate == true) {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Connection réussi',
            position: 'bottom',
          });
          route.push({name: 'Home'});
        } else {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'Connection refusée',
            position: 'bottom',
          });
        }
      } catch (error) {
        console.error(error);
        $q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'Connection refusée',
          position: 'bottom',
        });
      }
    }
    return {
      utilisateur,
      isPwd,
      login_maxlength,
      mot_de_passe_maxlength,
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
