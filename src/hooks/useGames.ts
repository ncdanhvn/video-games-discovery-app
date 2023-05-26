import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatforms";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Game>("/games");

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
  useQuery<Game[], Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient.getAll({
        genres: gameQuery.selectedGenre?.id,
        parent_platforms: gameQuery.selectedPlatform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      }),
  });

export default useGames;
