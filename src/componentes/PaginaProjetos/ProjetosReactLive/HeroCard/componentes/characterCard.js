import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  Badge,
  VStack,
  HStack,
  Flex,
  Image,
  Center,
  Icon,
} from "@chakra-ui/react";

import { AiFillHeart } from "react-icons/ai";
import {
  GiPointySword,
  GiElfHelmet,
  GiMuscleUp,
  Gi3DHammer,
} from "react-icons/gi";
import { RiShieldFill } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import avatarHandle from "./avatarHandle";

import axios from "axios";

const HeroCard = () => {
  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const response = await axios.get("https://rpgapi-one.vercel.app/heroi");
        setHeroData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchHeroData();
  }, []);

  if (!heroData) {
    return <Text>Carregando...</Text>;
  }

  const {
    Apresentação,
    Ataque,
    Defesa,
    Gênero,
    HP,
    Inventário,
    Level,
    Nome,
    Stamina,
    Temperamento,
  } = heroData;

  return (
    <Box maxW="sm" p={7} borderWidth="1px" borderRadius="lg" overflow="hidden">
      <VStack spacing={4} align="start">
        <Text fontSize="3xl" fontWeight="bold">
          {Nome}
        </Text>
        <Center justifyContent={"center"}>
          <Image src={avatarHandle(heroData)} />
        </Center>
        <Text as="i">"{Apresentação}"</Text>
        <Badge
          p={2}
          colorScheme={
            Gênero === "Masculino"
              ? "blue"
              : Gênero === "Feminino"
              ? "pink"
              : "gray"
          }
        >
          {Gênero}
        </Badge>

        <HStack spacing={2}>
          <AiFillHeart />
          <Text>{HP}</Text>
          <GiPointySword />
          <Text>{Ataque}</Text>
          <RiShieldFill />
          <Text>{Defesa}</Text>
          <GiMuscleUp />
          <Text>{Stamina}</Text>
        </HStack>

        <Flex flexDirection={"row"}>
          <Icon boxSize={6} as={GiElfHelmet} />
          <Text fontSize={"md"}>Level: {Level}</Text>
        </Flex>

        <Text>
          <Flex flexDirection={"row"}>
            <FaStar mr={6} /> Estilo: {Temperamento}
          </Flex>
        </Text>

        <Flex flexDirection={"row"}>
          <Icon as={Gi3DHammer} boxSize={5} mr={2}></Icon>
          <Text as={"b"}>Inventário:</Text>
        </Flex>
        <Box fontSize={"sm"} pl={4}>
          <ul>
            {Inventário.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Box>
      </VStack>
    </Box>
  );
};

export default HeroCard;
