import React, { useState } from "react";
import { Box, VStack, Input, IconButton, HStack, useToast, List, ListItem, Text, Divider } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";
// Remove duplicate import
import TodoCounter from "../components/TodoCounter";

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const Index = () => {
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [timeValue, setTimeValue] = useState("");
  const toast = useToast();

  const handleInputChange = (e) => setInputValue(e.target.value);

  const handleDateChange = (e) => setDateValue(e.target.value);
  const handleTimeChange = (e) => setTimeValue(e.target.value);

  const addTodo = () => {
    if (inputValue.trim() === "") {
      toast({
        title: "No text entered",
        description: "Please enter a todo item",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    const newTodo = {
      text: inputValue,
      date: dateValue,
      time: timeValue,
    };
    setTodos([...todos, newTodo]);
    setInputValue("");
    setDateValue("");
    setTimeValue("");
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  return (
    <Box p={8}>
      <Header />
      <VStack spacing={8} align="stretch">
        <TodoCounter count={todos.length} />
        <HStack w="100%">
          <Input placeholder="Add a todo" value={inputValue} onChange={handleInputChange} onKeyPress={handleKeyPress} />
          <Input type="date" value={dateValue} onChange={handleDateChange} />
          <Input type="time" value={timeValue} onChange={handleTimeChange} />
          <IconButton icon={<FaPlus />} onClick={addTodo} colorScheme="teal" aria-label="Add todo" />
        </HStack>
        <List w="100%">
          {todos.map((todo, index) => (
            <ListItem key={index} mb={4}>
              <HStack justify="space-between" p={4} bg="gray.100" shadow="md" borderRadius="md">
                <Box>
                  <Text fontSize="lg" fontWeight="semibold">
                    {todo.text} - {todo.date} {todo.time}
                  </Text>
                </Box>
                <IconButton icon={<FaTrash />} onClick={() => deleteTodo(index)} colorScheme="red" aria-label="Delete todo" size="sm" />
              </HStack>
              {index < todos.length - 1 && <Divider />}
            </ListItem>
          ))}
        </List>
      </VStack>
      <Footer />
    </Box>
  );
};

export default Index;
