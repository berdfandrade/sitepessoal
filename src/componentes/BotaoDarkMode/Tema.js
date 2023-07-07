import { extendTheme } from "@chakra-ui/react";

const Theme = extendTheme({
  colors: {
    light: {
      background: "#FFFFFF",
      text: "#000000",
    },
    dark: {
      background: "#1a202c",
      text: "#FFFFFF",
    },
  },
});

export default Theme;
