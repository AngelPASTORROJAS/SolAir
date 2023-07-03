<template>
  <nav class="q-py-md q-px-xl navigation text-custom-p">
    <ul class="row items-center justify-between navigateur-list">
      <li class="q-pt-sm q-pl-md">
        <a class="text-nav" href="#">
          <img src="./../assets/img/logo.svg" alt="logo du site" />
        </a>
      </li>
      <li>
        <a class="gt-sm text-white text-nav" href="#/recherche">Gestionnaire d'expérience</a>
      </li>
      <li>
        <a class="gt-sm text-white text-nav" href="#/qui-sommes-nous">Qui sommes-nous ?</a>
      </li>
      <li>
        <a class="gt-sm text-white text-nav" href="#/contact">Contact</a>
      </li>
      <li>
        <q-btn class="button-custom" @click="navigateTo" size="30px" flat round :icon="isConnect ? 'logout' : 'perm_identity'" />
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { useAuthStore } from 'src/stores/auth-store';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'NavBarComponent',
  setup() {
    const route = useRouter();

    const authStore = useAuthStore();
    const isConnect = ref(false);

    const logOut = () => {
      isConnect.value = false;
      authStore.logout();
    };

    const navigateTo = () => {
      if (isConnect.value) {
        logOut();
        route.push({name: 'Home'});
      } else {
        route.push({name: 'Login'});
      }
    };

    onMounted(async () => {
      try {
        isConnect.value = await authStore.IsConnect();
      } catch (error) {
        console.error(error);
        isConnect.value = false;
      }
    });

    return {
      isConnect,
      navigateTo,
    };
  },
  components: {},
});
</script>

<style lang="scss" scoped>
.navigation {
  position: sticky;
  top: 0;
}

.navigateur-list {
  backdrop-filter: blur(2.5px);
  border-radius: 20px;
  list-style-type: none;
  padding: 0px;
}

.text-nav {
  font-weight: 700;
  font-size: 20px;
  line-height: 22px;
  text-decoration: none;
}

.text-nav:hover {
  text-decoration: underline;
  text-decoration-color: $titre;
  text-decoration-thickness: 2px;
  text-decoration-style: solid;
}

.button-custom {
  color: white;
}

.button-custom:hover {
  color: $titre;
}
</style>
