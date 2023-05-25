import useData from "./useData";
import data from "../data/platforms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");
const usePlatforms = () => {
  return { data, isLoading: false, error: null };
};

export default usePlatforms;
