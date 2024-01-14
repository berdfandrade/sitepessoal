import React, { useEffect, useState } from "react";
import { Box, Text, Grid, Icon, Flex } from "@chakra-ui/react";
import { Stat, StatHelpText } from "@chakra-ui/react";
import { IoMdTime } from "react-icons/io";
import TempoDeExperiencia from "./TempoDeExperiencia";


export function calcularIdade() {
  const dataNascimento = '1996-01-15'
  const hoje = new Date();
  const nascimento = new Date(dataNascimento);
  
  let idade = hoje.getFullYear() - nascimento.getFullYear();
  const mesAtual = hoje.getMonth();
  const diaAtual = hoje.getDate();
  const mesNascimento = nascimento.getMonth();
  const diaNascimento = nascimento.getDate();

  if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
      idade--;
  }
  
  return idade;
}

function IdadeEmTempoReal() {
  const [age, setAge] = useState("");

  useEffect(() => {
    function calculateRealTimeAge() {
      var birthDate = new Date("1996-01-15T10:40");

      var currentDate = new Date();

      var difference = currentDate.getTime() - birthDate.getTime();

      var seconds = Math.floor(difference / 1000);
      var minutes = Math.floor(seconds / 60);
      var hours = Math.floor(minutes / 60);
      var days = Math.floor(hours / 24);
      var months = Math.floor(days / 30.4375);
      var years = Math.floor(months / 12);

      return {
        years,
        months: months % 12,
        days: days % 30.4375,
        hours: hours % 24,
        minutes: minutes % 60,
        seconds: seconds % 60,
      };
    }

    const intervalId = setInterval(() => {
      const newAge = calculateRealTimeAge();
      setAge(newAge);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Box p={6}>
      <Grid templateColumns="repeat(1, 1fr)">
        <Box>
          <Stat>
            <StatHelpText fontFamily={"monospace"}mb={1}>Time of existence in this world</StatHelpText>
          </Stat>
          <Flex flexDirection={"row"}>
            <Text fontFamily={"monospace"} fontSize={40}>{age.years} years</Text>
            <Icon boxSize={10} mt={2} ml={5} as={IoMdTime}></Icon>
          </Flex>

          <Text fontFamily={"'VT323', monospace"}fontSize={25}>{age.months} months</Text>
        </Box>
        <Box>
          <Text fontFamily={"monospace"}fontSize={20}>{Math.round(age.days)} days</Text>
          <Text fontFamily={"monospace"}fontSize={18}>
            {age.hours} h {age.minutes} min
          </Text>

          <Text fontFamily={"monospace"}>{age.seconds} seconds</Text>
          <Stat>
            {/* <StatHelpText mt={2}>Since January 15, 1996</StatHelpText> */}
          </Stat>
          <TempoDeExperiencia />
        </Box>
      </Grid>
    </Box>
  );
}

export default IdadeEmTempoReal;
