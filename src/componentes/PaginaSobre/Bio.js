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
} from "@chakra-ui/react";

import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'

import RealBenny from "../../assets/imagem/RealBenny.jpg";
import PixelBenny from "../../assets/imagem/pixelBennySemFundo.png";
import { GiHammerSickle } from "react-icons/gi";
import { FaBirthdayCake } from "react-icons/fa";
import { FaRulerVertical } from "react-icons/fa";
import { GiVikingHelmet } from "react-icons/gi";
import { GiWeightScale } from "react-icons/gi";
import { GiBroadsword } from "react-icons/gi";
import { GiRosaShield } from "react-icons/gi";

function Bio() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex p={5} alignItems="left">
      <Box>
        <Text fontSize="large" ml={1} fontWeight="bold">
          Bernardo Andrade
        </Text>
        <Text fontSize="sm" ml={1}>
          Developer Full Stack
        </Text>
        <Text fontSize="md" p={1} fontWeight="bold" mb={2}>
          Me chamo Bernardo, sou formado em Comunicação Social e estudei Letras.{" "}
          <br />
          Sou um amante da engenharia digital <br /> e também das artes. Tento
          combinar esses dois mundos sempre que posso. Sou um desenvolvedor Full
          Stack que gosta de se comprometer a aprender cada vez mais.
        </Text>
        <Stack direction="row">
          <Badge colorScheme="green" p={1} borderRadius={6}>
            BackEnd
          </Badge>
          <Badge colorScheme="red" p={1} borderRadius={6}>
            FrontEnd
          </Badge>
          <Badge colorScheme="purple" p={1} borderRadius={6}>
            Design
          </Badge>
        </Stack>
        <Button mt={8} colorScheme="facebook" size="sm" onClick={onOpen}>
          Ver mais
        </Button>
      
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
              {/* <Icon boxSize={10} mr={5} as={AiOutlineArrowRight}></Icon> */}
              <Text p={2} fontSize="md" mt={4} mr={7}>
                <Text as="b">Informações: </Text> <br />
                <Divider maxW={"100px"} mb={2} />
                <Icon as={GiVikingHelmet} /> Classe |{" "}
                <Icon  as={GiHammerSickle} />
                <br />
                <Icon as={FaRulerVertical} /> Altura | <Text as="b">1,73m</Text>
                <br />
                <Icon as={GiWeightScale} /> Peso | <Text as="b">76kg</Text>
                <br />
                <Icon as={GiBroadsword} /> ATK | <Text as="b">4500</Text>
                <br />
                <Icon as={GiRosaShield} /> DEF | <Text as="b">2500</Text>
                <br />
                <Icon as={FaBirthdayCake} />  <Text as="b">15-01-1996</Text>
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
