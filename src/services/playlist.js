import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToFeed } from "../routes/Coordinator";
import { getTokenData } from "./getTokenData";
import Cookies from "js-cookie";

export const getPlaylistsFromUser = () => {
    const token = Cookies.get("token")
    const userId = getTokenData(token).id
    // .get(`${BASE_URL}user/${userId}/playlists`, {
        return axios.get(`${BASE_URL}playlist`, {
            headers: {
                Authorization: token,
            },
        });
};
