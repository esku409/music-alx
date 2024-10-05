import useSWR from "swr";
import { getYearFromDate } from "../../../utils/formatters";
import LinkCardItem from "../../list-items/LinkCardItem";
import { fetchAlbum } from "../../../utils/fetchers";

const AlbumsTabContent = ({ albums }) => {
    const fetcher= async (url) => {
        const promises = albums.map(async (id) => {
            const res = await fetchAlbum(id);
            
            return res;
        });
        
        return await Promise.all(promises);
    };
    const { data,isLoading,error } = useSWR('10',fetcher)
    if(isLoading) return <div>LOADING...</div>
    if(error) return <div>something went wrong</div>

  return (
    <ul>
      {data.map((album) => {
        const { id, title, cover_medium, release_date } = album;
        const releaseYear = getYearFromDate(release_date);

        return (
          <LinkCardItem
            key={id}
            title={title}
            imgSrc={cover_medium}
            href={`/album/${id}`}
            description={`Album  | ${releaseYear}`}
          />
        );
      })}
    </ul>
  );
};

export default AlbumsTabContent;
