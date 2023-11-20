import Cabecalho from "../../Cabecalho/Cabecalho";
import { Box, Text, Icon, Heading, Center, Flex, Tag } from "@chakra-ui/react";

// import { useParams } from "react-router";
import { ProjectsComponents } from "../Projetos";
import Footer from "../../Footer/Footer";
import BotaoDarkMode from "../../BotaoDarkMode/BotaoDarkMode";

export function FrontEndDoc(projeto) {
  return (
    <>
      <Cabecalho />
      <Box h={"100vh"}>
        <Box w={"90%"} mt={30} mr={"auto"} ml={"auto"} h={"100vh"}>
          <Center>
            <Flex flexDir={"column"}>
              <BotaoDarkMode />
              <Heading mt={6}>{projeto.nome}</Heading>
              <Icon
                mt={3}
                boxSize={"60px"}
                mr={"auto"}
                ml={"auto"}
                as={projeto.icon}
              />
            </Flex>
          </Center>
          <Flex flexDir={"column"}>
            <Text mt={6} maxW={"800px"} mb={10} mr={"auto"} ml={"auto"}>
              {projeto.descricao}
            </Text>
            <Center>
              <Flex flexDir={"row"}>
                <Box border={"1px solid red"} maxW={"400px"}>
                  {projeto.component}
                </Box>
                <Text>oaks,odakoskdas</Text>
              </Flex>
            </Center>
          </Flex>
          <Footer />
        </Box>
      </Box>
    </>
  );
}

export default FrontEndDoc;
