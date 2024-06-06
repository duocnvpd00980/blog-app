import axios, { AxiosRequestConfig } from 'axios'

const instance = axios.create({
  baseURL: 'https://5f55a98f39221c00167fb11a.mockapi.io/',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
})

class APIClient<T> {
  endpoint: string
  constructor(endpoint: string) {
    this.endpoint = endpoint
  }
  find = (config: AxiosRequestConfig) =>
    instance.get<T>(this.endpoint, config).then((res) => res.data)
}

export default APIClient
