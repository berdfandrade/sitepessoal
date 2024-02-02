import React from "react";
import {
  Box,
  Text,
  Flex,
  Divider,
  Heading,
  Center,
  useBreakpointValue,
  Spacer,
  Icon,
  Tag,
} from "@chakra-ui/react";
import DividerCustomizado from "../Divider/DividerCustom";
import Footer from "../Footer/Footer";
import HeroPaginas from "../HeroPaginas/HeroPaginas";
import Experiencia from "../../assets/imagem/experiencia.png";
import Cabecalho from "../Cabecalho/Cabecalho";
import experiencia from "./Experiencia";
import LinhaDoTempo from "./TimeLine";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

import { motion } from "framer-motion";
const animation = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const sizes = {
  0: "lg",
  1: "md",
  2: "sm",
};


function TimeLine({ arr }) {

  const widthHandle = useBreakpointValue({ base: "5" , md: "2"});
  const fontSizeHandle = useBreakpointValue({base : "2xl", md : "3xl"})

  return (
    <>
      {arr.map((nome, index) => (
        <motion.div
          initial={"hidden"}
          whileTap={{ scale: 1.0 }}
          whileHover={{ scale: 1.1 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
          animate={"visible"}
          variants={animation}
        >
          <Box
            // bg={"white"}
            boder={index === 0 ? "2px solid black" : null}
            key={index}
            p={10}
            ml={"auto"}
            mr={"auto"}
            maxW={"90%"}
            borderRadius={"md"}
            alignItems={"center"}
            borderWidth={1}
            marginBottom={4}
          >
            <></>
            <Flex gap={1} flexDirection={"column"}>
              <Box>
                <Flex flexDir="row">
                  <Heading fontSize={fontSizeHandle}>
                    {nome.empresa}
                  </Heading>
                  <Spacer />
                  {nome.programmingRelated ? (
                 
                      <Tag
                        h={'10px'}
                        pr={5}
                        fontSize="xs"
                        p={widthHandle}
                        borderRadius={"full"}
                        colorScheme="whatsapp"
                      >
                        <Flex alignItems={"center"} gap={1}>
                        <Icon boxSize={'18px'} as={IoIosCheckmarkCircleOutline}/>
                        <Text>Programming Related</Text>

                        </Flex>
                      </Tag>
                   
                  ) : null}
                </Flex>
                <Divider color="gray.600" mt={3} />
              </Box>
              <Box>
                <Text fontSize={"sm"} as="code">
                  {nome.tempo}
                </Text>
              </Box>
              <Box>
                <Text fontSize={"sm"}>
                  {nome.texto}
                </Text>
              </Box>
            </Flex>
          </Box>
        </motion.div>
      ))}
    </>
  );
}

function PaginaExperiencia() {
  return (
    <Box>
      <Flex flexDir={"column"}>
        <Cabecalho />
        <HeroPaginas
          mb={8}
          nome={"Experience"}
          imagem={Experiencia}
          descricao={"My professional journey!"}
        />
        <DividerCustomizado />

        <Box p={2} w={"100%"} maxW="800px" mr={"auto"} ml={"auto"} h={"100%"}>
          <TimeLine arr={experiencia} />
        </Box>
        <DividerCustomizado />
        <Footer />
      </Flex>
    </Box>
  );
}

export default PaginaExperiencia;
