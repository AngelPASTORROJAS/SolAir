import axios from 'axios'

const httpClient = axios.create({
  baseURL: process.env.API_ROUTE
})

const httpStatusCode = axios.HttpStatusCode

export {httpClient, httpStatusCode}
