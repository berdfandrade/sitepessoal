import React from "react";
import {
  Box,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
} from "@chakra-ui/react";

import {
  differenceInYears,
  differenceInMonths,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
} from "date-fns";

const TempoDeExperiencia = () => {
  const startDate = new Date("2022-01-04");
  const currentDate = new Date();

  const years = differenceInYears(currentDate, startDate);
  const months = differenceInMonths(currentDate, startDate) % 12;
  const days = differenceInDays(currentDate, startDate) % 30;
  const hours = differenceInHours(currentDate, startDate) % 24;
  const minutes = differenceInMinutes(currentDate, startDate) % 60;

  return (
    <Box>
      <Stat p={0}>
        <StatLabel mt={2} fontWeight={"bold"} fontSize={"lg"}>
          Programming Experience Time
        </StatLabel>
        <StatNumber>
          {years > 0 && `${years} year${years !== 1 ? "s" : ""}`}
          {months > 0 && ` ${months} month${months !== 1 ? "s" : ""}`}
        </StatNumber>
        {days > 0 && ` ${days} day${days !== 1 ? "s" : ""}`}
        {hours > 0 && ` ${hours} hour${hours !== 1 ? "s" : ""}`}
        {minutes > 0 && ` ${minutes} minute${minutes !== 1 ? "s" : ""}`}
        <StatArrow ml={1} type="increase" />
        <StatHelpText>Since January 4, 2022</StatHelpText>
      </Stat>
    </Box>
  );
};

export default TempoDeExperiencia;
