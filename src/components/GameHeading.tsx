import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const genre = genres.results.find(
    (genre) => genre.id === gameQuery.selectedGenreId
  );

  const { data: platforms } = usePlatforms();
  const platform = platforms.results.find(
    (platform) => platform.id === gameQuery.selectedPlatformId
  );

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
