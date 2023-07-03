import { useAuthStore } from 'src/stores/auth-store';


export async function IsConnect(): Promise<boolean>{
    const store = useAuthStore();
    const utilisateur = await store.getUtilisateurFromToken()
    return utilisateur == null;
}
