import React from "react";
import { Box, SimpleGrid, useBreakpointValue, Text } from "@chakra-ui/react";
import CardHabilidade from "./CardHabilidade";
import * as GRID from "./GridHabilidades";

import {
  IoLogoJavascript,
  FaNodeJs,
  FaPython,
  FaReact,
  BsServer,
  FaLinux,
  FaGitAlt,
  TbHexagonLetterC,
} from "./IconImports";
import { DiAndroid, DiDjango } from "react-icons/di";
import { SiFlask, SiChakraui } from "react-icons/si";

const SkillTree = () => {
  const columnCount = useBreakpointValue({ base: 1, md: 2 });

  return (
    <Box width="900px" maxWidth="90%" height="auto" marginX="auto">
      <SimpleGrid columns={columnCount} gap={2} spacing={8}>
        <CardHabilidade
          icone={IoLogoJavascript}
          corTexto="black"
          cor="orange.200"
          titulo={"JavaScript"}
          level={25}
          ProgressoDrawer={20}
          descricao={
            "Eu possuo habilidades intermediárias em JavaScript, o que me permite compreender e escrever código relativamente complexo utilizando essa poderosa linguagem de programação. Com o JavaScript, sou capaz de criar funcionalidades interativas e dinâmicas em páginas web, desenvolver aplicações do lado do cliente e trabalhar com bibliotecas e frameworks populares, como o React."
          }
          SkillTree={<GRID.HabilidadesJavscript />}
        />

        <CardHabilidade
          icone={FaNodeJs}
          titulo={"Node.Js"}
          corTexto="black"
          cor="green.100"
          level={8}
          ProgressoDrawer={50}
          corIconeDrawer="green.500"
          descricao={
            "Eu tenho habilidades básicas a intermediárias no framework Node.js. Com o Node.js, sou capaz de desenvolver aplicações do lado do servidor de forma eficiente e escalável. Posso criar APIs RESTful, manipular requisições e respostas HTTP, e implementar lógica de negócio complexa usando JavaScript. Além disso, tenho conhecimento em ferramentas e bibliotecas populares do ecossistema do Node.js, como Express.js, Mongoose e Socket.io."
          }
          SkillTree={<GRID.HabilidadesNode />}
        />
        <CardHabilidade
          icone={FaReact}
          corTexto="black"
          titulo={"React"}
          cor="blue.100"
          level={17}
          ProgressoDrawer={90}
          descricao={
            "Eu tenho habilidades médias em React, o que me permite entender e desenvolver aplicações front-end robustas e interativas usando essa biblioteca JavaScript. Com o React, sou capaz de criar interfaces de usuário reativas e componentizadas, proporcionando uma experiência de usuário suave e responsiva."
          }
          SkillTree={<GRID.HabilidadesReact />}
        />
        <CardHabilidade
          titulo={"Python"}
          icone={FaPython}
          cor="purple.100"
          corIconeDrawer="blacklisted"
          corTexto="black"
          level={4}
          ProgressoDrawer={60}
          descricao={
            "Eu possuo habilidades básicas na linguagem Python, o que me permite compreender e escrever código simples utilizando essa linguagem de programação. Com o Python, sou capaz de manipular variáveis, utilizar estruturas de controle de fluxo, como condicionais e loops, e criar funções básicas para realizar tarefas específicas."
          }
          SkillTree={<GRID.HabilidadesPython />}
        />
        <CardHabilidade
          titulo={"NoSQL"}
          icone={BsServer}
          corTexto="black"
          corIconeDrawer="blacklisted"
          cor="gray.300"
          level={2}
          ProgressoDrawer={50}
          descricao={
            "Eu possuo habilidades em bancos de dados NoSQL, o que me permite trabalhar com sistemas de armazenamento de dados não relacionais. Tenho experiência em lidar com bancos de dados NoSQL populares, como o MongoDB."
          }
          SkillTree={<GRID.HabilidadesNoSQL />}
        />

        <CardHabilidade
          titulo={"Linux"}
          corTexto="black"
          cor="pink.100"
          corIconeDrawer="blacklisted"
          level={10}
          ProgressoDrawer={80}
          icone={FaLinux}
          descricao={
            "Eu possuo habilidades intermediárias no sistema operacional Linux, o que me permite navegar, administrar e utilizar efetivamente essa plataforma de código aberto. Com o Linux, tenho familiaridade em trabalhar tanto com a linha de comando como com interfaces gráficas, o que me proporciona flexibilidade e controle sobre o ambiente operacional."
          }
          SkillTree={<GRID.HabilidadesLinux />}
        />
        <CardHabilidade
          titulo={"Git/Github"}
          corTexto="blacklisted"
          corIconeDrawer="orange.300"
          level={8}
          ProgressoDrawer={50}
          icone={FaGitAlt}
          descricao={
            "Eu possuo habilidades intermediárias no controle de versão com o Git, uma ferramenta amplamente utilizada no desenvolvimento de software. Com o Git, sou capaz de gerenciar eficientemente o histórico de alterações em projetos, facilitando a colaboração em equipe, o rastreamento de modificações e a organização do trabalho."
          }
          SkillTree={<GRID.HabilidadesGit />}
        />

        <CardHabilidade
          titulo={"Linguagem C"}
          corTexto="black"
          cor="red.300"
          level={2}
          ProgressoDrawer={90}
          icone={TbHexagonLetterC}
          descricao={
            "Eu possuo habilidades básicas na linguagem C, uma das linguagens de programação mais antigas e populares. Através do aprendizado dessa linguagem, obtive um entendimento fundamental de como um computador funciona e como os programas são executados em nível de máquina."
          }
          descricaoDrawer={
            "Ao explorar os conceitos da linguagem C, aprendi sobre estruturas de controle, como loops e condicionais, e também sobre tipos de dados, operadores e funções. Esses fundamentos me permitiram criar programas simples que executam tarefas específicas e interagem diretamente com o hardware do computador."
          }
          SkillTree={<GRID.HabilidadesC />}
        />
        <CardHabilidade
          titulo={"Flask"}
          corTexto="black"
          cor="green.200"
          corIconeDrawer={"blackAlpha"}
          level={10}
          ProgressoDrawer={90}
          icone={SiFlask}
          descricao={
            "Eu possuo habilidades em Flask; consigo criar API's simples, e usar o meu conhecimento de programação na linguagem python para criar rotas e funções interessantes e organizadas, e assim criar Back-End's em Python"
          }
          // descricaoDrawer={this.props.descricao}

          SkillTree={<GRID.HabilidadesC />}
        />
        <CardHabilidade
          titulo={"Chakra UI"}
          corTexto="black"
          cor="purple.200"
          corIconeDrawer={"blackAlpha"}
          level={20}
          ProgressoDrawer={90}
          icone={SiChakraui}
          descricao={
            
            `Possuo conhecimento na biblioteca de estilização Chakra UI, sendo
            capaz de com ela, criar interfaces belas e responsivas,
            facilitando o trabalho de front-end e economizando tempo.Com a
            Chakra UI, consegui uma base para usar outras bibliotecas de
            estilização como a Material UI, Tailwind CSS, etc...`}

          descricaoDrawer={
            <Text fontSize={"15"} textAlign={"left"}>
              {" "}
              Possuo conhecimento na biblioteca de estilização Chakra UI, sendo
              capaz de com ela, criar interfaces belas e responsivas,
              facilitando o trabalho de front-end e economizando tempo.
              Com a Chakra UI, consegui uma base para usar outras bibliotecas de
              estilização como a Material UI, Tailwind CSS, etc...
            </Text>
          }
          SkillTree={<GRID.HabilidadesC />}
        />
      </SimpleGrid>
    </Box>
  );
};

export default SkillTree;
