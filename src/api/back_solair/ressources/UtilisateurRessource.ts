import { httpClient, httpStatusCode } from '../httpClient';
import { Utilisateur } from '../models/Utilisateur';
import { LocalStorage } from 'quasar';

const ressource = 'api/utilisateurs';

class UtilisateurRessource {
  public async getUsersAsync(): Promise<Utilisateur[]> {
    const response = await httpClient.get(`${ressource}`);
    return response.data as Utilisateur[];
  }

  public async createUtilisateurAsync(utilisateur: Utilisateur): Promise<boolean> {
    const response = await httpClient.post(`${ressource}`, utilisateur);
    const token = response.data.token;
    if (response.status === httpStatusCode.Created && token) {
      // Stocker le jeton d'authentification dans le LocalStorage
      LocalStorage.set('jwtToken', token);
      return true;
    }
    return false
  }

  public async authentificationUtilisateurAsync(utilisateur: Utilisateur): Promise<boolean> {
    const response = await httpClient.post(`${ressource}/authenticate`, utilisateur);
    const token = response.data.token;
    if (response.status === httpStatusCode.Ok && token) {
      // Stocker le jeton d'authentification dans le LocalStorage
      LocalStorage.set('jwtToken', token);
      return true;
    }
    return false
  }
}

export { UtilisateurRessource };
