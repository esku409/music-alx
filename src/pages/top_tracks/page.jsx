import { fetchTopTracks } from "../../utils/fetchers";
import TrackListContainer from "../../components/others/TrackListContainer";
import useSWR from 'swr';

export default function TopTracks() {
  const fetchers = (url) => fetchTopTracks({ limit: 400 });

  const {
    data: tracks,
    error,
    isLoading,
  } = useSWR("/chart/0/tracks", fetchers);
  if(isLoading){
    return<>Loading...</>
  }

  return <TrackListContainer header="Trending right Now" tracks={tracks} />;
}
