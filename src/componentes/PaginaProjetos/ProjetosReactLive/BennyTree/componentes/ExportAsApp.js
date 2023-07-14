import Hero from "./Hero/Hero";
import LinkTree from "./HomeTree/HomeTree";
import { ChakraProvider, Box } from "@chakra-ui/react";

function BennyTree() {
  return (
    <ChakraProvider>
      <Box borderRadius={"md"} borderWidth={"1px"} p={3} width={"90%"}>
        <Hero />
        <LinkTree />
      </Box>
    </ChakraProvider>
  );
}

export default BennyTree;
