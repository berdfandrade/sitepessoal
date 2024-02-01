import { Tag, Text, Icon, Flex, useBreakpointValue } from "@chakra-ui/react";

import {
  SiNodedotjs,
  SiReact,
  SiMongodb,
  SiTypescript,
  SiFlask,
  SiExpress,
  SiPython,
  SiChakraui,
} from "react-icons/si";

export default function TagProjeto({ nome, icon }) {
  const isMobile = useBreakpointValue({ base: true, md: false });

  const getColorScheme = (nome) => {
    switch (nome) {
      case "node":
        return "green";
      case "react":
        return "blue";
      case "flask":
        return "orange";
      case "chakra":
        return "teal";
      case "mongodb":
        return "green";
      case "typescript":
        return "facebook";
      case "express":
        return "teal";
      default:
        return "gray";
      case "js":
        return "orange";
      case "py":
        return "linkedin";
    }
  };

  const getIcon = (nome) => {
    switch (nome) {
      case "node":
        return SiNodedotjs;
      case "react":
        return SiReact;
      case "chakra":
        return SiChakraui;
      case "flask":
        return SiFlask;
      case "mongodb":
        return SiMongodb;
      case "typescript":
        return SiTypescript;
      case "express":
        return SiExpress;
      default:
        return SiNodedotjs;
      case "py":
        return SiPython;
    }
  };

  return (
    <Tag
      pr={3}
      borderRadius={"full"}
      colorScheme={getColorScheme(nome)}
      variant={"outline"}
      maxW={"120px"}
    >
      <Flex gap={1} alignItems={"center"}>
        <Icon as={icon ? icon : getIcon(nome)} />
        {!isMobile && (
          <Text as="b">
            {nome === "node"
              ? "Node.js"
              : nome === "react"
              ? "React"
              : nome === "flask"
              ? "Flask"
              : nome === "mongodb"
              ? "MongoDB"
              : nome === "typescript"
              ? "TypeScript"
              : nome === "express"
              ? "Express"
              : nome === "js"
              ? "JavaScript"
              : nome === "py"
              ? "Python"
              : nome === "chakra"
              ? "Chakra UI"
              : null}
          </Text>
        )}
      </Flex>
    </Tag>
  );
}
