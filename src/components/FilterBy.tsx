import { FilterProps } from "../utils/Interfaces";
import { seasonLayoutDecider, episodeLayoutDecider } from "../utils/Function";

const FilterBy = ({
  displayedEpisodes,
  originalData,
  setDisplayedEpisodes,
}: FilterProps): JSX.Element => {
  return (
    <div className="filterContainer">
      <select className="mainButton" name="Select an episode">
        {originalData.map((val, key) => (
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
