import {
  ChakraProvider,
  Text,
  Box,
  Flex,
  useBreakpointValue,
  ScaleFade,
} from "@chakra-ui/react";

import Theme from "../BotaoDarkMode/Tema";

import DividerCustomizado from "../Divider/DividerCustom";
import Footer from "../Footer/Footer";
import HeroPaginas from "../HeroPaginas/HeroPaginas";
import Cabecalho from "../Cabecalho/Cabecalho";
import benny from "../../assets/imagem/benny.png";
import { useRef } from "react";
import { motion } from "framer-motion";

import { ProgrammerLincense } from "./ProgrammerLincense";

function PaginaSobre() {
  const handleOrderFlex = useBreakpointValue({ base: "column", md: "row" });
  const widthHandle = useBreakpointValue({ base: "80%", md: "50%" });
  const constraintsRef = useRef(null);

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
      <Box mr={"auto"} ml={"auto"} maxW={"800px"}>
        <Flex gap={3} flexDir={handleOrderFlex}>
          <ProgrammerLincense />

          <Box
            // border={"1px solid gray"}
            mr={"auto"}
            ml={"auto"}
            borderRadius={"md"}
            p={3}
            w={widthHandle}
          >
            <Text>
              {" "}
              "I'm a full-stack developer who thrives on a symphony of art and
              music. When I'm not coding, you can find me drumming to my own
              beat. I'm a fervent explorer of diverse cultures and fascinated by
              varying perspectives—it's like my code, always seeking new ways to
              harmonize different ideas!"
            </Text>
          </Box>
        </Flex>
      </Box>
      <DividerCustomizado />
      <Footer />
    </ChakraProvider>
  );
}

export default PaginaSobre;
