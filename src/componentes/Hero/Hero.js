import React from "react";
import "./Hero.css";
import { Box, Text, ChakraProvider} from "@chakra-ui/react";
import benny from "../../assets/imagem/benny.png";
import nuvem from "../../assets/imagem/nuvem.png";
import BotaoDarkMode from "../BotaoDarkMode/BotaoDarkMode";
// import Sol from "../../assets/imagem/sunny.png";
// import Lua from "../../assets/imagem/moon.png";

import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  fonts: {
    heading: "'PT Sans', sans-serif",
  },
});

const Hero = () => {
  return (
    <ChakraProvider theme={customTheme}>
      <Box
        theme={customTheme}
        height="400"
        position="relative"
        mb={3}
        py={20}
        textAlign="center"
      >
        <BotaoDarkMode />

        <img src={nuvem} className="nuvem" alt="Imagem da nuvem" />
        <img className="benny" src={benny} alt="Imagem do Benny" />

        <Text mt="60px" color="grey.800" fontWeight="900" fontSize={35}>
          Bernardo Andrade
        </Text>
        <Text fontSize={20} mt={-1} fontWeight="900">
          Web developer | Full Stack
        </Text>

        <Text fontSize={14} mt={3} textAlign="center">
          Interessado por arte e tecnologia. Descubra meus <br />
          conhecimentos e opiniões.
        </Text>
      </Box>
    </ChakraProvider>
  );
};

export default Hero;
