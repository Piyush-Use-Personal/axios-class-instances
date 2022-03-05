import Nasa from "./axiosCreator/nasa.js"
import OpenAPI from "./axiosCreator/openAPI.js"
import PlaceHolder from "./axiosCreator/placeholder.js"

const init = async () => {
    const placeholder = new PlaceHolder()
    const openAPI = new OpenAPI()
    const nasa = new Nasa('lYmaGEDi6GC26rG0dYmPAZuuRyaVTbzeYCWwVg3j')
    const [ todos, entries, apos ] = await Promise.all([
        placeholder.getTodos(), 
        openAPI.getEntries(),
        nasa.getApod()
    ])
    console.log({
        todosLength: todos.data.length,
        entriesLength: entries.data.count,
        aposData: apos.data
    })
}

init()