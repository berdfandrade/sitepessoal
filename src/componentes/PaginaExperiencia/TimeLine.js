import { Box, Text, Flex, VStack, Center } from "@chakra-ui/react";
import { motion } from "framer-motion"

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};


function Esfera({ position, zIndex }) {
  return (
    <motion.div variants={container}>
      <Box
        boxSize={"15px"}
        bg={"gray"}
        zIndex={zIndex ? zIndex : ""}
        borderRadius={"100%"}
        position={position}
      />
    </motion.div>
  );
}

export default function LinhaDoTempo() {
  return (
    <Box p={4} border="3px solid purple">
      {/* LINHA */}
      <Center>
        <Box >
          <Box mr={"auto"} ml={"auto"}h={"800px"} w={"1px"} border={"1px solid gray"} />
          <motion.div variants={item}>
          <VStack mr={"auto"} ml={"auto"} position={"relative"}>
            
            <Esfera />
            <Esfera />
            <Esfera />
            <Esfera />
            <Esfera />
          </VStack>
          </motion.div>
        </Box>
      </Center>
    </Box>
  );
}
