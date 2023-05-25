import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  genres: Genre[];
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      genres: gameQuery.selectedGenre?.id,
      parent_platforms: gameQuery.selectedPlatform?.id,
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText,
    },
    [gameQuery]
  );

export default useGames;
