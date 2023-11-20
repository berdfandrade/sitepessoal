import React from "react";
import "./HeroPaginas.css";
import { Box, Text } from "@chakra-ui/react";
import nuvem from "../../assets/imagem/nuvem.png";


const CabecalhoPagina = ({ nome, imagem, descricao }) => {
  return (
    <Box height="400" postion="relative" py={10} textAlign="center">

      <img src={nuvem} className="nuvem"></img>
      <img className="benny" src={imagem}></img>

      <Text mt="70px" color="grey.800" fontWeight="900" fontSize={40}>
        {nome}
      </Text>
      <Text fontSize={15} mt={1} textAlign="center" textJustify="center">
        {descricao}
      </Text>
    </Box>
  );
};

export default CabecalhoPagina;
