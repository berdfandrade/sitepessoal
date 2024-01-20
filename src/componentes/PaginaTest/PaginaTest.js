import { Box, Text, Icon, Center, Heading, Flex, Divider} from "@chakra-ui/react";
import Cabecalho from "../Cabecalho/Cabecalho";
import CabecalhoPagina from "../HeroPaginas/HeroPaginas";
import * as FA from "react-icons/fa";
import Moon from "../../assets/imagem/html-file.png";
import { motion } from "framer-motion";
import { FaMarsStrokeH } from "react-icons/fa";
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

function Cell({icone}) {
  return (
    <>
      <Box border="1px solid gray" borderRadius={"100%"} boxSize={"80px"} p={5}>
        {Children}
      </Box>
      <Icon as={icone}></Icon>
    </>
  );
}

export default function PaginaTest() {
  return (
    <Box>
      <Cabecalho />
      <CabecalhoPagina nome={"Test"} descricao={"Test page"} imagem={Moon} />
      
      <Center>
       
        <motion.ul initial="hidden" animate="visible" variants={container}>
          <Flex alignItems={"center"}>
            <Box
              border="1px solid gray"
              borderRadius={"100%"}
              boxSize={"80px"}
              p={5}
            >
              <Icon
                mt={2}
                ml={1}
                colorScheme={"red"}
                boxSize={"30px"}
                as={FA.FaNpm}
              />
            </Box>

            <Linha />
            <Box
              border="1px solid gray"
              borderRadius={"100%"}
              boxSize={"80px"}
              p={5}
            >
              <Icon
                mt={2}
                ml={1}
                colorScheme={"red"}
                boxSize={"30px"}
                as={FA.FaNpm}
              />
            </Box>
          </Flex>
        </motion.ul>
      </Center>
    </Box>
  );
}
