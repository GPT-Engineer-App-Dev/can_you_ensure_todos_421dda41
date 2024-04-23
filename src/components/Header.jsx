import { Box, Heading } from "@chakra-ui/react";

import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Header = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <Box bg="brand.800" w="100%" p={4} color="white" display="flex" justifyContent="space-between" alignItems="center">
      <Heading as="h1" size="lg" textAlign="center">
        Todo App
      </Heading>
      {isAuthenticated && (
        <Button colorScheme="red" onClick={logout}>
          Logout
        </Button>
      )}
    </Box>
  );
};

export default Header;
