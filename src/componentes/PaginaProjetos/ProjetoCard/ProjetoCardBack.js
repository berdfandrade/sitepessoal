import {
  Box,
  Text,
  Icon,
  useDisclosure,
  Flex,
  Tag,
  Spacer,
  useBreakpointValue,
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

import { motion } from "framer-motion";
import JsonRender from "./JsonRender";
import { AiFillQuestionCircle } from "react-icons/ai";
import { AiOutlineLink } from "react-icons/ai";
import { MdOutlineConstruction } from "react-icons/md";
import * as FA from "react-icons/fa";
import TagProjeto from "./TagProjeto";

const ProjetoCardBack = ({
  nome,
  descricao,
  icon,
  corIcon,
  descricaoCard,
  tag1,
  tag2,
  corTag1,
  corTag2,
  projeto,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const widthBasedPlacement = useBreakpointValue({
    base: "bottom",
    md: "right",
  });

  return (
    <>
      {" "}
      <motion.div whileTap={{ scale: 0.8 }}>
        <Box
          transition="0.1s ease-in-out"
          alignItems="center"
          h={{ base: "110px", md: "120px" }}
          p={2}
          borderWidth={1}
          onClick={onOpen}
          width="100%"
          _hover={{
            cursor: "pointer",
          }}
        >
          <Flex flexDir="column" height="100%">
            <Flex flexDir="row" alignItems="center">
              <Icon
                as={icon ? icon : AiFillQuestionCircle}
                color={corIcon}
                boxSize="50px"
                p={2}
              ></Icon>
              <Flex>
                <Text textAlign="left" fontSize={16} fontWeight="bold">
                  {nome ? nome : "Nome do componenteLive"}
                  <Text fontWeight="light" fontSize="12" maxW="80%">
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
                    variant="outline"
                    borderRadius="full"
                    marginLeft={0}
                    colorScheme={corTag1 ? corTag1 : "facebook"}
                  >
                    {tag1}
                  </Tag>
                )}
                {tag2 && (
                  <Tag
                    fontSize="xs"
                    variant={"outline"}
                    borderRadius={"full"}
                    marginLeft={0}
                    colorScheme={corTag2 ? corTag2 : "whatsapp"}
                  >
                    {tag2}
                  </Tag>
                )}
              </Box>
            )}
          </Flex>
        </Box>
      </motion.div>
      <Drawer
        isOpen={isOpen}
        placement={widthBasedPlacement}
        p={4}
        size={"md"}
        onClose={onClose}
        colorScheme="green"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader mt={4} fontSize={30}>
            {nome}
          </DrawerHeader>

          {/* Tags */}
          <Flex
            p={4}
            pl={7}
            alignItems={"center"}
            mb={5}
            pr={5}
            gap={2}
            flexDir={"row"}
            overflowX={"hidden"}
          >
            <Text fontFamily={"menlo"} fontSize={10}>
              Uses:{" "}
            </Text>
            {projeto.tags &&
              projeto.tags.map((tag, index) => (
                <TagProjeto nome={tag} key={index} />
              ))}
          </Flex>

          <DrawerBody borderRadius={"md"}>
            {projeto.underConstruction ? (
              <Center>
                <Flex
                  // border={"1px solid gray"}
                  alignItems={"center"}
                  p={6}
                  flexDir={"column"}
                >
                  <Text mt={"15"} color="gray.300" fontSize={30} as="b">
                    Under Construction...
                  </Text>
                  <Icon
                    color="gray.300"
                    boxSize={"200px"}
                    as={MdOutlineConstruction}
                  />
                  <Text
                    p={4}
                    color="gray.400"
                  >{`The ${projeto.nome} is under construction, and I'm doing my best, I swear! In the meantime, you can visit my GitHub (@berdfandrade) or explore my other projects on this website.`}</Text>
                </Flex>
              </Center>
            ) : (
              <>
                <Center mb={5}>
                  <Icon boxSize={20} as={icon} />
                </Center>
                <Text fontSize="md" p={3}>
                  {descricao}
                </Text>
                {projeto.methods &&
                  projeto.methods.map((metodo, index) => (
                    <Flex direction={"column"} key={index}>
                      <Tag
                        p={2}
                        w={"100%"}
                        maxW={"700px"}
                        ml={"auto"}
                        mb={5}
                        colorScheme={
                          metodo.method === "GET"
                            ? "green"
                            : metodo.method === "PUT"
                            ? "blue"
                            : metodo.method === "POST"
                            ? "orange"
                            : "red"
                        }
                        mr={"auto"}
                        borderRadius={"md"}
                      >
                        <Flex flexDir={"row"} alignItems={"center"} gap={6}>
                          <Tag
                            variant={"outline"}
                            key={index}
                            colorScheme={
                              metodo.method === "GET"
                                ? "green"
                                : metodo.method === "PUT"
                                ? "blue"
                                : metodo.method === "POST"
                                ? "orange"
                                : "red"
                            }
                            height={"30px"}
                            w={"90px"}
                          >
                            <Text mr={"auto"} fontWeight={"bold"} ml={"auto"}>
                              {metodo.method}
                            </Text>
                          </Tag>
                          <Text mt={1} fontSize={"sm"} fontFamily={"menlo"}>
                            /{metodo.url}
                          </Text>
                        </Flex>
                      </Tag>
                      <Box mr={"auto"} ml={"auto"} w={"94%"} mb={4}>
                        <Text fontSize={"sm"}>
                          <Text as="b">Description: </Text>
                          {metodo.descricaoMetodo}
                        </Text>
                      </Box>
                      <Box
                        mb={6}
                        p={4}
                        bg={"#eeeeee"}
                        borderRadius={"md"}
                        w={"100%"}
                        maxW={"700px"}
                        mr={"auto"}
                        ml={"auto"}
                      >
                        <Text color={"#747474"} fontSize={"md"} as="b">
                          Sample response:
                        </Text>
                        <Text fontSize={"md"}>
                          <JsonRender data={metodo.responseExample} />
                        </Text>

                        {projeto.methods &&
                          projeto.methods.map((metodo, index) => (
                            <Box key={index}>
                              {metodo.remainingData ? (
                                <Text 
                                  key={index}
                                  opacity={'0.5'}
                                  ml={2}
                                  mt={3}
                                  color={"#747474"}
                                  fontSize={"md"}
                                  as="b"
                                >
                                  {`{...}`}
                                </Text>
                              ) : null }
                            </Box>
                          ))}
                      </Box>
                    </Flex>
                  ))}
              </>
            )}
          </DrawerBody>

          <DrawerFooter mt={3}>
            {projeto.underConstruction ? null : (
              <Button
                href={projeto.link}
                mr={"auto"}
                borderRadius={"full"}
                bg={"blackAlpha.900"}
                color={"white"}
                _hover={{ cursor: "pointer" }}
                p={4}
                as="a"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Flex flexDirection={"row"}>
                  <Icon mr={2} as={FA.FaGithubAlt} />
                  <Text fontSize="sm">Repository</Text>
                  <Icon
                    color="white"
                    boxSize={4}
                    as={AiOutlineLink}
                    ml={1}
                  ></Icon>
                </Flex>
              </Button>
            )}

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
  );
};

export default ProjetoCardBack;
