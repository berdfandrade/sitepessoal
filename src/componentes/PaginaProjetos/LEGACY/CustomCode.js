import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const bennyPrimary = defineStyle({
  background: "orange.500",
  color: "white",
  fontFamily: "mono",
  fontWeight: "normal",
  _dark : {
    background : 'orange.300',
    color : 'orange.800'
  }

});

export const codeTheme = defineStyleConfig({
    variants : {bennyPrimary}
  })
