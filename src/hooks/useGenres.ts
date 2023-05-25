import useData from "./useData";
import data from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// const useGenres = () => useData<Genre>("/genres");
const useGenres = () => {
  return { data, isLoading: false, error: null };
};

export default useGenres;
