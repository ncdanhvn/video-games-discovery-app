import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { Game } from "../hooks/useGames";
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import GameEmoji from "./GameEmoji";
import PlatformIconList from "./PlatformIconList";

const GameCard = ({ game }: { game: Game }) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" mb={3}>
          <PlatformIconList platforms={game.parent_platforms} />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          <Link to={"games/" + game.slug}>{game.name}</Link>
        </Heading>
        <GameEmoji ratingTop={game.rating_top} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
