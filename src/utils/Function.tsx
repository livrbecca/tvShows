import { IEpisode } from "./Interfaces";
//import { searchProps } from "./Interfaces";

export function seasonLayoutDecider(season: number): string | number {
  return season < 10 ? "S" + season.toString().padStart(2, "0") : "S" + season;
}

export function episodeLayoutDecider(episode: number): string | number {
  return episode < 10
    ? "E" + episode.toString().padStart(2, "0")
    : "E" + episode;
}

export function searchBarEps(
  episodes: IEpisode[],
  searchTerm: string
): IEpisode[] {
  return episodes.filter(
    (value) =>
      value.summary.toLocaleLowerCase().includes(searchTerm) ||
      value.name.toLocaleLowerCase().includes(searchTerm)
  );
}

export function selectDropdown(episodes: IEpisode[], id: number): IEpisode[]{
  return episodes.filter((ep)=> ep.id === id)
}
