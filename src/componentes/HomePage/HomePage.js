import { Link } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Theme from "../BotaoDarkMode/Tema";
import Hero from "../Hero/Hero";
import Caixa from "../Caixa/Caixa";
import Footer from "../Footer/Footer";
import DividerCustomizado from "../Divider/DividerCustom";

function HomePage() {
  return (
    <ChakraProvider theme={Theme}>
      <Hero />
      <DividerCustomizado />
      <Link to="/habilidades">
        <Caixa
          titulo={"Minhas Habilidades"}
          descricao={"Veja minhas habilidades em programação"}
        />
      </Link>
      <Link to="/projetos">
        <Caixa
          boxShadow={"md"}
          titulo={"Meus projetos"}
          descricao={"Veja os projetos que desenvolvi"}
        />
      </Link>
      <Link to="/sobre">
        <Caixa titulo={"Sobre mim"} descricao={"Conheça minha história!"} />
      </Link>
      <Link to="/certificacoes">
        <Caixa
          titulo={"Certificações"}
          descricao={"Veja os certificados que obtive"}
        />
      </Link>
            <Link to="/experiencia">
        <Caixa
          titulo={"Experiência Profissional"}
          descricao={"Veja minha experiência profissional"}
        />
      </Link>
      <DividerCustomizado />
      <Footer />
    </ChakraProvider>
  );
}

export default HomePage;
