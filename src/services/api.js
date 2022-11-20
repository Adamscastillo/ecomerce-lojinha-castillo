import axios from 'axios'

const baseURL = 'http://localhost:4000'
console.log(baseURL);


export const api = axios.create({
    baseURL
})

export const httpDelete=(path, config={ }) => axios.delete(`${baseURL}${path}`, config)

/* async function sendData(route, object) {
    const {data} = await api.post(route, object)
    return data   
}

export {sendData} */
 