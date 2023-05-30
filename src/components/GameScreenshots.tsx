import React from "react";
import useScreenshots from "../hooks/useScreenshots";
import { SimpleGrid, Image } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
      {data?.results.map((s) => (
        <Image key={s.id} src={s.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
