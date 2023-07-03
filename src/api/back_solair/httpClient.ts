import axios from 'axios'

const httpClient = axios.create({
  baseURL: 'http://localhost:3000/'
})

const httpStatusCode = axios.HttpStatusCode

export {httpClient, httpStatusCode}
