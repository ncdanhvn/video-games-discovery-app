import useGenres from "./useGenres";

const useGenre = (genreId?: number) => {
  const { data: genres } = useGenres();
  return genres?.results.find((g) => g.id === genreId);
};

export default useGenre;
