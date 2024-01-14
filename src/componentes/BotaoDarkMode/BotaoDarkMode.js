import React from "react";
import { useColorMode, Box, Flex, Switch } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const Interruptor = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";

  const handleColorModeToggle = () => {
    toggleColorMode();
    console.log(`Color mode switched ${isDarkMode}`);
  };

  return (
    <Switch
      isChecked={isDarkMode}
      onChange={handleColorModeToggle}
      colorScheme="green"
      size="md"
    />
  );
};

// Switch com os ícones
const BotaoDarkMode = () => {
  return (
    <Flex align="center" justify="center">
      <Box mr={2}>
        <SunIcon />
      </Box>
      <Interruptor />
      <Box ml={2}>
        <MoonIcon />
      </Box>
    </Flex>
  );
};

export default BotaoDarkMode;