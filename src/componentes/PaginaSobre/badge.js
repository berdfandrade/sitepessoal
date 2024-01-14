import * as GI from "react-icons/gi";
import {
  Box,
  Icon,
  Flex,
  Text,
  Center,
  chakra,
  shouldForwardProp,
} from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

function GameBadge({ color, icone, nome }) {
  return (
    <Flex flexDir="column">
      <Box
        border={`2px solid rgba(0, 0, 0, 0.5)`}
        w={"50px"} /* Ajuste a largura conforme necessário */
        h={"50px"}
        borderRadius={"100%"} /* Ajuste o valor para alterar os ângulos */
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
        bg={`${color}.300`}
      >
        {" "}
        <Icon boxSize={"70%"} color={"black"} as={icone} />
      </Box>

      <Center>
        <Text fontFamily={"monospace"} mt={1} fontSize={"xs"}>
          {nome}
        </Text>
      </Center>
    </Flex>
  );
}

export default GameBadge;
