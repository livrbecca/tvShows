import { IEpisode } from "./Header";

interface FilterProps {
  displayedEpisodes: IEpisode[];
  originalData: IEpisode[];
  setDisplayedEpisodes: React.Dispatch<React.SetStateAction<IEpisode[]>>;
}

const FilterBy = ({
  displayedEpisodes,
  originalData,
  setDisplayedEpisodes,
}: FilterProps): JSX.Element => {
  return (
    <div className="filterContainer">
      <select className="mainButton" name="Select an episode">
        {originalData.map((val, key) => (
          <option key={val.id} value={val.id}>
            {val.season < 10
              ? "S" + val.season.toString().padStart(2, "0")
              : "S" + val.season}
            {val.number < 10
              ? "E" + val.number.toString().padStart(2, "0")
              : "E" + val.number}{" "}
            - {val.name}
          </option>
        ))}

        {/* {originalData.map((epDetails, key) => (
          <Dropdown.Item key={key}>{epDetails.season}</Dropdown.Item>
        ))} */}
      </select>
    </div>
  );
};

export default FilterBy;
