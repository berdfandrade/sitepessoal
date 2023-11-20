import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Text, Button, Spacer } from "@chakra-ui/react";
import BotaoDarkMode from "../BotaoDarkMode/BotaoDarkMode";

const Cabecalho = () => {
  return (
    <Box mt={2} p={2}>
      <Flex alignItems="center">
        <Link to="/">
          <Text
            ml={2}
            mt={2}
            hover={{ cursor: "hover" }}
            maxW={"80%"}
            fontSize={["xs", "md"]}
            fontWeight="bold"
          >
            Bernardo Andrade
          </Text>
        </Link>
        <Spacer />
        <Button
          fontSize={["11", "13"]}
          as={Link}
          to="/projetos"
          colorScheme="gray"
          mr={4}
        >
          Projects
        </Button>
        <Button
          fontSize={["11", "13"]}
          as={Link}
          to="/sobre"
          colorScheme="gray"
          mr={4}
        >
          About
        </Button>
        <Button
          fontSize={["11", "13"]}
          as={Link}
          to="/habilidades"
          colorScheme="gray"
          mr={4}
        >
          Skills
        </Button>
        <Box mr={2}>
          <BotaoDarkMode />
        </Box>
      </Flex>
    </Box>
  );
};

export default Cabecalho;
