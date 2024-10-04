import IntroContainer from "../../components/others/IntroContainer";
import TrackListContainer from "../../components/others/TrackListContainer";
import { fetchPlaylist } from "../../utils/fetchers";
import { useParams } from "react-router";
import useSWR from 'swr';

const Playlists = () => {
    const {id}=useParams();
    // const { type, title, description, picture_medium, tracks } =  fetchPlaylist(params.id);
    const fetchers = (url) =>  fetchPlaylist(id);
    const {
        data: data,
        error,
        isLoading,
      } = useSWR("/chart/0/playlists/908",fetchers);
     if (isLoading){
        return(
            <div>LOADing...</div>
        )
     }
     if(error){
        return<div>Error</div>
     }
     const { type, title, description, picture_medium, tracks } =  data;

    return (
        <div className='page-container'>
            <IntroContainer
                id={id }
                type={ type }
                title={ title }
                imgSrc={ picture_medium }
                playlist={ tracks.data }
                description={ description}
            />
            
            <TrackListContainer tracks={ tracks.data }/>
        </div>
    );
};

export default Playlists;