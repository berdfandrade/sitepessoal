import { Box, Text, VStack, Center, Icon, Flex } from "@chakra-ui/react";

import { FaInstagram } from "react-icons/fa";
import Main from "./Main";

const LinkTree = () => {
  return (
    <VStack spacing={4}>
      <Box w="100%" p={6} maxW="900px">
        <Center>
          <Flex alignItems={"center"} mb={6} flexDirection={"row"}>
            <Icon
              justifyContent={"center"}
              boxSize={"5"}
              mr={2}
              as={FaInstagram}
            />
            <Text fontSize="1xl" fontWeight="bold" >
              @bernadofandrade
            </Text>
          </Flex>
        </Center>
        <Main />
      </Box>
    </VStack>
  );
};

export default LinkTree;
