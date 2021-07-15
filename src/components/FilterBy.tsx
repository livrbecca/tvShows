import { DropdownProps, FilterProps } from "../utils/Interfaces";
import { seasonLayoutDecider, episodeLayoutDecider } from "../utils/Function";
import { useState } from "react";

const FilterBy = ({ episodes }: FilterProps): JSX.Element => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  return (
    <div className="filterContainer">
      <select
        onChange={(e) => setSelectedOption(e.target.value)}
        className="mainButton"
        name="Select an episode"
      >
        {episodes.map((val, key) => (
          <option key={key} value={val.id}>
            {seasonLayoutDecider(val.season)}
            {episodeLayoutDecider(val.number)}- {val.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterBy;
