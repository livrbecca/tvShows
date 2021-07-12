import Episode from "./Episode";
import episodes from "../episodes.json";
import { searchProps } from "../utils/Interfaces";

const AllEpisodes = ({
  setSearchTerm,
  searchTerm,
}: searchProps): JSX.Element => {
  const searchBarEps = episodes.filter((value) => {
    if (searchTerm === "") {
      return true;
    } else if (
      value.summary.toLocaleLowerCase().includes(searchTerm) ||
      value.name.toLocaleLowerCase().includes(searchTerm)
    ) {
      return true;
    } else {
      return false;
    }
  });

  return (
    <>
      {searchBarEps.map((ep, key) => (
        <div key={key} className="item">
          <Episode
            id={ep.id}
            url={ep.url}
            name={ep.name}
            season={ep.season}
            type={ep.type}
            airdate={ep.airdate}
            airstamp={ep.airstamp}
            _links={ep._links}
            number={ep.number}
            airtime={ep.airtime}
            runtime={ep.runtime}
            image={ep.image}
            summary={ep.summary}
          />
        </div>
      ))}
    </>
  );
};

export default AllEpisodes;
