import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Theme from "../BotaoDarkMode/Tema";
import DividerCustomizado from "../Divider/DividerCustom";
import Footer from "../Footer/Footer";
import Cabecalho from "../Cabecalho/Cabecalho";
import SkillTree from "./SkillTree/SkillTree";
import HeroPixel from "./Hero/Hero";

function PaginaHabilidades() {
  return (
    <ChakraProvider theme={Theme}>
      <Cabecalho />
        <HeroPixel/>
          <DividerCustomizado />
          <SkillTree />
          <DividerCustomizado />
      <Footer />
    </ChakraProvider>
  );
}

export default PaginaHabilidades;
