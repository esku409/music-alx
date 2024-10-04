import { fetchTopPlaylists } from "../../utils/fetchers";
import PlaylistListItem from "../list-items/PlaylistListItem";
import Carousel from "./Carousel";
import useSWR from 'swr'
const Playlists = () => {
    const fetchers = (url) => fetchTopPlaylists({limit:10});
    const { data:playlists, error, isLoading } = useSWR("/chart/0/playlists", fetchers);
    if (isLoading) {
        return <div>LOADING...</div>;
      }
    return (
        <div className='top-playlists-container'>            
            <Carousel header='Playlists'>
                {
                    playlists?.map(playlist => {
                        const { id, title, creation_date, picture_medium } = playlist;

                        return (
                            <PlaylistListItem
                                id={ id }
                                key={ id }
                                title={ title }
                                imgSrc={ picture_medium }
                                creationDate={ creation_date }
                            />
                        );
                    })
                }
            </Carousel>        
        </div>
    );
};

export default Playlists;