import axios from "axios"
const url = "https://api.escuelajs.co/api/v1/products"

export const getData = async() =>{
    return await axios.get(url).then((res) => res.data).catch((error) => error)
}