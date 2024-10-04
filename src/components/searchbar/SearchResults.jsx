import useSWR from "swr";
import SearchResultItem from "./SearchResultItem";
import { fetchSearchData } from "../../utils/fetchers";

export async function get(query) {
  const [tracks, albums, artists] = await fetchSearchData(query);
  console.log(tracks, albums, artists);
  return {
    track: tracks.data,
    album: albums.data,
    artist: artists.data,
  };
}

const SearchResults = ({ query }) => {
  const fetchers = (url) => get(query);

  const { data: resultsObj = {}, error, isLoading } = useSWR(query, fetchers);
  if (isLoading) {
    return <div>LOADING...</div>;
  }
  if (error) {
    return <div>Error occured!</div>;
  }

  return (
    <>
      {query && (
        <div className="search-results-container">
          {isLoading && <strong>Loading...</strong>}

          {error && <strong>Something went wrong...</strong>}

          {Object.keys(resultsObj).map((type) => {
            return (
              <div key={type}>
                <strong>{type + "s"}</strong>

                <ul>
                  {!resultsObj[type].length ? (
                    <span className="not-found-error">
                      Item not found. Please try a different search term.
                    </span>
                  ) : (
                    resultsObj[type].map((result) => (
                      <SearchResultItem
                        key={result.id}
                        type={type}
                        result={result}
                      />
                    ))
                  )}
                </ul>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default SearchResults;
