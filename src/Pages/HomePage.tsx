import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

function HomePage() {
  return (
    <Grid
      templateAreas={{ base: `"main"`, lg: `"aside main"` }}
      templateColumns={{ base: "1fr", lg: "250px 1fr" }}
    >
      <Show above="lg">
        <GridItem area="aside" px="20px">
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box pl={2}>
          <Box mb={5}>
            <GameHeading />
          </Box>
          <HStack spacing={5} mb={5}>
            <Box>
              <PlatformSelector />
            </Box>
            <Box>
              <SortSelector />
            </Box>
          </HStack>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default HomePage;
