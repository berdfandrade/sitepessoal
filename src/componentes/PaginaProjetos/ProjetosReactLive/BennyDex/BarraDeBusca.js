import { Input, Box, Center } from "@chakra-ui/react";

const BarraDeBusca = ({ onSearch }) => {
  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    onSearch(searchTerm);
  };

  return (
    <Box mt={1}>
      <Center>
        <Input
          width={"60%"}
          borderRadius={"full"}
          background="gray.100"
          color="blackAlpha.900"
          placeholder="Procurar Pokémon"
          onChange={handleSearch}
        />
      </Center>
    </Box>
  );
};

export default BarraDeBusca;
