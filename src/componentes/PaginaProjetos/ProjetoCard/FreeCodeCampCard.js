import {Box, Text, Icon}  from '@chakra-ui/react'

import ProjetosFreeCode from './ProjetoCardBack'

export default function FreeCodeCampCard ({projeto}) {


  return (
    <>
      <Box
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
      <Icon as={projeto.icon}/>
      <Text>{projeto.nome}</Text>    
      </Box>
      </>
  )
}