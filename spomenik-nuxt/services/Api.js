import axios from 'axios'

export default () => {
  return axios.create({
    baseURL:  process.env.NODE_ENV !== 'production' ?  'http://localhost:8000' : 'https://spomenik-api.milenapetkanova.com'
  })
}