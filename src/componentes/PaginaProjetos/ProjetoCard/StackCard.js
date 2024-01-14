import { Box, Text, Icon, Flex, Center } from "@chakra-ui/react";

import { SiPostgresql } from "react-icons/si";
import { SiFlask } from "react-icons/si";

export default function StackCard({ icon1, icon2, name1, name2 }) {
  return (
    <Box
      transition="0.1s ease-in-out"
      alignItems="center"
      h={{ base: "110px", md: "120px" }}
      p={2}
      borderWidth={1}
      width="100%"
    >
      <Flex
        flexDir={"row"}
        alignItems={"center"}
        mr={"auto"}
        ml={"auto"}
      >
        <Flex mr={"auto"} mb={3} alignItems={"center"} ml={"auto"}>
          <Icon as={icon1 ? icon1 : SiPostgresql} boxSize={"50px"} />
          <Text as="b" ml={4} mr={5} fontSize={"40"}>
            +
          </Text>
          <Icon as={icon2 ? icon2 : SiFlask} boxSize={"50px"} />
        </Flex>
      </Flex>

      <Center>
        <Text as="b" mr={"auto"} ml={"auto"}>
          {name1 ? name1 : "Nome 1"} + {name2 ? name2 : "Nome 2"}
        </Text>
      </Center>
    </Box>
  );
}
