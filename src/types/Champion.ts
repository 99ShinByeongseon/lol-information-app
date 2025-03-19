export type ChampionsDetail = {
  version: string;
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  image: ChampionImage;
};

export type ChampionImage = {
  full: string;
};
