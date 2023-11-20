import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Text,
  Flex,
  Select,
  Progress,
  Center,
  Icon,
  Kbd,
} from "@chakra-ui/react";
import { GiTomato } from "react-icons/gi";

const Pomodoro = () => {
  const [tempo, setTempo] = useState(25 * 60);
  const [ativo, setAtivo] = useState(false);
  const [duracao, setDuracao] = useState(25);

  useEffect(() => {
    let intervalo = null;

    const pausarComEspaco = (event) => {
      if (event.code === "Space") {
        event.preventDefault();
        setAtivo(!ativo);
      }
    };

    if (ativo && tempo > 0) {
      intervalo = setInterval(() => {
        setTempo((tempoAnterior) => tempoAnterior - 1);
      }, 1000);
    }

    document.addEventListener("keydown", pausarComEspaco);

    return () => {
      clearInterval(intervalo);
      document.removeEventListener("keydown", pausarComEspaco);
    };
  }, [ativo, tempo]);

  useEffect(() => {
    setTempo(duracao * 60);
  }, [duracao]);

  const formatarTempo = (segundos) => {
    const minutos = Math.floor(segundos / 60);
    const segundosRestantes = segundos % 60;

    return `${minutos.toString().padStart(2, "0")}:${segundosRestantes
      .toString()
      .padStart(2, "0")}`;
  };

  const iniciar = () => {
    setAtivo(true);
  };

  const pausar = () => {
    setAtivo(false);
  };

  const reiniciar = () => {
    setAtivo(false);
    setTempo(duracao * 60);
  };

  const handleChangeDuracao = (event) => {
    setDuracao(Number(event.target.value));
  };

  const calcularProgresso = () => {
    const duracaoSegundos = duracao * 60;
    const porcentagem = (tempo / duracaoSegundos) * 100;
    return porcentagem;
  };

  return (
    <Center>
      <Box p={5} borderWidth={1} width={"100%"} borderRadius="8">
        <Flex direction={"row"}></Flex>

        <Center mb={2}>
          <Icon
            boxSize={10}
            color="red.400"
            alignItems={"center"}
            as={GiTomato}
          ></Icon>
        </Center>

        <Center flexDirection={"column"}>
          <Text fontSize={60}>{formatarTempo(tempo)}</Text>
          <Text mb={6}>
            Aperte
            <Kbd
              border="1px gray solid"
              onClick={pausar}
              _hover={{ cursor: "pointer" }}
              ml={2}
              mr={2}
            >
              Espaço
            </Kbd>
            para pausar/inciar
          </Text>
        </Center>

        <Select
          variant="filled"
          value={duracao}
          onChange={handleChangeDuracao}
          mb={6}
        >
          <option value={15}>15 minutos</option>
          <option value={20}>20 minutos</option>
          <option value={25}>25 minutos</option>
          <option value={30}>30 minutos</option>
          <option value={60}>1 hora</option>
        </Select>

        <Center>
          {" "}
          <Progress
            mb={6}
            width={"250px"}
            borderRadius={"full"}
            value={calcularProgresso()}
            colorScheme={calcularProgresso() < 30 ? "red" : "blue"}
          />
        </Center>
        <Center>
          <Flex flexDirection={"row"}>
            <Button mr={3} bg={"teal.600"} color={"white"} onClick={iniciar}>
              Iniciar
            </Button>
            <Button mr={3} bg={"gray.600"} color={"white"} onClick={pausar}>
              Pausar
            </Button>
            <Button bg={"red.400"} color={"white"} onClick={reiniciar}>
              Reiniciar
            </Button>
          </Flex>
        </Center>
      </Box>
    </Center>
  );
};

export default Pomodoro;
