import { Image, ImageProps } from "@chakra-ui/react";
import bullsEye from "../assets/bulls-eye.webp";
import meh from "../assets/meh.webp";
import thumbsUp from "../assets/thumbs-up.webp";

interface Props {
  ratingTop: number;
}

const GameEmoji = ({ ratingTop }: Props) => {
  if (ratingTop < 3) return null;

  const emojiMap: { [Key: number]: {} } = {
    3: { src: meh, boxSize: 25 },
    4: { src: thumbsUp, boxSize: 25 },
    5: { src: bullsEye, boxSize: 35 },
  };

  return <Image {...emojiMap[ratingTop]} mt={1} />;
};

export default GameEmoji;
