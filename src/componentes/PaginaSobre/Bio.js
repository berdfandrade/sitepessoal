import React from "react";
import {
  Avatar,
  Box,
  Flex,
  Text,
  Badge,
  Stack,
  Button,
  useDisclosure,
  Divider,
  Center,
  Icon,
  Code,
} from "@chakra-ui/react";

import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

import RealBenny from "../../assets/imagem/RealBenny.jpg";
import PixelBenny from "../PaginaProjetos/ProjetosReactLive/BennyTree/assets/pixelBennySemFundo.png";
import { GiHammerSickle } from "react-icons/gi";
import { FaBirthdayCake } from "react-icons/fa";
import { FaRulerVertical } from "react-icons/fa";
import { GiVikingHelmet } from "react-icons/gi";
import { GiWeightScale } from "react-icons/gi";
import { GiBroadsword } from "react-icons/gi";
import { GiRosaShield } from "react-icons/gi";
import { BsCode } from "react-icons/bs";
import { BsDot } from "react-icons/bs";

function Bio() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex p={5} alignItems="left">
      <Box width={"400px"} border={"1px solid black"}>
        <Box
          h={"60px"}
          alignItems={"center"}
          borderBottom={"1px solid black"}
          p={4}
          bg={"#f7f7f7"}
        >
          <Flex flexDir={"row"}>
            <Flex mt={-4}>
              <Icon
                color={"#d46464"}
                boxSize={"60px"}
                ml={-6}
                mr={-10}
                as={BsDot}
              />
              <Icon color={"#fce58f"} boxSize={"60px"} mr={-10} as={BsDot} />
              <Icon color={"#6cc4a4"} boxSize={"60px"} as={BsDot} />
            </Flex>

            <Text
              color={"#1f1f1f"}
              fontSize="md"
              ml={2}
              mt={1}
              fontWeight="bold"
            >
              Bernardo Andrade
            </Text>

            <Icon
              color={"#8e8e8e"}
              boxSize={"20px"}
              mt={1}
              ml={"auto"}
              as={BsCode}
            />
          </Flex>

          {/* <Text fontSize="sm" ml={1}>
          Developer Full Stack
        </Text> */}
        </Box>
        {/* <Button mt={8} colorScheme="facebook" size="sm" onClick={onOpen}>
          Ver mais
        </Button> */}
      </Box>

      <Drawer onClose={onClose} isOpen={isOpen} size={"md"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Sobre Mim</DrawerHeader>
          <Center>
            <Avatar
              src={RealBenny}
              mb={6}
              style={{ width: "200px", height: "200px" }}
            />
          </Center>

          <DrawerBody fontSize={"md"}>
            Meu nome é Bernardo. Sou formado em Comunicação Social e estudei
            Letras. Sou um amante da programação e também das artes. Tento
            combinar esses dois mundos sempre que posso. Sou um desenvolvedor
            Full Stack que gosta de se comprometer a aprender cada vez mais.{" "}
            <br />
            <br />
            Sou uma pessoa bastante interessada em ouvir, aprender e descobrir
            soluções para problemas simples e para problemas complexos. Acredito
            que no fundo, as minhas duas maiores paixões são; criar coisas e
            aperfeiçoar as coisas. Esse processo parece eterno e infinito às
            vezes, mas para mim, é imensamente prazeroso. <br />
            <br />
            <Divider mb={2} />
            <Center mb={2}>
              <Avatar
                src={PixelBenny}
                // size="xl"
                style={{ width: "150px", height: "150px" }}
              />

              <Text p={2} fontSize="md" mt={4} mr={7}>
                <Text as="b">Informações: </Text> <br />
                <Divider maxW={"100px"} mb={2} />
                <Icon as={GiVikingHelmet} /> Classe |{" "}
                <Icon as={GiHammerSickle} />
                <br />
                <Icon as={FaRulerVertical} /> Altura | <Text as="b">1,73m</Text>
                <br />
                <Icon as={GiWeightScale} /> Peso | <Text as="b">76kg</Text>
                <br />
                <Icon as={GiBroadsword} /> ATK | <Text as="b">4500</Text>
                <br />
                <Icon as={GiRosaShield} /> DEF | <Text as="b">2500</Text>
                <br />
                <Icon as={FaBirthdayCake} /> <Text as="b">15-01-1996</Text>
                <br />
              </Text>
            </Center>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}

export default Bio;
