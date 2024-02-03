import { ChakraProvider } from "@chakra-ui/react";
import Theme from "./componentes/BotaoDarkMode/Tema";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PaginaHabilidades from "./componentes/PaginaHabilidades/PaginaHabilidades";
import HomePage from "./componentes/HomePage/HomePage";
import PaginaProjetos from "./componentes/PaginaProjetos/PaginaProjetos";
import PaginaSobre from "./componentes/PaginaSobre/PaginaSobre";
import PaginaCertificacoes from "./componentes/PaginaCertificacoes/PaginaCertificacoes";
import PaginaExperincia from "./componentes/PaginaExperiencia/PaginaExperiencia";
import PaginaTest from "./componentes/PaginaTest/PaginaTest";


function App() {
  return (
    <ChakraProvider theme={Theme}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/habilidades" element={<PaginaHabilidades />} />
          <Route path="/projetos" element={<PaginaProjetos />} />
          <Route path="/sobre" element={<PaginaSobre />} />
          <Route path="/certificacoes" element={<PaginaCertificacoes />} />
          <Route path="/experiencia" element={<PaginaExperincia />} />
          <Route path="/__test" element={<PaginaTest />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
