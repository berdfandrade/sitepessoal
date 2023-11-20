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
          titulo={"My skills"}
          descricao={"Check out my programming skills."}
        />
      </Link>
      <Link to="/projetos">
        <Caixa
          boxShadow={"md"}
          titulo={"My projects"}
          descricao={"See the projects I've developed."}
        />
      </Link>
      <Link to="/sobre">
        <Caixa titulo={"About me"} descricao={"Get to know my story!"} />
      </Link>
      <Link to="/certificacoes">
        <Caixa
          titulo={"Certifications"}
          descricao={"See the certificates I've obtained."}
        />
      </Link>
            <Link to="/experiencia">
        <Caixa
          titulo={"Professional Experience"}
          descricao={"Check out my professional experience"}
        />
      </Link>
      <DividerCustomizado />
      <Footer />
    </ChakraProvider>
  );
}

export default HomePage;
