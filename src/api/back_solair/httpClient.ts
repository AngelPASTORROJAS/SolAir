import axios from 'axios'

const httpClient = axios.create({
  baseURL: 'https://backsolair.angel-danield25.repl.co'
})

export {httpClient}
