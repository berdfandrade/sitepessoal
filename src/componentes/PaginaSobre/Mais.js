import React from "react";
import {
  Box,
  Icon,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Heading,
  Grid,
  GridItem,
  Link,
  Flex,
  Center,
} from "@chakra-ui/react";

import * as SI from "react-icons/si";
import { TbHexagonLetterF } from "react-icons/tb";

import {
  AiOutlineMail,
  AiFillLinkedin,
  AiFillInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const MaisSobreMim = () => {
  return (
    <Tabs variant="solid-rounded" colorScheme="facebook">
      <TabList>
        <Tab fontWeight={"light"} fontSize={"sm"}>
          Contato
        </Tab>
        <Tab fontWeight={"light"} fontSize={"sm"}>
          Mais
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Grid templateColumns="repeat(1, 1fr)" gap={4}>
            <GridItem>
              <Box p={2} pl={4} borderWidth="1px" borderRadius="md">
                <AiOutlineMail size={20} />
                <Text fontWeight="bold">E-mail</Text>
                <Link href="mailto:berdfandrade@gmail.com">
                  berdfandrade@gmail.com
                </Link>
              </Box>
            </GridItem>
            <GridItem>
              <Link
                href="https://wa.link/mcu7y1"
                _hover={{ cursor: "pointer" }}
                isExternal
              >
                <Box p={2} pl={4} borderWidth="1px" borderRadius="md">
                  <AiOutlineWhatsApp size={20} />
                  <Text fontWeight="bold">Telefone</Text>
                  <Text>(31) 99420-9220</Text>
                </Box>
              </Link>
            </GridItem>
            <GridItem>
              <Link
                _hover={{ cursor: "pointer" }}
                href="https://www.linkedin.com/in/bernardo-fonseca-4240a8131/"
                isExternal
              >
                <Box p={2} pl={4} borderWidth="1px" borderRadius="md">
                  <AiFillLinkedin size={20} />
                  <Text fontWeight="bold">Linkedin</Text>

                  <Text fontWeight="light">Bernardo Fonseca</Text>
                </Box>
              </Link>
            </GridItem>
            <GridItem>
              <Link
                _hover={{ cursor: "pointer" }}
                href="https://www.instagram.com/bernadofandrade/"
                isExternal
              >
                <Box p={2} pl={4} borderWidth="1px" borderRadius="md">
                  <AiFillInstagram size={20} />
                  <Text fontWeight="bold">Instagram</Text>
                  <Text fontWeight="light">@bernadofandrade</Text>
                </Box>
              </Link>
            </GridItem>
          </Grid>
        </TabPanel>

        {/* Filosofia */}

        <TabPanel>
          <Heading>Filosofia</Heading>

          <Text mt={2} textAlign="justify">
            Sou praticante da Sahaja Yoga, que é uma pratica espiritual e
            ritualística que busca a paz e satisfação através da meditação. Por
            isso usei os desenhos do pequeno Bernardo meditando. Além disso sigo
            buscando me conhecer e melhorar a minha perspectiva de vida através
            da arte e da instropecção.
            <br />
            <br /> Gosto muito de ler, e de ouvir música. Eu toco bateria há
            mais de 13 anos, e isso me ajudou muito com disciplina. Além disso,
            gosto bastante de correr e praticar atividade física, pois me ajudam
            nessa meta de concentração que almejo com a Yoga.
            <br />
            <br />
            Sou muito fã de comédia, e adoro filmes de comédia, e especiais de
            stand-up. Para mim uma boa comédia é tão musical quanto um bom
            álbum. Adoro descobrir músicas novas e fatos interessantes sobre
            física quântica...
          </Text>
          <Heading mt={4} mb={3}>
            {" "}
            Sobre o site
          </Heading>
          <Text textJustify={"center"} mb={5}>
            Esse site foi desenvolvido usando várias tecnologias diferentes. Foi
            feito do zero usando React, com estilização da Chakra-ui, ícones do
            React-icons, e alguns outros do Flat icons para fazer os heros das
            páginas. <br />
            <br />
            Aprendi bastante no processo de programação, e foi bastante
            esclarecedor... Consumi API's e tive que me esforçar para organizar
            o código de uma forma eficiente para conseguir trabalhar no projeto
            sozinho. 💪💡
          </Text>
          <Flex gap={6} flexDirection={"row"}>
            <Icon boxSize={10} as={SI.SiChakraui} />
            <Icon boxSize={10} as={SI.SiReact} />
            <Icon boxSize={10} as={TbHexagonLetterF} />
            <Icon boxSize={10} as={SI.SiNodedotjs} />
          </Flex>
          <TabPanel></TabPanel>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default MaisSobreMim;
