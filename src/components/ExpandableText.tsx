import { Button, Text, list } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  text: string;
  limit?: number;
}

const ExpandableText = ({ text, limit = 300 }: Props) => {
  const [isExpanded, setIsExpanded] = useState(text.length < limit);
  if (text.length < limit) return <Text>{text}</Text>;

  return (
    <>
      <Text>
        {isExpanded ? text : text.slice(0, limit) + "..."}
        <Button
          colorScheme="yellow"
          onClick={() => setIsExpanded(!isExpanded)}
          size="xs"
          ml={1}
        >
          Show {isExpanded ? "Less" : "More"}
        </Button>
      </Text>
    </>
  );
};

export default ExpandableText;
