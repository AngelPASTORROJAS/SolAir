import { httpClient } from '../httpClient';
import { Utilisateur } from '../models/Utilisateur';

const ressource = 'api/utilisateurs'

class UtilisateurRessource {
    public async getUsersAsync(): Promise<Utilisateur[]> {
        const response = await httpClient.get(`${ressource}`)
        return response.data as Utilisateur[]
    }

    public async createUtilisateurAsync(utilisateur: Utilisateur): Promise<Utilisateur[]> {
      const response = await httpClient.post(`${ressource}`,utilisateur)
      return response.data as Utilisateur[]
  }
}

export {UtilisateurRessource}
