import { useNavigate, useParams } from "react-router-dom"
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { useEffect, useState } from "react";
import { isAuthenticated } from "../utils/isAuthenticated";
import { getPlaylistById } from "../services/playlist";
import useSong from "../hooks/useSong";
import { Loading } from '../components/Loading/Loading';
import { TableSongs } from "../components/TableSongs/TableSongs";

const SongsFromPlaylist = () => {
    const {id} = useParams();
    const [songs,loadingSongs ,erro,updateSongsIds] = useSong([]);
    const [playlist,setPlaylist] = useState();
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        isAuthenticated(navigate);
        fetchSongsFromPlaylists();
    },[navigate])

    const fetchSongsFromPlaylists = async () => {
        try{
            setLoading(true)
            const response = await getPlaylistById(id);
            setPlaylist(response.data.playlist);
            await updateSongsIds(response.data.playlist._songs);
            setLoading(false);
        }catch(error){
            console.log(error);
            setLoading(false);
        }
    }

    return(
        <>
           {(loading || loadingSongs) && <Loading />}
            <Header/>
            {playlist?._name}
            {id}
            {(songs && <TableSongs songs={songs}/>) || erro}
            
            <Footer/>
        </>
    )
}

export default SongsFromPlaylist