/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosInstance } from 'axios'
// import { useRouter } from 'vue-router';

export default (http: AxiosInstance) : void => {
  // Ajouter un intercepteur pour définir l'en-tête Authorization
  http.interceptors.request.use(config => {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  }, error => {
    return Promise.reject(error);
  });

  // http.interceptors.response.use(
  //   response => response,
  //   async error => {
  //     const { response } = error
  //     if (!response) {
  //       return Promise.reject(error)
  //     }
  //     if (response.status == HttpStatusCode.Unauthorized) {
  //       const router = useRouter()
  //       router.push({name:'ErrorUnautorized'})
  //     }
  //     if (response.status == HttpStatusCode.Forbidden) {
  //       const router = useRouter()
  //       router.push({name:'ErrorForbidden'})
  //     }
  //     return Promise.reject(error)
  //   }
  // )
}
