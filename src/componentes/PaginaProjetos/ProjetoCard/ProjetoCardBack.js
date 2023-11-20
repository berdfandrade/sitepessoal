import {
  Box,
  Text,
  Icon,
  useDisclosure,
  Flex,
  Tag,
  Spacer,
  Link,
} from "@chakra-ui/react";

import { AiFillQuestionCircle } from "react-icons/ai";
import * as FA from "react-icons/fa";
import { BackEndDoc } from "./PaginaBackEndDoc";
import { useNavigate } from "react-router";

const ProjetoCardBack = ({
  nome,
  iconModal,
  componenteLive,
  descricao,
  icon,
  corIcon,
  descricaoCard,
  tag1,
  tag2,
  corTag1,
  corTag2,
  link,
  projeto,
  Link,
}) => {
  const navigate = useNavigate()

  const handleClick =() => {
    navigate(`docs/${projeto.linkDoc}`)
    
  }
  return (

    <Box
      transition="0.1s ease-in-out"
      alignItems="center"
      h={{ base: "110px", md: "120px" }}
      p={2}
      borderWidth={1}
      onClick={handleClick}
      width="100%"
      _hover={{
        cursor: "pointer",
      }}
    >
      <Flex flexDir="column" height="100%">
        <Flex flexDir="row" alignItems="center">
          <Icon
            as={icon ? icon : AiFillQuestionCircle}
            color={corIcon}
            boxSize="50px"
            p={2}
          ></Icon>
          <Flex>
            <Text textAlign="left" fontSize={16} fontWeight="bold">
              {nome ? nome : "Nome do componenteLive"}
              <Text fontWeight="light" fontSize="12" maxW="80%">
                {descricaoCard ? descricaoCard : "descrição do card"}
              </Text>
            </Text>
          </Flex>
        </Flex>

        <Spacer />
        {(tag1 || tag2) && (
          <Box bottom={0}>
            {tag1 && (
              <Tag
                fontSize="xs"
                variant="outline"
                borderRadius="full"
                marginLeft={0}
                colorScheme={corTag1 ? corTag1 : "facebook"}
              >
                {tag1}
              </Tag>
            )}
            {tag2 && (
              <Tag
                fontSize="xs"
                variant={"outline"}
                borderRadius={"full"}
                marginLeft={0}
                colorScheme={corTag2 ? corTag2 : "whatsapp"}
              >
                {tag2}
              </Tag>
            )}
          </Box>
        )}
      </Flex>
    </Box>

  );
};

export default ProjetoCardBack;
