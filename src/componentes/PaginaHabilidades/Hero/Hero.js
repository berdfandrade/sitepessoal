import { React, useRef, useEffect, useState } from "react";
import {
  Box,
  Heading,
  Text,
  Center,
  Icon,
  Flex,
  Tag,
  Progress,
  Image,
} from "@chakra-ui/react";

import * as GI from "react-icons/gi";
import * as FA from "react-icons/fa";
import * as TB from "react-icons/tb";
import * as AI from "react-icons/ai";

import calcularPorcentagemCompletadaAno from "./porcentagemAno";
import anime from "animejs";
import BotaoDarkMode from "../../BotaoDarkMode/BotaoDarkMode";

import PixelBenny from "../assets/pixelBennySemFundo.png";
import aura from "../assets/deza8e9-b79fc074-2c89-4214-b0cb-73152b904149.gif"; // Campeã
import calcularPorcentagemDiaPassado from "./porcentagemDia";

const HeroPixel = () => {
  const elementRef = useRef(null);

  const [porCentoAno, setPorCentoAno] = useState(0);
  const [HP, setHp] = useState(0);

  useEffect(() => {
    const HP = 120 - calcularPorcentagemDiaPassado();
    setHp(HP);
  }, []);

  useEffect(() => {
    const porcentagemCompletadaAno = calcularPorcentagemCompletadaAno();
    setPorCentoAno(porcentagemCompletadaAno);
  }, []);

  useEffect(() => {
    const element = elementRef.current;
    anime({
      targets: element,
      translateY: [-32, -15], 
      loop: true,
      direction: "alternate",
      easing: "easeInOutQuad", 
      duration: HP >= 60 ? "1000" : "1500",
    });
  }, []);

  return (
    // Hero it self

    <Box py={8} mb={1} textAlign="center">
      <Heading as="h3" mt={3} mb={3}>
        My Skill Tree
      </Heading>
      <Box
        alignItems={"center"}
        mt={3}
        h={"160px"}
        w={"90%"}
        mr={"auto"}
        ml={"auto"}
      >
        <Center>
          <Flex flexDir={"row"}>
            <Box boxSize={"180px"} position="relative">
              <Image
                src={PixelBenny}
                ref={elementRef}
                alt="Avatar"
                w={"110px"}
                ml={10}
                mt={"60px"}
                style={{ position: "absolute", top: 0, left: 0, zIndex: 2 }}
              />
              <Image
                src={aura}
                opacity={HP >= 50 ? "90%" : HP <= 30 ? "10%" : "70%"}
                style={{ position: "relative", zIndex: 1 }}
              />

              <Flex mt={-4} flexDir={"row"}>
                <Flex ml={10} alignItems={"center"} mr={2}>
                  <Icon
                    color={"gray.400"}
                    boxSize={"4"}
                    as={FA.FaRulerVertical}
                  />
                  <Text color={"gray.400"} as="b" fontSize={14}>
                    1.73m
                  </Text>
                </Flex>

                <Flex alignItems={"center"}>
                  <Icon
                    color={"gray.400"}
                    boxSize={"4"}
                    as={GI.GiWeightScale}
                  />
                  <Text color={"gray.400"} as="b" fontSize={14}>
                    74kg
                  </Text>
                </Flex>
              </Flex>
            </Box>

            <Box>
              <Text fontWeight={"bold"} mb={-1}>
                Bernardo Stats:
              </Text>
              <Flex alignItems={"center"} flexDir={"row"}>
                <Text fontSize="12" mr={1} mt={4}>
                  Lvl.
                </Text>
                <Text fontSize="30" as="b">
                  27
                </Text>
                <Text fontSize={"xs"} mt={3} mr={1}>
                  Class:
                </Text>
                <Text fontSize={"xs"} as={"b"} mt={3}>
                  Programmer
                </Text>
              </Flex>

              <Flex alignItems={"center"} flexDir={"row"}>
                <Text fontSize={"xs"}>HP.</Text>
                <Progress
                  w={"80%"}
                  borderRadius={"full"}
                  height={"8px"}
                  ml={2}
                  colorScheme={HP <= 40 ? "orange" : HP <= 20 ? "red" : "teal"}
                  value={HP}
                ></Progress>
              </Flex>
              <Flex alignItems={"center"} flexDir={"row"}>
                <Text fontSize={"xs"}>Exp.</Text>
                <Progress
                  ml={2}
                  w={"75%"}
                  borderRadius={"full"}
                  height={"8px"}
                  value={Math.round(porCentoAno)}
                ></Progress>
              </Flex>
              <Text fontSize={"xs"} mt={-1}>{`${
                10 * Math.round(porCentoAno)
              } / 1000`}</Text>

              <Flex flexDir={"column"}>
                <Tag
                  colorScheme={"purple"}
                  mr={"auto"}
                  ml={"auto"}
                  mt={2}
                  variant={"outline"}
                  p={1}
                >
                  <Icon boxSize={"20px"} mr={1} as={TB.TbServer}></Icon>
                  <Text fontSize={"xs"}>Backend Wizard</Text>
                  <Icon
                    boxSize={"20px"}
                    ml={1}
                    mr={1}
                    as={GI.GiWizardStaff}
                  ></Icon>
                </Tag>
                <Tag
                  mr={"auto"}
                  width={"90%"}
                  ml={"auto"}
                  mt={1}
                  variant={"outline"}
                  colorScheme="blue"
                  p={1}
                >
                  <Icon mr={1} boxSize={"20px"} as={TB.TbScreenShare}></Icon>
                  <Text fontSize={"xs"}>FrontEnd Warrior</Text>
                  <Icon mr={1} boxSize={"20px"} as={GI.GiSwordSpade}></Icon>
                </Tag>
              </Flex>
            </Box>
          </Flex>
        </Center>
      </Box>
    </Box>
  );
};

export default HeroPixel;
