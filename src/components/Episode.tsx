import { IEpisode } from "./Header";

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
      {/* turn number/season to string, use padStart() */}
      {/* arguments: length - the desired length of the resulting string after it has been padded. */}
      <h4>
        {season < 10 ? "S" + season.toString().padStart(2, "0") : "S" + season}
        {number < 10 ? "E" + number.toString().padStart(2, "0") : "E" + number}
      </h4>
      <p>Runtime: {runtime} mins</p>
      <p>{summary.replace(/<p>/g, "").replace(/<\/p>/g, "")}</p>
    </div>
  );
};

export default Episode;
