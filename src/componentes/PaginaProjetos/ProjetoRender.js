import { Box, Heading, Text, Flex } from "@chakra-ui/react";

export default function ProjetoRender({
  component,
  nome,
  descricao,
  position,
}) {
  return (
    <Box mb={6} height={"40%"} p={4}>
      <Flex flexDir={{ base: "column", md: "row" }}>
        {position === "left" ? (
          <>
            <Flex w={{ base: "100%", md: "80%" }} mb={6} flexDir={"column"}>
              <Heading as={"h3"} mb={2}>
                {nome}
              </Heading>
              <Text w={{ base: "100%", md: "80%" }} mb={6} mr={5}>
                {descricao}
              </Text>
            </Flex>
            <Box height={"40%"} width={"100%"}>
              {component}
            </Box>
          </>
        ) : (
          <>
            <Box height={"40%"} width={"100%"}>
              {component}
            </Box>
            <Flex w={{ base: "100%", md: "80%" }} ml={6} flexDir={"column"}>
              <Heading as={"h3"} mb={2}>
                {nome}
              </Heading>
              <Text w={{ base: "100%", md: "80%" }} mb={6}>
                {descricao}
              </Text>
            </Flex>
          </>
        )}
      </Flex>
    </Box>
  );
}
