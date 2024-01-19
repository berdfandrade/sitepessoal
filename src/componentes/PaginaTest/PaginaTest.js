import { Box, Text, Icon, Center, Heading } from "@chakra-ui/react";
import Cabecalho from "../Cabecalho/Cabecalho";
import CabecalhoPagina from "../HeroPaginas/HeroPaginas";
import * as FA from "react-icons/fa";
import Moon from "../../assets/imagem/html-file.png";
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

export default function PaginaTest() {
  return (
    <Box>
      <Cabecalho />
      <CabecalhoPagina nome={"Test"} descricao={"Test page"} imagem={Moon} />
      <Center>
      <motion.ul initial="hidden" animate="visible" variants={container}>
        <Box border='1px solid gray' p={10} borderRadius={"md"}>
          
            <motion.li variants={item}>B</motion.li>
            <motion.li variants={item}>E</motion.li>
            <motion.li variants={item}>R</motion.li>
            <motion.li variants={item}>D</motion.li>
        
        </Box>
        </motion.ul>
      </Center>
    </Box>
  );
}
