import Cabecalho from "../../Cabecalho/Cabecalho";
import { Box, Text, Icon, Heading, Center, Flex, Tag } from "@chakra-ui/react";

import { JsonView, allExpanded, darkStyles, defaultStyles } from 'react-json-view-lite';
import 'react-json-view-lite/dist/index.css';

// import { useParams } from "react-router";
import { ProjectsBackEnd } from "../Projetos";
import Footer from "../../Footer/Footer";
import { useParams } from "react-router-dom";
import TagProjeto from "./TagProjeto";

function JsonRender(data) {
  return (

      <JsonView data={data}></JsonView>
  );
}

function BackEndDoc({ projeto }) {
  return (
    <>
      <Cabecalho />
      <Box h={"100vh"}>
        <Box w={"90%"} mt={30} mr={"auto"} ml={"auto"} h={"100vh"}>
          <Center>
            <Flex flexDir={"column"}>
              <Heading mt={6}>{projeto.nome}</Heading>
              <Flex flexDir={"row"}>
              </Flex>
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

            {projeto.methods &&
              projeto.methods.map((metodo, index) => (
                <Flex direction={"column"} key={index}>
                  <Tag
                    p={2}
                    w={"100%"}
                    maxW={"700px"}
                    ml={"auto"}
                    mb={5}
                    colorScheme={
                      metodo.method === "GET"
                        ? "green"
                        : metodo.method === "PUT"
                        ? "blue"
                        : metodo.method === "POST"
                        ? "orange"
                        : "red"
                    }
                    mr={"auto"}
                    borderRadius={"md"}
                  >
                    <Flex flexDir={"row"} alignItems={"center"} gap={6}>
                      <Tag
                        variant={"outline"}
                        key={index}
                        colorScheme={
                          metodo.method === "GET"
                            ? "green"
                            : metodo.method === "PUT"
                            ? "blue"
                            : metodo.method === "POST"
                            ? "orange"
                            : "red"
                        }
                        height={"30px"}
                        w={"90px"}
                      >
                        <Text mr={"auto"} fontWeight={"bold"} ml={"auto"}>
                          {metodo.method}
                        </Text>
                      </Tag>
                      <Text mt={1} fontSize={"sm"} fontFamily={"menlo"}>
                        /{metodo.url}
                      </Text>
                    </Flex>
  
                  </Tag>

                 

                  <Tag
                    mb={6}
                    p={4}
                    colorScheme="gray"
                    borderRadius={"md"}
                    w={"100%"}
                    maxW={"700px"}
                    mr={"auto"}
                    ml={"auto"}
                  >
                    <Box borderRadius={"md"} maxW={"400px"} mb={2}>
                    <Text fontSize={"sm"}>
                      <JsonRender data={metodo.responseExample} />
                    </Text>
                    </Box>
                  </Tag>
                </Flex>
              ))}
          </Flex>
          <Footer />
        </Box>
      </Box>
    </>
  );
}

export { BackEndDoc, JsonRender };
