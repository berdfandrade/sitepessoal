import {
  Box,
  Image,
  Text,
  Stat,
  StatLabel,
  StatNumber,
  StatGroup,
  Grid,
  Flex,
  GridItem,
  Tag,
} from "@chakra-ui/react";

import capitalizeWords from "./Capitalize";

const PokemonCard = ({ pokemon }) => {
  const { name, sprites, types, stats } = pokemon;

  return (
    <Box bg={"#002240"} borderWidth="2px" borderRadius="lg" p={4}>
      <Text fontWeight="bold" color={"#fbea7e"} fontSize="lg" mb="2">
        {capitalizeWords(name)}
      </Text>
      <Flex flexDirection={"row"}>
        <Image src={sprites.front_default} alt={name} p={1} />

        <StatGroup>
          <Grid r={1} templateColumns="repeat(3, 1fr)" gap={2}>
            {stats.map((stat) => (
              <Stat fontSize={"large"} color="#99f8f9" key={stat.stat.name}>
                <GridItem>
                  <StatLabel fontSize={"sm"}>
                    {capitalizeWords(
                      stat.stat.name === "special-attack"
                        ? "SP"
                        : stat.stat.name === "special-defense"
                        ? "SD"
                        : stat.stat.name === "attack"
                        ? "ATK"
                        : stat.stat.name === "defense"
                        ? "DEF"
                        : stat.stat.name === "speed"
                        ? "Vel."
                        : stat.stat.name
                    )}
                  </StatLabel>
                </GridItem>
                <GridItem>
                  <StatNumber fontSize={15}>{stat.base_stat}</StatNumber>
                </GridItem>
              </Stat>
            ))}
          </Grid>
        </StatGroup>
      </Flex>

      <Box ml={2}>
        {types.map((type) => (
          <Tag
            key={type.slot}
            fontWeight={"bold"}
            variant="solid"
            p={1}
            colorScheme={
              type.type.name === "grass"
                ? "whatsapp"
                : type.type.name === "fire"
                ? "red"
                : type.type.name === "water"
                ? "twitter"
                : type.type.name === "ground"
                ? "orange"
                : type.type.name === "bug"
                ? "teal"
                : type.type.name === "poison"
                ? "purple"
                : type.type.name === "ice"
                ? "cyan"
                : type.type.name === "flying"
                ? "telegram"
                : type.type.name === "fairy"
                ? "pink"
                : type.type.name === "fighting"
                ? "orange"
                : type.type.name === "psychic"
                ? "pink"
                : type.type.name === "electric"
                ? "yellow"
                : type.type.name === "dragon"
                ? "linkedin"
                : "gray"
            }
            mr="2"
          >
            {capitalizeWords(
              type.type.name === "grass"
                ? "grama"
                : type.type.name === "poison"
                ? "Venenoso"
                : type.type.name === "bug"
                ? "inseto"
                : type.type.name === "dragon"
                ? "dragão"
                : type.type.name === "fire"
                ? "fogo"
                : type.type.name === "fighting"
                ? "lutador"
                : type.type.name === "water"
                ? "Àgua"
                : type.type.name === "psychic"
                ? "psíquico"
                : type.type.name === "rock"
                ? "pedra"
                : type.type.name === "ground"
                ? "terrestre"
                : type.type.name === "flying"
                ? "Voador"
                : type.type.name === "steel"
                ? "metal"
                : type.type.name === "ice"
                ? "gelo"
                : type.type.name === "ghost"
                ? "fantasma"
                : type.type.name === "electric"
                ? "elétrico"
                : type.type.name === "fairy"
                ? "fada"
                : type.type.name === "dark"
                ? "trevas"
                : type.type.name
            )}
          </Tag>
        ))}
      </Box>
    </Box>
  );
};

export default PokemonCard;
