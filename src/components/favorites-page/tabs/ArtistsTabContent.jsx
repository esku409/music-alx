import useSWR from 'swr';
import { compactNumber } from '../../../utils/formatters';
import LinkCardItem from '../../list-items/LinkCardItem';
import { fetchArtist } from '../../../utils/fetchers';

const ArtistsTabContent = ({ artists }) => {
    const fetcher= async (url) => {
        const promises = artists.map(async (id) => {
            const res = await fetchArtist(id);
            
            return res;
        });
        
        return await Promise.all(promises);
    };
    const { data,isLoading,error } = useSWR('23',fetcher)
    if(isLoading) return <div>LOADING...</div>
    if(error) return <div>something went wrong</div>

    return (
        <ul>
        {
            data.map((artist => {
                const { id, name, picture_medium, nb_album, nb_fan } = artist;
                const formattedFanNumber = compactNumber(nb_fan);

                return (
                    <LinkCardItem
                        key={ id }
                        title={ name }
                        imgSrc= { picture_medium }
                        href={ `/artist/${ id }` }
                        description={ `${ formattedFanNumber } Fans | ${ nb_album } Albums` }
                    />
                );
            }))
        }
        </ul>
    );
};

export default ArtistsTabContent;
