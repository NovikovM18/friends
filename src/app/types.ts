export type Info = {
  name: string;
  firstDate: string;
  lastDate: string;
  numberEpisodes: number;
  numberSeasons: number;
  authors: string;
  origin: string;
  language: string;
  genre: string;
  logo: string;
  seasons: Season[];
  characters: Character[]
}

export type Character = {
  _id:string,
  alias: string,
  birthdate:string,
  children: Array<string>,
  couples: Array<string>,
  gender: string,
  image: string,
  name: string,
  nameCharacter: string,
  profession: Array<string>,
  spouse: string
};

export type Episode = {
  _id: string,
  air_date: string,
  description: string,
  name: string,
  number: string,
  season: number
  review?: Array<any>,
  image?: string
};

export type Season = {
  data: Season;
  _id: string,
  air_date: string,
  description: string,
  episodes: Episode[],
  last_air_date: string,
  number: number,
  numberEpisodes: number,
};
