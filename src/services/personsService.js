import axios from 'axios'

// This module handles methods for communicating with the server.

const baseUrl = '/persons/api'

const getAll = () => {
    const request = axios.get(baseUrl)
  
    return request.then(response => response.data)
}

const create = newPerson => {
    const request = axios.post(baseUrl, newPerson)
    console.log(request.then(response => response.data))
    return request.then(response => response.data)
}

const update = (id, updatedPerson) => {
    console.log(updatedPerson)
    const request = axios.put(baseUrl + id, updatedPerson)
    console.log(request)
    return request.then(response => response.data)

}

const remove = id => {

    const request = axios.delete(baseUrl + id)
    console.log("next")
    console.log(request.then(response => response.data))
    return request.then(response => response.data)


}

export default { getAll, create, remove, update }