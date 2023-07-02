import { DestinationRessource } from './ressources/DestinationRessource';
import { UtilisateurRessource } from './ressources/UtilisateurRessource';

interface SolairApiType {
  user: UtilisateurRessource
  destination: DestinationRessource
}

const solairAPI: SolairApiType = {
  user: new UtilisateurRessource(),
  destination: new DestinationRessource()
};
export { solairAPI };
