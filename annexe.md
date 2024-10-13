## 1. CONTEXTE
Sol'Air est une agence de voyage en ligne. Lorsque vous vous rendez sur le site, vous allez répondre à un questionnaire. Celui-ci comporte des questions sur vos habitudes en vacances, sur les activités que vous appréciez, les lieux que vous voulez découvrir, vos préférences sur le déroulement du séjour...


L'objectif est d'établir les vacances idéales pour vous, et de vous proposer une destination en conséquence.


Les lieux proposés vont des grandes stations balnéaires aux petites villes peu visitées dans toute la France. 

Selon vos préférences, vous pourrez profiter des lieux connus et appréciés de tous ou au contraire, découvrir des lieux peu visités et loin des touristes. 


En partenariats avec différentes plateformes de réservations de logements, de moyens de transports et d'activités, vous pourrez réserver ce dont vous avez besoin sans faire de recherches supplémentaires. Tout vous sera directement proposée selon  la destination choisie.
## 2. BESOINS
**Caractéristiques de l'offre :** site web proposant des services uniques. Sol'Air se démarque des autres nombreux sites web de e-tourisme en étant le seul à offrir un questionnaire personnalisé et designé pour chaque futur vacancier.

**Diversité des voyages proposés :** liste de voyages complète, diverse et variée. Le site web propose un nombre d'offres suffisantes pour répondre précisément aux attentes de l'internaute.

**Site web rapide et bonne navigation :** les informations sur les prestations doivent renseigner rapidement les internautes, accroître l’utilisabilité et donc gagner en rapidité pour l'utilisateur. Sol'Air propose une prise en charge rapide, claire et personnalisée.

**Qualité du contenu :** Présenter des offres claires et détaillées et offrir le plus d’informations possibles. Par exemple la possibilité de laisser les internautes s’exprimer par des avis, la notation des séjours ou la possibilité de mettre en ligne certaines photos de leur séjour.

**Fidélisation :** Fidéliser la clientèle et améliorer la satisfaction client. Aiderer l’internaute tout au long de sa démarche de réservation en répondant aux e-mails et en simplifiant la réservation, envoyez des offres personnalisées, etc.

**Diversification des recettes :** mise en place de plusieurs sources de revenus. Proposer des partenariats aux offices de tourisme et à des petits sites de réservations en ligne.

**Marketing digital :** mise en place d'une stratégie pour optimiser la visibilité de Sol'Air sur les supports digitaux. Promotion du site web sur différents canaux numériques. Analyse des données pour adapter les campagnes et atteindre la cible souhaitée.

## 3. EXIGENCES TECHNIQUES
- [x] L'API sera développée en utilisant NodeJS et une base de données SQLite.
- [ ] L’API doit être prendre en compte 3 aspects fonctionnelles :
  - [ ] gestion de l’authentification, 
  - [ ] gestion des newsletters,
  - [ ] gestion des destinations
## 4. SPECIFICATIONS FONCTIONNELS ET REGLES DE GESTION
 1. Authentification
     - [ ] Les utilisateurs peuvent s’authentifier avec un email et un mot de passe. <!--Il reçoit un token JWT pour accéder aux fonctionnalités réservées aux adhérents -->
 2. Gestion des visiteurs
      - [ ] Un visiteurs peut s'incrire aux newsletters juste avec sont mail
      - [ ] Un visiteurs peut répondre aux questionnaire pour trouver sa destination idéal
      - [ ] Un visiteurs peut se créer un compte utilisateur
 3. Gestion des utilisateurs
     - [ ] Un utilisateur peut supprimer son compte
     - [ ] Un utilisateur peut sauvergarder une destination
     - [ ] Un utilisateur peut voir l'historique de destination sauvegarder
     - [ ] Un utilisateur peut supprimer une destination sauvegarder
     - [ ] Un utilisateur peut metre à jour ses information
 4. Newsletter
      - [ ] Un visiteur peut se desincrire aux newsletters


## 5. QUESTIONS PERSONALISER
1. Types de lieu?(ex: montagne, mer, ville campagne)
2. Quels sont vos centres d'intérêt ? (ex : plage, culture, histoire, nature, sports, gastronomie, vie nocturne, etc.)
3. Quel type de voyage préférez-vous ? (ex : aventure, découverte, détente, croisière, escapade romantique, etc.)
4. Quand voulez-vous voyager ? (ex : été, hiver, saison des pluies, éviter les périodes touristiques, etc.)
5. Combien de temps voulez-vous partir ? (ex : un week-end, une semaine, deux semaines, etc.)
6. Quels est votre pays de départ ?
7. Êtes-vous prêt à prendre plusieurs vols ou préférez-vous une destination facilement accessible ? //distance
8. Quel est votre budget pour le voyage ? (ex : économique, milieu de gamme, luxe)