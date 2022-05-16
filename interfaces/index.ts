// All shared interfaces/types

export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  genres: [{ id: number; name: string }];
  id: number;
  original_language: string;
  original_title: string;
  original_name: string;
  first_air_date: string;
  runtime: number;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  videos: any;
  images: any;
};

export type Show = { 
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  genres: [{ id: number; name: string }];
  id: number;
  original_language: string;
  original_title: string;
  original_name: string;
  first_air_date: string;
  runtime: number;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  videos: any;
  images: any;
}
