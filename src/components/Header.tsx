import { searchProps } from "../utils/Interfaces";
import SearchBox from "./SearchBox";
import episodes from "../episodes.json";
import FilterBy from "./FilterBy";

const Header = ({ searchTerm, setSearchTerm }: searchProps): JSX.Element => {
  //const [displayedEpisodes, setDisplayedEpisodes] = useState<IEpisode[]>(episodes);
  return (
    <div className="col">
      <h1>Liv Does Not Like Game Of Thrones</h1>
      <SearchBox
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        episodes={episodes}
      />
      <FilterBy originalData={episodes} episodes={episodes} />
    </div>
  );
};

export default Header;
