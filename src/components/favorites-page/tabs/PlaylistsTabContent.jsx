import useSWR from 'swr';
import PlaylistListItem from '../../list-items/PlaylistListItem';
import { fetchPlaylist } from '../../../utils/fetchers';

const PlaylistsTabContent = ({ playlists }) => {
      const fetcher= async (url) => {
        const promises = playlists.map(async (id) => {
            const res = await fetchPlaylist(id);
            
            return res;
        });
        
        return await Promise.all(promises);
    };
    const { data,isLoading,error } = useSWR('24',fetcher)
    if(isLoading) return <div>LOADING...</div>
    if(error) return <div>something went wrong</div>

   

    return (
        <ul>
        {
            data.map(playlist => {
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
        </ul>
    );
};

export default PlaylistsTabContent;