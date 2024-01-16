/*
    Import dos componentes
*/

// import BennyDex from "./ProjetosReactLive/BennyDex/BennyDex";
// import BennyTree from "./ProjetosReactLive/BennyTree/componentes/ExportAsApp";
// import Gerador from "./ProjetosReactLive/GeradorDeSenha/Gerador";
// import HeroCard from "./ProjetosReactLive/HeroCard/componentes/characterCard";
// import Pomodoro from "./ProjetosReactLive/Pomodoro/Pomodoro";
// import Calculadora from "./ProjetosReactLive/Calculadora/Calculadora";
import ApiHandle from "./Outros/ApiHandle";
import {
  Center,
  Code,
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Link,
} from "@chakra-ui/react";

/*
    Import dos Ícones 
*/

// import { RiLockPasswordFill } from "react-icons/ri";
// import { GiTomato } from "react-icons/gi";
// import { MdCatchingPokemon } from "react-icons/md";
// import { BsCalculator } from "react-icons/bs";
import * as GI from "react-icons/gi";
import * as SI from "react-icons/si";
import * as IO from "react-icons/io";
import { Fa500Px, FaCashRegister, FaMoneyBill } from "react-icons/fa";
import { TbKey, TbPhoneCall, TbTypography } from "react-icons/tb";
import { RxFontRoman } from "react-icons/rx";

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
    nome: "FIFA API",
    descricaoCard: "API to retrive information from FIFA players",
    descricao: `The FIFA API retrieves information from a remote MongoDB database, allowing users to access data for any player across FIFA editions, starting from FIFA 15 up to EA FC (FIFA 24). This API offers comprehensive access to player data from various FIFA versions, facilitating seamless retrieval and analysis.`,
    icon: IO.IoIosFootball,
    tag2: "Back-end",
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

const codeColor = "linkedin";

const ProjetosFreeCode = [
  {
    icone: TbTypography,

    linguagem: "js",
    nome: "Palindrome Checker",
    descricaoCard: "Create a palidrome checker",
    descricao: (
      <Text>
        Return <Code colorScheme={codeColor}>true</Code> if the given string is
        a palindrome. Otherwise, return{" "}
        <Code colorScheme={codeColor}>false</Code>. A{" "}
        <Text as="i">palindrome</Text> is a word or sentence that's spelled the
        same way both forward and backward, ignoring punctuation, case, and
        spacing. Note: You'll need to remove all non-alphanumeric characters
        (punctuation, spaces and symbols) and turn everything into the same case
        (lower or upper case) in order to check for palindromes. We'll pass
        strings with varying formats, such as{" "}
        <Code colorScheme={codeColor}>racecar</Code>,{" "}
        <Code colorScheme={codeColor}>RaceCar</Code>, and{" "}
        <Code colorScheme={codeColor}>race CAR</Code> among others. We'll also
        pass strings with special symbols, such as{" "}
        <Code colorScheme={codeColor}>2A3*3a2</Code>,{" "}
        <Code colorScheme={codeColor}>2A3 3a2</Code>, and{" "}
        <Code colorScheme={codeColor}>2_A3*3#A2</Code>.
      </Text>
    ),
  },
  {
    icone: RxFontRoman,
    nome: "Roman Converter",
    linguagem: "js",
    descricaoCard: "Convert into a roman numeral.",
    descricao: (
      <Box p={3}>
        <Text mb={3}>Convert the number into a roman numeral.</Text>
        <TableContainer fontSize={13} p={1}>
          <Table
            textAlign={"center"}
            mr={"auto"}
            ml={"auto"}
            borderRadius={"md"}
            fontWeight="bold"
            variant={"striped"}
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
  },
  {
    icone: TbKey,
    nome: "Caesars Cipher",
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
  },
  {
    icone: TbPhoneCall,
    nome: "Telephone Validator",

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
  },
  {
    nome: "Cash Register",
    icone: FaCashRegister,
    descricaoCard: "Design a cash register function",
    linguagem: "js",
    descricao: (
      <>
        <Text>
          Design a cash register drawer function like this: <Code>checkCashRegister()</Code> 
          that accepts purchase price as the
          first argument (<Code>price</Code>), payment as the second argument (
          <Code>cash</Code>), and cash-in-drawer (<Code>cid</Code>) as the third
          argument.
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
  },
];

export { ProjectsBackEnd, ProjetosFreeCode };
