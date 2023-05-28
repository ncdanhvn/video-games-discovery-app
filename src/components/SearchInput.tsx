import { Icon, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";

const SearchInput = () => {
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) setSearchText(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <Icon as={BsSearch} />
        </InputLeftElement>
        <Input
          ref={ref}
          placeholder="Search games..."
          variant="filled"
          borderRadius="full"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
