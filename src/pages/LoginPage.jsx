import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Box, Button, Input, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    login(username, password);
    navigate("/");
  };

  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Input placeholder="Username" onChange={(event) => setUsername(event.target.value)} />
        <Input placeholder="Password" type="password" onChange={(event) => setPassword(event.target.value)} />
        <Button onClick={handleLogin}>Login</Button>
        <Link to="/signup" color="teal.500">
          Don't have an account? Sign Up
        </Link>
      </VStack>
    </Box>
  );
}

export default LoginPage;
