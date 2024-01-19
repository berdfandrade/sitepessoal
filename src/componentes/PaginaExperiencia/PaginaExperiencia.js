import React from "react";
import { Box, Text, Flex, Divider, Heading } from "@chakra-ui/react";
import DividerCustomizado from "../Divider/DividerCustom";
import Footer from "../Footer/Footer";
import HeroPaginas from "../HeroPaginas/HeroPaginas";
import Experiencia from "../../assets/imagem/experiencia.png";
import Cabecalho from "../Cabecalho/Cabecalho";
import experiencia from "./Experiencia";
import LinhaDoTempo from "./TimeLine";

import { motion } from "framer-motion";
const animation = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const sizes = {
  0: 'lg',
  1: 'md',
  2: 'sm',

};

function TimeLine({ arr }) {
  return (
    <>
      {arr.map((arr, index) => (
        <motion.div
          initial={"hidden"}
          whileTap={{ scale: 1.0 }}
          whileHover={{ scale: 1.1 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
          animate={"visible"}
          variants={animation}
        >
          <Box
            bg={'white'}
            boder={index === 0 ? "2px solid black" : null}
            key={index}
            p={10}
            ml={"auto"}
            mr={"auto"}
            // maxW={`${800 - 50 * index}px`}
            borderRadius={"md"}
            alignItems={"center"}
            borderWidth={1}
            marginBottom={10}

          >
            <Flex gap={1} flexDirection={"column"}>
              <Box>
                <Heading color={"gray.900"} fontSize={"3xl"}>{arr.empresa}</Heading>
                <Divider color='gray.600' mt={3}/>
              </Box>
              <Box>
                <Text fontSize={"sm"} color='gray.600' as='code'>{arr.tempo}</Text>
              </Box>
              <Box>
                <Text fontSize={'sm'} color='gray.600'>{arr.texto}</Text>
              </Box>
            </Flex>
          </Box>
        </motion.div>
      ))}
    </>
  );
}

function PaginaExperiencia() {
  return (
    <Box>
      <Flex flexDir={"column"}>
        <Cabecalho />
        <HeroPaginas
          mb={8}
          nome={"Experience"}
          imagem={Experiencia}
          descricao={"My professional journey!"}
        />
        <DividerCustomizado />

        <Box p={2} w={"100%"} maxW="800px" mr={"auto"} ml={"auto"} h={"100%"}>
          <TimeLine arr={experiencia} />
        </Box>
        <DividerCustomizado />
        <Footer />
      </Flex>
    </Box>
  );
}

export default PaginaExperiencia;
