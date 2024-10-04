import IntroContainer from "../../components/others/IntroContainer";
import TrackListContainer from "../../components/others/TrackListContainer";
import { getYearFromDate } from "../../utils/formatters";
import { fetchAlbum } from "../../utils/fetchers";
import { useParams } from "react-router";
import useSWR from "swr";

const AlbumPage = () => {
  const { id } = useParams();
  const fetchers = (url) => fetchAlbum(id);

  const { data: Album, error, isLoading } = useSWR(`/chart/0/album/${id}`, fetchers);
  if (isLoading) {
    return <div>LOADING...</div>;
  }
  if (error) {
    return <div>Error has occured!</div>;
  }
  console.log('album',Album);
  const { title, cover_medium, release_date, tracks, type } = Album;
  const releaseYear = getYearFromDate(release_date);

  return (
    <div className="page-container">
      <IntroContainer
        id={id}
        type={type}
        title={title}
        description={`Album • ${releaseYear}`}
        imgSrc={cover_medium}
        playlist={tracks.data}
      />

      <TrackListContainer tracks={tracks.data} />
    </div>
  );
};

export default AlbumPage;
