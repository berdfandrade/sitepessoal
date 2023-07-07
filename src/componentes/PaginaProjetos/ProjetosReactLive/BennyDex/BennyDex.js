import { VStack, Text, Spinner, Flex, Center, Icon } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard";
import BarraDeBusca from "./BarraDeBusca";
import { MdCatchingPokemon } from "react-icons/md";

const BennyDex = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=251"
        );

        const { results } = response.data;
        const pokemonDataPromises = results.map(async (pokemon) => {
          const response = await axios.get(pokemon.url);
          return response.data;
        });

        const pokemonData = await Promise.all(pokemonDataPromises);
        setPokemonList(pokemonData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    };

    fetchPokemonData();
  }, []);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const filteredPokemonList = pokemonList.filter((pokemon) =>
    pokemon.name.includes(searchTerm.toLowerCase())
  );

  return (
    <VStack
      spacing={4}
      align="stretch"
      bg={"red.400"}
      borderRadius={"md"}
      maxH="600px"
      overflowY="scroll"
      p={4}
    >
      <Center mt={1}>
        <Icon boxSize={8} mr={2} as={MdCatchingPokemon}></Icon>
        <Text fontSize={20}>BennyDex</Text>
      </Center>
      <BarraDeBusca onSearch={handleSearch} />

      {loading ? (
        <Flex justify="center" align="center" h="300px">
          <Spinner size="lg" />
        </Flex>
      ) : (
        <>
          {filteredPokemonList.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
          {filteredPokemonList.length === 0 && (
            <Text textAlign="center">No Pokémon found.</Text>
          )}
        </>
      )}
    </VStack>
  );
};

export default BennyDex;
