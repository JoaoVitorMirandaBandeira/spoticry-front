import axios from "axios";
import { BASE_URL } from "../constants/urls";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

const useSong = (songsIds) => {
    const token = Cookies.get("token");
    const [songs, setSongs] = useState([]);
    const [erro, setErro] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const songsPromise = songsIds.map(id => {
            return axios.get(`${BASE_URL}song/${id}`,{
                headers: {
                    Authorization: token
                }
            })
        });

        axios.all(songsPromise)
            .then(axios.spread((...response) => {
                const songsResponse = response.map( e => e.data.song);
                setSongs(songsResponse);
                setLoading(false);
            }))
            .catch(error => {
                console.error(error);
                setErro(error);
                setLoading(false);
            })

    },[songsIds,token])
    return [songs,loading,erro];
}

export default useSong