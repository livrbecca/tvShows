import { searchProps as searchBoxProps } from "../utils/Interfaces";

const SearchBox = ({
  episodes,
  searchTerm,
  setSearchTerm,
}: searchBoxProps): JSX.Element => {
  return (
    <>
      <input
        type="text"
        className="form-control"
        value={searchTerm}
        placeholder="Search here..."
        onChange={(event) => setSearchTerm(event.target.value)}
      ></input>
    </>
  );
};

export default SearchBox;
