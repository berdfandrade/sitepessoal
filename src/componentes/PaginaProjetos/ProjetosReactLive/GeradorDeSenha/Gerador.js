import React from "react";
import {
  Box,
  Button,
  NumberInput,
  Text,
  VStack,
  Center,
  NumberInputField,
  NumberInputStepper,
  NumberDecrementStepper,
  NumberIncrementStepper,
  Fade,
  Flex,
  useClipboard,
  Icon,
} from "@chakra-ui/react";

import { BiCopy, BiCopyAlt } from "react-icons/bi";
import gerarSenha from "./funcaoGeraSenha";
import { RiLockPasswordFill } from "react-icons/ri";

function Gerador() {
  const [tamanho, setTamanho] = React.useState(6);
  const [senha, setSenha] = React.useState("");
  const [senhaGerada, setSenhaGerada] = React.useState(false);
  const handleTamanhoChange = (value) => {
    setTamanho(value);
  };

  const handleGerarSenha = () => {
    const novaSenha = gerarSenha(tamanho);
    setSenha(novaSenha);
    setSenhaGerada(true);
  };

  const { hasCopied, onCopy } = useClipboard(senha);

  return (
    <Center>
      <Box borderWidth={1} width={"100%"} borderRadius={10} p={4}>
        <VStack spacing={4} align="stretch">
          <Center p={1} flexDirection={"column"}>
            <Icon boxSize={8} mb={4} as={RiLockPasswordFill}></Icon>
            <Text fontSize="xl" fontWeight="bold">
              Password Generator
            </Text>
            <Text fontSize={"sm"} mb={3}>
              Password Length:
            </Text>
            <NumberInput
              maxW={40}
              placeholder="Password Length"
              min={6}
              max={35}
              value={tamanho}
              onChange={handleTamanhoChange}
              mb={4}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <Button colorScheme="twitter" onClick={handleGerarSenha}>
              Generate!
            </Button>
          </Center>
          {senhaGerada && (
            <Fade in>
              <Box>
                <Box borderRadius="md" height={50} borderWidth={1} p={1}>
                  <Flex flexDirection={"row"}>
                    <Box
                      bg={"gray.200"}
                      p={2}
                      ml={1}
                      mt={1}
                      borderRadius={"md"}
                      fontSize={"xs"}
                      flexDirection={"column"}
                      color={"gray.500"}
                      mr={2}
                    >
                      Senha
                    </Box>
                    <Center maxWidth="90%">
                      <Text
                        mt={1}
                        value={senha}
                        fontSize={senha.length >= 20 ? "x-small" : "md"}
                      >
                        {senha}
                      </Text>
                    </Center>
                    <Button onClick={onCopy} ml="auto">
                      {hasCopied ? <BiCopyAlt /> : <BiCopy />}
                    </Button>
                  </Flex>
                </Box>
              </Box>
            </Fade>
          )}
        </VStack>
      </Box>
    </Center>
  );
}

export default Gerador;
