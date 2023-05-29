<template>
  <nav class="q-py-md q-px-xl navigation">
    <ul class="row items-center justify-between navigateur-list">
      <li class="q-pl-md">
        <a  href="#">
          <img src="./../assets/img/logo.svg" alt="logo du site" />
        </a>
      </li>
      <li>
        <a class="gt-sm text-white text-nav" href="#">Gestionnaire d'experience</a>
      </li>
      <li>
        <a class="gt-sm text-white text-nav" href="#">Qui sommes-nous ?</a>
      </li>
      <li>
        <a class="gt-sm text-white text-nav" href="#">Contact</a>
      </li>
      <li>
        <a href="#/login">
          <img src="./../assets/img/login.png" alt="icône de login" />
        </a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'NavBarComponent',
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
  font-family: 'Inter';
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-decoration: none;
}
.text-nav:hover {
  text-decoration: underline;
  text-decoration-color: $titre;
  text-decoration-thickness: 2px;
  text-decoration-style: solid;
}
</style>
