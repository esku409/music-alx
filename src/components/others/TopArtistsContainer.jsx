import { fetchTopArtists } from "../../utils/fetchers";
import LinkCardItem from "../list-items/LinkCardItem";
import { compactNumber } from "../../utils/formatters";
import useSWR from "swr";

const TopArtistsContainer = ({ limit }) => {
    const fetchers = (url) => fetchTopArtists({limit});
  const {
    data: artists,
    error,
    isLoading,
  } = useSWR("/chart/0/artists",fetchers);
 
  console.log('lll',artists,'isLoading',isLoading,'error',error);
 
  if (isLoading) {
    return <div>LOADING...</div>;
  }

  return (
    <div className="top-artists-container">
      <h2>Top Artist</h2>

      <ul>
        {artists?.map((artist) => {
          const { id, name, picture_medium, nb_album, nb_fan } = artist;
          const formattedFanNumber = compactNumber(nb_fan);

          return (
            <LinkCardItem
              key={id}
              title={name}
              imgSrc={picture_medium}
              href={`/artist/${id}`}
              description={`${formattedFanNumber} Fans | ${nb_album} Albums`}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TopArtistsContainer;
