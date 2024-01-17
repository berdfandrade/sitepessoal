import React from "react";
import {
  Center,
  ChakraProvider,
  Flex,
  Grid,
  Text,
  Icon,
  Box,
} from "@chakra-ui/react";
import { FaFreeCodeCamp, FaPython } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import Theme from "../BotaoDarkMode/Tema";
import DividerCustomizado from "../Divider/DividerCustom";
import Footer from "../Footer/Footer";
import HeroPaginas from "../HeroPaginas/HeroPaginas";
import Projetos from "../../assets/imagem/projetos.png";
import {
  ProjectsBackEnd,
  ProjetosFreeCode,
  ProjetosFreeCodePython,
} from "./Projetos";
import ProjetoCardBack from "./ProjetoCard/ProjetoCardBack";
import Cabecalho from "../Cabecalho/Cabecalho";
import FreeCodeCampCard from "./ProjetoCard/FreeCodeCampCard";
import { IoLogoJavascript } from "react-icons/io5";


function PaginaProjetosClone() {
  return (
    <ChakraProvider theme={Theme}>
      <Cabecalho />
      <HeroPaginas
        mb={8}
        nome={"Projects"}
        imagem={Projetos}
        descricao={
          <Text fontSize={"15"}>
            Here are some projects that I have developed
          </Text>
        }
      />
      <DividerCustomizado />

      <Box maxW={"800px"} mr={"auto"} ml={"auto"}>
        <Flex flexDir={"column"}>
  

          <Center mb={6}>
            <Flex flexDir={"row"}>
              <Text color={"gray.400"} as={"b"} fontSize={25}>
                Back End Projects
              </Text>
              <Icon ml={4} color={"gray.400"} boxSize={"30px"} as={FaServer} />
            </Flex>
          </Center>

          {/* 
              Projetos back-end
          */}

          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(3, 1fr)",
            }}
            mb={10}
            gap={3}
            p={3}
          >
            {ProjectsBackEnd.map((projeto, index) => (
              <ProjetoCardBack
                key={index}
                nome={projeto.nome}
                tag2={projeto.tag2}
                descricao={projeto.descricao}
                descricaoCard={projeto.descricaoCard}
                icon={projeto.icon}
                projeto={projeto}
              ></ProjetoCardBack>
            ))}
          </Grid>

          <Center mb={6}>
            <Flex flexDir={"row"}>
              <Text color={"gray.400"} as={"b"} fontSize={25}>
                FreeCodeCamp Projects
              </Text>
              <Icon
                ml={4}
                color={"gray.400"}
                boxSize={"40px"}
                as={FaFreeCodeCamp}
              />
            </Flex>
          </Center>
          <Flex gap={3} flexDir={"column"}>
            <Flex flexDir={"row"} alignItems={"center"} >
              <Icon ml={3} as={IoLogoJavascript} boxSize={"25px"} color={"gray.400"}/>
            <Text ml={2} color={"gray.400"} as="b">
              JavaScript projects
            </Text>
            </Flex>
            <Grid
              templateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(3, 1fr)",
              }}
              mb={10}
              gap={3}
              p={3}
            >
              {ProjetosFreeCode.map((projeto, index) => (
                <FreeCodeCampCard key={index} projeto={projeto} />
              ))}
            </Grid>
          </Flex>
          <Flex gap={3} flexDir={"column"}>
            <Flex flexDir={"row"} alignItems={"center"}>
            <Icon ml={3} boxSize={"25px"} color={"gray.400"} as={FaPython}/>
            <Text ml={2} color={"gray.400"} as="b">
              Python projects
            </Text>
            
            </Flex>
            <Grid
              templateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(3, 1fr)",
              }}
              mb={10}
              gap={3}
              p={3}
            >
              {ProjetosFreeCodePython.map((projeto, index) => (
                <FreeCodeCampCard key={index} projeto={projeto} />
              ))}
            </Grid>
          </Flex>
        </Flex>
      </Box>
      <DividerCustomizado />
      <Footer />
    </ChakraProvider>
  );
}

export default PaginaProjetosClone;
