import axios, { AxiosInstance } from "axios";


class GumroadProduct {
  [index: string]: any;
  axios: AxiosInstance;
  constructor(data: any, axiosInstance: AxiosInstance) {
    Object.keys( data ).forEach(
      ( key:string ) => {
        this[ key ] = data[ key ]
      }
    )
    this.axios = axiosInstance
  }

  async get(){
    const response = await this.axios.get(`/v2/products/${this.id}`)
    return response.data.product
  }
  async delete(){
    const response = await this.axios.delete(`/v2/products/${this.id}`)
    return response.data
  }
  async enable(){
    const response = await this.axios.put(`/v2/products/${this.id}/enable`)
    return response.data.product
  }
  async disable(){
    const response = await this.axios.put(`/v2/products/${this.id}/disable`)
    return response.data.product
  }
  async variantCategories(data: any){
    const response = await this.axios.post(`/v2/products/${this.id}/variant_categories`, data)
    return response.data.product
  }

}

class Gumroad {
  token: string;
  URL: string;
  axios: AxiosInstance;
  constructor(API_KEY: string){
    if(!API_KEY) throw new Error('API_KEY is required for Gumroad')
    const token = API_KEY
    const baseURL = 'https://api.gumroad.com/'

    this.token = token
    this.URL = baseURL
    this.axios = axios.create({
      baseURL,
      timeout: 1000,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }

  async products(){
    const response = await this.axios.get('/v2/products')
    return response.data.products.map((product: any) => new GumroadProduct(product, this.axios))
  }

  async sales(){
    const response = await this.axios.get('/v2/sales')
    return response.data.sales
  }

  async verifyLicense(data: any){
    const response = await this.axios.post('/v2/licenses/verify', data)
    return response.data
  }

  async enableLicense(data: any){
    const response = await this.axios.post('/v2/licenses/enable', data)
    return response.data
  }

}

export default Gumroad