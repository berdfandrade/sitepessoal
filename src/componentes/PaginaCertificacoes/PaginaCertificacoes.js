import React from "react";
import {
  Center,
  Image,
  Tag,
  Icon,
  Box,
  Text,
  UnorderedList,
  ListItem,
  Button,
} from "@chakra-ui/react";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

import certificados from "./Certificados";
import Footer from "../Footer/Footer";
import HeroPaginas from "../HeroPaginas/HeroPaginas";
import Certificado from "../../assets/imagem/certificate.png";
import Cabecalho from "../Cabecalho/Cabecalho";
import { TbLink } from "react-icons/tb";
import { TbCertificate } from "react-icons/tb";

function CertificadoItem({
  title,
  descricao,
  imagem,
  plataforma,
  linkCertificado,
}) {
  return (
    <AccordionItem>
      {({ isExpanded }) => (
        <>
          <h2>
            <AccordionButton>
              <Box>
                {typeof imagem === "string" ? (
                  <Image
                    alignItems={"center"}
                    ml={"auto"}
                    mr={"auto"}
                    boxSize={10}
                    src={imagem}
                  />
                ) : (
                  <Center>
                    <Icon
                      ml={"auto"}
                      mr={"auto"}
                      alignItems={"center"}
                      as={imagem}
                      boxSize={9}
                    />
                  </Center>
                )}
              </Box>
              <Box flex="1" p={4} textAlign="left">
                <Text fontWeight={"bold"} fontSize={"sm"} ml={5}>
                  {title}
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel width={"90%"}>
            <Text fontSize={"sm"} as={"b"}>
              Platform{" "}
            </Text>

            <Tag
              borderRadius={"full"}
              mb={3}
              colorScheme={plataforma === "Alura" ? "blue" : "purple"}
            >
              {plataforma}
            </Tag>

            <Box p={1}>
              <Text as={"b"}>Course description:</Text>
              <UnorderedList mt={2} mb={5}>
                {descricao.itens.map((item, index) => (
                  <ListItem key={index}>{item}</ListItem>
                ))}
              </UnorderedList>
              <Button
                ml={2}
                borderRadius={"full"}
                onClick={() => window.open(linkCertificado)}
                bg={"blue.600"}
                color={"white"}
                size={"sm"}
              >
                <Icon as={TbCertificate} mr={1} boxSize={4} />
                Certificate
                <Icon as={TbLink} ml={1} boxSize={4} />
              </Button>
            </Box>
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
}

function PaginaCetificacoes() {
  return (
    <>
      <Cabecalho />
      <HeroPaginas
        nome={"Certifications"}
        imagem={Certificado}
        descricao={"Here are the certifications from courses I've completed."}
      />

      <Box ml={"auto"} mr={"auto"} maxW={"90%"}>
        <Accordion mt={5} p={4} allowToggle>
          {Object.values(certificados).map((certificado, index) => (
            <CertificadoItem key={index} {...certificado} />
          ))}
        </Accordion>
      </Box>

      <Footer />
    </>
  );
}

export default PaginaCetificacoes;
