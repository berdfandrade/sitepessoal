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
  useBreakpointValue,
  Spacer,
} from "@chakra-ui/react";

import { AiFillQuestionCircle, AiOutlineLink } from "react-icons/ai";
import * as FA from "react-icons/fa";

const ProjetoCardFront = ({
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
  const widthBasedPlacement = useBreakpointValue({
    base: "bottom",
    md: "right",
  });

  return (
    <>
      <Box
        transition="0.1s ease-in-out"
        alignItems="center"
        h={{ base: "110px", md: "120px" }}
        p={2}
        borderWidth={1}
        width="100%"
        onClick={onOpen}
        _hover={{
          cursor: "pointer",
        }}
      >
        <Flex flexDir={"column"} height={"100%"}>
          <Flex flexDir={"row"} alignItems={"center"}>
            <Icon
              as={icon ? icon : AiFillQuestionCircle}
              color={corIcon}
              boxSize="50px"
              p={2}
            ></Icon>
            <Flex>
              <Text textAlign="left" fontSize={16} fontWeight={"bold"}>
                {nome ? nome : "Nome do componenteLive"}
                <Text fontWeight={"light"} fontSize="12" maxW={"80%"}>
                  {descricaoCard ? descricaoCard : "descrição do card"}
                </Text>
              </Text>
            </Flex>
          </Flex>

          <Spacer />
          {(tag1 || tag2) && (
            <Box bottom={0}>
              {tag1 && (
                <Tag
                  fontSize="xs"
                  variant={"outline"}
                  borderRadius={"full"}
                  marginLeft={0}
                  colorScheme={corTag1 ? corTag1 : "facebook"}
                >
                  {tag1}
                </Tag>
              )}
              {tag1 && tag2 && (
                <>
                  <Tag
                    fontSize="sm"
                    colorScheme={corTag2 ? corTag2 : "teal"}
                    ml={2}
                  >
                    {tag2}
                  </Tag>
                </>
              )}
              {tag2 && !tag1 && (
                <Tag
                  fontSize="xs"
                  variant={"outline"}
                  borderRadius={"full"}
                  marginLeft={0}
                  colorScheme={corTag2 ? corTag2 : "teal"}
                >
                  {tag2}
                </Tag>
              )}
            </Box>
          )}
        </Flex>
      </Box>

      <Drawer
        isOpen={isOpen}
        placement={widthBasedPlacement}
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
                <Icon mr={2} as={FA.FaGithubAlt} />
                <Text fontSize="sm">Repositório</Text>
                <Icon
                  color="white"
                  boxSize={4}
                  as={AiOutlineLink}
                  ml={1}
                ></Icon>
              </Flex>
            </Button>
            <Button
              variant="outline"
              colorScheme={"red"}
              mr={3}
              onClick={onClose}
            >
              Fechar
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ProjetoCardFront;
