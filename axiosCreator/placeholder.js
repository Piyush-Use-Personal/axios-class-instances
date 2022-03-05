import axios from "axios";

class PlaceHolder {
    constructor() {
    const baseURL = 'https://jsonplaceholder.typicode.com'
    this.axios = axios.create({
        baseURL,
        timeout: 1000,
      })
    }

    getTodos(){
        return this.axios.get('/todos')
    }

}

export default PlaceHolder