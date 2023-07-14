import {
  Text,
  Tag,
  Flex,
  Icon,
  useDisclosure,
  Button,
  Center,
} from "@chakra-ui/react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'

function AstroCard({ nome, icone, planeta, cor, descricao }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>

      <Drawer colorScheme={cor} size={"md"}onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader fontSize={25}>{nome}</DrawerHeader>
          <Center flexDirection={"column"}>
          <Icon boxSize={"130px"} as={icone}/>
          
           </Center>
          <DrawerBody>
            <p justifyContent={"center"}>
             {descricao}
            </p>
            <Center>
            <Icon mt={10} boxSize={"50px"} as={planeta} />
            </Center>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Tag
        variant={"outline"}
        p={4}
        onClick={onOpen}
        cursor={"pointer"}
        colorScheme={cor}
        justifyContent={"center"}
      >
        <Flex flexDirection={"column"}>
          <Icon boxSize={20} as={icone} />
          
          <Text ml={1} mt={4}>
            {nome}
          </Text>
        </Flex>
      </Tag>
    </>
  );
}

export default AstroCard;
