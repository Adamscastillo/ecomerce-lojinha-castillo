import axios from 'axios'




export const api = axios.create({

    baseURL: 'http://localhost:4000'
})

/* async function sendData(route, object) {
    const {data} = await api.post(route, object)
    return data   
}

export {sendData} */
 