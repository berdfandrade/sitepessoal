import {
  Box,
  Text,
  Icon,
  Center,
  Heading,
  Flex,
  Divider,
} from "@chakra-ui/react";
import Cabecalho from "../Cabecalho/Cabecalho";
import DividerCustomizado from "../Divider/DividerCustom";
import CabecalhoPagina from "../HeroPaginas/HeroPaginas";
import * as FA from "react-icons/fa";
import SKILL from '../../assets/imagem/habilidades.png'
import { motion } from "framer-motion";
import { FaMarsStrokeH } from "react-icons/fa";
import * as TB from "react-icons/tb";

import { Children } from "react";
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

function Linha() {
  return <Box border={"1px dashed gray"} ml={1} mr={2} h="1px" w="100px"></Box>;
}

function Cell({ icone, nome, color, ativo }) {
  return (
    <>
      <Box
        border={`3px solid gray`}
        boxShadow={"md"}
        borderRadius={"100%"}
        boxSize={"80px"}
        p={4}
      >
        <Center>
          <Icon color={color ? color : "gray"} boxSize={"50px"} as={icone} />
        </Center>
      </Box>
    </>
  );
}

export default function PaginaTest() {
  return (
    <Box>
      <Cabecalho />
      <CabecalhoPagina
        nome={"Test"}
        descricao={
          <Center>
            <Text fontSize="sm" maxW={"500px"}>
              "Nature uses only the longest threads to weave her patterns, so
              that each small piece of her fabric reveals the organization of
              the entire tapestry. - Richard Feynman"
            </Text>
          </Center>
        }
        imagem={SKILL}
      />
      <DividerCustomizado />
      <Center>
        <motion.ul initial="hidden" animate="visible" variants={container}>
          <Flex alignItems={"center"}>
            <Cell icone={TB.TbBrandJavascript} />
            <></>
            <Linha />
            <Cell icone={TB.TbBrandNpm} />
            
          </Flex>
        </motion.ul>
      </Center>
    </Box>
  );
}
