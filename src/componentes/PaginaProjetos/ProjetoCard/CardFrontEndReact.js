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
import { AiFillQuestionCircle } from "react-icons/ai";
import TagProjeto from "./TagProjeto";
import { MdOutlineConstruction } from "react-icons/md";
import { AiOutlineLink } from "react-icons/ai";
import { FaGithubAlt } from "react-icons/fa";

export default function CardFrontEndReact({ projeto }) {
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
          <Flex flexDir="column" height="100%">
            <Flex flexDir="row" alignItems="center">
              <Icon
                as={projeto.icon ? projeto.icon : AiFillQuestionCircle}
                color={projeto.corIcon}
                boxSize="50px"
                p={2}
              ></Icon>
              <Flex>
                <Text textAlign="left" fontSize={16} fontWeight="bold">
                  {projeto.nome ? projeto.nome : "Nome do componenteLive"}
                  <Text fontWeight="light" fontSize="12" maxW="80%">
                    {projeto.descricaoCard
                      ? projeto.descricaoCard
                      : "descrição do card"}
                  </Text>
                </Text>
              </Flex>
            </Flex>

            <Spacer />
            {(projeto.tag1 || projeto.tag2) && (
              <Box bottom={0}>
                {projeto.tag1 && (
                  <Tag
                    fontSize="xs"
                    variant="outline"
                    borderRadius="full"
                    marginLeft={0}
                    mr={2}
                    colorScheme={projeto.corTag1 ? projeto.corTag1 : "linkedin"}
                  >
                    {projeto.tag1}
                  </Tag>
                )}
                {projeto.tag2 && (
                  <Tag
                    fontSize="xs"
                    variant={"outline"}
                    borderRadius={"full"}
                    marginLeft={0}
                    colorScheme={projeto.corTag2 ? projeto.corTag2 : "whatsapp"}
                  >
                    {projeto.tag2}
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
            {projeto.nome}
          </DrawerHeader>

          {/* Tags */}
          <Flex
            pl={7}
            alignItems={"center"}
            p={1}
            mb={5}
            pr={5}
            gap={2}
            flexDir={"row"}
            overflowX={"hidden"}
          >
            <Text fontFamily={"menlo"} ml={6} fontSize={10}>
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
                <Flex alignItems={"center"} p={6} flexDir={"column"}>
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
                  <Icon boxSize={20} as={projeto.icon} />
                </Center>
                <Text fontSize="md" p={3}>
                  {projeto.descricao}
                </Text>
                <Box>{projeto.component}</Box>
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
                  <Icon mr={2} as={FaGithubAlt} />
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
}
