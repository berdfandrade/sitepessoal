import React from "react";
import {
  Box,
  Text,
  Image,
  Flex,
  Tag,
  useDisclosure,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalCloseButton,
  ModalFooter,
  Button,
  Link,
  Icon,
  Center,
  ButtonGroup,
  ScaleFade,
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
        my={4}
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
        <Tag
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
          {dificuldade === "f"
            ? "Fácil"
            : dificuldade === "m"
            ? "Médio"
            : "Difícil"}
        </Tag>
      </Box>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader mr={7}>{title}</ModalHeader>
          <Center mb={5}>
            <Image justifyItem={"isCentered"} boxSize={20} src={imagem}></Image>
          </Center>
          <ModalCloseButton />

          <Text fontSize="sm" ml={3} p={3}>
            {descricao}
          </Text>
          <ModalBody>
            <Text>
              <ScaleFade initialScale={0.1} animateOpacity in={isOpen}>
                <Image borderRadius={"md"} mt={2} src={certificado} />
              </ScaleFade>
            </Text>
          </ModalBody>
          <ModalFooter>
            <Flex justify="space-between" alignItems="center" width="100%">
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
          </ModalFooter>
          <Tag
            borderRadius="0px 0px 4px 4px"
            bg={
              dificuldade === "f"
                ? "green.200"
                : dificuldade === "m"
                ? "orange.200"
                : "red.200"
            }
            width="100%"
          ></Tag>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Card;
