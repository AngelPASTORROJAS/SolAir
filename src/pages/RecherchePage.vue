<template>
  <HeaderCustom label="Effectuez votre recherche" />
  <div class="text-center items-center justify-center">
    <h1>Question 1</h1>
    <h2 class="text-custom-h2">
      Quels types de lieu préférez-vous pour vos vacances ?
    </h2>
    <div class="row justify-center">
      <article
        @click="toggleClicked(montagne)"
        :class="
          'text-center q-pa-lg montagne' + (montagne.clicked ? '-clicked' : '')
        "
      >
        <img src="../assets/questions/montagne.svg" alt="" />
        <p class="text-custom-p">Montagne</p>
      </article>
      <article
        @click="toggleClicked(mer)"
        :class="'text-center q-pa-lg mer' + (mer.clicked ? '-clicked' : '')"
      >
        <img src="../assets/questions/mer.svg" alt="" />
        <p class="text-custom-p">Mer</p>
      </article>
      <article
        @click="toggleClicked(compagne)"
        :class="
          'text-center q-pa-lg compagne' + (compagne.clicked ? '-clicked' : '')
        "
      >
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
      <article
        @click="toggleClicked(plage)"
        :class="'text-center q-pa-lg plage' + (plage.clicked ? '-clicked' : '')"
      >
        <img src="../assets/questions/plage.svg" alt="" />
        <p class="text-custom-p">Plage</p>
      </article>
      <article
        @click="toggleClicked(culture)"
        :class="
          'text-center q-pa-lg culture' + (culture.clicked ? '-clicked' : '')
        "
      >
        <img src="../assets/questions/culture.svg" alt="" />
        <p class="text-custom-p">Culture</p>
      </article>
      <article
        @click="toggleClicked(art)"
        :class="'text-center q-pa-lg art' + (art.clicked ? '-clicked' : '')"
      >
        <img src="../assets/questions/art.svg" alt="" />
        <p class="text-custom-p">Art</p>
      </article>
      <article
        @click="toggleClicked(nature)"
        :class="
          'text-center q-pa-lg nature' + (nature.clicked ? '-clicked' : '')
        "
      >
        <img src="../assets/questions/nature.svg" alt="" />
        <p class="text-custom-p">Nature</p>
      </article>
      <article
        @click="toggleClicked(sports)"
        :class="
          'text-center q-pa-lg sports' + (sports.clicked ? '-clicked' : '')
        "
      >
        <img src="../assets/questions/sports.svg" alt="" />
        <p class="text-custom-p">Sports</p>
      </article>
      <article
        @click="toggleClicked(gastronomie)"
        :class="
          'text-center q-pa-lg gastronomie' +
          (gastronomie.clicked ? '-clicked' : '')
        "
      >
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
      <article
        @click="toggleClicked(aventure)"
        :class="
          'text-center q-pa-lg aventure' + (aventure.clicked ? '-clicked' : '')
        "
      >
        <img src="../assets/questions/aventure.svg" alt="" />
        <p class="text-custom-p">Aventure</p>
      </article>
      <article
        @click="toggleClicked(decouverte)"
        :class="
          'text-center q-pa-lg decouverte' +
          (decouverte.clicked ? '-clicked' : '')
        "
      >
        <img src="../assets/questions/decouverte.svg" alt="" />
        <p class="text-custom-p">Découverte</p>
      </article>
      <article
        @click="toggleClicked(detente)"
        :class="
          'text-center q-pa-lg detente' + (detente.clicked ? '-clicked' : '')
        "
      >
        <img src="../assets/questions/detente.svg" alt="" />
        <p class="text-custom-p">Détente</p>
      </article>
      <article
        @click="toggleClicked(croisiere)"
        :class="
          'text-center q-pa-lg croisiere' +
          (croisiere.clicked ? '-clicked' : '')
        "
      >
        <img src="../assets/questions/croisiere.svg" alt="" />
        <p class="text-custom-p">Croisière</p>
      </article>
      <article
        @click="toggleClicked(escapadeMaritime)"
        :class="
          'text-center q-pa-lg escapade-maritime' +
          (escapadeMaritime.clicked ? '-clicked' : '')
        "
      >
        <img src="../assets/questions/escapade-maritime.svg" alt="" />
        <p class="text-custom-p">Escapade maritime</p>
      </article>
      <article
        @click="toggleClicked(camping)"
        :class="
          'text-center q-pa-lg camping' + (camping.clicked ? '-clicked' : '')
        "
      >
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
      <article
        @click="toggleClicked(hiver)"
        :class="'text-center q-pa-lg hiver' + (hiver.clicked ? '-clicked' : '')"
      >
        <img src="../assets/questions/hiver.svg" alt="" />
        <p class="text-custom-p">Hiver</p>
      </article>
      <article
        @click="toggleClicked(printemps)"
        :class="
          'text-center q-pa-lg printemps' +
          (printemps.clicked ? '-clicked' : '')
        "
      >
        <img src="../assets/questions/printemps.svg" alt="" />
        <p class="text-custom-p">Printemps</p>
      </article>
      <article
        @click="toggleClicked(ete)"
        :class="'text-center q-pa-lg ete' + (ete.clicked ? '-clicked' : '')"
      >
        <img src="../assets/questions/ete.svg" alt="" />
        <p class="text-custom-p">Été</p>
      </article>
      <article
        @click="toggleClicked(automne)"
        :class="
          'text-center q-pa-lg automne' + (automne.clicked ? '-clicked' : '')
        "
      >
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
      <article
        @click="toggleClicked(weekEnd)"
        :class="
          'text-center q-pa-lg week-end' + (weekEnd.clicked ? '-clicked' : '')
        "
      >
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
      <article
        @click="toggleClicked(semaine)"
        :class="
          'text-center q-pa-lg semaine' + (semaine.clicked ? '-clicked' : '')
        "
      >
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
      <article
        @click="toggleClicked(semaines)"
        :class="
          'text-center q-pa-lg semaines' + (semaines.clicked ? '-clicked' : '')
        "
      >
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
      <article
        @click="toggleClicked(amerique)"
        :class="
          'text-center q-pa-lg amerique' + (amerique.clicked ? '-clicked' : '')
        "
      >
        <img src="../assets/questions/amerique.svg" alt="" />
        <p class="text-custom-p">Amerique</p>
      </article>
      <article
        @click="toggleClicked(europe)"
        :class="
          'text-center q-pa-lg europe' + (europe.clicked ? '-clicked' : '')
        "
      >
        <img src="../assets/questions/europe.svg" alt="" />
        <p class="text-custom-p">Europe</p>
      </article>
      <article
        @click="toggleClicked(asie)"
        :class="'text-center q-pa-lg asie' + (asie.clicked ? '-clicked' : '')"
      >
        <img src="../assets/questions/asie.svg" alt="" />
        <p class="text-custom-p">Asie</p>
      </article>
      <article
        @click="toggleClicked(antarctique)"
        :class="
          'text-center q-pa-lg antarctique' +
          (antarctique.clicked ? '-clicked' : '')
        "
      >
        <img src="../assets/questions/antarctique.svg" alt="" />
        <p class="text-custom-p">Antarctique</p>
      </article>
      <article
        @click="toggleClicked(afrique)"
        :class="
          'text-center q-pa-lg afrique' + (afrique.clicked ? '-clicked' : '')
        "
      >
        <img src="../assets/questions/afrique.svg" alt="" />
        <p class="text-custom-p">Afrique</p>
      </article>
      <article
        @click="toggleClicked(oceanie)"
        :class="
          'text-center q-pa-lg oceanie' + (oceanie.clicked ? '-clicked' : '')
        "
      >
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
      <article
        @click="toggleClicked(populaires)"
        :class="
          'text-center q-pa-lg populaires' +
          (populaires.clicked ? '-clicked' : '')
        "
      >
        <img src="../assets/questions/touristique.svg" alt="" />
        <p class="text-custom-p">Populaires et touristiques</p>
      </article>
      <article
        @click="toggleClicked(authentique)"
        :class="
          'text-center q-pa-lg authentique' +
          (authentique.clicked ? '-clicked' : '')
        "
      >
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
      <article
        @click="toggleClicked(economique)"
        :class="
          'text-center q-pa-lg economique' +
          (economique.clicked ? '-clicked' : '')
        "
      >
        <img src="../assets/questions/economique.svg" alt="" />
        <p class="text-custom-p">Économique</p>
      </article>
      <article
        @click="toggleClicked(milieuGamme)"
        :class="
          'text-center q-pa-lg milieu-gamme' +
          (milieuGamme.clicked ? '-clicked' : '')
        "
      >
        <img src="../assets/questions/milieu-gamme.svg" alt="" />
        <p class="text-custom-p">Milieu de gamme</p>
      </article>
      <article
        @click="toggleClicked(luxe)"
        :class="'text-center q-pa-lg luxe' + (luxe.clicked ? '-clicked' : '')"
      >
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
      <article
        @click="toggleClicked(solo)"
        :class="'text-center q-pa-lg solo' + (solo.clicked ? '-clicked' : '')"
      >
        <img src="../assets/questions/solo.svg" alt="" />
        <p class="text-custom-p">Solo</p>
      </article>
      <article
        @click="toggleClicked(couple)"
        :class="
          'text-center q-pa-lg couple' + (couple.clicked ? '-clicked' : '')
        "
      >
        <img src="../assets/questions/couple.svg" alt="" />
        <p class="text-custom-p">En couple</p>
      </article>
      <article
        @click="toggleClicked(famille)"
        :class="
          'text-center q-pa-lg famille' + (famille.clicked ? '-clicked' : '')
        "
      >
        <img src="../assets/questions/famille.svg" alt="" />
        <p class="text-custom-p">Famille</p>
      </article>
      <article
        @click="toggleClicked(groupe)"
        :class="
          'text-center q-pa-lg groupe' + (groupe.clicked ? '-clicked' : '')
        "
      >
        <img src="../assets/questions/groupe.svg" alt="" />
        <p class="text-custom-p">Groupe</p>
      </article>
    </div>
    <button class="button-select-custom q-mb-lg">Suivant</button>
  </div>
  <div class="text-center items-center justify-center">
    <h1>Question 10</h1>
    <h2 class="text-custom-h2">
      Quel est votre budget de voyage approximatif ?
    </h2>
    <div class="row justify-center">
      <article
        @click="toggleClicked(budget1)"
        :class="'text-center q-pa-lg budget1' + (budget1.clicked ? '-clicked' : '')"
      >
        <p
          style="            font-family: 'Inter';
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
      <article
      @click="toggleClicked(budget2)"
        :class="'text-center q-pa-lg budget2' + (budget2.clicked ? '-clicked' : '')"
      >
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
      <article
      @click="toggleClicked(budget3)"
        :class="'text-center q-pa-lg budget3' + (budget3.clicked ? '-clicked' : '')"
      >
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
      <article
      @click="toggleClicked(budget4)"
        :class="'text-center q-pa-lg budget4' + (budget4.clicked ? '-clicked' : '')"
      >
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
    interface Selected {
      id?: number,
      clicked: boolean,
      prix?: number
    }
    const montagne = ref({ id: 1, clicked: false });
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
    const budget1 = ref({ prix: 250, clicked: false });
    const budget2 = ref({ prix: 500, clicked: false });
    const budget3 = ref({ prix: 750, clicked: false });
    const budget4 = ref({ prix: 1000, clicked: false });

    function toggleClicked(choice: Selected) {
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
      budget1,
      budget2,
      budget3,
      budget4,
      toggleClicked,
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

/*#region Article */

article,
.budget1 {
  width: 222px;
  margin: 15px;
  backdrop-filter: blur(7.5px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 20px;
  border: 1px solid $paragraphe;
}

article:hover,
.montagne-clicked,
.mer-clicked,
.compagne-clicked,
.plage-clicked,
.culture-clicked,
.art-clicked,
.nature-clicked,
.sports-clicked,
.gastronomie-clicked,
.aventure-clicked,
.decouverte-clicked,
.detente-clicked,
.croisiere-clicked,
.escapade-maritime-clicked,
.camping-clicked,
.hiver-clicked,
.printemps-clicked,
.ete-clicked,
.automne-clicked,
.week-end-clicked,
.semaine-clicked,
.semaines-clicked,
.populaires-clicked,
.authentique-clicked,
.amerique-clicked,
.europe-clicked,
.asie-clicked,
.antarctique-clicked,
.afrique-clicked,
.oceanie-clicked,
.economique-clicked,
.milieu-gamme-clicked,
.luxe-clicked,
.solo-clicked,
.couple-clicked,
.famille-clicked,
.groupe-clicked,
.budget1-clicked,
.budget2-clicked,
.budget3-clicked,
.budget4-clicked {
  cursor: pointer;
  background-color: $titre;
  border: 0;

  p {
    color: white !important;
  }
}
/*#endregion*/

/*#region Question 1 */

.montagne:hover,
.montagne-clicked {
  img {
    content: url('./../assets/questions/montagne-hover.svg');
  }
}

.mer:hover,
.mer-clicked {
  img {
    content: url('./../assets/questions/mer-hover.svg');
  }
}

.compagne:hover,
.compagne-clicked {
  img {
    content: url('./../assets/questions/compagne-hover.svg');
  }
}

/*#endregion*/

/*#region Question 2 */
.plage:hover,
.plage-clicked {
  img {
    content: url('./../assets/questions/plage-hover.svg');
  }
}

.culture:hover,
.culture-clicked {
  img {
    content: url('./../assets/questions/culture-hover.svg');
  }
}

.art:hover,
.art-clicked {
  img {
    content: url('./../assets/questions/art-hover.svg');
  }
}

.nature:hover,
.nature-clicked {
  img {
    content: url('./../assets/questions/nature-hover.svg');
  }
}

.sports:hover,
.sports-clicked {
  img {
    content: url('./../assets/questions/sports-hover.svg');
  }
}

.gastronomie:hover,
.gastronomie-clicked {
  img {
    content: url('./../assets/questions/gastronomie-hover.svg');
  }
}
/*#endregion*/

/*#region Question 3 */

.aventure:hover,
.aventure-clicked {
  img {
    content: url('./../assets/questions/aventure-hover.svg');
  }
}

.decouverte:hover,
.decouverte-clicked {
  img {
    content: url('./../assets/questions/decouverte-hover.svg');
  }
}

.detente:hover,
.detente-clicked {
  img {
    content: url('./../assets/questions/detente-hover.svg');
  }
}

.croisiere:hover,
.croisiere-clicked {
  img {
    content: url('./../assets/questions/croisiere-hover.svg');
  }
}

.escapade-maritime:hover,
.escapade-maritime-clicked {
  img {
    content: url('./../assets/questions/escapade-maritime-hover.svg');
  }
}

.camping:hover,
.camping-clicked {
  img {
    content: url('./../assets/questions/camping-hover.svg');
  }
}

/*#endregion*/

/*#region Question 4 */

.hiver:hover,
.hiver-clicked {
  img {
    content: url('./../assets/questions/hiver-hover.svg');
  }
}

.printemps:hover,
.printemps-clicked {
  img {
    content: url('./../assets/questions/printemps-hover.svg');
  }
}

.ete:hover,
.ete-clicked {
  img {
    content: url('./../assets/questions/ete-hover.svg');
  }
}

.automne:hover,
.authentique-clicked {
  img {
    content: url('./../assets/questions/automne-hover.svg');
  }
}

/*#endregion*/

/*#region Question 6 */
.amerique:hover,
.amerique-clicked {
  img {
    content: url('./../assets/questions/amerique-hover.svg');
  }
}

.europe:hover,
.europe-clicked {
  img {
    content: url('./../assets/questions/europe-hover.svg');
  }
}

.asie:hover,
.asie-clicked {
  img {
    content: url('./../assets/questions/asie-hover.svg');
  }
}

.antarctique:hover,
.antarctique-clicked {
  img {
    content: url('./../assets/questions/antarctique-hover.svg');
  }
}

.afrique:hover,
.afrique-clicked {
  img {
    content: url('./../assets/questions/afrique-hover.svg');
  }
}

.oceanie:hover,
.oceanie-clicked {
  img {
    content: url('./../assets/questions/oceanie-hover.svg');
  }
}

/*#endregion*/

/*#region Question 7 */

.authentique:hover,
.authentique-clicked {
  img {
    content: url('./../assets/questions/authentique-hover.svg');
  }
}

.populaires:hover,
.populaires-clicked {
  img {
    content: url('./../assets/questions/touristique-hover.svg');
  }
}

/*#endregion*/

/*#region Question 8 */

.economique:hover,
.economique-clicked {
  img {
    content: url('./../assets/questions/economique-hover.svg');
  }
}

.milieu-gamme:hover,
.milieu-gamme-clicked {
  img {
    content: url('./../assets/questions/milieu-gamme-hover.svg');
  }
}

.luxe:hover,
.luxe-clicked {
  img {
    content: url('./../assets/questions/luxe-hover.svg');
  }
}
/*#endregion*/

/*#region Question 9 */

.solo:hover,
.solo-clicked {
  img {
    content: url('./../assets/questions/solo-hover.svg');
  }
}

.couple:hover,
.couple-clicked {
  img {
    content: url('./../assets/questions/couple-hover.svg');
  }
}

.famille:hover,
.famille-clicked {
  img {
    content: url('./../assets/questions/famille-hover.svg');
  }
}

.groupe:hover,
.groupe-clicked {
  img {
    content: url('./../assets/questions/groupe-hover.svg');
  }
}
/*#endregion*/

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
