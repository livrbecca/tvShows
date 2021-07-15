export interface searchProps {
  searchTerm: string;
  episodes: IEpisode[];
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

export interface IEpisode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  _links: { self: { href: string } };
}

export interface FilterProps {
  originalData: IEpisode[];
  episodes: IEpisode[];
}

export interface DropdownProps {
  selectedOption: string;
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
}