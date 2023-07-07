

import {
  Box,
  Text,
  Heading,
  Icon,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Progress,
  Flex,
  Image,
  Center,
} from "@chakra-ui/react";


import { useState } from "react";

const CardHabilidade = ({
  titulo,
  cor,
  descricao,
  corTexto,
  icone,
  iconeDrawer,
  descricaoDrawer,
  ProgressoDrawer,
  level,
  corIconeDrawer,
  SkillTree
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };
  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <Box
      transition="0.1s ease-in-out"
      marginLeft="auto"
      marginRight="auto"
      alignItems="center"
      backgroundColor={cor}
      border="1px solid gray"
      borderColor="grey"
      borderRadius="8px"
      _hover={{
        cursor: "pointer",
      }}
      onClick={handleDrawerOpen}
    >
      <Icon as={icone} boxSize={8} color={corTexto} p="1" mt={2} ml={2} />
      <Heading
        textAlign="center"
        color={corTexto}
        p={1}
        pt={1}
        pb={5}
        borderBottom="1px dashed"
      >
        {titulo}
        <Text fontSize="sm">Lvl: {level ? level : 1}</Text>
        <Center>
          <Progress
            color="blue"
            borderRadius="full"
            width="30%"
            value={ProgressoDrawer ? ProgressoDrawer : 20}
            mt={2}
          />
        </Center>
      </Heading>

      <Text textAlign="left" color={corTexto} p={4}>
        {descricao}
      </Text>

      <Drawer isOpen={isDrawerOpen}  onClose={handleDrawerClose} size="md">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader fontSize={30}>{titulo}</DrawerHeader>
          <Flex direction="column" align="center" justify="center" mb={4}>
            <Image
              as={iconeDrawer ? iconeDrawer : icone}
              mb={4}
              boxSize={150}
              color={corIconeDrawer ? corIconeDrawer : cor}
            />
            <Text fontSize="md" fontWeight="extrabold">
              Lvl: {level ? level : 1}
            </Text>
            <Progress
              
              borderRadius="full"
              width="30%"
              value={ProgressoDrawer ? ProgressoDrawer : 20}
              mt={2}
            />
            <Text fontSize="smaller" mt={2}>
              exp: {ProgressoDrawer * 10 * level}/{level * 1000} xp
            </Text>
          </Flex>
          <DrawerBody>
            <Text fontSize="lg" textJustify="center" mt={2}>
              {descricaoDrawer ? descricaoDrawer : descricao}
            </Text>


            {SkillTree}
            
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default CardHabilidade;
