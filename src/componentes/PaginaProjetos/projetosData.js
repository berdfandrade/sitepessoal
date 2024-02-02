/*
    Import dos componentes
*/

import {
  Code,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  Link,
  Flex,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

/*
    Import dos Ícones 
*/

import * as GI from "react-icons/gi";
import * as SI from "react-icons/si";
import * as IO from "react-icons/io";
import * as MD from "react-icons/md";
import * as RI from "react-icons/ri";
import * as TB from "react-icons/tb";
import * as FA from "react-icons/fa";
import { RxFontRoman } from "react-icons/rx";

/*
    Import dos componentes
*/

import {
  BennyDex,
  Gerador,
  HeroCard,
  Pomodoro,
} from "./ProjetosReactLive/exportFrontEndProjects";

const ProjetosFrontEnd = [
  {
    nome: "BennyDex",
    tags: ["react", "chakra"],
    descricaoCard: "An imitation of the classic Pokédex",
    descricao:
      "An imitation of the classic Pokédex, created by utilizing a specialized API to retrieve information about Pokémon. I fetched the data and rendered it using React, and I styled it with Chakra-ui.",
    component: <BennyDex />,
    icon: MD.MdCatchingPokemon,
    link: "https://github.com/berdfandrade/bennydex/tree/main",
    tag1: "Front-end",
  },
  {
    nome: "Password Generator",
    descricaoCard: "A small password generator",
    tags: ["react", "chakra"],
    descricao:
      "A simple password generator developed in React with Chakra-ui styling. This app is live! You can try it here.",
    component: <Gerador />,
    icon: RI.RiLockPasswordFill,
    link: "https://github.com/berdfandrade/gerador-de-senha",
    tag1: "Front-end",
  },
  {
    nome: "Pomodoro Timer",
    descricaoCard: "Simple Pomodoro timer for studying/working",
    tags: ["react", "chakra"],
    descricao:
      "A simple Pomodoro timer for studying/working, created with React and chakra-ui, which I also used to style this website. This app is live! You can try it right here!",
    component: <Pomodoro />,
    icon: GI.GiTomato,
    link: "https://github.com/berdfandrade/pomodoro-timer/",
    tag1: "Front-end",
  },
  {
    nome: "Hero Card",
    descricaoCard: "A card that renders the RPG API!",
    tags: ["react", "chakra"],
    descricao:
      "The HeroCard component is a part of the front-end of an application that consumes an API to display information about a randomly generated hero. The component displays the attributes and details of the hero on a card.",
    component: <HeroCard />,
    icon: GI.GiSwordman,
    tag1: "Front-end",
    link: "https://github.com/berdfandrade/hero-card",
    tag2: "Back-end",
  },
];

const ProjectsBackEnd = [
  {
    nome: "RPG API",
    linkDoc: `rpg_api`,
    descricaoCard: "API made in Flask, which returns a hero or a monster!",
    descricao: `This API in Python, using the Flask framework, is responsible for generating RPG heroes with randomly generated levels, stats, and names. Heroes can be male, female, or gender-neutral, and each has a customized inventory corresponding to their current level.
      Additionally, the API is also capable of generating monsters on the /monster route with random levels, just like heroes, ranging from 1 to 99. Monsters have randomly generated names, temperament, and strength and defense stats.`,
    icon: GI.GiAncientSword,
    iconModal: GI.GiAncientSword,
    link: "https://github.com/berdfandrade/rpg_api",
    tag2: "Back-end",
    tags: ["flask"],
    methods: [
      {
        method: "GET",
        url: "hero",
        descricaoMetodo:
          "This route is the primary functionality that creates and provides information about heroes, including their attributes, abilities, and statistics, essential for any adventure or game.",
        responseExample: {
          Attack: 2190,
          Defense: 1460,
          Gender: "Female",
          HP: 7300,
          Inventory: [
            "Supreme Healing Potion",
            "Celestial Bow",
            "Amulet of Power",
            "Kingdom Key",
          ],
          Level: 73,
          Name: "Alefi",
          Nickname: "Majestic",
          Presentation: "Alefi, the Majestic",
          Stamina: 3650,
          Temperament: "Aggressive",
        },
      },
      {
        method: "GET",
        url: "monster",
        descricaoMetodo:
          "This endpoint is responsible for generating monsters. It returns a data object containing various attributes of the created monster, such as Attack, Defense, HP (Health Points), Level, Name, Species, Stamina, and Temperament.",
        responseExample: {
          Attack: 2310,
          Defense: 1540,
          HP: 7700,
          Level: 77,
          Name: "Nejimi",
          Species: "Elemental",
          Stamina: 3850,
          Temperament: "Playful",
        },
      },
    ],
  },
  {
    nome: "Advice API",
    linkDoc: `advice`,
    tags: ["node", "express"],
    descricaoCard: "API that returns random advice",
    descricao: `The "Random Advice API" is an application developed in Node.js and Express that offers inspiring and motivational advice randomly. Through this simple API, users can get various advice whenever they want, which can serve as a source of encouragement or motivation at different moments in life.`,
    icon: SI.SiTheconversation,
    iconModal: SI.SiTheconversation,
    link: "https://github.com/berdfandrade/api-conselho/",
    tag2: "Back-end",
    methods: [
      {
        method: "GET",
        url: "",
        descricaoMetodo: "This route is the main and only route of this API...",
        responseExample: {
          Advice: "Respect yourself more.",
        },
      },
    ],
  },
  {
    nome: "Pokémon API",
    tags: ["express", "py", "mongodb", "typescript"],
    descricaoCard: "API to retrieve information from all the Pokémons",
    descricao: (
      <Text>
        {" "}
        The Pokémon API offers endpoints for accessing comprehensive information
        about Pokémon. Constructed with Express, a widely-used Node.js web
        application framework, the API originates from a{" "}
        <Link
          href="https://www.kaggle.com/datasets/rohanpatil63/pokemon-dataset"
          target="_blank"
        >
          <Text color={"blue.400"} as="u">
            CSV file{" "}
          </Text>
        </Link>
        that has been transformed into a JSON object. Subsequently, all data was
        seamlessly integrated into a MongoDB database. To enhance accessibility
        and organization, a user-friendly API was created for efficient data
        management.
      </Text>
    ),
    icon: MD.MdCatchingPokemon,
    link: "https://github.com/berdfandrade/poke-api",
    tag2: "Back-end",
    methods: [
      {
        method: "GET",
        remainingData: true,
        url: "poke/all",
        descricaoMetodo: "Retrieve a list of all Pokémons",
        responseExample: [
          {
            Sp: {
              " Atk": "65",
              " Def": "65",
            },
            image_url:
              "https://img.pokemondb.net/sprites/sword-shield/icon/bulbasaur.png",
            Id: "0001",
            Names: "Bulbasaur",
            Type1: "Grass",
            Type2: "Poison",
            Total: "318",
            HP: "45",
            Attack: "49",
            Defense: "49",
            Speed: "45",
          },
          {
            Sp: {
              " Atk": "135",
              " Def": "115",
            },
            image_url:
              "https://img.pokemondb.net/sprites/sword-shield/icon/blastoise-mega.png",
            Id: "0009",
            Names: "Blastoise Mega Blastoise",
            Type1: "Water",
            Type2: "",
            Total: "630",
            HP: "79",
            Attack: "103",
            Defense: "120",
            Speed: "78",
          },
          {
            Sp: {
              " Atk": "40",
              " Def": "55",
            },

            image_url:
              "https://img.pokemondb.net/sprites/sword-shield/icon/aipom.png",
            Id: "0190",
            Names: " Aipom",
            Type1: "Normal",
            Type2: "",
            Total: "360",
            HP: "55",
            Attack: "70",
            Defense: "55",
            Speed: "85",
          },
        ],
      },
      {
        method: "GET",
        url: "poke/{pokemon}",
        descricaoMetodo: "Retrieve data from a specific Pokémon",
        responseExample: {
          Sp: {
            " Atk": "60",
            " Def": "50",
          },

          image_url:
            "https://img.pokemondb.net/sprites/sword-shield/icon/charmander.png",
          Id: "0004",
          Names: "Charmander",
          Type1: "Fire",
          Type2: "",
          Total: "309",
          HP: "39",
          Attack: "52",
          Defense: "43",
          Speed: "65",
        },
      },
    ],
  },
  {
    nome: "FIFA API",
    descricaoCard: "API to retrive information from FIFA players",
    descricao: `The FIFA API retrieves information from a remote MongoDB database, allowing users to access data for any player across FIFA editions, starting from FIFA 15 up to EA FC (FIFA 24). This API offers comprehensive access to player data from various FIFA versions, facilitating seamless retrieval and analysis.`,
    icon: IO.IoIosFootball,
    tag2: "Back-end",
    link: "https://github.com/berdfandrade/fifa24",
    tags: ["node", "express", "typescript", "mongodb"],
    methods: [
      {
        method: "GET",
        descricaoMetodo:
          "You can retrive data from every player from a specific FIFA. The default version is EA FC (FIFA 24).",
        url: "players",
        responseExample: {
          player_id: "231747",
          player_url: {
            player_img: "https://cdn.sofifa.net/players/231/747/24_120.png",
            player_url: "https://sofifa.com/player/231747/kylian-mbappe/240002",
          },
          fifa_version: "24.0",
          fifa_update: "2.0",
          update_as_of: "2023-09-22",
          short_name: "K. Mbappé",
          long_name: "Kylian Mbappé Lottin",
          player_positions: "ST, LW",
          overall: "91",
          potential: "94",
          value_eur: "181500000.0",
          wage_eur: "230000.0",
          age: "24",
          dob: "1998-12-20",
          height_cm: "182",
          weight_kg: "75",
          club_team_id: "73",
          club_name: "Paris Saint Germain",
          league_id: "16.0",
          league_name: "Ligue 1",
          league_level: "1",
          club_position: "LW",
          club_jersey_number: "7",
          club_loaned_from: "",
          club_joined_date: "2018-07-01",
          club_contract_valid_until_year: "2024",
          nationality_id: "18",
          nationality_name: "France",
          nation_team_id: "1335",
          nation_position: "LW",
          nation_jersey_number: "10",
          preferred_foot: "Right",
          weak_foot: "4",
          skill_moves: "5",
          international_reputation: "5",
          work_rate: "High/Low",
          body_type: "Unique",
          real_face: "Yes",
          release_clause_eur: "349400000",
          player_tags:
            "#Speedster, #Dribbler, #Acrobat, #Clinical finisher, #Complete forward",
          player_traits: "Quick Step +, Rapid, Flair, Trivela",
          pace: "97",
          shooting: "90",
          passing: "80",
          dribbling: "92",
          defending: "36",
          physic: "78",
          attacking_crossing: "78",
          attacking_finishing: "94",
          attacking_heading_accuracy: "73",
          attacking_short_passing: "86",
          attacking_volleys: "84",
          skill_dribbling: "93",
          skill_curve: "80",
          skill_fk_accuracy: "69",
          skill_long_passing: "71",
          skill_ball_control: "92",
          movement_acceleration: "97",
          movement_sprint_speed: "97",
          movement_agility: "93",
          movement_reactions: "93",
          movement_balance: "82",
          power_shot_power: "90",
          power_jumping: "88",
          power_stamina: "88",
          power_strength: "77",
          power_long_shots: "83",
          mentality_aggression: "64",
          mentality_interceptions: "38",
          mentality_positioning: "93",
          mentality_vision: "83",
          mentality_penalties: "84",
          mentality_composure: "88",
          defending_marking_awareness: "26",
          defending_standing_tackle: "34",
          defending_sliding_tackle: "32",
          goalkeeping_diving: "13",
          goalkeeping_handling: "5",
          goalkeeping_kicking: "7",
          goalkeeping_positioning: "11",
          goalkeeping_reflexes: "6",
          goalkeeping_speed: "",
          ls: "90+3",
          st: "90+3",
          rs: "90+3",
          lw: "91",
          lf: "91",
          cf: "91",
          rf: "91",
          rw: "91",
          lam: "89+3",
          cam: "89+3",
          ram: "89+3",
          lm: "89+3",
          lcm: "81+3",
          cm: "81+3",
          rcm: "81+3",
          rm: "89+3",
          lwb: "68+3",
          ldm: "63+3",
          cdm: "63+3",
          rdm: "63+3",
          rwb: "68+3",
          lb: "63+3",
          lcb: "54+3",
          cb: "54+3",
          rcb: "54+3",
          rb: "63+3",
          gk: "18+3",
        },
      },
      {
        method: "GET",
        url: "players/:limit",
        remainingData: true,
        descricaoMetodo:
          "Retrieves a specific number of players (between 1 and 20) from the default FIFA version, sorted by their overall score. (The response was condensed for each player in the example below)",
        responseExample: {
          player: {
            player_id: "231747",
            player_url: {
              player_img: "https://cdn.sofifa.net/players/231/747/24_120.png",
              player_url:
                "https://sofifa.com/player/231747/kylian-mbappe/240002",
            },
            fifa_version: "24.0",
            fifa_update: "2.0",
            update_as_of: "2023-09-22",
            short_name: "K. Mbappé",
            long_name: "Kylian Mbappé Lottin",
            player_positions: "ST, LW",
            overall: "91",
            potential: "94",
            value_eur: "181500000.0",
            wage_eur: "230000.0",
            age: "24",
            dob: "1998-12-20",
            height_cm: "182",
            weight_kg: "75",
            club_team_id: "73",
            club_name: "Paris Saint Germain",
            league_id: "16.0",
            league_name: "Ligue 1",
            league_level: "1",
            club_position: "LW",
            club_jersey_number: "7",
            club_loaned_from: "",
            club_joined_date: "2018-07-01",
            club_contract_valid_until_year: "2024",
            nationality_id: "18",
            nationality_name: "France",
            nation_team_id: "1335",
            nation_position: "LW",
            nation_jersey_number: "10",
            preferred_foot: "Right",
            weak_foot: "4",
            skill_moves: "5",
            international_reputation: "5",
            work_rate: "High/Low",
            body_type: "Unique",
            real_face: "Yes",
            release_clause_eur: "349400000",
            player_tags:
              "#Speedster, #Dribbler, #Acrobat, #Clinical finisher, #Complete forward",
            player_traits: "Quick Step +, Rapid, Flair, Trivela",
            ls: "90+3",
            st: "90+3",
            rs: "90+3",
            lw: "91",
            gk: "18+3",
          },
          player2: {
            player_id: "239085",
            player_url: {
              player_img: "https://cdn.sofifa.net/players/239/085/24_120.png",
              player_url:
                "https://sofifa.com/player/239085/erling-haaland/240002",
            },
            fifa_version: "24.0",
            fifa_update: "2.0",
            update_as_of: "2023-09-22",
            short_name: "E. Haaland",
            long_name: "Erling Braut Haaland",
            player_positions: "ST",
            overall: "91",
            potential: "94",
            value_eur: "185000000.0",
            wage_eur: "340000.0",
            age: "22",
            dob: "2000-07-21",
            height_cm: "195",
            weight_kg: "94",
            club_team_id: "10",
            club_name: "Manchester City",
            league_id: "13.0",
            league_name: "Premier League",
            league_level: "1",
            club_position: "ST",
            club_jersey_number: "9",
            club_loaned_from: "",
            club_joined_date: "2022-07-01",
            club_contract_valid_until_year: "2027",
            nationality_id: "36",
            nationality_name: "Norway",
            nation_team_id: "1352",
            nation_position: "ST",
            nation_jersey_number: "9",
            preferred_foot: "Left",
            weak_foot: "3",
            skill_moves: "3",
            international_reputation: "5",
            work_rate: "High/Medium",
            body_type: "Unique",
            real_face: "Yes",
            release_clause_eur: "356100000",
            player_tags:
              "#Aerial threat, #Distance shooter, #Strength, #Clinical finisher, #Complete forward",
            player_traits: "Acrobatic +, Power Header, Quick Step",
            // ... outros campos
            ls: "90+3",
            st: "90+3",
            rs: "90+3",
            lw: "82",
            // ... outros campos
            lwb: "62+3",
          },
        },
      },
      {
        method: "GET",
        url: "player/fifaVersion/:playerName",
        descricaoMetodo: "You can retrive data from older FIFAS!",
        responseExample: {
          player_id: "158023",
          player_url: {
            player_img: "https://cdn.sofifa.net/players/158/023/15_120.png",
            player_url: "https://sofifa.com/player/158023/lionel-messi/150002",
          },
          fifa_version: "15.0",
          fifa_update: "2.0",
          update_as_of: "2014-09-18",
          short_name: "L. Messi",
          long_name: "Lionel Andrés Messi Cuccittini",
          player_positions: "CF",
          overall: "93",
          potential: "95",
          value_eur: "100500000.0",
          wage_eur: "550000.0",
          age: "27",
          dob: "1987-06-24",
          height_cm: "169",
          weight_kg: "67",
          club_team_id: "241",
          club_name: "FC Barcelona",
          league_id: "53.0",
          league_name: "La Liga",
          league_level: "1",
          club_position: "CF",
          club_jersey_number: "10",
          club_loaned_from: "",
          club_joined_date: "2004-07-01",
          club_contract_valid_until_year: "2018",
          nationality_id: "52",
          nationality_name: "Argentina",
          nation_team_id: "1369",
          nation_position: "CF",
          nation_jersey_number: "10",
          preferred_foot: "Left",
          weak_foot: "3",
          skill_moves: "4",
          international_reputation: "5",
          work_rate: "Medium/Low",
          body_type: "Normal (170-)",
          real_face: "Yes",
          release_clause_eur: "",
          player_tags:
            "#Speedster, #Dribbler, #FK Specialist, #Acrobat, #Clinical Finisher, #Complete Forward",
          player_traits:
            "Finesse Shot, Speed Dribbler (AI), One Club Player, Team Player",
          pace: "93",
          shooting: "89",
          passing: "86",
          dribbling: "96",
          defending: "27",
          physic: "63",
          attacking_crossing: "84",
          attacking_finishing: "94",
          attacking_heading_accuracy: "71",
          attacking_short_passing: "89",
          attacking_volleys: "85",
          skill_dribbling: "96",
          skill_curve: "89",
          skill_fk_accuracy: "90",
          skill_long_passing: "76",
          skill_ball_control: "96",
          movement_acceleration: "96",
          movement_sprint_speed: "90",
          movement_agility: "94",
          movement_reactions: "94",
          movement_balance: "95",
          power_shot_power: "80",
          power_jumping: "73",
          power_stamina: "77",
          power_strength: "60",
          power_long_shots: "88",
          mentality_aggression: "48",
          mentality_interceptions: "22",
          mentality_positioning: "92",
          mentality_vision: "90",
          mentality_penalties: "76",
          mentality_composure: "",
          defending_marking_awareness: "25",
          defending_standing_tackle: "21",
          defending_sliding_tackle: "20",
          goalkeeping_diving: "6",
          goalkeeping_handling: "11",
          goalkeeping_kicking: "15",
          goalkeeping_positioning: "14",
          goalkeeping_reflexes: "8",
          goalkeeping_speed: "",
          ls: "89+3",
          st: "89+3",
          rs: "89+3",
          lw: "92+3",
          lf: "90+3",
          cf: "90+3",
          rf: "90+3",
          rw: "92+3",
          lam: "92+3",
          cam: "92+3",
          ram: "92+3",
          lm: "90+3",
          lcm: "79+3",
          cm: "79+3",
          rcm: "79+3",
          rm: "90+3",
          lwb: "62+3",
          ldm: "62+3",
          cdm: "62+3",
          rdm: "62+3",
          rwb: "62+3",
          lb: "54+3",
          lcb: "45+3",
          cb: "45+3",
          rcb: "45+3",
          rb: "54+3",
          gk: "15+3",
        },
      },
    ],
  },
  {
    nome: "Yu-Gi-Oh! API",
    descricaoCard: "Retrive information from Yu-Gi-Oh! cards",
    descricao: `An API that retrives information about Yu-Gi-Oh! cards! The data wass obtained via Kaggle.`,
    tags: ["node", "express", "mongodb"],
    icon: GI.GiCardBurn,
    iconModal: GI.GiMonsterGrasp,
    underConstruction: true,
    link: "https://github.com/berdfandrade/api_monster",
    tag2: "Back-end",
  },
];

const ProjetosFreeCode = [
  {
    icone: TB.TbTypography,
    dificuldade: 0.5,
    linguagem: "js",
    nome: "Palindrome Checker",
    descricaoCard: "Create a palidrome checker",
    descricao: (
      <Text>
        Return <Code>true</Code> if the given string is a palindrome. Otherwise,
        return <Code>false</Code>. A <Text as="i">palindrome</Text> is a word or
        sentence that's spelled the same way both forward and backward, ignoring
        punctuation, case, and spacing. Note: You'll need to remove all
        non-alphanumeric characters (punctuation, spaces and symbols) and turn
        everything into the same case (lower or upper case) in order to check
        for palindromes. We'll pass strings with varying formats, such as{" "}
        <Code>racecar</Code>, <Code>RaceCar</Code>, and <Code>race CAR</Code>{" "}
        among others. We'll also pass strings with special symbols, such as{" "}
        <Code>2A3*3a2</Code>, <Code>2A3 3a2</Code>, and <Code>2_A3*3#A2</Code>.
      </Text>
    ),
    solucao: "acb9fe2bdb1f7492c659c562ae393822",
  },
  {
    icone: RxFontRoman,
    nome: "Roman Converter",
    linguagem: "js",
    dificuldade: 3,
    descricaoCard: "Convert into a roman numeral.",
    descricao: (
      <Box p={3}>
        <Text mb={3}>Convert the number into a roman numeral.</Text>
        <TableContainer fontSize={13} p={1}>
          <Table
            mr={"auto"}
            ml={"auto"}
            borderRadius={"md"}
            fontWeight="bold"
            variant={"simple"}
          >
            <Thead>
              <Tr>
                <Th>Roman numerals</Th>
                <Th>Arabic numerals</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>M</Td>
                <Td>1000</Td>
              </Tr>
              <Tr>
                <Td>CM</Td>
                <Td>900</Td>
              </Tr>
              <Tr>
                <Td>D</Td>
                <Td>500</Td>
              </Tr>
              <Tr>
                <Td>CD</Td>
                <Td>400</Td>
              </Tr>
              <Tr>
                <Td>C</Td>
                <Td>100</Td>
              </Tr>
              <Tr>
                <Td>XC</Td>
                <Td>90</Td>
              </Tr>

              <Tr>
                <Td>L</Td>
                <Td>50</Td>
              </Tr>
              <Tr>
                <Td>XL</Td>
                <Td>40</Td>
              </Tr>
              <Tr>
                <Td>X</Td>
                <Td>10</Td>
              </Tr>
              <Tr>
                <Td>IX</Td>
                <Td>9</Td>
              </Tr>
              <Tr>
                <Td>V</Td>
                <Td>5</Td>
              </Tr>
              <Tr>
                <Td>IV</Td>
                <Td>4</Td>
              </Tr>
              <Tr>
                <Td>I</Td>
                <Td>1</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        <Text mt={4}>
          All roman numerals answers should be provided in upper-case.
        </Text>
      </Box>
    ),
    solucao: "da001dd997705f055ccb6f5310c430ab",
  },
  {
    icone: TB.TbKey,
    nome: "Caesars Cipher",
    dificuldade: 4,
    descricaoCard: "Build a Ceaser Cipher",
    linguagem: "js",
    descricao: (
      <Text>
        One of the simplest and most widely known ciphers is a Caesar cipher,
        also known as a shift cipher. In a shift cipher the meanings of the
        letters are shifted by some set amount. A common modern use is the{" "}
        <Text as="b">ROT13</Text> cipher, where the values of the letters are
        shifted by 13 places. Thus <Code>A ↔ N</Code>, <Code>B ↔ O</Code> and so
        on. Write a function which takes a ROT13 encoded string as input and
        returns a decoded string. All letters will be uppercase. Do not
        transform any non-alphabetic character (i.e. spaces, punctuation), but
        do pass them on.
      </Text>
    ),
    solucao: "4fbc54bf8e53227faeb7bb986a51814d",
  },
  {
    icone: TB.TbPhoneCall,
    nome: "Telephone Validator",
    dificuldade: 2.5,
    descricaoCard: "A US validator phone number",
    linguagem: "js",
    descricao: (
      <Text>
        Return <Code>true</Code> if the passed string looks like a valid US
        phone number. The user may fill out the form field any way they choose
        as long as it has the format of a valid US number. The following are
        examples of valid formats for US numbers (refer to the tests below for
        other variants):
        <Code mt={2} p={2} borderRadius={"md"} mb={2} w={"100%"}>
          <ul>555-555-5555</ul> <ul>(555)555-5555</ul> <ul>(555) 555-5555</ul>{" "}
          <ul>555 555 5555</ul> <ul>5555555555 1</ul>
          <ul>555 555 5555</ul>
        </Code>
        For this challenge you will be presented with a string such as{" "}
        <Code>800-692-7753</Code> or <Code>8oo-six427676;laskdjf</Code>. Your
        job is to validate or reject the US phone number based on any
        combination of the formats provided above. The area code is required. If
        the country code is provided, you must confirm that the country code is
        <Code>1</Code>. Return <Code>true</Code> if the string is a valid US
        phone number; otherwise return <Code>false</Code>.
      </Text>
    ),
    solucao: "4825dd37c1ad09f9f94e6a0908552d01",
  },
  {
    nome: "Cash Register",
    icone: FA.FaCashRegister,
    dificuldade: 4,
    descricaoCard: "Design a cash register function",
    linguagem: "js",
    descricao: (
      <>
        <Text>
          Design a cash register drawer function like this:{" "}
          <Code>checkCashRegister()</Code>
          that accepts purchase price as the first argument (<Code>price</Code>
          ), payment as the second argument (<Code>cash</Code>), and
          cash-in-drawer (<Code>cid</Code>) as the third argument.
          <br />
          <ul>
            <br />
            <Code>cid</Code> is a 2D array listing available currency.
          </ul>
          <br />
          <ul>
            The <Code>checkCashRegister()</Code> function should always return
            an object with a status key and a change key.
            <br />
          </ul>
          <ul>
            <br />
            <Code>{`{status: 'INSUFFICIENT_FUNDS', change: []}`}</Code> should
            be returned if cash-in-drawer is less than the change due, or if you
            cannot return the exact change.
          </ul>
          <br />
          <ul>
            Return <Code>{`{status: "CLOSED", change: [...]}`}</Code> with
            cash-in-drawer as the value for the key change if it is equal to the
            change due.
          </ul>
          <ul>
            <br />
            Otherwise, return <Code>{`{status: "OPEN", change: [...]}`} </Code>,
            with the change due in coins and bills, sorted in highest to lowest
            order, as the value of the change key.
            <br />
          </ul>
        </Text>

        <Table mt={5} variant="striped">
          <Thead>
            <Tr>
              <Th>Currency Unit</Th>
              <Th>Amount</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Penny</Td>
              <Td>$0.01 (PENNY)</Td>
            </Tr>
            <Tr>
              <Td>Nickel</Td>
              <Td>$0.05 (NICKEL)</Td>
            </Tr>
            <Tr>
              <Td>Dime</Td>
              <Td>$0.1 (DIME)</Td>
            </Tr>
            <Tr>
              <Td>Quarter</Td>
              <Td>$0.25 (QUARTER)</Td>
            </Tr>
            <Tr>
              <Td>Dollar</Td>
              <Td>$1 (ONE)</Td>
            </Tr>
            <Tr>
              <Td>Five Dollars</Td>
              <Td>$5 (FIVE)</Td>
            </Tr>
            <Tr>
              <Td>Ten Dollars</Td>
              <Td>$10 (TEN)</Td>
            </Tr>
            <Tr>
              <Td>Twenty Dollars</Td>
              <Td>$20 (TWENTY)</Td>
            </Tr>
            <Tr>
              <Td>One-hundred Dollars</Td>
              <Td>$100 (ONE HUNDRED)</Td>
            </Tr>
          </Tbody>
        </Table>
        <Text mt={3} mb={3}>
          See below for an example of a cash-in-drawer array:
          <Code mt={3} p={3} borderRadius={"md"} w={"100%"}>
            {[
              <ul key="penny">["PENNY", 1.01]</ul>,
              <ul key="nickel">["NICKEL", 2.05]</ul>,
              <ul key="dime">["DIME", 3.1]</ul>,
              <ul key="quarter">["QUARTER", 4.25]</ul>,
              <ul key="one">["ONE", 90]</ul>,
              <ul key="five">["FIVE", 55]</ul>,
              <ul key="ten">["TEN", 20]</ul>,
              <ul key="twenty">["TWENTY", 60]</ul>,
              <ul key="oneHundred">["ONE HUNDRED", 100]</ul>,
            ]}
          </Code>
        </Text>
      </>
    ),
    solucao: "82be0aa504f3a07a308309d036e19881",
  },
];

const ProjetosFreeCodePython = [
  {
    nome: "Arithmetic Formatter",
    icone: TB.TbMath,
    dificuldade: 4,
    descricaoCard: "An Arithmetic Formatter",
    linguagem: "py",
    descricao: (
      <Box>
        <Text mb={3}>
          Students in primary school often arrange arithmetic problems
          vertically to make them easier to solve. For example, "235 + 52"
          becomes:
        </Text>

        <Code mb={2} p={3} w={"100%"}>
          <Text ml={2}>235</Text>+ 52
          <ul>-----</ul>
        </Code>

        <Text mb={3}>
          Create a function that receives a list of strings that are arithmetic
          problems and returns the problems arranged vertically and
          side-by-side. The function should optionally take a second argument.
          When the second argument is set to <Code>True</Code>, the answers
          should be displayed.
        </Text>
        <Text fontSize={"lg"} as="b">
          Example
        </Text>
        <Text fontSize={"sm"} mt={2} mb={3}>
          Function call:
        </Text>
        <Code
          p={2}
        >{`arithmetic_arranger(["32 + 698", "3801 - 2", "45 + 43", "123 + 49"])`}</Code>
        <Text mt={5} fontSize={"sm"} mb={3}>
          Output:
        </Text>
        <Code mb={2} p={3} w={"100%"}>
          <Flex gap={5} flexDir={"row"}>
            {/* CONTA 1  */}
            <Box>
              <Text ml={5}>32</Text>
              <Text ml={0}>+ 698</Text>
              <ul>-----</ul>
            </Box>
            {/* CONTA 2  */}

            <Box>
              <Text ml={5}>3801</Text>
              <Text ml={7}>- 2</Text>
              <Text ml={3}>-----</Text>
            </Box>

            {/* CONTA 3 */}
            <Box>
              <Text ml={8}>45</Text>
              <Text ml={4}>+ 43</Text>
              <Text ml={3}>-----</Text>
            </Box>

            {/* CONTA 4 */}
            <Box ml={3}>
              <Text ml={3}>123</Text>
              <Text ml={1}>+ 49</Text>
              <Text>-----</Text>
            </Box>
          </Flex>
        </Code>

        <Text fontSize={"sm"} mt={2} mb={3}>
          Function call:
        </Text>
        <Code
          p={2}
        >{`arithmetic_arranger(["32 + 8", "1 - 3801", "9999 + 9999", "523 - 49"], True)`}</Code>
        <Text mt={5} fontSize={"sm"} mb={3}>
          Output:
        </Text>

        <Code mb={2} p={3} w={"100%"}>
          <Flex gap={5} flexDir={"row"}>
            {/* CONTA 1  */}
            <Box mr={2}>
              <Text ml={6}>32</Text>
              <Text ml={4}>+ 8</Text>
              <Text>-----</Text>
              <Text ml={6}>40</Text>
            </Box>
            {/* CONTA 2  */}

            <Box>
              <Text ml={10}>1</Text>
              <Text ml={0}>- 3801</Text>
              <Text ml={3}>-----</Text>
              <Text ml={4}>-3800</Text>
            </Box>

            {/* CONTA 3 */}
            <Box>
              <Text ml={4}>9999</Text>
              <Text ml={0}>+ 9999</Text>
              <Text ml={3}>-----</Text>
              <Text ml={3}>19998</Text>
            </Box>

            {/* CONTA 4 */}
            <Box ml={3}>
              <Text ml={3}>523</Text>
              <Text ml={1}>- 49</Text>
              <Text>-----</Text>
              <Text ml={4}>474</Text>
            </Box>
          </Flex>
        </Code>
        <Text mt={2} as="b" fontSize={"lg"}>
          Rules
        </Text>
        <Text>
          The function will return the correct conversion if the supplied
          problems are properly formatted, otherwise, it will return a string
          that describes an error that is meaningful to the user.
        </Text>
      </Box>
    ),
    solucao: "2867d4d91f806f0bc79595c1ff1b83b1",
  },
  {
    nome: "Time calculator",
    icone: TB.TbCalendarTime,
    dificuldade: 3.0,
    linguagem: "py",
    descricaoCard: "A time calculator",
    descricao: (
      <Box gap={3}>
        <Text mb={3}>
          Write a function named <Code>add_time</Code> that takes in two
          required parameters and one optional parameter:
        </Text>
        <UnorderedList mb={3} ml={2} fontSize={"sm"}>
          <ListItem>
            a start time in the 12-hour clock format (ending in AM or PM)
          </ListItem>
          <ListItem>
            a duration time that indicates the number of hours and minutes
          </ListItem>
          <ListItem>
            (optional) a starting day of the week, case insensitive
          </ListItem>
        </UnorderedList>
        <Text mb={3}>
          The function should add the duration time to the start time and return
          the result.
        </Text>
        <Text mb={3} as="p">
          If the result will be the next day, it should show{" "}
          <Code>(next day)</Code> after the time. If the result will be more
          than one day later, it should show <Code>(n days later)</Code> after
          the time, where "n" is the number of days later.
        </Text>
        <Text mb={3}>
          If the function is given the optional starting day of the week
          parameter, then the output should display the day of the week of the
          result. The day of the week in the output should appear after the time
          and before the number of days later.
        </Text>
        <Text mb={3}>
          Below are some examples of different cases the function should handle.
          Pay close attention to the spacing and punctuation of the results.
        </Text>
        <Code mb={3} p={4} w="100%">
          <ul>add_time("3:00 PM", "3:10")</ul>
          <ul># Returns: 6:10 PM</ul>
          <br />
          <ul>add_time("11:30 AM", "2:32", "Monday")</ul>
          <ul># Returns: 2:02 PM, Monday</ul>
          <br />
          <ul>add_time("11:43 AM", "00:20")</ul>
          <ul># Returns: 12:03 PM</ul>
          <br />
          <ul>add_time("10:10 PM", "3:30")</ul>
          <ul># Returns: 1:40 AM (next day)</ul>
          <br />
          <ul>add_time("11:43 PM", "24:20", "tueSday")</ul>
          <ul># Returns: 12:03 AM, Thursday (2 days later)</ul>
          <br />
          <ul>add_time("6:30 PM", "205:12")</ul>
          <ul># Returns: 7:42 AM (9 days later)</ul>
        </Code>
        <Text>
          <Text as="i">Do not import any Python libraries.</Text> Assume that
          the start times are valid times. The minutes in the duration time will
          be a whole number less than 60, but the hour can be any whole number.
        </Text>
      </Box>
    ),
    solucao: "d1a044005bc212397fa22015b1725a2b",
  },
  {
    nome: "Budget App",
    icone: FA.FaWallet,
    descricaoCard: "Build a Budget App",
    linguagem: "py",
    dificuldade: 3.2,
    descricao: (
      <Box>
        <Text mb={3}>
          Complete the <Code>Category</Code> class in <Code>budget.py</Code>. It
          should be able to instantiate objects based on different budget
          categories like food, clothing, and entertainment. When objects are
          created, they are passed in the name of the category. The class should
          have an instance variable called <Code>ledger</Code> that is a list.
          The class should also contain the following methods:
        </Text>
        <UnorderedList mb={3} ml={5} spacing={"15px"} fontSize={"sm"}>
          <ListItem>
            A <Code>deposit</Code> method that accepts an amount and
            description. If no description is given, it should default to an
            empty string. The method should append an object to the ledger list
            in the form of{" "}
            <Code>{`{"amount": amount, "description": description}`}</Code>.
          </ListItem>

          <ListItem>
            A <Code>withdraw</Code> method that is similar to the{" "}
            <Code>deposit</Code>
            method, but the amount passed in should be stored in the ledger as a
            negative number. If there are not enough funds, nothing should be
            added to the ledger. This method should return <Code>True</Code> if
            the withdrawal took place, and <Code>False</Code> otherwise.
          </ListItem>
          <ListItem>
            A <Code>get_balance</Code> method that returns the current balance
            of the budget category based on the deposits and withdrawals that
            have occurred.
          </ListItem>
          <ListItem>
            A <Code>transfer</Code> method that accepts an amount and another
            budget category as arguments. The method should add a withdrawal
            with the amount and the description "Transfer to [Destination Budget
            Category]". The method should then add a deposit to the other budget
            category with the amount and the description "Transfer from [Source
            Budget Category]". If there are not enough funds, nothing should be
            added to either ledgers. This method should return <Code>True</Code>{" "}
            if the transfer took place, and <Code>False</Code> otherwise.
          </ListItem>
          <ListItem>
            A <Code>check_funds</Code> method that accepts an amount as an
            argument. It returns <Code>False</Code> if the amount is greater
            than the balance of the budget category and returns{" "}
            <Code>True</Code> otherwise. This method should be used by both the{" "}
            <Code>withdraw</Code> method and <Code>transfer</Code> method.
          </ListItem>
        </UnorderedList>
        <Text mb={3}>When the budget object is printed it should display:</Text>
        <UnorderedList mb={3} ml={5} spacing={"15px"} fontSize={"sm"}>
          <ListItem>
            A title line of 30 characters where the name of the category is
            centered in a line of <Code>*</Code> characters.
          </ListItem>
          <ListItem>
            A list of the items in the ledger. Each line should show the
            description and amount. The first 23 characters of the description
            should be displayed, then the amount. The amount should be right
            aligned, contain two decimal places, and display a maximum of 7
            characters.
          </ListItem>
          <ListItem>A line displaying the category total.</ListItem>
        </UnorderedList>

        <Text mb={3}>Here is an example of the output:</Text>

        <Code p={3} mb={3} pborderRadius={"md"} w={"100%"}>
          <Text>*************Food*************</Text>
          <Flex flexDir={"row"}>
            <Text>initial deposit </Text>
            <Text ml={"65px"}>1000.00</Text>
          </Flex>
          <Flex flexDir={"row"}>
            {" "}
            <Text>groceries </Text>
            <Text ml={"120px"}>-10.15</Text>
          </Flex>
          <Flex flexDir={"row"}>
            {" "}
            <Text>restaurant and more foo</Text>
            <Text ml={"10px"}> -15.89</Text>
          </Flex>
          <Flex flexDir={"row"}>
            {" "}
            <Text>Transfer to Clothing </Text>
            <Text ml={"34px"}>-50.00</Text>
          </Flex>
          <Flex flexDir={"row"}>
            <Text>Total: </Text>
            <Text ml={"145px"}>923.96</Text>
          </Flex>
        </Code>

        <Text mb={3}>
          Besides the <Code>Category class</Code>, create a function (outside of
          the class) called <Code>create_spend_chart</Code> that takes a list of
          categories as an argument. It should return a string that is a bar
          chart.
        </Text>
        <Text mb={3}>
          The chart should show the percentage spent in each category passed in
          to the function. The percentage spent should be calculated only with
          withdrawals and not with deposits. Down the left side of the chart
          should be labels 0 - 100. The "bars" in the bar chart should be made
          out of the "o" character. The height of each bar should be rounded
          down to the nearest 10. The horizontal line below the bars should go
          two spaces past the final bar. Each category name should be written
          vertically below the bar. There should be a title at the top that says
          "Percentage spent by category".
        </Text>
        <Text>This function will be tested with up to four categories.</Text>
      </Box>
    ),
    solucao: "6fd1282d29e7e314b5054348bd7a7daa",
  },
  {
    nome: "Polygon Area Calculator",
    icone: FA.FaDrawPolygon,
    dificuldade: 2.7,
    descricaoCard: "Create a Polygon Area Calculator",
    linguagem: "py",
    descricao: (
      <Box>
        <Text mb={3}>
          In this project you will use object oriented programming to create a
          Rectangle class and a Square class. The Square class should be a
          subclass of Rectangle and inherit methods and attributes.
        </Text>
        <Text mb={3} fontSize={"lg"} as="b">
          Rectangle class
        </Text>
        <Text mb={3}>
          When a Rectangle object is created, it should be initialized with{" "}
          <Code>width</Code> and <Code>height</Code> attributes. The class
          should also contain the following methods:
        </Text>
        <UnorderedList mb={3} fontSize={"sm"} spacing={"8px"}>
          <ListItem>
            <Code>set_width</Code>
          </ListItem>
          <ListItem>
            <Code>set_heigth</Code>
          </ListItem>
          <ListItem>
            <Code>get_area</Code>: Returns area <Code>(width * height)</Code>
          </ListItem>
          <ListItem>
            <Code>get_perimeter</Code>: Returns perimeter{" "}
            <Code>(2 * width + 2 * height)</Code>
          </ListItem>
          <ListItem>
            <Code>get_diagonal</Code>: Returns diagonal
            <Code>((width ** 2 + height ** 2) ** .5)</Code>
          </ListItem>
          <ListItem>
            <Code>get_picture</Code>: Returns a string that represents the shape
            using lines of "*". The number of lines should be equal to the
            height and the number of "*" in each line should be equal to the
            width. There should be a new line (<Code>\n</Code>) at the end of
            each line. If the width or height is larger than 50, this should
            return the string: "Too big for picture.".
          </ListItem>
          <ListItem>
            <Code>get_amount_inside</Code>:Takes another shape (square or
            rectangle) as an argument. Returns the number of times the passed in
            shape could fit inside the shape (with no rotations). For instance,
            a rectangle with a width of 4 and a height of 8 could fit in two
            squares with sides of 4.
          </ListItem>
        </UnorderedList>
        <Text mb={3}>
          Additionally, if an instance of a Rectangle is represented as a
          string, it should look like:{" "}
          <Code>Rectangle(width=5, height=10)</Code>
        </Text>
        <Text mb={3} fontSize={"lg"} as="b">
          Square class
        </Text>
        <Text mb={3}>
          The Square class should be a subclass of Rectangle. When a Square
          object is created, a single side length is passed in. The{" "}
          <Code>__init__</Code> method should store the side length in both the
          <Code>width</Code> and <Code>height</Code> attributes from the
          Rectangle class.
        </Text>
        <Text mb={3}>
          The Square class should be able to access the Rectangle class methods
          but should also contain a <Code>set_side</Code> method. If an instance
          of a Square is represented as a string, it should look like:{" "}
          <Code>Square(side=9)</Code>
        </Text>
        <Text mb={3}>
          Additionally, the <Code>set_width</Code> and <Code>set_height</Code>{" "}
          methods on the Square class should set both the width and height.
        </Text>

        <Text mb={3} fontSize={"lg"} as="b">
          Usage example
        </Text>
        <Code mt={3} mb={3} p={3} w={"100%"}>
          <Text>rect = shape_calculator.Rectangle(10, 5)</Text>
          <Text>print(rect.get_area())</Text>
          <Text>rect.set_height(3)</Text>
          <Text>print(rect.get_perimeter())</Text>
          <Text>print(rect)</Text>
          <Text mb={2}>print(rect.get_picture())</Text>
          <Text>sq = shape_calculator.Square(9)</Text>
          <Text>print(sq.get_area())</Text>
          <Text>sq.set_side(4)</Text>
          <Text>print(sq.get_diagonal())</Text>
          <Text>print(sq)</Text>
          <Text mb={2}>print(sq.get_picture())</Text>
          <Text>rect.set_height(8)</Text>
          <Text>rect.set_width(16)</Text>
          <Text>print(rect.get_amount_inside(sq))</Text>
        </Code>

        <Text mb={3}>That code should return:</Text>
        <Code mb={1} p={3} w={"100%"}>
          <Text>50</Text>
          <Text>26</Text>
          <Text>Rectangle(width=10, height=3)</Text>
          <Text>**********</Text>
          <Text>**********</Text>
          <Text mb={4}>**********</Text>
          <Text>81</Text>
          <Text>5.656854249492381</Text>
          <Text>Square(side=4)</Text>
          <Text>****</Text>
          <Text>****</Text>
          <Text>****</Text>
          <Text mb={10}>****</Text>
          <Text>8</Text>
        </Code>
      </Box>
    ),
    solucao: "9137f20f94b9e2d4f810eaa116ec74bb",
  },
  {
    nome: "Probability Calculator",
    linguagem: "py",
    icone: TB.TbCalculator,
    dificuldade: 4,
    descricaoCard: "A probabilty calculator",
    descricao: (
      <Box>
        <Text mb={3}>
          Suppose there is a hat containing 5 blue balls, 4 red balls, and 2
          green balls. What is the probability that a random draw of 4 balls
          will contain at least 1 red ball and 2 green balls? While it would be
          possible to calculate the probability using advanced mathematics, an
          easier way is to write a program to perform a large number of
          experiments to estimate an approximate probability.
        </Text>
        <Text mb={3}>
          For this project, you will write a program to determine the
          approximate probability of drawing certain balls randomly from a hat.
        </Text>
        <Text mb={3}>
          First, create a <Code>Hat</Code> class in{" "}
          <Code>prob_calculator.py</Code>. The class should take a variable
          number of arguments that specify the number of balls of each color
          that are in the hat. For example, a class object could be created in
          any of these ways:
        </Text>
        <Code mb={3} p={3} w={"100%"}>
          <Text>hat1 = Hat(yellow=3, blue=2, green=6)</Text>
          <Text>hat2 = Hat(red=5, orange=4)</Text>
          <Text>
            hat3 = Hat(red=5, orange=4, black=1, blue=0, pink=2, striped=9)
          </Text>
        </Code>
        <Text mb={3}>
          A hat will always be created with at least one ball. The arguments
          passed into the hat object upon creation should be converted to a{" "}
          <Code>contents</Code> instance variable. <Code>contents</Code> should
          be a list of strings containing one item for each ball in the hat.
          Each item in the list should be a color name representing a single
          ball of that color. For example, if your hat is{" "}
          <Code>`{`{"red": 2, "blue": 1}`}</Code>, contents should be{" "}
          <Code>["red", "red", "blue"]</Code>.
        </Text>
        <Text mb={3}>
          The <Code>Hat</Code> class should have a <Code>draw</Code> method that
          accepts an argument indicating the number of balls to draw from the
          hat. This method should remove balls at random from{" "}
          <Code>contents</Code> and return those balls as a list of strings. The
          balls should not go back into the hat during the draw, similar to an
          urn experiment without replacement. If the number of balls to draw
          exceeds the available quantity, return all the balls.
        </Text>
        <Text mb={3}>
          Next, create an <Code>experiment</Code> function in{" "}
          <Code>prob_calculator.py</Code> (not inside the Hat class). This
          function should accept the following arguments:
        </Text>
        <UnorderedList fontSize={"sm"} spacing={"10px"} mb={3}>
          <ListItem>
            <Code>hat</Code>: A hat object containing balls that should be
            copied inside the function.
          </ListItem>
          <ListItem>
            <Code>expected_balls</Code>: An object indicating the exact group of
            balls to attempt to draw from the hat for the experiment. For
            example, to determine the probability of drawing 2 blue balls and 1
            red ball from the hat, set <Code>expected_balls</Code> to{" "}
            <Code>{`{"blue":2, "red":1}`}</Code>
          </ListItem>
          <ListItem>
            <Code>num_balls_drawn</Code>: The number of balls to draw out of the
            hat in each experiment.
          </ListItem>
          <ListItem>
            <Code>num_experiments</Code>: The number of experiments to perform.
            (The more experiments performed, the more accurate the approximate
            probability will be.)
          </ListItem>
        </UnorderedList>
        <Text>
          The <Code>experiment</Code> function should return a probability.
        </Text>
        <Text mb={3}>
          For example, if you want to determine the probability of getting at
          least two red balls and one green ball when you draw five balls from a
          hat containing six black, four red, and three green. To do this, you
          will perform <Code>N</Code> experiments, count how many times{" "}
          <Code>M</Code> you get at least two red balls and one green ball, and
          estimate the probability as <Code>M/N</Code>. Each experiment consists
          of starting with a hat containing the specified balls, drawing several
          balls, and checking if you got the balls you were attempting to draw.
        </Text>
        <Text mb={3}>
          Here is how you would call the <Code>experiment</Code> function based
          on the example above with 2000 experiments:
        </Text>
        <Code w={"100%"} p={3} mb={3}>
          <Text>hat = Hat(black=6, red=4, green=3)</Text>
          <Text>{`probability = experiment(hat=hat,`}</Text>
          <Text ml={"110px"}>{`expected_balls={"red":2,"green":1},`}</Text>
          <Text ml={"110px"}>{`num_balls_drawn=5,`}</Text>
          <Text ml={"110px"}>{`num_experiments=2000)`}</Text>
        </Code>
        <Text mb={3}>
          Since this is based on random draws, the probability will be slightly
          different each time the code is run.
        </Text>
        <Text>
          <Text as="b">Hint</Text>: Consider using the modules that are already
          imported at the top of <Code>prob_calculator.py</Code>. Do not import
          Hero from './ProjetosReactLive/BennyTree/componentes/Hero/Hero';
          initialize random seed within <Code>prob_calculator.py</Code>.
        </Text>
      </Box>
    ),
    solucao: "1a8c34f5aec7b351d5e3db00121b5d6d",
  },
];

export {
  ProjectsBackEnd,
  ProjetosFreeCode,
  ProjetosFreeCodePython,
  ProjetosFrontEnd,
};
