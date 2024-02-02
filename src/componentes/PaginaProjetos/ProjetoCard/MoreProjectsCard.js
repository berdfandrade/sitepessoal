import { Box, Flex, Text, Icon } from "@chakra-ui/react";
import { FaArrowCircleRight } from "react-icons/fa";

export default function MoreProjects({ tipo }) {
  return (
    <Box
      transition="0.1s ease-in-out"
      alignItems="center"
      h={{ base: "110px", md: "120px" }}
      p={2}
      borderWidth={1}
      width="100%"
      _hover={{
        cursor: "pointer",
      }}
    >
      <Flex opacity={0.2} alignItems={"center"} p={2} mt={5} gap={3}flexDir={"row"}>
        <Text  as="b" fontSize={"md"}>
          See more {tipo} projects....
        </Text>
        <Icon boxSize={"50px"} as={FaArrowCircleRight} />
      </Flex>
    </Box>
  );
}
