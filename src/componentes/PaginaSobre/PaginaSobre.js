import React from "react";
import {
  ChakraProvider,
  Flex,
  SimpleGrid,
  useBreakpointValue,
  Center
} from "@chakra-ui/react";
import Theme from "../BotaoDarkMode/Tema";
import DividerCustomizado from "../Divider/DividerCustom";
import Footer from "../Footer/Footer";
import HeroPaginas from "../HeroPaginas/HeroPaginas";
import Sobre from "../../assets/imagem/sobre.png";
import Cabecalho from "../Cabecalho/Cabecalho";
import IdadeEmTempoReal from "./Idade";
import Bio from "./Bio";
import benny from "../../assets/imagem/benny.png";
// import TempoDeExperiencia from "./TempoDeExperiencia";
import GithubProfile from "./CompenenteGithub.js";
import MaisSobreMim from "./Mais.js";

function PaginaSobre() {
  const columnCount = useBreakpointValue({ base: 1, md: 2 });
  return (
    <ChakraProvider theme={Theme}>
      <Cabecalho />

      <HeroPaginas
        mb={8}
        nome={"About me"}
        imagem={benny}
        descricao={"Here are some things about me"}
      />
      <DividerCustomizado />
      <Center>
      <Flex justifyContent="center" maxWidth={"800px"}>
        <SimpleGrid
          columns={columnCount}
          gap={2}
          widith={"800px"}
          maxWidth={"90%"}
          spacing={8}
        >
          <GithubProfile />
          <Bio />
          <IdadeEmTempoReal />
          <MaisSobreMim />
        </SimpleGrid>
      </Flex>
      </Center>
      <DividerCustomizado />
      <Footer />
    </ChakraProvider>
  );
}

export default PaginaSobre;
