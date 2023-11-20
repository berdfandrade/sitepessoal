import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import DividerCustomizado from "../Divider/DividerCustom";
import Footer from "../Footer/Footer";
import HeroPaginas from "../HeroPaginas/HeroPaginas";
import Experiencia from "../../assets/imagem/experiencia.png";
import Cabecalho from "../Cabecalho/Cabecalho";
import experiencia from "./Experiencia";

function TimeLine({ arr }) {
  return (
    <>
      {arr.map((arr, index) => (
        <Box
          boder={index === 0 ? "2px solid black" : null}
          key={index}
          p={10}
          ml={"auto"}
          mr={"auto"}
          maxW={"800px"}
          borderRadius={"md"}
          alignItems={"center"}
          borderWidth={1}
          marginBottom={4}
        >
          <Flex gap={1} flexDirection={"column"}>
            <Box>
              <Text fontSize={"3xl"}>{arr.empresa}</Text>
            </Box>
            <Box>
              <Text fontSize={"sm"}>{arr.tempo}</Text>
            </Box>
            <Box>
              <Text>{arr.texto}</Text>
            </Box>
          </Flex>
        </Box>
      ))}
    </>
  );
}

function PaginaExperiencia() {
  return (
    <>
      <Cabecalho />
      <HeroPaginas
        mb={8}
        nome={"Experience"}
        imagem={Experiencia}
        descricao={"My professional journey!"}
      />
      <DividerCustomizado />

      <Box
        flexDir={"column"}
        alignItems={"center"}
        p={5}
        gap={10}
        // border={"1px solid red"}
      >
        <TimeLine arr={experiencia} />
      </Box>
      <DividerCustomizado />
      <Footer />
    </>
  );
}

export default PaginaExperiencia;
