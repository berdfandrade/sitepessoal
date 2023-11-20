/*
    Import dos componentes
*/

import BennyDex from "./ProjetosReactLive/BennyDex/BennyDex";
import BennyTree from "./ProjetosReactLive/BennyTree/componentes/ExportAsApp";
import Gerador from "./ProjetosReactLive/GeradorDeSenha/Gerador";
import HeroCard from "./ProjetosReactLive/HeroCard/componentes/characterCard";
import Pomodoro from "./ProjetosReactLive/Pomodoro/Pomodoro";
import Calculadora from "./ProjetosReactLive/Calculadora/Calculadora";
import ApiHandle from "./Outros/ApiHandle";
import { Center } from "@chakra-ui/react";
/*
    Import dos Ícones 
*/

import { RiLockPasswordFill } from "react-icons/ri";
import { GiTomato } from "react-icons/gi";
import { MdCatchingPokemon } from "react-icons/md";
import { BsCalculator } from "react-icons/bs";
import * as GI from "react-icons/gi";
import * as SI from "react-icons/si";

const ProjectsComponents = [
  {
    nome: "BennyDex",
    descricaoCard: "An imitation of the classic Pokédex",
    descricao:
      "An imitation of the classic Pokédex, created by utilizing a specialized API to retrieve information about Pokémon. I fetched the data and rendered it using React, and I styled it with Chakra-ui.",
    component: <BennyDex />,
    icon: MdCatchingPokemon,
    link: "https://github.com/berdfandrade/bennydex/tree/main",
    tag1: "Front-end",
  },
  {
    nome: "Bernardo card",
    descricaoCard: "An RPG card that displays my information",
    descricao:
      "It's a card made in React that displays information about me as an RPG character. I tried to include some specific information, as if it were a character. I use this card in my Instagram BIO.",
    component: <BennyTree />,
    icon: GI.GiInfo,
    link: "https://github.com/berdfandrade/link_tree",
    tag1: "Front-end",
  },
  {
    nome: "Password Generator",
    descricaoCard: "A small password generator",
    descricao:
      "A simple password generator developed in React with Chakra-ui styling. This app is live! You can try it here.",
    component: <Gerador />,
    icon: RiLockPasswordFill,
    link: "https://github.com/berdfandrade/gerador-de-senha",
    tag1: "Front-end",
  },
  {
    nome: "Pomodoro Timer",
    descricaoCard: "Simple Pomodoro timer for studying/working",
    descricao:
      "A simple Pomodoro timer for studying/working, created with React and chakra-ui, which I also used to style this website. This app is live! You can try it right here!",
    component: <Pomodoro />,
    icon: GiTomato,
    link: "https://github.com/berdfandrade/pomodoro-timer/",
    tag1: "Front-end",
  },
  {
    nome: "Hero Card",
    descricaoCard: "A card that renders the RPG API!",
    descricao:
      "The HeroCard component is a part of the front-end of an application that consumes an API to display information about a randomly generated hero. The component displays the attributes and details of the hero on a card.",
    component: <HeroCard />,
    icon: GI.GiSwordman,
    tag1: "Front-end",
    link: "https://github.com/berdfandrade/hero-card",
    tag2: "Back-end",
  },
  {
    nome: "Calculator",
    descricaoCard: "A calculator made in React",
    descricao:
      "A calculator made in React and Chakra-ui. The calculator has a dark mode! This app is live! You can try it here.",
    component: <Calculadora />,
    icon: BsCalculator,
    link: "https://github.com/berdfandrade/calculadora",
    tag1: "Front-end",
  },
];

const ProjectsBackEnd = [
  {
    nome: "RPG API",
    linkDoc: `rpg_api`,
    descricaoCard: "API made in Flask, which returns a hero or a monster!",
    descricao: `This API in Python, using the Flask framework, is responsible for generating RPG heroes with randomly generated levels, stats, and names. Heroes can be male, female, or gender-neutral, and each has a customized inventory corresponding to their current level.
      Additionally, the API is also capable of generating monsters on the /monster route with random levels, just like heroes, ranging from 1 to 99. Monsters have randomly generated names, temperament, and strength and defense stats.`,
    component: <ApiHandle dominio={"rpgapi-one.vercel.app/"} url={"heroi"} />,
    icon: GI.GiAncientSword,
    iconModal: GI.GiAncientSword,
    link: "https://github.com/berdfandrade/rpg_api",
    tag2: "Back-end",
    methods: [
      {
        method: "GET",
        url: "hero",
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
    descricaoCard: "API that returns random advice",
    descricao: `The "Random Advice API" is an application developed in Node.js and Express that offers inspiring and motivational advice randomly. Through this simple API, users can get various advice whenever they want, which can serve as a source of encouragement or motivation at different moments in life.`,
    component: <ApiHandle dominio={"apiconselho.vercel.app/"} />,
    icon: SI.SiTheconversation,
    iconModal: SI.SiTheconversation,
    link: "https://github.com/berdfandrade/api-conselho/",
    tag2: "Back-end",
    methods: [
      {
        method: "GET",
        url: "hero",
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
    ]
  },
  {
    nome: "Monster API",
    descricaoCard: "API made in Node.Js, which returns a random monster",
    descricao: `An API made in Node.js similar to the RPG API. This API can generate monsters with random levels, just like heroes, ranging from 1 to 99. Monsters have randomly generated names, temperament, and strength and defense stats. Monsters also have an inventory of items they carry.`,
    component: (
      <Center>
        <ApiHandle dominio={"apimonster.vercel.app/"} url={"monstro"} />
      </Center>
    ),
    icon: GI.GiMonsterGrasp,
    iconModal: GI.GiMonsterGrasp,
    link: "https://github.com/berdfandrade/api_monster",
    tag2: "Back-end",
  },
];

export { ProjectsComponents, ProjectsBackEnd };
