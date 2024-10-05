import useSWR from "swr";
import TrackListContainer from "../../others/TrackListContainer";
import { fetchTrack } from "../../../utils/fetchers";

const TracksTabContent = ({ tracks }) => {
    const fetcher= async (url) => {
        const promises = tracks.map(async (id) => {
            const res = await fetchTrack(id);
            
            return res;
        });
        
        return await Promise.all(promises);
    };
    const { data,isLoading,error } = useSWR('fetch',fetcher)
    if(isLoading) return <div>LOADING...</div>
    if(error) return <div>something went wrong</div>

    return (
        <TrackListContainer tracks={ data } />
    );
}

export default TracksTabContent;