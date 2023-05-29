import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import ms from "ms";

const apiClient = new APIClient<GameDetail>("games");

interface GameDetail {
  id: number;
  name: string;
  slug: string;
  description_raw: string;
}

const useGameDetail = (slug: string) =>
  useQuery<GameDetail, Error>({
    queryKey: ["game", slug],
    queryFn: () => apiClient.get(slug),
    staleTime: ms("24h"),
  });

export default useGameDetail;
