import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Box } from "@chakra-ui/react";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Box p={5}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
