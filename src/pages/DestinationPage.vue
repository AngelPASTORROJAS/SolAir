<template>
    <HeaderCustom :label="destination.ville??" />
    <div>
        <div>
            <h2>{{ destination.nom }}</h2>
            <p>{{ destination.description }}</p>
        </div>
        <img :src="destination.urlimage">
    </div>
    <FooterComponent />
  </template>
  <script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue';
  import HeaderCustom from 'src/components/HeaderCustom.vue';
  import FooterComponent from 'src/components/FooterComponent.vue';
  import { useQuasar } from 'quasar';
import { Destination } from 'src/api/back_solair/models/Destination';
import { solairAPI } from 'src/api/back_solair';
// import { useRoute } from 'vue-router';
  
  export default defineComponent({
    name: 'DestinationPage',
    setup() {
      const $q = useQuasar();
      const destination = ref({} as Destination)
    //   const route = useRoute();
    //   const getClicked = ref()
      onMounted(async () => {
      try {
        $q.loading.show();
        destination.value = (await solairAPI.destination.getDestinationsRandomAsync())[0]
        // getClicked.value = route.params.body;
        // console.log(getClicked.value);
        // console.log(typeof(getClicked.value));

      } catch (e) {
        console.log(e);
      } finally {
        $q.loading.hide();
      }
    });
      return {
        destination
      };
    },
    components: {
      HeaderCustom,
      FooterComponent,
    },
  });
  </script>
  <style lang="scss" scoped></style>
  