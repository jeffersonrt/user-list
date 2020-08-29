import axios from 'axios'

const Api = () => {
  const instance = axios.create({
    baseURL: 'https://random-persons.herokuapp.com/users',
    headers: {
      'Content-Type': 'application/json'
    },
    timeout: 600000
  })
  return instance
}

export default Api
