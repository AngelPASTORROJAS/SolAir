<template>
    <div class="container">
        <div class="row items-center">
            <h2 class="text-center q-pr-lg">QUESTION LES PLUS POSÉES</h2>
            <hr class="col qseparator" />
        </div>
        <q-list bordered class="rounded-borders">
          <q-expansion-item
          v-model="expanded1"
          :header-class="expanded1?'bg-red-5 text-white':''"
            switch-toggle-side
            expand-separator
            label="Comment puis-je accéder mes anciennes recherches faites sur votre site ?"
          >
            <q-card>
              <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                eveniet doloribus ullam aliquid.
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-list>
        <br>
        <q-list bordered class="rounded-borders">
          <q-expansion-item
          v-model="expanded2"
          :header-class="expanded2?'bg-red-5 text-white':''"
            switch-toggle-side
            expand-separator
            label="Puis-je réserver la destination que je souhaite depuis votre site ?"
          >
            <q-card>
              <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                eveniet doloribus ullam aliquid.
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-list>
        <br>
        <q-list bordered class="rounded-borders">
          <q-expansion-item
          v-model="expanded3"
          :header-class="expanded3?'bg-red-5 text-white':''"
            switch-toggle-side
            expand-separator
            label="Quels types de voyages proposez-vous ?"
          >
            <q-card>
              <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                eveniet doloribus ullam aliquid.
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-list>
        <br>
        <q-list bordered class="rounded-borders">
          <q-expansion-item
          v-model="expanded4"
          :header-class="expanded4?'bg-red-5 text-white':''"
            switch-toggle-side
            expand-separator
            label="Pouvez-vous m'aider à organiser des activités spécifiques sur ma destination ?"
          >
            <q-card>
              <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                eveniet doloribus ullam aliquid.
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-list>
        <br>
        <q-list bordered class="rounded-borders">
          <q-expansion-item
          v-model="expanded5"
          :header-class="expanded5?'bg-red-5 text-white':''"
            switch-toggle-side
            expand-separator
            label="Pouvez-vous m'aider à organiser des activités spécifiques sur ma destination ?"
          >
            <q-card>
              <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                eveniet doloribus ullam aliquid.
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-list>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
    name: 'FAQ',
    setup(){
        return {
            expanded1: ref(false),
            expanded2: ref(false),
            expanded3: ref(false),
            expanded4: ref(false),
            expanded5: ref(false)
        };
    },
    components: {},
});
</script>
<style lang="scss" scoped>
h2 {
    font-size: $font-size-h2;
    font-family: $font-family-h2;
    color: $titre;
}
.qseparator{
    border: none;
  border-top: 1px solid $titre;
}

.container{
    padding: 0 5em;
}
</style>