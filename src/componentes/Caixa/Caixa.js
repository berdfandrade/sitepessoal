import React from "react";
import { Box, Text, Icon } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

const Caixa = ({ titulo, descricao, url }) => {
  return (
    <a href={url}>
      <Box
        mt={4}
        mx="auto"
        maxWidth="90%"
        width="800px"
        p={4}
        height="90px"
        bg="whiteAlpha.100"
        border="1px solid"
        borderColor="grey"
        borderRadius="4px"
        textAlign="justify"
        transition="height 0.3s"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        _hover={{
          textDecoration: "none",
          height: "110px",
          cursor: "pointer",
        }}
      >
        <Box>
          <Text fontSize="19px">{titulo}</Text>
          <Text fontSize="14px">{descricao}</Text>
        </Box>
        <Icon as={ChevronRightIcon} boxSize={4} marginLeft={2} />
      </Box>
    </a>
  );
};

export default Caixa;
