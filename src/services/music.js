import axios from "axios"
import { BASE_URL } from "../constants/urls"
import Cookies from "js-cookie"

const getAllMusic = async () => {
    const token = Cookies.get("token")
    return axios.get(`${BASE_URL}song`,{
        headers:{
            Authorization: token
        }
    })
}

export { getAllMusic } 