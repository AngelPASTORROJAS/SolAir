import axios from 'axios'
import interceptor from './interceptor'

const httpClient = axios.create({
  baseURL: process.env.API_ROUTE
})
interceptor(httpClient)

const httpStatusCode = axios.HttpStatusCode

export {httpClient, httpStatusCode}
