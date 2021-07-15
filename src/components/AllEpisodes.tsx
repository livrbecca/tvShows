import Episode from "./Episode";
import episodes from "../episodes.json";
import { IEpisode, searchProps } from "../utils/Interfaces";
import { searchBarEps } from "../utils/Function";
const AllEpisodes = ({
  searchTerm,
}: searchProps): JSX.Element => {
  return (
    <>
      {searchBarEps(episodes, searchTerm).map((ep: IEpisode, key: number) => (
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
