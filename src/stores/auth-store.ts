import { defineStore } from 'pinia';
import { LocalStorage } from 'quasar';
import { Role } from 'src/api/back_solair/models/Role';
import { Utilisateur } from 'src/api/back_solair/models/Utilisateur';
import jwt_decode from 'jwt-decode';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    _utilisateur: LocalStorage.getItem('utilisateur') as Utilisateur | null,
    _roles: LocalStorage.getItem('roles') as Role[] | null,
    _token: LocalStorage.getItem('jwtToken')
  }),
  getters: {
    utilisateur: (state) => state._utilisateur,
    roles: (state) => state._roles,
    token: (state) => state._token
  },
  actions: {
    async getUtilisateurFromToken() {
      const token = this._token;
      if (!token) {
        return null;
      }

      try {
        const decodedToken = jwt_decode(token) as { utilisateur: Utilisateur };
        const utilisateur = decodedToken.utilisateur;
        this._utilisateur = utilisateur;
        LocalStorage.set('utilisateur', utilisateur);
        return utilisateur;
      } catch (error) {
        console.error('Impossible de récupérer l\'utilisateur à partir du jeton', error);
        return null;
      }
    },

    async getRolesFromToken() {
      const token = this._token;
      if (!token) {
        return null;
      }

      try {
        const decodedToken = jwt_decode(token) as { roles: Role[] };
        const roles = decodedToken.roles;
        this._roles = roles;
        LocalStorage.set('roles', roles);
        return roles;
      } catch (error) {
        console.error('Impossible de récupérer les rôles à partir du jeton', error);
        return null;
      }
    },

    async IsConnect(){
      const utilisateur = await this.getUtilisateurFromToken();
      return utilisateur == null;
    },

    async logout() {
      this._utilisateur = null;
      this._roles = null;
      this._token = null;
      LocalStorage.remove('utilisateur');
      LocalStorage.remove('roles');
      LocalStorage.remove('jwtToken');
    }
  },
});
