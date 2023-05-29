import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Box p={5}>
        <Heading mb={3}>Oops...</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This page doesn't exist"
            : "An unexpected error occured"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
