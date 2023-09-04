import React, { useEffect, useState } from "react";
import {
  Box,
  Icon,
  Text,
  CircularProgress,
  Avatar,
  Center,
  Divider,
  Flex,
  Tag,
  Button,
  Image,
} from "@chakra-ui/react";

import { IoLocation } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";
import { BiGitBranch } from "react-icons/bi";
import * as GI from "react-icons/gi"

const GithubProfile = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/berdfandrade"
        );
        const data = await response.json();
        setProfileData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfileData();
  }, []);

  if (!profileData) {
    return <CircularProgress isIndeterminate color="blue.300" />;
  }

  const { login, followers, following, avatar_url, location } =
    profileData;

  return (
    <Box
      p={4}
      borderRadius="15px"
      // borderWidth="1px"
      // boxShadow={"sm"}
      display="flex"
      flexDirection={"column"}
    >
      <Icon boxSize={6} as={FaGithub}></Icon>
      <Center flexDirection={"column"}>
        <Avatar
          mt={5}
          size="xl"
          name="Bernardo Andrade"
          src={avatar_url}
        ></Avatar>
        <Text mt={4} as="b">
          {login}
        </Text>
        <Flex direction={"row"}>
          <Icon mr={2} as={IoLocation}></Icon>
          <Text>{location}</Text>
        </Flex>

        <Divider width={150} mt={4} />
        <Flex mt={4} flexDirection={"row"}>
          <Icon mr={3} boxSize={6} as={IoMdContacts}></Icon>
          <Text fontSize={"md"}>
            <Tag p={2}>
              Seguidores {followers} | Seguindo {following}
            </Tag>
          </Text>
        </Flex>
        <Flex mt={3}>
          <Icon boxSize={7} mr={2} as={GI.GiNinjaHead}></Icon>
          <Text fontSize={"xs"} mt={1}>codewars.com </Text>
          <Image
            src="https://www.codewars.com/users/berdfandrade/badges/micro"
            ml={2}
          ></Image>
        </Flex>

        <Button
          borderRadius={"full"}
          bg={"blackAlpha.900"}
          color={"white"}
          p={3}
          mt={4}
          as="a"
          href="https://github.com/berdfandrade"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon mr={2} as={BiGitBranch} />
          <Text fontSize="sm">GitHub</Text>
        </Button>
      </Center>
    </Box>
  );
};

export default GithubProfile;
