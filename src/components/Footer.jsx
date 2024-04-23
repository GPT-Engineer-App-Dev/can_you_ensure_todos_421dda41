import { Box, Text, Center } from "@chakra-ui/react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Box bg="brand.700" w="100%" p={4} color="white" mt={8}>
      <Center>
        <Text>© {currentYear} Todo App. All rights reserved.</Text>
      </Center>
    </Box>
  );
};

export default Footer;
