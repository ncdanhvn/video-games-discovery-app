import { Icon, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <Icon as={BsSearch} />
      </InputLeftElement>
      <Input
        placeholder="Search games..."
        variant="filled"
        borderRadius="full"
      />
    </InputGroup>
  );
};

export default SearchInput;
