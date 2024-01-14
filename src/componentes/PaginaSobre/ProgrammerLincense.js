import {
  Box,
  Flex,
  Center,
  Spacer,
  Tag,
  useBreakpointValue,
  Text,
  Avatar,
  Icon,
} from "@chakra-ui/react";

/*
    Images imports
*/

import { useRef } from "react";
import { motion } from "framer-motion";
import { FaKeyboard } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import bennyPix from "../../assets/imagem/BennySmilPix.png";

import { differenceInHours } from "date-fns";
import { calcularIdade } from "./Idade";

export function ProgrammerLincense() {

  const age = calcularIdade()
  const startDate = new Date("2022-01-04");
  const currentDate = new Date();

  const hours = differenceInHours(currentDate, startDate);

  const fontSizeHandle = useBreakpointValue({ base: "13", md: "18" });
  const fontSizeHandleAge = useBreakpointValue({ base: "13", md: "16" });

  return (
    <Box
      mr={"auto "}
      ml={"auto"}
      p={3}
      transition="transform 0.3s ease-in-out"
      bg={"#ffffff"}
    //   border={"3px solid gray"}
      backgroundImage="url('https://www.transparenttextures.com/patterns/back-pattern.png')"
      height={"300px"}
      width={"400px"}
      maxW={"80%"}
      boxShadow={"rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;"}
      borderRadius={"md"}
    >
      {/* 

        PROGRAMMER
        CARD ID NO: 

        */}

      <Flex flexDir={"row"}>
        <Box
          w={"60%"}
          mb={3}
          maxH={"55px"}
          bg={"gray.600"}
          borderRadius={"full"}
        >
          <Center>
            <Flex flexDir={"column"}>
              <Text
                color={"white"}
                fontFamily={"menlo"}
                fontSize={fontSizeHandle}
                as={"b"}
                mb={-2}
              >
                PROGRAMMER CARD
              </Text>
              <Text color={"white"} fontFamily={"menlo"} fontSize={"sm"}>
                ID No. 43554
              </Text>
            </Flex>
          </Center>
        </Box>
        <Spacer />
        <Flex flexDir={"row"}></Flex>
        <Icon color={"gray.400"} boxSize={"20px"} as={FaKeyboard} />
        <Icon color={"gray.400"} boxSize={"20px"} as={AiFillThunderbolt} />
      </Flex>

      <Flex flexDir={"row"}>
        <Avatar boxSize={"100px"} src={bennyPix} />
        <Flex flexDir={"column"}>
          <Text
            color={"gray.800"}
            fontFamily={"monospace"}
            mt={2}
            fontSize={fontSizeHandle}
            as="b"
          >
            Name : Bernardo Andrade
          </Text>
          <Flex mb={1} gap={3} flexDir={"row"} alignItems={"center"}>
            <Text
              color={"gray.800"}
              fontFamily={"monospace"}
              fontSize={fontSizeHandleAge}
            >
              Age: {age}
            </Text>
            <Text color={"gray.800"} fontFamily={"monospace"} fontSize={13}>
              Nationality: 🇧🇷
            </Text>
          </Flex>
          <Flex flexDir={"row"} gap={2}>
            <Tag
              borderRadius={"full"}
              color={"gray.800"}
              maxW={"80px"}
              bg={"#FBD38D"}
            >
              Back-end
            </Tag>
            <Tag
              borderRadius={"full"}
              color={"gray.800"}
              maxW={"80px"}
              bg={"#E9E3FF"}
            >
              Front-end
            </Tag>
          </Flex>
        </Flex>
      </Flex>

      <Text
        color={"gray.800"}
        bg={"gray.200"}
        mb={1}
        pl={2}
        borderRadius={"md"}
        ml={2}
        fontSize={"xs"}
        fontFamily={"menlo"}
      >
        Height: 1.73m
      </Text>
      <Text
        color={"gray.800"}
        bg={"gray.200"}
        pl={2}
        borderRadius={"md"}
        ml={2}
        fontSize={"xs"}
        fontFamily={"menlo"}
      >
        Weight: 73kg
      </Text>
      <Flex mt={4}>
        <Text
          color={"gray.800"}
          bg={"gray.100"}
          pl={2}
          pr={2}
          borderRadius={"md"}
          ml={2}
          fontFamily={"monospace"}
        >
          Time Programming{" "}
          {hours > 0 && ` ${hours} hour${hours !== 1 ? "s" : ""}`}
        </Text>
        <Text
          color={"gray.800"}
          bg={"gray.100"}
          pl={2}
          pr={2}
          borderRadius={"md"}
          ml={2}
          fontFamily={"monospace"}
        >
          Adventure started January 4, 2022
        </Text>
      </Flex>
    </Box>
  );
}
