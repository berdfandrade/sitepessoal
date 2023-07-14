import React, { useState } from "react";
import { Switch, useColorMode, extendTheme, Image, Icon } from "@chakra-ui/react";

import {FaSun, FaMoon} from "react-icons/fa"

// Defina as cores personalizadas para o modo claro e escuro
const colors = {
  meuModoClaro: {
    100: "#FFFFFF",
    200: "#F7F7F7",
    // ...
  },
  meuModoEscuro: {
    100: "#1E2124",
    200: "#272A2E",
    // ...
  },
};

// Defina as configurações do tema
const theme = extendTheme({
  colors,
  config: {
    initialColorMode: "light", // Modo de cor inicial: 'light' (claro)
    useSystemColorMode: false, // Desativar modo de cor do sistema
  },
});

const ToggleDarkMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isChecked, setIsChecked] = useState(colorMode === "dark");

  const handleToggle = () => {
    setIsChecked(!isChecked);
    toggleColorMode();
  };

  return (
    <div >
      <Switch
        
        isChecked={isChecked}
        onChange={handleToggle}
        colorScheme="blue"
        size="sm"
      />
    </div>
  );
};


export { theme, ToggleDarkMode };
