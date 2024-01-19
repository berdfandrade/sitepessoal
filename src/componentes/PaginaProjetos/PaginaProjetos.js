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
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const TextAnimation = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
  },
};

function PaginaProjetosClone() {
  return (
    <ChakraProvider theme={Theme}>
      <Cabecalho />
      <motion.div
        initial={"hidden"}
        animate={"visible"}
        variants={TextAnimation}
      >
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
      </motion.div>
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

          <motion.div initial="hidden" animate="visible" variants={container}>
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
                <motion.div variants={item}>
                  <ProjetoCardBack
                    key={index}
                    nome={projeto.nome}
                    tag2={projeto.tag2}
                    descricao={projeto.descricao}
                    descricaoCard={projeto.descricaoCard}
                    icon={projeto.icon}
                    projeto={projeto}
                  ></ProjetoCardBack>
                </motion.div>
              ))}
            </Grid>
          </motion.div>
          <motion.div initial="hidden" animate="visible" variants={item}>
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
          </motion.div>
          <Flex gap={3} flexDir={"column"}>
            <motion.div initial="hidden" animate="visible" variants={container}>
              <Flex flexDir={"row"} alignItems={"center"}>
                <Icon
                  ml={3}
                  as={IoLogoJavascript}
                  boxSize={"25px"}
                  color={"gray.400"}
                />
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
                  <motion.div variants={item}>
                    <FreeCodeCampCard key={index} projeto={projeto} />
                  </motion.div>
                ))}
              </Grid>
            </motion.div>
          </Flex>
          <Flex gap={3} flexDir={"column"}>
          <motion.div initial="hidden" animate="visible" variants={container}>
            <Flex flexDir={"row"} alignItems={"center"}>
              <Icon ml={3} boxSize={"25px"} color={"gray.400"} as={FaPython} />
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
                <motion.div variants={item}>
                  <FreeCodeCampCard key={index} projeto={projeto} />
                </motion.div>
              ))}
            </Grid>
            </motion.div>
          </Flex>
        </Flex>
      </Box>
      <DividerCustomizado />
      <Footer />
    </ChakraProvider>
  );
}

export default PaginaProjetosClone;
