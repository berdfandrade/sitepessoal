import {
  Box,
  Text,
  Icon,
  Flex,
  Tag,
  Center,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Progress,
} from "@chakra-ui/react";

import { motion } from "framer-motion";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPython } from "react-icons/fa";
import ReactEmbedGist from "react-embed-gist";
import TagProjeto from "./TagProjeto";

import { Spinner } from "@chakra-ui/react";
import React from "react";

export default function FreeCodeCampCard({ projeto }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <motion.div whileTap={{ scale: 0.9 }}>
        <Box
          onClick={onOpen}
          transition="0.1s ease-in-out"
          alignItems="center"
          h={{ base: "110px", md: "120px" }}
          p={2}
          borderWidth={1}
          width="100%"
          _hover={{
            cursor: "pointer",
          }}
        >
          <Flex alignItems="center" flexDir="row">
            <Icon boxSize="50px" p={2} as={projeto.icone} />
            <Flex flexDir={"column"}>
              <Text as="b">{projeto.nome}</Text>
              <Text fontWeight="light" fontSize="12">
                {projeto.descricaoCard}
              </Text>
              {projeto.linguagem ? (
                <Tag
                  mt={3}
                  ml={2}
                  variant={"subtle"}
                  borderRadius={"full"}
                  colorScheme={projeto.linguagem === "js" ? "orange" : "blue"}
                  p={1}
                  w="110px"
                >
                  <Flex gap={2} ml={2} flex={"row"} alignItems={"center"}>
                    <Center>
                      <Icon
                        boxSize={"15px"}
                        as={
                          projeto.linguagem === "js"
                            ? IoLogoJavascript
                            : projeto.linguagem === "py"
                            ? FaPython
                            : null
                        }
                      />
                      <Text ml={1} as="b">
                        {projeto.linguagem === "js" ? "JavaScript" : "Python"}
                      </Text>
                    </Center>
                  </Flex>
                </Tag>
              ) : null}
            </Flex>
          </Flex>
          {/* <Flex flexDir={"row"} mt={3} gap={2} alignItems={"center"}>
            <Text ml={1} opacity={"0.7"} fontSize={"xs"} color="gray">
              Project Difficulty :
            </Text>
            <Progress
              // bg={"gray.400"}
              opacity={"0.6"}
              borderRadius={"full"}
              size={"sm"}
              w={"50%"}
              value={projeto.dificuldade * 20}
              colorScheme="gray"
            />
          </Flex> */}
        </Box>
      </motion.div>

      <>
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
              {projeto.nome}

              <Flex flexDir={"row"} mt={3}  gap={2} alignItems={"center"}>
                <Text ml={1} opacity={"0.7"} fontSize={"xs"} color="gray">
                  Project Difficulty :
                </Text>
                <Progress
                  // bg={"gray.400"}
                  opacity={"0.6"}
                  borderRadius={"full"}
                  size={"sm"}
                  w={"50%"}
                  value={projeto.dificuldade * 20}
                  colorScheme={"blue"}
                />
              </Flex>
            </DrawerHeader>
            <Flex
              pl={7}
              alignItems={"center"}
              mb={5}
              pr={5}
              gap={2}
              flexDir={"row"}
            >
              <Text fontFamily={"monospace"} fontSize={10}>
                Problem solved in:{" "}
              </Text>
              <TagProjeto nome={projeto.linguagem} />
            </Flex>

            <Center p={5}>
              <Icon boxSize={"100px"} as={projeto.icone} />
            </Center>
            <DrawerBody p={6}>
              <Text mb={3} fontSize={"xs"} fontFamily={"monospace"}>
                Task description:
              </Text>
              <Box borderBottom="1px dashed gray" mb={3} />
              <Box mb={6}>{projeto.descricao}</Box>
              <Text mt={5} mb={2} ml={3} fontSize="sm" as="b">
                My solution:{" "}
              </Text>
              <Box borderBottom="1px dashed gray" mt={6} mb={3} />
              <Box>
                <ReactEmbedGist gist={`berdfandrade/${projeto.solucao}`} />
              </Box>
            </DrawerBody>

            <DrawerFooter>
              <Button
                variant="outline"
                colorScheme={"red"}
                mr={3}
                onClick={onClose}
              >
                Close
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    </>
  );
}
