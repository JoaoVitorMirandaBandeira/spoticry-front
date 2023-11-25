import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { getTokenData } from "./getTokenData";
import Cookies from "js-cookie";

export const getAllPlaylists = () => {
    const token = Cookies.get("token")
    const userId = getTokenData(token).id
    Cookies.set('userId',userId)
    // .get(`${BASE_URL}user/${userId}/playlists`, {
        return axios.get(`${BASE_URL}playlist`, {
            headers: {
                Authorization: token,
            },
        });
};

export const getPlaylistsFromUser = () => {
    const token =  Cookies.get("token")
    const userId = Cookies.get('userId')
    return axios.get(`${BASE_URL}playlist/user/${userId}/playlists`,{
        headers:{
            Authorization: token
        }
    })
}
