<template>
  <HeaderCustom label="Effectuez votre recherche" />
  <div class="text-center items-center justify-center">
    <h1>Question 1</h1>
    <h2 class="text-custom-h2">
      Quels types de lieu préférez-vous pour vos vacances ?
    </h2>
    <div class="row justify-center">
      <article
      :class="'text-center q-pa-lg montagne'+(montagne.clicked?'-clicked':'')"
      @click="toggleClicked(montagne)"
      >
        <img src="../assets/questions/montagne.svg" alt="" />
        <p class="text-custom-p">Montagne</p>
      </article>
      <article class="text-center mer q-pa-lg">
        <img src="../assets/questions/mer.svg" alt="" />
        <p class="text-custom-p">Mer</p>
      </article>
      <article class="text-center compagne q-pa-lg">
        <img src="../assets/questions/compagne.svg" alt="" />
        <p class="text-custom-p">Compagne</p>
      </article>
    </div>
    <button class="button-select-custom q-mb-lg">Suivant</button>
  </div>
  <div class="text-center items-center justify-center">
    <h1>Question 2</h1>
    <h2 class="text-custom-h2">Quels sont vos centres d'intérêt ?</h2>
    <div class="row justify-center">
      <article class="text-center plage q-pa-lg">
        <img src="../assets/questions/plage.svg" alt="" />
        <p class="text-custom-p">Plage</p>
      </article>
      <article class="text-center culture q-pa-lg">
        <img src="../assets/questions/culture.svg" alt="" />
        <p class="text-custom-p">Culture</p>
      </article>
      <article class="text-center art q-pa-lg">
        <img src="../assets/questions/art.svg" alt="" />
        <p class="text-custom-p">Art</p>
      </article>
      <article class="text-center nature q-pa-lg">
        <img src="../assets/questions/nature.svg" alt="" />
        <p class="text-custom-p">Nature</p>
      </article>
      <article class="text-center sports q-pa-lg">
        <img src="../assets/questions/sports.svg" alt="" />
        <p class="text-custom-p">Sports</p>
      </article>
      <article class="text-center gastronomie q-pa-lg">
        <img src="../assets/questions/gastronomie.svg" alt="" />
        <p class="text-custom-p">Gastronomie</p>
      </article>
    </div>
    <button class="button-select-custom q-mb-lg">Suivant</button>
  </div>
  <div class="text-center items-center justify-center">
    <h1>Question 3</h1>
    <h2 class="text-custom-h2">Quel type de voyage préférez-vous ?</h2>
    <div class="row justify-center">
      <article class="text-center aventure q-pa-lg">
        <img src="../assets/questions/aventure.svg" alt="" />
        <p class="text-custom-p">Aventure</p>
      </article>
      <article class="text-center decouverte q-pa-lg">
        <img src="../assets/questions/decouverte.svg" alt="" />
        <p class="text-custom-p">Découverte</p>
      </article>
      <article class="text-center detente q-pa-lg">
        <img src="../assets/questions/detente.svg" alt="" />
        <p class="text-custom-p">Détente</p>
      </article>
      <article class="text-center croisiere q-pa-lg">
        <img src="../assets/questions/croisiere.svg" alt="" />
        <p class="text-custom-p">Croisière</p>
      </article>
      <article class="text-center escapade-maritime q-pa-lg">
        <img src="../assets/questions/escapade-maritime.svg" alt="" />
        <p class="text-custom-p">Escapade maritime</p>
      </article>
      <article class="text-center camping q-pa-lg">
        <img src="../assets/questions/camping.svg" alt="" />
        <p class="text-custom-p">Camping</p>
      </article>
    </div>
    <button class="button-select-custom q-mb-lg">Suivant</button>
  </div>
  <div class="text-center items-center justify-center">
    <h1>Question 4</h1>
    <h2 class="text-custom-h2">Quand voulez-vous voyager ?</h2>
    <div class="row justify-center">
      <article class="text-center hiver q-pa-lg">
        <img src="../assets/questions/hiver.svg" alt="" />
        <p class="text-custom-p">Hiver</p>
      </article>
      <article class="text-center printemps q-pa-lg">
        <img src="../assets/questions/printemps.svg" alt="" />
        <p class="text-custom-p">Printemps</p>
      </article>
      <article class="text-center ete q-pa-lg">
        <img src="../assets/questions/ete.svg" alt="" />
        <p class="text-custom-p">Été</p>
      </article>
      <article class="text-center automne q-pa-lg">
        <img src="../assets/questions/automne.svg" alt="" />
        <p class="text-custom-p">Automne</p>
      </article>
    </div>
    <button class="button-select-custom q-mb-lg">Suivant</button>
  </div>
  <div class="text-center items-center justify-center">
    <h1>Question 5</h1>
    <h2 class="text-custom-h2">Combien de temps voulez-vous partir ?</h2>
    <div class="row justify-center">
      <article class="text-center week-end q-pa-lg">
        <p
          style="
            font-family: 'Inter';
            font-style: normal;
            font-weight: 900;
            font-size: 87px;
            line-height: 105px;
            color: #494949;
          "
        >
          2J
        </p>
        <p class="text-custom-p">Un week-end</p>
      </article>
      <article class="text-center une-semaine q-pa-lg">
        <p
          style="
            font-family: 'Inter';
            font-style: normal;
            font-weight: 900;
            font-size: 87px;
            line-height: 105px;
            color: #494949;
          "
        >
          7J
        </p>
        <p class="text-custom-p">Une semaine</p>
      </article>
      <article class="text-center deux-semaines q-pa-lg">
        <p
          style="
            font-family: 'Inter';
            font-style: normal;
            font-weight: 900;
            font-size: 87px;
            line-height: 105px;
            color: #494949;
          "
        >
          14J
        </p>
        <p class="text-custom-p">Deux semaines</p>
      </article>
    </div>
    <button class="button-select-custom q-mb-lg">Suivant</button>
  </div>
  <div class="text-center items-center justify-center">
    <h1>Question 6</h1>
    <h2 class="text-custom-h2">Quel est votre continent de départ ?</h2>
    <div class="row justify-center">
      <article class="text-center amerique q-pa-lg">
        <img src="../assets/questions/amerique.svg" alt="" />
        <p class="text-custom-p">Amerique</p>
      </article>
      <article class="text-center europe q-pa-lg">
        <img src="../assets/questions/europe.svg" alt="" />
        <p class="text-custom-p">Europe</p>
      </article>
      <article class="text-center asie q-pa-lg">
        <img src="../assets/questions/asie.svg" alt="" />
        <p class="text-custom-p">Asie</p>
      </article>
      <article class="text-center antarctique q-pa-lg">
        <img src="../assets/questions/antarctique.svg" alt="" />
        <p class="text-custom-p">Antarctique</p>
      </article>
      <article class="text-center afrique q-pa-lg">
        <img src="../assets/questions/afrique.svg" alt="" />
        <p class="text-custom-p">Afrique</p>
      </article>
      <article class="text-center oceanie q-pa-lg">
        <img src="../assets/questions/oceanie.svg" alt="" />
        <p class="text-custom-p">Océanie</p>
      </article>
    </div>
    <button class="button-select-custom q-mb-lg">Suivant</button>
  </div>
  <div class="text-center items-center justify-center">
    <h1>Question 7</h1>
    <h2 class="text-custom-h2">
      Préférez-vous les destinations populaires et touristiques ou les endroits
      moins connus et plus authentiques ?
    </h2>
    <div class="row justify-center">
      <article class="text-center touristique q-pa-lg">
        <img src="../assets/questions/touristique.svg" alt="" />
        <p class="text-custom-p">Populaires et touristiques</p>
      </article>
      <article class="text-center authentique q-pa-lg">
        <img src="../assets/questions/authentique.svg" alt="" />
        <p class="text-custom-p">Moins connus et plus authentiques</p>
      </article>
    </div>
    <button class="button-select-custom q-mb-lg">Suivant</button>
  </div>
  <div class="text-center items-center justify-center">
    <h1>Question 8</h1>
    <h2 class="text-custom-h2">Quel est votre budget pour le voyage ?</h2>
    <div class="row justify-center">
      <article class="text-center economique q-pa-lg">
        <img src="../assets/questions/economique.svg" alt="" />
        <p class="text-custom-p">Économique</p>
      </article>
      <article class="text-center milieu-gamme q-pa-lg">
        <img src="../assets/questions/milieu-gamme.svg" alt="" />
        <p class="text-custom-p">Milieu de gamme</p>
      </article>
      <article class="text-center luxe q-pa-lg">
        <img src="../assets/questions/luxe.svg" alt="" />
        <p class="text-custom-p">Luxe</p>
      </article>
    </div>
    <button class="button-select-custom q-mb-lg">Suivant</button>
  </div>
  <div class="text-center items-center justify-center">
    <h1>Question 9</h1>
    <h2 class="text-custom-h2">
      Préférez-vous voyager en solo, en couple, en famille ou en groupe ?
    </h2>
    <div class="row justify-center">
      <article class="text-center solo q-pa-lg">
        <img src="../assets/questions/solo.svg" alt="" />
        <p class="text-custom-p">Solo</p>
      </article>
      <article class="text-center couple q-pa-lg">
        <img src="../assets/questions/couple.svg" alt="" />
        <p class="text-custom-p">En couple</p>
      </article>
      <article class="text-center famille q-pa-lg">
        <img src="../assets/questions/famille.svg" alt="" />
        <p class="text-custom-p">Famille</p>
      </article>
      <article class="text-center groupe q-pa-lg">
        <img src="../assets/questions/groupe.svg" alt="" />
        <p class="text-custom-p">Groupe</p>
      </article>
    </div>
    <button class="button-select-custom q-mb-lg">Suivant</button>
  </div>
  <div class="text-center items-center justify-center">
    <h1>Question 10</h1>
    <h2 class="text-custom-h2">
      Préférez-vous voyager en solo, en couple, en famille ou en groupe ?
    </h2>
    <div class="row justify-center">
      <article class="text-center solo q-pa-lg">
        <p
          style="
            font-family: 'Inter';
            font-style: normal;
            font-weight: 900;
            font-size: 62px;
            line-height: 75px;
            text-align: center;
            color: #494949;
          "
        >
          250€
        </p>
      </article>
      <article class="text-center couple q-pa-lg">
        <p
          style="
            font-family: 'Inter';
            font-style: normal;
            font-weight: 900;
            font-size: 62px;
            line-height: 75px;
            text-align: center;
            color: #494949;
          "
        >
          500€
        </p>
      </article>
      <article class="text-center famille q-pa-lg">
        <p
          style="
            font-family: 'Inter';
            font-style: normal;
            font-weight: 900;
            font-size: 62px;
            line-height: 75px;
            text-align: center;
            color: #494949;
          "
        >
          750€
        </p>
      </article>
      <article class="text-center groupe q-pa-lg">
        <p
          style="
            font-family: 'Inter';
            font-style: normal;
            font-weight: 900;
            font-size: 62px;
            line-height: 75px;
            text-align: center;
            color: #494949;
          "
        >
          +1000€
        </p>
      </article>
    </div>
    <button class="button-select-custom q-mb-lg">Suivant</button>
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
    interface Critere {
      id: number;
      clicked: boolean;
    }
    const montagne = ref({ id: 1, clicked: false } as Critere);
    const mer = ref({ id: 2, clicked: false });
    const compagne = ref({ id: 3, clicked: false });
    const plage = ref({ id: 4, clicked: false });
    const culture = ref({ id: 5, clicked: false });
    const art = ref({ id: 6, clicked: false });
    const nature = ref({ id: 7, clicked: false });
    const sports = ref({ id: 8, clicked: false });
    const gastronomie = ref({ id: 9, clicked: false });
    const aventure = ref({ id: 10, clicked: false });
    const decouverte = ref({ id: 11, clicked: false });
    const detente = ref({ id: 12, clicked: false });
    const croisiere = ref({ id: 13, clicked: false });
    const escapadeMaritime = ref({ id: 14, clicked: false });
    const camping = ref({ id: 15, clicked: false });
    const hiver = ref({ id: 16, clicked: false });
    const printemps = ref({ id: 17, clicked: false });
    const ete = ref({ id: 18, clicked: false });
    const automne = ref({ id: 19, clicked: false });
    const weekEnd = ref({ id: 20, clicked: false });
    const semaine = ref({ id: 21, clicked: false });
    const semaines = ref({ id: 22, clicked: false });
    const populaires = ref({ id: 23, clicked: false });
    const authentique = ref({ id: 24, clicked: false });
    const amerique = ref({ id: 25, clicked: false });
    const europe = ref({ id: 26, clicked: false });
    const asie = ref({ id: 27, clicked: false });
    const antarctique = ref({ id: 28, clicked: false });
    const afrique = ref({ id: 29, clicked: false });
    const oceanie = ref({ id: 30, clicked: false });
    const economique = ref({ id: 32, clicked: false });
    const milieuGamme = ref({ id: 32, clicked: false });
    const luxe = ref({ id: 33, clicked: false });
    const solo = ref({ id: 34, clicked: false });
    const couple = ref({ id: 35, clicked: false });
    const famille = ref({ id: 36, clicked: false });
    const groupe = ref({ id: 37, clicked: false });

    function toggleClicked(choice: Critere) {
      choice.clicked = !choice.clicked;
    }
    return {
      montagne,
      mer,
      compagne,
      plage,
      culture,
      art,
      nature,
      sports,
      gastronomie,
      aventure,
      decouverte,
      detente,
      croisiere,
      escapadeMaritime,
      camping,
      hiver,
      printemps,
      ete,
      automne,
      weekEnd,
      semaine,
      semaines,
      populaires,
      authentique,
      amerique,
      europe,
      asie,
      antarctique,
      afrique,
      oceanie,
      economique,
      milieuGamme,
      luxe,
      solo,
      couple,
      famille,
      groupe,
      toggleClicked
    };
  },
  components: {
    HeaderCustom,
    FooterComponent,
  },
});
</script>
<style lang="scss" scoped>
h2 {
  text-transform: uppercase;
}

article {
  width: 222px;
  margin: 15px;
  backdrop-filter: blur(7.5px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 20px;
  border: 1px solid $paragraphe;
}

article:hover, .montagne-clicked {
  cursor: pointer;
  background-color: $titre;
  border: 0;
  p {
    color: white !important;
  }
}

.montagne:hover, .montagne-clicked {
  img {
    content: url('./../assets/questions/montagne-hover.svg');
  }
}

.mer:hover {
  img {
    content: url('./../assets/questions/mer-hover.svg');
  }
}

.compagne:hover {
  img {
    content: url('./../assets/questions/compagne-hover.svg');
  }
}

.plage:hover {
  img {
    content: url('./../assets/questions/plage-hover.svg');
  }
}

.culture:hover {
  img {
    content: url('./../assets/questions/culture-hover.svg');
  }
}

.art:hover {
  img {
    content: url('./../assets/questions/art-hover.svg');
  }
}

.nature:hover {
  img {
    content: url('./../assets/questions/nature-hover.svg');
  }
}

.sports:hover {
  img {
    content: url('./../assets/questions/sports-hover.svg');
  }
}

.gastronomie:hover {
  img {
    content: url('./../assets/questions/gastronomie-hover.svg');
  }
}

.aventure:hover {
  img {
    content: url('./../assets/questions/aventure-hover.svg');
  }
}

.decouverte:hover {
  img {
    content: url('./../assets/questions/decouverte-hover.svg');
  }
}

.detente:hover {
  img {
    content: url('./../assets/questions/detente-hover.svg');
  }
}

.croisiere:hover {
  img {
    content: url('./../assets/questions/croisiere-hover.svg');
  }
}

.escapade-maritime-maritime:hover {
  img {
    content: url('./../assets/questions/escapade-maritime-hover.svg');
  }
}

.camping:hover {
  img {
    content: url('./../assets/questions/camping-hover.svg');
  }
}

.hiver:hover {
  img {
    content: url('./../assets/questions/hiver-hover.svg');
  }
}

.printemps:hover {
  img {
    content: url('./../assets/questions/printemps-hover.svg');
  }
}

.ete:hover {
  img {
    content: url('./../assets/questions/ete-hover.svg');
  }
}

.automne:hover {
  img {
    content: url('./../assets/questions/automne-hover.svg');
  }
}

.amerique:hover {
  img {
    content: url('./../assets/questions/amerique-hover.svg');
  }
}

.europe:hover {
  img {
    content: url('./../assets/questions/europe-hover.svg');
  }
}

.asie:hover {
  img {
    content: url('./../assets/questions/asie-hover.svg');
  }
}

.antarctique:hover {
  img {
    content: url('./../assets/questions/antarctique-hover.svg');
  }
}

.afrique:hover {
  img {
    content: url('./../assets/questions/afrique-hover.svg');
  }
}

.oceanie:hover {
  img {
    content: url('./../assets/questions/oceanie-hover.svg');
  }
}

.authentique:hover {
  img {
    content: url('./../assets/questions/authentique-hover.svg');
  }
}

.touristique:hover {
  img {
    content: url('./../assets/questions/touristique-hover.svg');
  }
}

.economique:hover {
  img {
    content: url('./../assets/questions/economique-hover.svg');
  }
}

.milieu-gamme-gamme:hover {
  img {
    content: url('./../assets/questions/milieu-gamme-hover.svg');
  }
}

.luxe:hover {
  img {
    content: url('./../assets/questions/luxe-hover.svg');
  }
}

.solo:hover {
  img {
    content: url('./../assets/questions/solo-hover.svg');
  }
}

.couple:hover {
  img {
    content: url('./../assets/questions/couple-hover.svg');
  }
}

.famille:hover {
  img {
    content: url('./../assets/questions/famille-hover.svg');
  }
}

.groupe:hover {
  img {
    content: url('./../assets/questions/groupe-hover.svg');
  }
}

h1 {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 62px;
  line-height: 76px;
  text-transform: capitalize;
  color: #494949;
}
</style>
