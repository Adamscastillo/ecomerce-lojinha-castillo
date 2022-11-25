import axios from 'axios'

const baseURL = 'https://lojinha-castillo-api.vercel.app'

const acess = "Access-Control-Allow-Origin: *"

export const createUser = axios.create({baseURL, headers:acess})

//buscar user por ID pega o caminho e as configuracoes 
export const userById=(path, config={ }) => axios.get(`${baseURL}${path}`, config)

//delete user por id
export const deleteUSer=(path, config={ }) => axios.delete(`${baseURL}${path}`, config)
