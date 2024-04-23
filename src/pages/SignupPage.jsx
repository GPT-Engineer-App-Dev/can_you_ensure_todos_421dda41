import React, { useState, useContext } from "react";
import { Box, VStack, Input, Button, useToast, Link } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { signup } = useContext(AuthContext);
  const navigate = useNavigate();
  const toast = useToast();

  const handleSignup = () => {
    if (password !== confirmPassword) {
      toast({
        title: "Password mismatch",
        description: "The passwords do not match",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    signup(username, password);
    navigate("/");
  };

  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Input placeholder="Username" onChange={(event) => setUsername(event.target.value)} />
        <Input placeholder="Password" type="password" onChange={(event) => setPassword(event.target.value)} />
        <Input placeholder="Confirm Password" type="password" onChange={(event) => setConfirmPassword(event.target.value)} />
        <Button colorScheme="teal" onClick={handleSignup}>
          Sign Up
        </Button>
        <Link to="/login" color="teal.500">
          Already have an account? Login
        </Link>
      </VStack>
    </Box>
  );
};

export default SignupPage;
