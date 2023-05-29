import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import ms from "ms";
import { Game } from "../entities/Game";

const apiClient = new APIClient<Game>("games");

const useGameDetail = (slug: string) =>
  useQuery<Game, Error>({
    queryKey: ["game", slug],
    queryFn: () => apiClient.get(slug),
    staleTime: ms("24h"),
  });

export default useGameDetail;
