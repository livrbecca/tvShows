import { IEpisode } from "../utils/Interfaces";
import { seasonLayoutDecider, episodeLayoutDecider } from "../utils/Function";
// import { episodeLayoutDecider } from "../utils/Function";

const Episode = ({
  id,
  name,
  season,
  number,
  airtime,
  runtime,
  image,
  summary,
}: IEpisode): JSX.Element => {
  return (
    <div className="m-space">
      <img src={image.medium} alt={name} />
      <h3>{name}</h3>
      <h4>
        {seasonLayoutDecider(season)}
        {episodeLayoutDecider(number)}
      </h4>
      <p>Runtime: {runtime} mins</p>
      <p>{summary.replace(/<p>/g, "").replace(/<\/p>/g, "")}</p>
    </div>
  );
};

export default Episode;
