import React from "react";
import {
  ChakraProvider,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Center,
  Image,
  Tag,
  Icon,
} from "@chakra-ui/react";


import certificados from "./Certificados";
import Theme from "../BotaoDarkMode/Tema";
import DividerCustomizado from "../Divider/DividerCustom";
import Footer from "../Footer/Footer";
import HeroPaginas from "../HeroPaginas/HeroPaginas";
import Certificado from "../../assets/imagem/certificate.png";
import Cabecalho from "../Cabecalho/Cabecalho";
import { ChevronRightIcon } from "@chakra-ui/icons";

function CertificadoItem({
  title,
  descricao,
  imagem,
  plataforma,
  linkCertificado,
}) {



  return (

    <>
      <Tr
        _hover={{ cursor: "pointer" }}

      >
        <Td>
          {typeof imagem === "string" ? (
            <Image
              alignItems={"center"}
              ml={"auto"}
              mr={"auto"}
              boxSize={9}
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
        </Td>

        <Td p={5} fontSize={"sm"} fontWeight={"bold"}>
          {title}
        </Td>

        <Td>
          <Center>
            <Tag
              colorScheme={plataforma === "Alura" ? "blue" : "purple"}
              _hover={{
                cursor: "pointer",
              }}
            >
              {plataforma}
            </Tag>
          </Center>
        </Td>

        <Td>
          <Icon as={ChevronRightIcon}></Icon>
        </Td>
      </Tr>
    </>

  );
}

function PaginaCetificacoes() {
  return (
    <ChakraProvider theme={Theme}>
      <Cabecalho />
      <HeroPaginas
        mb={8}
        nome={"Certificações"}
        imagem={Certificado}
        descricao={"Aqui estão as certificações de cursos que fiz"}
      />

      <DividerCustomizado />

      <Center>
        <Table
          mb={10}
          size={"sm"}
          width={"80%"}
          variant="simple"
          borderRadius={"md"}
        >
          <Thead>
            <Tr>
              <Th></Th>

              <Th>
                <Center>Curso</Center>
              </Th>

              <Th>Plataforma</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {Object.values(certificados).map((certificado, index) => (
              <CertificadoItem key={index} {...certificado} />
            ))}
          </Tbody>
        </Table>
      </Center>
      <Footer />
    </ChakraProvider>
  );
}

export default PaginaCetificacoes;



//   <ul>
//   {descricao.itens.map((item, index) => (
//     <li key={index}>{item}</li>
//   ))}
// </ul>