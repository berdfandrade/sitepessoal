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

import { useState, useEffect } from "react";
import { FaReact, FaServer } from "react-icons/fa";
import Theme from "../BotaoDarkMode/Tema";
import DividerCustomizado from "../Divider/DividerCustom";
import Footer from "../Footer/Footer";
import HeroPaginas from "../HeroPaginas/HeroPaginas";
import Projetos from "../../assets/imagem/projetos.png";
import { ProjectsComponents, ProjectsBackEnd } from "./Projetos";
import ProjetoCardFront from "./ProjetoCard/ProjetoCardFront";
import ProjetoCardBack from "./ProjetoCard/ProjetoCardBack";

import Cabecalho from "../Cabecalho/Cabecalho";

function PaginaProjetosClone() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const rotateIcon = () => {
      setRotation((prevRotation) => (prevRotation + 1) % 360);
    };

    const rotationInterval = setInterval(rotateIcon, 50);

    return () => {
      clearInterval(rotationInterval);
    };
  }, []);

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
                Simple React Projects
              </Text>
              <Icon
                ml={4}
                color={"gray.400"}
                boxSize={"40px"}
                as={FaReact}
                style={{ transform: `rotate(${rotation}deg)` }}
              />
            </Flex>
          </Center>

          <Grid
            templateColumns={{
              base: "repeat(1, 2fr)",
              md: "repeat(3, 1fr)",
            }}
            mb={10}
            gap={3}
            p={3}
          >

          {/* 
              Projetos Front-end
          */}

            {ProjectsComponents.map((projeto, index) => (
              <ProjetoCardFront
                key={index}
                tag1={projeto.tag1}
                nome={projeto.nome}
                componenteLive={projeto.component}
                descricao={projeto.descricao}
                descricaoCard={projeto.descricaoCard}
                icon={projeto.icon}
                link={projeto.link}
              />
            ))}
          </Grid>

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
        </Flex>
      </Box>
      <DividerCustomizado />
      <Footer />
    </ChakraProvider>
  );
}

export default PaginaProjetosClone;
