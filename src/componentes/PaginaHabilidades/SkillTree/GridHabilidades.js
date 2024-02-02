import {
  Grid,
  Flex,
  Progress,
  Icon,
  Text,
  Center,
} from "@chakra-ui/react";

import * as DI from "react-icons/di";
import * as TB from "react-icons/tb";
import * as BS from "react-icons/bs";
import * as MD from "react-icons/md";
import * as BI from "react-icons/bi";
import * as GO from "react-icons/go";
import * as AI from "react-icons/ai";
import * as GI from "react-icons/gi";
import * as SI from "react-icons/si";
import * as FA from "react-icons/fa";
import * as RI from "react-icons/ri";


function IconHabilidade({ icone, nome, progresso, descricao, cor }) {
  return (
    <Flex flexDirection="column">
      <Center flexDirection={"column"}>
        <Icon color={cor ? cor : null} boxSize={"50px"} as={icone} />
        <Text mb={1} justifyContent={"center"}>
          {nome}
        </Text>

        <Progress
          size={"sm"}
          w="90px"
          borderRadius={"full"}
          value={progresso ? progresso : 20}
          colorScheme={
            progresso <= 20 ? "red" : progresso <= 40 ? "orange" : "blue"
          }
        />
        <Text mt={2} maxW={"90%"} fontSize={"xs"}>
          {descricao ? descricao : `${progresso * 10} / 1000`}
        </Text>
      </Center>
    </Flex>
  );
}


function HabilidadesJavscript() {
  return (
    <Flex direction="column" align="center" mt={4}>
      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={8}
        autoRows="minmax(110px, auto)"
      >
        <IconHabilidade icone={GI.GiBrain} nome={"Algorithms"} progresso={30} />
        <IconHabilidade icone={TB.TbTypography} nome={"Syntax"} progresso={90} />
        <IconHabilidade icone={TB.TbFunction} nome={"Functions"} progresso={80} />
        <IconHabilidade icone={BS.BsBox} nome={"OOP"} progresso={70} />
        <IconHabilidade icone={BI.BiCodeCurly} nome={"Json"} progresso={80} />
      </Grid>
    </Flex>
  );
}

function HabilidadesReact() {
  return (
    <Flex direction="column" align="center" mt={4}>
      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={8}
        autoRows="minmax(110px, auto)"
      >
        <IconHabilidade icone={SI.SiReact} nome={"JSX"} progresso={95} />
        <IconHabilidade icone={SI.SiReactrouter} nome={"Router"} progresso={60} />
        <IconHabilidade
          icone={AI.AiOutlineCodeSandbox}
          nome={"React State"}
          progresso={80}
        />
        <IconHabilidade icone={AI.AiFillApi} nome={"APIs"} progresso={50} />
        <IconHabilidade icone={SI.SiRedux} nome={"Redux"} progresso={15} />
        <IconHabilidade icone={SI.SiChakraui} nome={"ChakraUI"} progresso={100} />
        <IconHabilidade
          icone={GI.GiMeshNetwork}
          nome={"Fetch Api's"}
          progresso={40}
        />
        <IconHabilidade icone={SI.SiTailwindcss} nome={"Tailwind"} progresso={30} />
      </Grid>
    </Flex>
  );
}

function HabilidadesNode() {
  return (
    <Flex direction="column" align="center" mt={4}>
      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={8}
        autoRows="minmax(110px, auto)"
      >
        <IconHabilidade icone={DI.DiNpm} nome={"npm"} progresso={95} />
        <IconHabilidade icone={BI.BiServer} nome={"Servers"} progresso={60} />
        <IconHabilidade icone={GO.GoPackage} nome={"Packages"} progresso={80} />
        <IconHabilidade icone={AI.AiFillApi} nome={"APIs"} progresso={50} />
        <IconHabilidade icone={BI.BiData} nome={"DB"} progresso={40} />
        <IconHabilidade icone={GI.GiBookPile} nome={"Async"} progresso={40} />
        <IconHabilidade icone={GI.GiBookPile} nome={"Libraries"} progresso={80} />
      </Grid>
    </Flex>
  );
}

function HabilidadesPython() {
  return (
    <Flex direction="column" align="center" mt={4}>
      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={8}
        autoRows="minmax(110px, auto)"
      >
        <IconHabilidade icone={TB.TbTypography} nome={"Syntax"} progresso={95} />
        <IconHabilidade icone={FA.FaListAlt} nome={"Lists"} progresso={60} />
        <IconHabilidade icone={GO.GoPackage} nome={"PIP"} progresso={80} />
        <IconHabilidade icone={AI.AiFillFileAdd} nome={"Modules"} progresso={70} />
        <IconHabilidade icone={BS.BsBook} nome={"Tuples"} progresso={80} />
        <IconHabilidade icone={TB.TbBookUpload} nome={"Dictionaries"} progresso={70} />
        <IconHabilidade icone={SI.SiFlask} nome={"Flask"} progresso={70} />
        <IconHabilidade icone={SI.SiDjango} nome={"Django"} progresso={30} />
      </Grid>
    </Flex>
  );
}

function HabilidadesNoSQL() {
  return (
    <Flex direction="column" align="center" mt={4}>
      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={8}
        autoRows="minmax(110px, auto)"
      >
        <IconHabilidade icone={BI.BiServer} nome={"Servers"} progresso={60} />
        <IconHabilidade icone={DI.DiMongodb} nome={"Mongodb"} progresso={50} />
        <IconHabilidade icone={BI.BiData} nome={"DB"} progresso={40} />
      </Grid>
    </Flex>
  );
}

function HabilidadesLinux() {
  return (
    <Flex direction="column" align="center" mt={4}>
      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={8}
        autoRows="minmax(110px, auto)"
      >
        <IconHabilidade icone={SI.SiGnubash} nome={"Bash"} progresso={70} />
        <IconHabilidade icone={BI.BiPackage} nome={"Packages"} progresso={60} />
        <IconHabilidade icone={FA.FaUserSecret} nome={"Permissions"} progresso={60} />
        <IconHabilidade icone={SI.SiDebian} nome={"Debian"} progresso={40} />
        <IconHabilidade icone={FA.FaUbuntu} nome={"Ubuntu"} progresso={70} />
        <IconHabilidade icone={SI.SiArchlinux} nome={"Arch"} progresso={20} />
      </Grid>
    </Flex>
  );
}

function HabilidadesGit() {
  return (
    <Flex direction="column" align="center" mt={4}>
      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={8}
        autoRows="minmax(110px, auto)"
      >
        <IconHabilidade icone={DI.DiGitCommit} nome={"Commits"} progresso={85} />
        <IconHabilidade icone={RI.RiGitRepositoryCommitsFill} nome={"Repositories"} progresso={100} />
        <IconHabilidade icone={GO.GoVersions} nome={"Versions"} progresso={80} />
        <IconHabilidade icone={AI.AiOutlineHistory} nome={"History"} progresso={50} />
        <IconHabilidade icone={DI.DiGitMerge} nome={"Merge"} progresso={40} />
      </Grid>
    </Flex>
  );
}

function HabilidadesC() {
  return (
    <Flex direction="column" align="center" mt={4}>
      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={8}
        autoRows="minmax(110px, auto)"
      >
        <IconHabilidade icone={MD.MdDataArray} nome={"Arrays"} progresso={75} />
        <IconHabilidade icone={GI.GiSevenPointedStar} nome={"Pointers"} progresso={30} />
        <IconHabilidade icone={TB.TbFunction} nome={"Functions"} progresso={60} />
        <IconHabilidade icone={BS.BsMemory} nome={"Malloc"} progresso={20} />
        <IconHabilidade icone={BI.BiCode} nome={"Syntax"} progresso={70} />
        <IconHabilidade icone={FA.FaRobot} nome={<Text textAlign={"left"}>Structs</Text>} progresso={30} />
      </Grid>
    </Flex>
  );
}

function HabilidadesTypeScript() {
  return (
    <Flex direction="column" align="center" mt={4}>
      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={8}
        autoRows="minmax(110px, auto)"
      >
        <IconHabilidade icone={TB.TbLetterCaseToggle} nome={"Typing"} progresso={30} />
        <IconHabilidade icone={TB.TbTypography} nome={"Syntax"} progresso={90} />
        <IconHabilidade icone={TB.TbPanoramaVertical} nome={"Namespaces"} progresso={80} />
        <IconHabilidade icone={BS.BsIntersect} nome={"Interfaces"} progresso={70} />
        <IconHabilidade icone={BI.BiNetworkChart} nome={"Type-safe"} progresso={80} />
      </Grid>
    </Flex>
  );
}

function HabilidadesFlask () {
  return (
    <Flex direction="column" align="center" mt={4}>
    <Grid
      templateColumns="repeat(3, 1fr)"
      gap={8}
      autoRows="minmax(110px, auto)"
    >
      <IconHabilidade icone={TB.TbRouter} nome={"Routing"} progresso={30} />
      <IconHabilidade icone={TB.TbCircuitAmmeter} nome={"CRUD"} progresso={90} />
      <IconHabilidade icone={TB.TbPanoramaVertical} nome={"Namespaces"} progresso={80} />
      <IconHabilidade icone={BS.BsIntersect} nome={"Interfaces"} progresso={70} />
      <IconHabilidade icone={BI.BiNetworkChart} nome={"Type-safe"} progresso={80} />
    </Grid>
  </Flex>
  )
}

export {
  HabilidadesJavscript,
  HabilidadesFlask,
  HabilidadesNode,
  HabilidadesReact,
  HabilidadesPython,
  HabilidadesNoSQL,
  HabilidadesLinux,
  HabilidadesGit,
  HabilidadesC,
  HabilidadesTypeScript
};
