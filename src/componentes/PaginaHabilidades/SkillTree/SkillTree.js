import React from "react";
import { Box, SimpleGrid, useBreakpointValue } from "@chakra-ui/react";
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
  SiFlask,
  SiDocker,
  SiTypescript,
} from "./IconImports";
import { SiCplusplus } from "react-icons/si";

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
          level={30}
          ProgressoDrawer={20}
          descricao={
            "I have intermediate skills in JavaScript, which enable me to comprehend and write relatively complex code using this powerful programming language. With JavaScript, I can create interactive and dynamic features on web pages, develop client-side applications, and work with popular libraries and frameworks like React."
          }
          SkillTree={<GRID.HabilidadesJavscript />}
        />

        <CardHabilidade
          icone={FaNodeJs}
          titulo={"Node.Js"}
          corTexto="black"
          cor="green.100"
          level={15}
          ProgressoDrawer={50}
          corIconeDrawer="green.500"
          descricao={
            "I have basic to intermediate skills in the Node.js framework. With Node.js, I can efficiently develop scalable server-side applications. I'm capable of creating RESTful APIs, handling HTTP requests and responses, and implementing complex business logic using JavaScript. Additionally, I have knowledge of popular tools and libraries within the Node.js ecosystem, such as Express.js, Mongoose, and Socket.io."
          }
          SkillTree={<GRID.HabilidadesNode />}
        />
        <CardHabilidade
          icone={FaReact}
          corTexto="black"
          titulo={"React"}
          cor="cyan.200"
          level={20}
          ProgressoDrawer={90}
          descricao={
            "I have intermediate skills in React, which enable me to comprehend and develop robust and interactive front-end applications using this JavaScript library. With React, I can create reactive, component-based user interfaces, providing a smooth and responsive user experience."
          }
          SkillTree={<GRID.HabilidadesReact />}
        />
        <CardHabilidade
          titulo={"TypeScript"}
          corTexto="black"
          cor="blue.100"
          corIconeDrawer={"blackAlpha"}
          level={19}
          ProgressoDrawer={50}
          icone={SiTypescript}
          descricao={`I have intermediate skills in TypeScript, which allow me to work effectively in developing more secure and scalable front-end and back-end applications. With TypeScript, I can leverage static typing to catch errors earlier in the development process, ensuring greater reliability in my projects.`}
          SkillTree={<GRID.HabilidadesTypeScript />}
        />
        <CardHabilidade
          titulo={"Python"}
          icone={FaPython}
          cor="purple.100"
          corIconeDrawer="blacklisted"
          corTexto="black"
          level={15}
          ProgressoDrawer={60}
          descricao={
            "I have basic skills in the Python language, which allow me to understand and write simple code using this programming language. With Python, I can manipulate variables, use control flow structures like conditionals and loops, and create basic functions to perform specific tasks."
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
            "I have skills in NoSQL databases, which enable me to work with non-relational data storage systems. I have experience in dealing with popular NoSQL databases, such as MongoDB."
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
            "I have intermediate skills in the Linux operating system, which allow me to navigate, administer, and effectively use this open-source platform. With Linux, I am comfortable working with both the command line and graphical interfaces, providing me with flexibility and control over the operating environment."
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
            "I have intermediate skills in version control with Git, a widely used tool in software development. With Git, I can efficiently manage the change history in projects, facilitating team collaboration, tracking modifications, and organizing work."
          }
          SkillTree={<GRID.HabilidadesGit />}
        />

        <CardHabilidade
          titulo={"C programming "}
          corTexto="black"
          cor="red.300"
          level={2}
          ProgressoDrawer={90}
          icone={TbHexagonLetterC}
          descricao={
            "I have basic skills in the C programming language, one of the oldest and most popular programming languages. Through learning this language, I gained a fundamental understanding of how a computer operates and how programs are executed at the machine level."
          }
          descricaoDrawer={
            "While exploring the concepts of the C language, I learned about control structures like loops and conditionals, as well as data types, operators, and functions. These fundamentals enabled me to create simple programs that perform specific tasks and interact directly with the computer's hardware."
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
            "I have skills in Flask; I can create simple APIs and use my knowledge of Python programming to create organized and interesting routes and functions, allowing me to build Python back-ends."
          }
          SkillTree={<GRID.HabilidadesFlask/>}
        />
        <CardHabilidade
          titulo={"Docker"}
          corTexto="black"
          cor="blue.200"
          corIconeDrawer={"blackAlpha"}
          level={2}
          ProgressoDrawer={5}
          icone={SiDocker}
          descricao={
            "I have basic knowledge of Docker. I know how to download containers and create some basic containers from images."
          }
        />
        <CardHabilidade
          titulo={"C++"}
          corTexto="black"
          cor="orange.200"
          corIconeDrawer={"blackAlpha"}
          level={3}
          ProgressoDrawer={50}
          icone={SiCplusplus}
          descricao={
            "I have a very basic knowledge of C++, which allows me to understand and create applications with this high-performance programming language."
          }
        />
      </SimpleGrid>
    </Box>
  );
};

export default SkillTree;
