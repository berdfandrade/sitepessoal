import {
  Box,
  Text,
  Icon,
  Center,
  Heading,
  Flex,
  Divider,
} from "@chakra-ui/react";
import { useState } from "react";
import Cabecalho from "../Cabecalho/Cabecalho";
import DividerCustomizado from "../Divider/DividerCustom";
import CabecalhoPagina from "../HeroPaginas/HeroPaginas";
import * as FA from "react-icons/fa";
import SKILL from "../../assets/imagem/habilidades.png";
import { motion } from "framer-motion";
import { FaMarsStrokeH } from "react-icons/fa";
import * as TB from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";

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

function LinhaHorizontal() {
  return <Box border={"1px dashed gray"} h="1px" w="260px"></Box>;
}

function LinhaVertical() {
  return (
    <Box
      border={"1px dashed gray"}
      h="120px"
      ml={10}
      mt={5}
      mb={5}
      w="1px"
    ></Box>
  );
}

function LinhaDiagonalEsquerda() {
  return (
    <Box
      border={"1px dashed gray"}
      h="160px"
      transform="rotate(-40deg)"
      ml={14}
      mb={5}
      w="1px"
    />
  );
}

function LinhaDiagonalDireita() {
  return (
    <Box
      border={"1px dashed gray"}
      h="160px"
      transform="rotate(40deg)"
      mr={4}
      // mb={5}
      w="1px"
    />
  );
}

function Cell({ icone, nome, color }) {
  const [ativo, setAtivo] = useState(false);

  const handleClick = () => {
    setAtivo(!ativo);
  };

  return (
    <>
      <motion.div>
        <Box
          _hover={{ cursor: "pointer" }}
          onClick={handleClick}
          border={`2px solid ${ativo ? color : "black"}`} // Muda a cor da borda quando ativo
          boxShadow={"white "}
          borderRadius={"100%"}
          opacity={ativo ? "1" : "0.5"}
          boxSize={"80px"}
          p={4}
        >
          <Center>
            <Icon
              color={ativo ? color : "gray"}
              mt={1}
              boxSize={"40px"}
              as={icone}
            />
          </Center>
        </Box>
      </motion.div>
    </>
  );
}

export default function PaginaTest() {
  return (
    <Box>
      <Cabecalho />
      <CabecalhoPagina
        nome={"Skills"}
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
          <Flex alignItems={"center"} gap={10}>
            <Flex flexDir={"column"}>
              <Cell color={"orange"} icone={IoLogoJavascript} />
              <Flex flexDir={"row"}>
                <LinhaDiagonalDireita />
                <LinhaVertical />
                <LinhaDiagonalEsquerda />
              </Flex>
              {/* <LinhaHorizontal /> */}
              <Cell color={"red"} icone={TB.TbBrandNpm} />
            </Flex>
          </Flex>
        </motion.ul>
      </Center>
    </Box>
  );
}
