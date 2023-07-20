import React, { useState } from "react";
import {
  Box,
  Input,
  Button,
  Spinner,
  InputGroup,
  InputLeftAddon,
  Center,
  Text,
  Flex,
  Code,
  Icon
} from "@chakra-ui/react";

import { FaLink } from "react-icons/fa";
import { JSONTree } from "react-json-tree";

const ApiHandle = ({ dominio, url }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [apiUrl, setApiUrl] = useState("");

  const fetchData = () => {
    const url = `https://${apiUrl}`;

    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  };

  return (
    <Box width="100%" p={1}>
      <Flex flexDirection={"row"}>
        <Text mb={3}fontSize={16}>
          <Icon mr={2}as={FaLink}/> 
          <Code p={2} borderRadius="md"ml={1}>{dominio}<Text as="b" >{url}</Text>
          </Code>
        </Text>
      </Flex>
      <InputGroup>
        <InputLeftAddon>{"https://"}</InputLeftAddon>
        <Input
          placeholder={"Coloque a URL acima!"}
          value={apiUrl}
          onChange={(e) => setApiUrl(e.target.value)}
          mb={4}
        />
      </InputGroup>
      <Center mt={3}>
        {" "}
        <Button
          onClick={fetchData}
          borderRadius={"full"}
          colorScheme="facebook"
          mb={1}
        >
          Buscar Dados
        </Button>
      </Center>

      {loading ? (
        <Box textAlign="center">
          <Spinner mt={50} size="xl" />
        </Box>
      ) : (
        data && (
          <Box mt={5} borderRadius={"xl"}>
            <JSONTree padding="10" data={data} />
          </Box>
        )
      )}
    </Box>
  );
};

export default ApiHandle;
