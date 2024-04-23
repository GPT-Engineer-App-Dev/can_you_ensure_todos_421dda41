import React from "react";
import { Box, Text } from "@chakra-ui/react";

const TodoCounter = ({ count }) => {
  return (
    <Box my={4} p={2} bg="blue.50" borderRadius="md">
      <Text fontSize="xl">Number of Todos: {count}</Text>
    </Box>
  );
};

export default TodoCounter;
