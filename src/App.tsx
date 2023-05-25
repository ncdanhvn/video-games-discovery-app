import { useState } from "react";
import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: "1fr", lg: "300px 1fr" }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" px="20px">
          <GenreList
            onSelectGenre={(selectedGenre) =>
              setGameQuery({ ...gameQuery, selectedGenre })
            }
            selectedGenre={gameQuery.selectedGenre}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <HStack spacing={5} mb={5} pl={2}>
          <PlatformSelector
            selectedPlatform={gameQuery.selectedPlatform}
            onSelectPlatform={(selectedPlatform) =>
              setGameQuery({ ...gameQuery, selectedPlatform })
            }
          />
          <Box ml={5}>
            <SortSelector
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
              sortOrder={gameQuery.sortOrder || ""}
            />
          </Box>
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
