import React from "react";
import {
  ChakraProvider,
  Flex,
  Grid,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";

import Theme from "../BotaoDarkMode/Tema";
import DividerCustomizado from "../Divider/DividerCustom";
import Footer from "../Footer/Footer";
import HeroPaginas from "../HeroPaginas/HeroPaginas";
import Certificado from "../../assets/imagem/certificate.png";
import Cabecalho from "../Cabecalho/Cabecalho";
import Card from "./CertificadoCard";
import { MdCheckCircle } from "react-icons/md";

import * as ICONES from "./ImportsIcones";
import * as CERT from "./ImportCertificados";

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

      <Flex direction="row" justify="center">
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(3, 1fr)",
          }}
          maxW="90%"
          gap={5}
        >
          <Card
            title={"Linux I: conhecendo e utilizando o terminal"}
            imagem={ICONES.LinuxI}
            linkCertificado={
              "https://cursos.alura.com.br/certificate/8f2b7a1c-b7f0-483f-82af-275e5c37c9af?lang=pt_BR"
            }
            certificado={CERT.LinuxICertificado}
            descricao={
              <List>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Conheça o sistema de diretórios do Linux
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Trabalhe com a linha de comando sem medo
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Compacte e descompacte seus arquivos
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Edição no console usando o VI
                </ListItem>
              </List>
            }
            dificuldade={"f"}
          />
          <Card
            title={"Linux II: programas, processos e pacotes"}
            descricao={
              <List>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Controle dos processos rodando na sua máquina
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Variáveis de ambiente e o PATH sem mistérios
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Sistema de permissões
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  SSH e SCP para comunicação remota
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Dê seus primeiros passos de maneira prática!
                </ListItem>
              </List>
            }
            imagem={ICONES.Linux2}
            certificado={CERT.Linux2Certificado}
            dificuldade={"f"}
          />
          <Card
            title={"HTML5 e CSS3 parte 1: crie uma página da Web"}
            descricao={
              <List>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Aprenda o que é o HTML e o CSS
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Entenda a estrutura básica de um arquivo HTML
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Utilize o navegador para inspecionar elementos
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Aprenda a definir estilos para elementos usando o CSS
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Desenvolva um página Web
                </ListItem>
              </List>
            }
            dificuldade={"f"}
            certificado={CERT.html5pt1}
            imagem={ICONES.Html5pt1}
          />
          <Card
            title={"React: desenvolvendo com JavaScript"}
            linkCertificado={
              "https://cursos.alura.com.br/certificate/b5e2af73-6854-4829-95fe-233614011d7e?lang=pt_BR"
            }
            descricao={
              <List>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Descreva as vantagens da utilização do React
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Implemente componentes reativos
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Investigue e analise mensagens de erro{" "}
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Modifique e evolua componentes
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Prototipe uma aplicação do zero até o deploy{" "}
                </ListItem>
              </List>
            }
            imagem={ICONES.ReactDesenvolvendo}
            dificuldade={"d"}
            certificado={CERT.Reactdesevolvendo}
          />
          <Card
            title={"HTML5 e CSS3 parte 2: Listas e navegação"}
            descricao={
              <List>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Aprenda a estrutura da página HTML
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Navegue entre páginas web
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Conheça reset.css e o posicionamento pelo CSS
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Entenda a diferença entre inline e block
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Lide com bordas e pseudo-classes CSS
                </ListItem>
              </List>
            }
            imagem={ICONES.Html5pt2}
            dificuldade={"m"}
            certificado={CERT.html5pt2}
          />
          <Card
            title={"HTML5 e CSS3 parte 3: formulários e tabelas"}
            descricao={
              <List>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Crie formulários complexos
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Trabalhe com campos para celulares
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Apresente informações em tabelas
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Use estilos para formulários, campos e tabelas
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Entenda a hierarquia no CSS
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Trabalhe com transformações e transições
                </ListItem>
              </List>
            }
            imagem={ICONES.Html5pt1}
            dificuldade={"f"}
            certificado={CERT.htmlpt3}
          />

          <Card
            title={"HTML5 e CSS3 parte 4: avançando no CSS"}
            descricao={
              <List>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Importe conteúdo externo na sua página HTM
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Conheça pseudo-classes e pseudo-elementos
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Use seletores de CSS avançados
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Saiba como lidar com opacidade e sombra
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Entenda sobre o Viewport e design responsivo
                </ListItem>
              </List>
            }
            imagem={ICONES.Html5pt2}
            dificuldade={"f"}
            certificado={CERT.htmlpt4}
          />

          <Card
            title={"JavaScript para Web: Crie páginas dinâmicas"}
            linkCertificado={
              "https://cursos.alura.com.br/certificate/00465614-72d3-406e-98ba-74a7bde99e6f?lang=pt_BR"
            }
            descricao={
              <List>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Associar o JavaScript com HTML através do DOM
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Implementar funções com JavaScript
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Criar soluções para problemas de código
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Selecionar operadores lógicos adequados
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Produzir soluções simples para páginas dinâmicas
                </ListItem>
              </List>
            }
            imagem={ICONES.javascript1}
            dificuldade={"m"}
            certificado={CERT.JavaScript1}
          />

          <Card
            title={"Git e GitHub: repositório, commit e versões"}
            linkCertificado={
              "https://cursos.alura.com.br/certificate/64691dcc-7ff4-4efa-b703-65a628b0cb60?lang=pt_BR"
            }
            descricao={
              <List>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Entenda as diferenças entre Git e GitHub
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Aprenda os principais comandos do Git
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Saiba como controlar as versões de seus projetos
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Descubra como criar estratégias de ramificações
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Saiba como navegar no tempo através do restore
                </ListItem>
              </List>
            }
            imagem={ICONES.gitgithub}
            dificuldade={"f"}
            certificado={CERT.giitGithub}
          />

          <Card
            title={"Lógica de programação com Pong e JavaScript"}
            linkCertificado={
              "https://cursos.alura.com.br/certificate/7b19bf6f-4dd0-4d15-ae25-6742708fd498?lang=pt_BR"
            }
            descricao={
              <List>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Desenvolva um jogo do zero
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Dê seus primeiros passos no mundo do Javascript
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Aprenda a trabalhar com variáveis e funções
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Crie um jogo completo, com animações e controles
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Saiba como utilizar em seus projetos um código compartilhado
                  no Github
                </ListItem>
              </List>
            }
            imagem={ICONES.pongjavascript}
            dificuldade={"m"}
            certificado={CERT.PongJavascript}
          />

          <Card
            title={"C: conhecendo a Linguagem "}
            linkCertificado={
              "https://cursos.alura.com.br/certificate/065ca160-b353-4414-8af8-05772acaf2c1?lang=pt_BR"
            }
            descricao={
              <List>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Aprenda a criar o primeiro programa em C
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Descubra o que são variáveis
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Realize operações matemáticas
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Aprenda a usar condicionais e laços
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Entenda o funcionamento de um compilador
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Crie um jogo de adivinhação completo
                </ListItem>
              </List>
            }
            imagem={ICONES.cI}
            dificuldade={"m"}
            certificado={CERT.CI}
          />

          <Card
            title={"Arquitetura CSS: lidando com problemas"}
            linkCertificado={
              "https://cursos.alura.com.br/certificate/fb6a2bfc-951a-4ee3-b360-ea3370fc3063?lang=pt_BR"
            }
            descricao={
              <List>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Simplifique a organização de seus arquivos CSS.
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Crie arquiteturas CSS simples e robusta.
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Aprenda boas práticas e metodologias sobre CSS.
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Deixe o seu site responsivo.
                </ListItem>
              </List>
            }
            imagem={ICONES.arqcss}
            dificuldade={"f"}
            certificado={CERT.ArquiteturaCss}
          />

          <Card
            title={"C: avançando na linguagem"}
            linkCertificado={
              "https://cursos.alura.com.br/certificate/3332cbb3-e00f-4d8d-a52d-84edd2ca1fc3?lang=pt_BR"
            }
            descricao={
              <List>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Crie funções e manipule arrays
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Entenda ponteiros e endereços de memória
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Manipule entrada e saída, e escreva em arquivos
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Conheça boas práticas de programação
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Crie um jogo de forca completo
                </ListItem>
              </List>
            }
            imagem={ICONES.cii}
            dificuldade={"d"}
            certificado={CERT.CII}
          />

          <Card
            title={"C: recursos avançados da linguagem"}
            linkCertificado={
              "https://cursos.alura.com.br/certificate/0474a449-f5dd-4d1f-8af7-5b3a0a34177c?lang=pt_BR"
            }
            descricao={
              <List>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Escreva funções recursivas e manipule matrizes
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Defina tipos e estruturas
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Entenda diretivas de compilação
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Divida o código em múltiplos arquivos
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Crie um jogo de Pac Man completo
                </ListItem>
              </List>
            }
            imagem={ICONES.ciii}
            dificuldade={"d"}
            certificado={CERT.CIII}
          />

          <Card
            title={"Introdução à Arquitetura de computadores"}
            linkCertificado={
              "https://cursos.alura.com.br/certificate/0474a449-f5dd-4d1f-8af7-5b3a0a34177c?lang=pt_BR"
            }
            descricao={
              <List>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Entenda como o computador lê e executa o seu programa
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Como funcionam os principais componentes do computador
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Como o computador executa vários programas?
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Entenda as limitações do seu computador
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Como os dados são armazenados na memória
                </ListItem>
              </List>
            }
            imagem={ICONES.arquiteturapc}
            dificuldade={"m"}
            certificado={CERT.ArquiteturaPC}
          />
          <Card
            title={"Acessibilidade web pt 1: Seu front-end inclusivo"}
            linkCertificado={
              "https://cursos.alura.com.br/certificate/c9cd5a4c-5500-4f25-86b1-00816cac29b6?lang=pt_BR"
            }
            descricao={
              <List>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Melhore seu site para usuários de leitor de tela
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Entenda como uma pessoa cega usa a internet
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Aprenda a testar seu site usando o NVDA
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Faça técnicas front-end que podem ajudar seus usuários
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Como os dados são armazenados na memória
                </ListItem>
              </List>
            }
            imagem={ICONES.acessibilidadeweb1}
            dificuldade={"f"}
            certificado={CERT.AcessibilidadeWeb1}
          />
          <Card
            title={"JavaScript: explorando a linguagem"}
            linkCertificado={
              "https://cursos.alura.com.br/certificate/955f0207-30b6-4525-b01e-b6924adab8c4?lang=pt_BR"
            }
            descricao={
              <List>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Execute código JS em sua máquina
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Aprenda a usar o VSCode e seu Debbuger
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  como funciona variáveis, controle de fluxo
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  como funciona condicionais e laços de repetição
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Conheças os tipos básicos dentro do JS
                </ListItem>
              </List>
            }
            imagem={ICONES.javascript2}
            dificuldade={"m"}
            certificado={CERT.Javascript2}
          />
          <Card
            title={"Lógica de programação: laços e listas"}
            linkCertificado={
              "https://cursos.alura.com.br/certificate/93cdd54a-69fb-461b-9d80-d84e369b4131?lang=pt_BR"
            }
            descricao={
              <List>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Crie um jogo do zero, com animações, pontuação e sons
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Saiba como adicionar imagens no P5 Js
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Aprenda na prática como usar listas (arrays)
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Entenda como evitar código duplicado com laços de repetição
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Desenvolva sua lógica de programação
                </ListItem>
              </List>
            }
            imagem={ICONES.javascript3}
            dificuldade={"f"}
            certificado={CERT.JavaScript3}
          />
        </Grid>
      </Flex>

      <DividerCustomizado />
      <Footer />
    </ChakraProvider>
  );
}

export default PaginaCetificacoes;
