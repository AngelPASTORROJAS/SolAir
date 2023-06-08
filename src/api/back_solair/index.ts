import { UserRessource } from './ressources/UserRessource';

interface SolairApiType {
  user: UserRessource
}

const solairAPI: SolairApiType = {
  user: new UserRessource()
};
export { solairAPI };
