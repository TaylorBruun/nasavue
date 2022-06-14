import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod',
  timeout: 8000,
  params: {
    api_key: 'GNlgxOppR4VM0tsJ4S0o5uiaY6nrIFOS2qNIsOTX'
    
  }

})
