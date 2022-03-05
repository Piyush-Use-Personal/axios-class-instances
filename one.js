import axios from "axios";

const JSON_PLACE_HOLDER = 'https://jsonplaceholder.typicode.com'
const NASA = 'https://api.nasa.gov/planetary'
const OPEN_API = 'https://api.publicapis.org/'

const init = async () => {
    const p1 = axios.get(`${JSON_PLACE_HOLDER}/todos`)
    const p2 = axios.get(`${OPEN_API}/entries`)
    const p3 = axios.get(`${NASA}/apod?api_key=lYmaGEDi6GC26rG0dYmPAZuuRyaVTbzeYCWwVg3j`)

    const [ todos, entries, apos ] = await Promise.all([
        p1, 
        p2, 
        p3, 
    ])
    console.log({
        todosLength: todos.data.length,
        entriesLength: entries.data.count,
        aposData: apos?.data
    })

}

init()