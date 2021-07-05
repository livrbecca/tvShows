import { searchProps } from "./AllEpisodes";
import SearchBox from "./SearchBox";

const Header = ({ searchTerm, setSearchTerm }: searchProps): JSX.Element => {
  return (
    <div className="col">
      <h1>Liv Does Not Like Game Of Thrones</h1>
      <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </div>
  );
};

export default Header;
