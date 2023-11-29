import axios from "axios";
import { BASE_URL } from "../constants/urls";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

const useSong = (Ids) => {
    const [songsIds, setSongsIds] = useState(Ids);
    const [songs, setSongs] = useState([]);
    const [erro, setErro] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const updateSongsIds = (newSongsIds) => {
        setSongsIds(newSongsIds);
    };
    useEffect(() => {
        fetchData();
    },[songsIds])
    const fetchData = async () => {
        try {
            const token = Cookies.get("token");
            const songsPromise = songsIds.map(id => {
                return axios.get(`${BASE_URL}song/${id}`,{
                    headers: {
                        Authorization: token
                    }
                })
            });
            const response = await axios.all(songsPromise)
            const songsResponse = response.map( e => e.data.song);
            setSongs(songsResponse);
            setLoading(false);
        } catch (error) {
            setErro(error);
            setLoading(false);
        }
    }

    return [songs,loading,erro,updateSongsIds];
}

export default useSong
