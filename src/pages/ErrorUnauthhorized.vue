<template>
  <div class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 30vh">
        <q-icon name="block"></q-icon>
      </div>

      <div class="text-h2" style="opacity:.4">
        Vous n'avez pas accès à cette page. Créer un compte!
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ErrorUnauthhorized'
});
</script>
