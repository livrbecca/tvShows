import { searchProps } from "../utils/Interfaces";
import SearchBox from "./SearchBox";
import { useState } from "react";
import episodes from "../episodes.json";
import FilterBy from "./FilterBy";
import { IEpisode } from "../utils/Interfaces";


// export interface IEpisode {
//   id: number;
//   url: string;
//   name: string;
//   season: number;
//   number: number;
//   type: string;
//   airdate: string;
//   airtime: string;
//   airstamp: string;
//   runtime: number;
//   image: {
//     medium: string;
//     original: string;
//   };
//   summary: string;
//   _links: { self: { href: string } };
// }

const Header = ({ searchTerm, setSearchTerm }: searchProps): JSX.Element => {
   const [displayedEpisodes, setDisplayedEpisodes] =
     useState<IEpisode[]>(episodes);
  return (
    <div className="col">
      <h1>Liv Does Not Like Game Of Thrones</h1>
      <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <FilterBy
        displayedEpisodes={displayedEpisodes}
        setDisplayedEpisodes={setDisplayedEpisodes}
        originalData={episodes}
      />
    </div>
  );
};

export default Header;
