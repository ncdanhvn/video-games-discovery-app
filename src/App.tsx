import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  selectedGenreId?: number;
  selectedPlatformId?: number;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
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
              setGameQuery({ ...gameQuery, selectedGenreId: selectedGenre.id })
            }
            selectedGenreId={gameQuery.selectedGenreId}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box pl={2}>
          <Box mb={5}>
            <GameHeading gameQuery={gameQuery} />
          </Box>
          <HStack spacing={5} mb={5}>
            <Box>
              <PlatformSelector
                selectedPlatformId={gameQuery.selectedPlatformId}
                onSelectPlatform={(selectedPlatform) =>
                  setGameQuery({
                    ...gameQuery,
                    selectedPlatformId: selectedPlatform.id,
                  })
                }
              />
            </Box>
            <Box>
              <SortSelector
                onSelectSortOrder={(sortOrder) =>
                  setGameQuery({ ...gameQuery, sortOrder })
                }
                sortOrder={gameQuery.sortOrder || ""}
              />
            </Box>
          </HStack>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
