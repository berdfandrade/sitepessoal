import React, { useState } from "react";
import {
  Box,
  Input,
  Button,
  Spinner,
  InputGroup,
  InputLeftAddon,
  Center,
} from "@chakra-ui/react";
import { JSONTree } from "react-json-tree";

const ApiHandle = ({ urlProps }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [apiUrl, setApiUrl] = useState("");

  const fetchData = () => {
    const url = `http://${apiUrl}`;

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

  const theme = {
    scheme: "monokai",
    author: "wimer hazenberg (http://www.monokai.nl)",
    base00: "#272822",
    base01: "#383830",
    base02: "#49483e",
    base03: "#75715e",
    base04: "#a59f85",
    base05: "#f8f8f2",
    base06: "#f5f4f1",
    base07: "#f9f8f5",
    base08: "#f92672",
    base09: "#fd971f",
    base0A: "#f4bf75",
    base0B: "#a6e22e",
    base0C: "#a1efe4",
    base0D: "#66d9ef",
    base0E: "#ae81ff",
    base0F: "#cc6633",
  };

  return (
    <Box p={4}>
      <InputGroup>
        <InputLeftAddon>{"http://"}</InputLeftAddon>
        <Input
          defaultValue={"localhost:5000/"}
          placeholder={"Digite a URL da API"}
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
          <Spinner size="xl" />
        </Box>
      ) : (
        data && (
          <Box mt={5} borderRadius={"xl"}>
            <JSONTree
              data={data}
              theme={{
                extend: theme,
                // underline keys for literal values
                valueLabel: {
                  textDecoration: "bold",
                },

                nestedNodeLabel: ({ style }, keyPath, nodeType, expanded) => ({
                  style: {
                    ...style,

                    borderRadius: 10,
                    marginBottom: 8,
                  },
                }),
              }}
            />
          </Box>
        )
      )}
    </Box>
  );
};

export default ApiHandle;
