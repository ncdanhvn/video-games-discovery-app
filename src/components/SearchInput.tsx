import { Icon, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
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
