import axios from "axios";

class OpenAPI {
    constructor() {
    const baseURL = 'https://api.publicapis.org/'
    this.axios = axios.create({
        baseURL,
        timeout: 10000,
      })
    }

    getEntries(){
        return this.axios.get('/entries')
    }
}

export default OpenAPI