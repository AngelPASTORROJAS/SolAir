import { httpClient, httpStatusCode } from '../httpClient';
import { Utilisateur } from '../models/Utilisateur';

const ressource = 'api/utilisateurs';

class UtilisateurRessource {
  public async getUsersAsync(): Promise<Utilisateur[]> {
    const response = await httpClient.get(`${ressource}`);
    return response.data as Utilisateur[];
  }

  public async createUtilisateurAsync(utilisateur: Utilisateur): Promise<boolean> {
    const response = await httpClient.post(`${ressource}`, utilisateur);
    return response.status == httpStatusCode.Created;
  }

  public async authentificationUtilisateurAsync(utilisateur: Utilisateur): Promise<boolean> {
    const response = await httpClient.post(`${ressource}/authenticate`, utilisateur);
    return response.status == httpStatusCode.NoContent;
  }
}

export { UtilisateurRessource };
