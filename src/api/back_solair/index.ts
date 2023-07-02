import { DestinationRessource } from './ressources/DestinationRessource';
import { UserRessource } from './ressources/UserRessource';

interface SolairApiType {
  user: UserRessource
  destination: DestinationRessource
}

const solairAPI: SolairApiType = {
  user: new UserRessource(),
  destination: new DestinationRessource()
};
export { solairAPI };
