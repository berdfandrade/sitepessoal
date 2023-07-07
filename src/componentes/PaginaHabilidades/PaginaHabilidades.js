import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Theme from "../BotaoDarkMode/Tema";
import DividerCustomizado from "../Divider/DividerCustom";
import Footer from "../Footer/Footer";
import HeroPaginas from "../HeroPaginas/HeroPaginas";
import habilidades from "../../assets/imagem/habilidades.png";
import Cabecalho from "../Cabecalho/Cabecalho";
import SkillTree from "../SkillTree/SkillTree";

function PaginaHabilidades() {
  return (
    <ChakraProvider theme={Theme}>
      <Cabecalho />
      <HeroPaginas
        mb={8}
        nome={"Habilidades"}
        imagem={habilidades}
        descricao={"Minha árvore de habilidades!"}
      />
      <DividerCustomizado />
      <SkillTree />
      <DividerCustomizado />
      <Footer />
    </ChakraProvider>
  );
}

export default PaginaHabilidades;
