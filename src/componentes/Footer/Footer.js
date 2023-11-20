import React from "react";
import { Box, Text, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box fontSize="sm" as="footer" p={6} textAlign="center">
      <Text>Get in contact!</Text>
      <Text>Rua ômega, 355, ap. 301</Text>
      <Text>Jardim América, Belo Horizonte - MG</Text>
      <Text>
        <Link href="mailto:berdfandrade@gmail.com">berdfandrade@gmail.com</Link>
      </Text>
    </Box>
  );
};

export default Footer;
