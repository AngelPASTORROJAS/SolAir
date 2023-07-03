/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosInstance } from 'axios'

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
  //     if ([403].includes(response.status)) {
  //     //  await router.replace({ name: 'error-403' })
  //     }
  //     return Promise.reject(error)
  //   }
  // )
}
