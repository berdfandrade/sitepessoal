import React, { useEffect, useState } from "react";
import { Box, Text, Heading, Grid, Icon, Flex } from "@chakra-ui/react";
import { Stat, StatHelpText } from "@chakra-ui/react";
import { IoMdTime } from "react-icons/io";
import TempoDeExperiencia from "./TempoDeExperiencia";

function IdadeEmTempoReal() {
  const [idade, setIdade] = useState("");

  useEffect(() => {
    function calcularIdadeEmTempoReal() {
      var dataNascimento = new Date("1996-01-15T10:40");

      var dataAtual = new Date();

      var diferenca = dataAtual.getTime() - dataNascimento.getTime();

      var segundos = Math.floor(diferenca / 1000);
      var minutos = Math.floor(segundos / 60);
      var horas = Math.floor(minutos / 60);
      var dias = Math.floor(horas / 24);
      var meses = Math.floor(dias / 30.4375);
      var anos = Math.floor(meses / 12);

      return {
        anos,
        meses: meses % 12,
        dias: dias % 30.4375,
        horas: horas % 24,
        minutos: minutos % 60,
        segundos: segundos % 60,
      };
    }

    const intervalId = setInterval(() => {
      const novaIdade = calcularIdadeEmTempoReal();
      setIdade(novaIdade);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Box p={6}>
      <Grid templateColumns="repeat(1, 1fr)">
        <Box>
          <Stat>
            <StatHelpText mb={1}>Tempo de existência nesse mundo</StatHelpText>
          </Stat>
          <Flex flexDirection={"row"}>
            <Heading fontSize={40}>{idade.anos} anos</Heading>
            <Icon boxSize={10} mt={2} ml={5} as={IoMdTime}></Icon>
          </Flex>

          <Text fontSize={25}>{idade.meses} meses</Text>
        </Box>
        <Box>
          <Text fontSize={20}>{Math.round(idade.dias)} dias</Text>
          <Text fontSize={18}>
            {idade.horas} h {idade.minutos} min
          </Text>

          <Text>{idade.segundos} segundos</Text>
          <Stat>
            {/* <StatHelpText mt={2}>Desde 15 de janeiro de 1996</StatHelpText> */}
          </Stat>
          <TempoDeExperiencia />
        </Box>
      </Grid>
    </Box>
  );
}

export default IdadeEmTempoReal;
