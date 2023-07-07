

import {
  Grid,
  Flex,
  Box,
  Progress,
  Icon,
  Text,
} from "@chakra-ui/react";


import * as DI from "react-icons/di";
import * as TB from "react-icons/tb";
import * as BS from "react-icons/bs";
import * as MD from "react-icons/md";
import * as BI from "react-icons/bi";
import * as GO from "react-icons/go";
import * as AI from "react-icons/ai";
import * as GI from "react-icons/gi";
import * as SI from "react-icons/si"
import * as FA from "react-icons/fa"
import * as RI from "react-icons/ri"


function GridIconesHabilidades({
  icone1,
  nome1,
  progresso1,

  icone2,
  nome2,
  progresso2,

  icone3,
  nome3,
  progresso3,

  icone4,
  nome4,
  progresso4,

  icone5,
  nome5,
  progresso5,

  icone6,
  nome6,
  progresso6,

  icone7,
  nome7,
  progresso7,

  icone8,
  nome8,
  progresso8,
}) {

  
  return (
    <Flex direction="column" align="center" mt={4}>
      <Grid
        maxWidth={"400px"}
        templateColumns="repeat(3, 1fr)"
        gap={4}
        autoRows="minmax(150px, auto)"
      >
        {icone1 && (
          <Box p={4}>
            <Icon as={icone1} boxSize={"50px"} />
            <Text fontSize={"sm"}>{nome1}</Text>
            <Progress
              size="sm"
              maxWidth="100px"
              mt={3}
              borderRadius={"full"}
              value={progresso1 ? progresso1 : 20}
              colorScheme={progresso1 <= 30 ? "red" : progresso1 < 40 ? "orange" : "blue"}
            />
          </Box>
        )}
        {icone2 && (
          <Box p={4}>
            <Icon as={icone2} boxSize={"50px"} />
            <Text fontSize={"sm"}>{nome2}</Text>
            <Progress
              size="sm"
              maxWidth="100px"
              mt={3}
              borderRadius={"full"}
              value={progresso2 ? progresso2 : 20}
              colorScheme={progresso2 <= 30 ? "red" : progresso2 <= 40 ? "orange" : "blue"}
            />
          </Box>
        )}
        {icone3 && (
          <Box p={4}>
            <Icon as={icone3} boxSize={"50px"} />
            <Text fontSize={"sm"}>{nome3}</Text>
            <Progress
              size="sm"
              maxWidth="100px"
              mt={3}
              borderRadius={"full"}
              value={progresso3 ? progresso3 : 20}
              colorScheme={progresso3 <= 30 ? "red" : progresso3 <= 40 ? "orange" : "blue"}
            />
          </Box>
        )}
        {icone4 && (
          <Box p={4}>
            <Icon as={icone4} boxSize={"50px"} />
            <Text fontSize={"sm"}>{nome4}</Text>
            <Progress
              size="sm"
              maxWidth="100px"
              mt={3}
              borderRadius={"full"}
              value={progresso4 ? progresso4 : 20}
              colorScheme={progresso4 <= 30 ? "red" : progresso4 <= 40 ? "orange" : "blue"}
            />
          </Box>
        )}
        {icone5 && (
          <Box p={4}>
            <Icon as={icone5} boxSize={"50px"} />
            <Text fontSize={"sm"}>{nome5}</Text>
            <Progress
              size="sm"
              maxWidth="100px"
              mt={3}
              borderRadius={"full"}
              value={progresso5 ? progresso5 : 20}
              colorScheme={progresso5 <= 30 ? "red" : progresso5 <= 40 ? "orange" : "blue"}
            />
          </Box>
        )}
        {icone6 && (
          <Box p={4}>
            <Icon as={icone6} boxSize={"50px"} />
            <Text fontSize={"sm"}>{nome6}</Text>
            <Progress
              size="sm"
              maxWidth="100px"
              mt={3}
              borderRadius={"full"}
              value={progresso6 ? progresso6 : 20}
              colorScheme={progresso6 <= 30 ? "red" : progresso6 <= 40 ? "orange" : "blue"}
            />
          </Box>
        )}
        {icone7 && (
          <Box p={4}>
            <Icon as={icone7} boxSize={"50px"} />
            <Text fontSize={"sm"}>{nome7}</Text>
            <Progress
              size="sm"
              maxWidth="100px"
              mt={3}
              borderRadius={"full"}
              value={progresso7 ? progresso7 : 20}
              colorScheme={progresso7 <= 30 ? "red" : progresso7 <= 40 ? "orange" : "blue"}
            />
          </Box>
        )}
        {icone8 && (
          <Box p={4}>
            <Icon as={icone8} boxSize={"50px"} />
            <Text fontSize={"sm"}>{nome8}</Text>
            <Progress
              size="sm"
              maxWidth="100px"
              mt={3}
              borderRadius={"full"}
              value={progresso8 ? progresso8 : 20}
              colorScheme={progresso8 <= 30 ? "red" : progresso8 <= 40 ? "orange" : "blue"}
            />
          </Box>
        )}
      </Grid>
    </Flex>
  );
}

function HabilidadesJavscript() {
  return (
    <GridIconesHabilidades
      icone1={GI.GiBrain}
      nome1={"Algoritmos"}
      progresso1={50}
      icone2={TB.TbTypography}
      nome2={"Sintaxe"}
      progresso2={90}
      icone3={TB.TbFunction}
      nome3={"Funções"}
      progresso3={80}
      icone4={BS.BsBox}
      nome4={"POO"}
      progresso4={70}
      icone5={MD.MdDataArray}
      nome5={"Arrays"}
      progresso5={70}
      icone6={BI.BiCodeCurly}
      nome6={"Json"}
      progresso6={80}
    />
  );
}

function HabilidadesNode() {
  return (
    <GridIconesHabilidades
      icone1={DI.DiNpm}
      nome1={"npm"}
      progresso1={95}
      icone2={BI.BiServer}
      nome2={"Servidores"}
      progresso2={60}
      icone3={GO.GoPackage}
      nome3={"Pacotes"}
      progresso3={80}
      icone4={AI.AiFillApi}
      nome4={"APIs"}
      progresso4={50}
      icone5={BI.BiData}
      nome5={"DB"}
      progresso5={40}
      icone6={BI.BiSync}
      nome6={<Text textAlign={"left"}>Async</Text>}
      progresso6={40}
      icone7={GI.GiBookPile}
      nome7={<Text textAlign={"left"}>Bibliotecas</Text>}
      progresso7={80}
    />
  );
}

function HabilidadesReact() {
  return (
    <GridIconesHabilidades
      icone1={SI.SiReact}
      nome1={"JSX"}
      progresso1={95}
      icone2={SI.SiReactrouter}
      nome2={"Router"}
      progresso2={60}
      icone3={AI.AiOutlineCodeSandbox} 
      nome3={"Estado"}
      progresso3={80}
      icone4={SI.SiRedux}
      nome4={"Redux"}
      progresso4={15}
      icone5={SI.SiChakraui}
      nome5={"ChakraUI"}
      progresso5={100}
      icone6={GI.GiMeshNetwork}
      nome6={"Fetch Api's"}
      progresso6={40}
      icone7={SI.SiTailwindcss}
      nome7={"Tailwind"}
      progresso7={30}

    />
  );
}

function HabilidadesPython() {
  return (
    <GridIconesHabilidades
      icone1={TB.TbTypography}
      nome1={"Sintaxe"}
      progresso1={95}
      icone2={FA.FaListAlt}
      nome2={"Listas"}
      progresso2={60}
      icone3={GO.GoPackage}
      nome3={"PIP"}
      progresso3={80}
      icone4={AI.AiFillFileAdd}
      nome4={"Módulos"}
      progresso4={70}
      icone5={BS.BsBook}
      nome5={"Tuples"}
      progresso5={80}
      icone6={TB.TbBookUpload}
      nome6={"Dicionários"}
      progresso6={70}
      icone7={SI.SiFlask}
      nome7={"Flask"}
      progresso7={70}
      icone8={SI.SiDjango}
      nome8={"Django"}
      progresso8={30}
      
    />
  );
}

function HabilidadesNoSQL() {
  return (
    <GridIconesHabilidades

      icone2={BI.BiServer}
      nome2={"Servidores"}
      progresso2={60}
      icone4={DI.DiMongodb}
      nome4={"Mongodb"}
      progresso4={50}
      icone5={BI.BiData}
      nome5={"DB"}
      progresso5={40}

    />
  );
}

function HabilidadesLinux() {
  return (
    <GridIconesHabilidades
      icone1={SI.SiGnubash}
      nome1={"Bash"}
      progresso1={70}
      icone2={BI.BiPackage}
      nome2={"Pacotes"}
      progresso2={60}
      progresso3={80}
      icone4={FA.FaUserSecret}
      nome4={"Permissões"}
      progresso4={60}
      icone5={SI.SiDebian}
      nome5={"Debian"}
      progresso5={40}
      icone6={FA.FaUbuntu}
      nome6={"Ubuntu"}
      progresso6={70}

    />
  );
}

function HabilidadesGit() {
  return (
    <GridIconesHabilidades
      icone1={DI.DiGitCommit}
      nome1={"Commits"}
      progresso1={85}
      icone2={RI.RiGitRepositoryCommitsFill}
      nome2={"Repositórios"}
      progresso2={100}
      icone3={GO.GoVersions}
      nome3={"Versões"}
      progresso3={80}
      icone4={AI.AiOutlineHistory}
      nome4={"Histórico"}
      progresso4={50}
      icone5={DI.DiGitMerge}
      nome5={"Merge"}
      progresso5={40}
      
    />
  );
}

function HabilidadesC() {
  return (
    <GridIconesHabilidades
      icone1={MD.MdDataArray}
      nome1={"Arrays"}
      progresso1={75}
      icone2={GI.GiSevenPointedStar}
      nome2={"Ponteiros"}
      progresso2={30}
      icone3={TB.TbFunction}
      nome3={"Funções"}
      progresso3={60}
      icone4={BS.BsMemory}
      nome4={"Alocação"}
      progresso4={20}
      icone5={BI.BiCode}
      nome5={"Sintaxe"}
      progresso5={70}
      icone6={FA.FaRobot}
      nome6={<Text textAlign={"left"}>Structs</Text>}
      progresso6={30}
    />
  );
}

export {
  HabilidadesJavscript,
  HabilidadesNode,
  HabilidadesReact,
  HabilidadesPython,
  HabilidadesNoSQL,
  HabilidadesLinux,
  HabilidadesGit,
  HabilidadesC,
};
