import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Text, Button, Spacer } from "@chakra-ui/react";

const Cabecalho = () => {
  return (
    <Box mt={2} p={2}>
      <Flex align="center">
        <Text fontSize="md" ml={2} fontWeight="bold">
          Bernardo Andrade
        </Text>
        <Spacer />
        <Button as={Link} to="/" colorScheme="gray" mr={4}>
          Home
        </Button>
        <Button as={Link} to="/sobre" colorScheme="gray" mr={4}>
          Sobre
        </Button>
        <Button as={Link} to="/habilidades" colorScheme="gray" mr={4}>
          Habilidades
        </Button>
      </Flex>
    </Box>
  );
};

export default Cabecalho;
