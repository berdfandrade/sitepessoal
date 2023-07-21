import {
  Box,
  Text,
  Icon,
  useDisclosure,
  Button,
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
} from "@chakra-ui/react";

import { AiFillQuestionCircle, AiOutlineLink } from "react-icons/ai";
import { FaGithubAlt } from "react-icons/fa";

const ProjetoCard = ({
  nome,
  iconModal,
  componenteLive,
  descricao,
  icon,
  corIcon,
  descricaoCard,
  tag1,
  tag2,
  corTag1,
  corTag2,
  link,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        transition="0.1s ease-in-out"
        alignItems="center"
        borderWidth={1}
        width="100%"
        borderRadius="8px"
        onClick={onOpen}
        _hover={{
          cursor: "pointer",
        }}
      >
        <Flex>
          <Icon
            as={icon ? icon : AiFillQuestionCircle}
            color={corIcon}
            boxSize="50px"
            p={2}
          ></Icon>
          <Text textAlign="left" fontSize={16} fontWeight={"bold"} p={1} mt={1}>
            {nome ? nome : "Nome do componenteLive"}
            <Text fontWeight={"light"} fontSize="sm" p={2}>
              {descricaoCard ? descricaoCard : "descrição do card"}
            </Text>
          </Text>
        </Flex>

        {(tag1 || tag2) && (
          <Center ml={8} mb={2}>
            {tag1 && (
              <Tag
                fontSize={"sm"}
                marginLeft={0}
                colorScheme={corTag1 ? corTag1 : "facebook"}
              >
                {tag1}
              </Tag>
            )}
            {tag2 && (
              <Tag
                fontSize={"sm"}
                ml={2}
                colorScheme={corTag2 ? corTag2 : "teal"}
              >
                {tag2}
              </Tag>
            )}
          </Center>
        )}
      </Box>

      <Drawer
        isOpen={isOpen}
        placement="right"
        p={4}
        size={"md"}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader mt={4} fontSize={30}>
            {nome}
          </DrawerHeader>

          {iconModal ? (
            <Center mb={5} mt={5}>
              <Icon boxSize={20} as={iconModal} />
            </Center>
          ) : null}

          <Text fontSize="md" ml={3} mr={2} p={3}>
            {descricao}
          </Text>

          <DrawerBody>{componenteLive}</DrawerBody>

          <DrawerFooter mt={3}>
            <Button
              mr={"auto"}
              borderRadius={"full"}
              bg={"blackAlpha.900"}
              color={"white"}
              p={4}
              as="a"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            > 
              <Flex flexDirection={"row"}>
              <Icon mr={2} as={FaGithubAlt} />
              <Text fontSize="sm">Repositório</Text>
              <Icon
                color="white"
                boxSize={4}
                as={AiOutlineLink}
                // mt={}
                ml={1}
              ></Icon>
              </Flex>

            </Button>
            <Button variant="outline" mr={3} onClick={onClose}>
              Fechar
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ProjetoCard;
