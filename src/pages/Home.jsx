import Playlists from "../components/others/Playlists";
import TrackListContainer from "../components/others/TrackListContainer";
import { fetchTopTracks } from "../utils/fetchers";
import TopArtistsContainer from "../components/others/TopArtistsContainer";
import useSWR from "swr";
import Loading from "../components/loading";

export default function Home() {
    const fetchers = (url) => fetchTopTracks({limit:10});
  const {
    data: tracks,
    error,
    isLoading,
  } = useSWR("/chart/0/tracks",fetchers);
  if (isLoading) {
    // return <div>LOADING...</div>;
    <Loading/>
  }
  return (
    <div className="home-container">
      <TrackListContainer header="Trending right now" tracks={tracks} />
      <TopArtistsContainer limit={3} />
      <Playlists />
    </div>
  );
}
