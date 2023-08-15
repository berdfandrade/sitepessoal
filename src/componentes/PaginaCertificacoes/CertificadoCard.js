import React from "react";
import {
  Box,
  Text,
  Image,
  Flex,
  Tag,
  useDisclosure,
  Button,
  Link,
  Icon,
  Center,
  ButtonGroup,
} from "@chakra-ui/react";

import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";


import { AiOutlineLink } from "react-icons/ai";
import { TbCertificate } from "react-icons/tb";

const Card = ({
  title,
  imagem,
  dificuldade,
  certificado,
  descricao,
  linkCertificado,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        borderWidth={1}
        boxShadow="sm"
        borderRadius="md"
        p={4}
        width="280px"
        height="115px"
        onClick={onOpen}
        _hover={{
          cursor: "pointer",
        }}
      >
        <Flex direction={"row"} alignItems="center">
          <Image boxSize="50px" src={imagem} />
          <Text ml={4} as="h5" fontWeight="bold" fontSize="md" mb={2}>
            {title}
          </Text>
        </Flex>
        <Flex flexDir={"row"}>
          <Tag
            pl={2}
            colorScheme={
              dificuldade === "f"
                ? "green"
                : dificuldade === "m"
                ? "orange"
                : "red"
            }
            ml={1}
            mt={3}
          >
            <Text fontSize={"xs"}>
              {dificuldade === "f"
                ? "Fácil"
                : dificuldade === "m"
                ? "Médio"
                : "Difícil"}
            </Text>
          </Tag>
          <ButtonGroup ml={20} mt={3} isAttached variant="outline">
            <Icon mt={1} mr={1} as={AiOutlineLink} />
            <Link href={linkCertificado} isExternal>
              <Button size="xs" p={3}>
                certificado
              </Button>
            </Link>
            <Icon mt={1} ml={2} as={TbCertificate} />
          </ButtonGroup>
        </Flex>
      </Box>

      <Drawer p={4} onClose={onClose} size={"sm"} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader p={4} mt={3}>
            {title}
          </DrawerHeader>

          <DrawerBody>
            <Center>
              <Image
                mb={3}
                justifyItem={"isCentered"}
                boxSize={"100px"}
                src={imagem}
              ></Image>
            </Center>
            <Text fontSize="sm" ml={3} p={3}>
              {descricao}
            </Text>
   
              <Image

                borderRadius={"lg"}
                mt={5}
                src={certificado}
              />
       
          </DrawerBody>

          <Flex p={4} justify="space-between" alignItems="center" width="100%">
            <ButtonGroup isAttached variant="outline">
              <Icon mt={1} mr={1} as={AiOutlineLink} />
              <Link href={linkCertificado} isExternal>
                <Button size="xs" p={3}>
                  certificado
                </Button>
              </Link>
              <Icon mt={1} ml={2} as={TbCertificate} />
            </ButtonGroup>
            <Button onClick={onClose}>Fechar</Button>
          </Flex>
          <Tag
            borderRadius="0px 0px"
            bg={
              dificuldade === "f"
                ? "green.200"
                : dificuldade === "m"
                ? "orange.200"
                : "red.300"
            }
            
          ></Tag>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Card;
