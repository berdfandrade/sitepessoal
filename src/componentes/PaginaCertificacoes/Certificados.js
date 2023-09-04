import * as ICONES from "./ImportsIcones";
import * as SI from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";

const certificados = [
  {
    title: "JavaScript Algorithms and Data Structures",
    imagem: SI.SiJavascript,
    linkCertificado:
      "https://www.freecodecamp.org/certification/berdfandrade/javascript-algorithms-and-data-structures",
    descricao: {
      itens: [
        "While HTML and CSS control the content and styling of a page, JavaScript is used to make it interactive. In the JavaScript Algorithm and Data Structures Certification, you'll learn the fundamentals of JavaScript including variables, arrays, objects, loops, and functions.",
        "Once you have the fundamentals down, you'll apply that knowledge by creating algorithms to manipulate strings, factorialize numbers, and even calculate the orbit of the International Space Station.",
        "Along the way, you'll also learn two important programming styles or paradigms: Object Oriented Programming (OOP) and Functional Programming (FP).",
      ],
    },
    dificuldade: "f",
    plataforma: "freeCodeCamp",
  },

  {
    title: "Scientific Computing with Python",
    imagem: SI.SiPython,
    linkCertificado:
      "https://www.freecodecamp.org/certification/berdfandrade/scientific-computing-with-python-v7",
    descricao: {
      itens: [
        "Python is one of the most popular, flexible programming languages today. You can use it for everything from basic scripting to machine learning.",
        "In the Scientific Computing with Python Certification, you'll learn Python fundamentals like variables, loops, conditionals, and functions. Then you'll quickly ramp up to complex data structures, networking, relational databases, and data visualization.",
      ],
    },
    dificuldade: "f",
    plataforma: "freeCodeCamp",
  },
  {
    title: "Responsive Web Design",
    imagem: AiFillHtml5,
    linkCertificado:
      "https://www.freecodecamp.org/certification/berdfandrade/javascript-algorithms-and-data-structures",
    descricao: {
      itens: [
        "In this Responsive Web Design Certification, you'll learn the languages that developers use to build webpages: HTML (Hypertext Markup Language) for content, and CSS (Cascading Style Sheets) for design.",
        "First, you'll build a cat photo app to learn the basics of HTML and CSS. Later, you'll learn modern techniques like CSS variables by building a penguin, and best practices for accessibility by building a quiz site.",
        "Finally, you'll learn how to make webpages that respond to different screen sizes by building a photo gallery with Flexbox, and a magazine article layout with CSS Grid.",
      ],
    },
    dificuldade: "f",
    plataforma: "freeCodeCamp",
  },

  {
    title: "Linux I: conhecendo e utilizando o terminal",
    imagem: ICONES.LinuxUbuntu,
    linkCertificado:
      "https://cursos.alura.com.br/certificate/8f2b7a1c-b7f0-483f-82af-275e5c37c9af?lang=pt_BR",
    descricao: {
      itens: [
        "Conheça o sistema de diretórios do Linux",
        "Trabalhe com a linha de comando sem medo",
        "Compacte e descompacte seus arquivos",
        "Edição no console usando o VI",
      ],
    },
    dificuldade: "f",
    plataforma: "Alura",
  },
  {
    title: "Linux II: programas, processos e pacotes",
    imagem: ICONES.LinuxUbuntuProcessos,
    linkCertificado: "",
    descricao: {
      itens: [
        "Controle dos processos rodando na sua máquina",
        "Variáveis de ambiente e o PATH sem mistérios",
        "Sistema de permissões",
        "SSH e SCP para comunicação remota",
        "Dê seus primeiros passos de maneira prática!",
      ],
    },
    dificuldade: "f",
    plataforma: "Alura",
  },
  {
    // eslint-disable-next-line no-script-url
    title: "Linux Onboarding: usando a CLI de uma forma rápida e prática",
    imagem: ICONES.LinuxOnboarding,
    linkCertificado:
      "https://cursos.alura.com.br/certificate/c97ecd59-beb5-4d47-a031-7d9e4eac5061?lang=pt_BR",
    descricao: {
      itens: [
        "Comece a utilizar o Linux de uma forma rápida e prática",
        "Manipule arquivos e diretórios através da CLI",
        "Aprenda a gerenciar serviços",
        "Mergulhe no sistema e acesse os logs, processos, dispositivos",
        "Aprenda a administrar os usuários e grupos do sistema",
      ],
    },
    dificuldade: "m",
    plataforma: "Alura",
  },

  {
    title: "React: desenvolvendo com JavaScript",
    imagem: ICONES.ReactDesenvolvendoJavascript,
    linkCertificado:
      "https://cursos.alura.com.br/certificate/b5e2af73-6854-4829-95fe-233614011d7e?lang=pt_BR",
    descricao: {
      itens: [
        "Descreva as vantagens da utilização do React",
        "Implemente componentes reativos",
        "Investigue e analise mensagens de erro",
        "Modifique e evolua componentes",
        "Prototipe uma aplicação do zero até o deploy",
      ],
    },
    dificuldade: "d",
    plataforma: "Alura",
  },
  {
    title: "HTML5 e CSS3 parte 1: crie uma página da Web",
    imagem: ICONES.HtmlCssPrimeirosPassos,
    linkCertificado:
      "https://cursos.alura.com.br/certificate/869ee0f0-ed91-437b-9107-579ddb607fdf?lang=pt_BR",
    descricao: {
      itens: [
        "Aprenda o que é o HTML e o CSS",
        "Entenda a estrutura básica de um arquivo HTML",
        "Utilize o navegador para inspecionar elementos",
        "Aprenda a definir estilos para elementos usando o CSS",
        "Desenvolva uma página Web",
      ],
    },
    dificuldade: "f",
    plataforma: "Alura",
  },
  {
    title: "HTML5 e CSS3 parte 2: Listas e navegação",
    imagem: ICONES.HtmlCssPrimeirosPassos,
    linkCertificado:
      "https://cursos.alura.com.br/certificate/18ab35a1-b516-4022-a3aa-a979bbbca30f?lang=pt_BR",
    descricao: {
      itens: [
        "Aprenda a estrutura da página HTML",
        "Navegue entre páginas web",
        "Conheça reset.css e o posicionamento pelo CSS",
        "Entenda a diferença entre inline e block",
        "Lide com bordas e pseudo-classes CSS",
      ],
    },
    dificuldade: "m",
    plataforma: "Alura",
  },
  {
    title: "HTML5 e CSS3 parte 3: formulários e tabelas",
    imagem: ICONES.HtmlCssPrimeirosPassos,
    linkCertificado:
      "https://cursos.alura.com.br/certificate/52f3e146-2b19-4f64-9f06-be6f81b1b285?lang=pt_BR",
    descricao: {
      itens: [
        "Crie formulários complexos",
        "Trabalhe com campos para celulares",
        "Apresente informações em tabelas",
        "Use estilos para formulários, campos e tabelas",
        "Entenda a hierarquia no CSS",
        "Trabalhe com transformações e transições",
      ],
    },
    dificuldade: "f",
    plataforma: "Alura",
  },
  {
    title: "HTML5 e CSS3 parte 4: avançando no CSS",
    imagem: ICONES.HtmlCssPrimeirosPassos,
    linkCertificado:
      "https://cursos.alura.com.br/certificate/5ddf5bf8-31ff-468f-a60a-a6938e365ab7?lang=pt_BR",
    descricao: {
      itens: [
        "Importe conteúdo externo na sua página HTML",
        "Conheça pseudo-classes e pseudo-elementos",
        "Use seletores de CSS avançados",
        "Saiba como lidar com opacidade e sombra",
        "Entenda sobre o Viewport e design responsivo",
      ],
    },
    dificuldade: "f",
    plataforma: "Alura",
  },
  {
    title: "JavaScript para Web: Crie páginas dinâmicas",
    imagem: ICONES.JavascriptWebPaginasDinamicas,
    linkCertificado:
      "https://cursos.alura.com.br/certificate/00465614-72d3-406e-98ba-74a7bde99e6f?lang=pt_BR",
    descricao: {
      itens: [
        "Associar o JavaScript com HTML através do DOM",
        "Implementar funções com JavaScript",
        "Criar soluções para problemas de código",
        "Selecionar operadores lógicos adequados",
        "Produzir soluções simples para páginas dinâmicas",
      ],
    },
    dificuldade: "m",
    plataforma: "Alura",
  },
  {
    title: "Git e GitHub: repositório, commit e versões",
    imagem: ICONES.GitGithub,
    linkCertificado:
      "https://cursos.alura.com.br/certificate/64691dcc-7ff4-4efa-b703-65a628b0cb60?lang=pt_BR",
    descricao: {
      itens: [
        "Entenda as diferenças entre Git e GitHub",
        "Aprenda os principais comandos do Git",
        "Saiba como controlar as versões de seus projetos",
        "Descubra como criar estratégias de ramificações",
        "Saiba como navegar no tempo através do restore",
      ],
    },
    dificuldade: "f",
    plataforma: "Alura",
  },
  {
    title: "Lógica de programação com Pong e JavaScript",
    imagem: ICONES.PongJavascript,
    linkCertificado:
      "https://cursos.alura.com.br/certificate/7b19bf6f-4dd0-4d15-ae25-6742708fd498?lang=pt_BR",
    descricao: {
      itens: [
        "Desenvolva um jogo do zero",
        "Dê seus primeiros passos no mundo do Javascript",
        "Aprenda a trabalhar com variáveis e funções",
        "Crie um jogo completo, com animações e controles",
        "Saiba como utilizar em seus projetos um código compartilhado no Github",
      ],
    },
    dificuldade: "m",
    plataforma: "Alura",
  },
  {
    title: "C: conhecendo a Linguagem",
    imagem: ICONES.IntroducaoCParte1,
    linkCertificado:
      "https://cursos.alura.com.br/certificate/065ca160-b353-4414-8af8-05772acaf2c1?lang=pt_BR",
    descricao: {
      itens: [
        "Aprenda a criar o primeiro programa em C",
        "Descubra o que são variáveis",
        "Realize operações matemáticas",
        "Aprenda a usar condicionais e laços",
        "Entenda o funcionamento de um compilador",
        "Crie um jogo de adivinhação completo",
      ],
    },
    dificuldade: "m",
    plataforma: "Alura",
  },

  {
    title: "C: avançando na linguagem",
    imagem: ICONES.IntroducaoCParte2,
    linkCertificado:
      "https://cursos.alura.com.br/certificate/3332cbb3-e00f-4d8d-a52d-84edd2ca1fc3?lang=pt_BR",
    descricao: {
      itens: [
        "Crie funções e manipule arrays",
        "Entenda ponteiros e endereços de memória",
        "Manipule entrada e saída, e escreva em arquivos",
        "Conheça boas práticas de programação",
        "Crie um jogo de forca completo",
      ],
    },
    dificuldade: "d",
    plataforma: "Alura",
  },
  {
    title: "C: recursos avançados da linguagem",
    imagem: ICONES.IntroducaoCParte3,
    linkCertificado:
      "https://cursos.alura.com.br/certificate/0474a449-f5dd-4d1f-8af7-5b3a0a34177c?lang=pt_BR",

    descricao: {
      itens: [
        "Escreva funções recursivas e manipule matrizes",
        "Defina tipos e estruturas",
        "Entenda diretivas de compilação",
        "Divida o código em múltiplos arquivos",
        "Crie um jogo de Pac Man completo",
      ],
    },
    dificuldade: "d",
    plataforma: "Alura",
  },

  {
    title: "Arquitetura CSS: lidando com problemas",
    imagem: ICONES.ArquiteturaCSS,
    linkCertificado:
      "https://cursos.alura.com.br/certificate/fb6a2bfc-951a-4ee3-b360-ea3370fc3063?lang=pt_BR",
    descricao: {
      itens: [
        "Simplifique a organização de seus arquivos CSS.",
        "Crie arquiteturas CSS simples e robustas.",
        "Aprenda boas práticas e metodologias sobre CSS.",
        "Deixe o seu site responsivo.",
      ],
    },
    dificuldade: "f",
    plataforma: "Alura",
  },
  {
    title: "Introdução à Arquitetura de computadores",
    imagem: ICONES.ArquiteturaComputadores,
    linkCertificado:
      "https://cursos.alura.com.br/certificate/f404fe73-7573-4988-8daa-d2814a99f7a0?lang=pt_BR",
    descricao: {
      itens: [
        "Entenda como o computador lê e executa o seu programa",
        "Como funcionam os principais componentes do computador",
        "Como o computador executa vários programas?",
        "Entenda as limitações do seu computador",
        "Como os dados são armazenados na memória",
      ],
    },
    dificuldade: "m",
    plataforma: "Alura",
  },
  {
    title: "Python: começando com a linguagem",
    imagem: ICONES.PythonIntroducaoALinguagem,
    linkCertificado:
      "https://cursos.alura.com.br/certificate/a2ef0806-959e-4a07-b059-ee7c3ff70747?lang=pt_BR",
    descricao: {
      itens: [
        "Aprenda Python 3 na prática",
        "Use PyCharm para desenvolver",
        "Crie um jogo para aprender os recursos fundamentais do Python 3",
        "Rode o seu código em qualquer lugar",
      ],
    },
    dificuldade: "m",
    plataforma: "Alura",
  },
  {
    title: "Expressões regulares: capturando textos de forma mágica",
    imagem: ICONES.Regex,
    linkCertificado:
      "https://cursos.alura.com.br/certificate/e352d413-01bc-402a-8e25-22c5fc42e67f?lang=pt_BR",
    descricao: {
      itens: [
        "Entenda o que são expressões regulares",
        "Valide formulários HTML",
        "Aprenda a identificar CPF, CEP, emails e outros documentos",
        "Crie expressões regulares eficientes",
        "Use classes, âncoras, quantifiers e grupos",
        "Execute expressões regulares na sua linguagem",
      ],
    },
    dificuldade: "m",
    plataforma: "Alura",
  },
  {
    title: "Flask: crie uma webapp com Python",
    imagem: ICONES.Flask,
    linkCertificado:
      "https://cursos.alura.com.br/certificate/7e67fcd7-b7e1-419d-b57a-1d7ccd17d1d4?lang=pt_BR",
    descricao: {
      itens: [
        "Aprenda a criar uma aplicação web com Flask",
        "Faça um site elegante usando HTML e Bootstrap",
        "Crie um sistema de login e autorização",
        "Aprenda a definir rotas, redirecionamentos e templates",
        "Crie URL dinâmicas",
      ],
    },
    dificuldade: "m",
    plataforma: "Alura",
  },
  {
    title: "Flexbox: posicione elementos na tela",
    imagem: ICONES.PosicioneElementosComFlexbox,
    linkCertificado:
      "https://cursos.alura.com.br/certificate/13c595dc-56ad-4686-8540-3cac72b2f695?lang=pt_BR",
    descricao: {
      itens: [
        "Aprenda a famosa especificação flexible box para posicionar seus elementos na página",
        "Entenda as diversas propriedades do flexbox e como usá-las",
        "Entenda como as propriedades do flexbox substituem float, inline e inline-block",
        "Aprenda a definir rotas, redirecionamentos e templates",
        "Elabore um site responsivo com flexbox",
      ],
    },
    dificuldade: "m",
    plataforma: "Alura",
  },

  {
    title: "HTTP: entendendo a web por baixo dos panos",
    imagem: ICONES.HttpFundamentos,
    linkCertificado:
      "https://cursos.alura.com.br/certificate/cf825777-8b6c-470a-b5a0-ba7c873e6e25?lang=pt_BR",
    descricao: {
      itens: [
        "Compreenda a arquitetura e os conceitos fundamentais do protocolo HTTP",
        "Implemente o HTTPS para proteger os dados de uma aplicação durante a comunicação na web",
        "Explore os principais avanços trazidos pelo HTTP/2 e HTTP/3 para otimizar a performance",
        "Desvende os componentes das mensagens HTTP, como requisições, respostas e cabeçalhos",
        "Entenda o que são URLs e domínios na web",
      ],
    },
    dificuldade: "m",
    plataforma: "Alura",
  },
  {
    title:
      "JavaScript e HTML: desenvolva um jogo e pratique lógica de programação",
    imagem: ICONES.LogicaProgramacaoJavascriptHTML,
    linkCertificado:
      "https://cursos.alura.com.br/certificate/11ccbdf8-38d0-4f2b-82c8-653aa03bbc10?lang=pt_BR",
    descricao: {
      itens: [
        "Dê seus primeiros passos de maneira prática!",
        "Inicie na programação com JavaScript no seu Navegador",
        "Entenda variáveis e seu uso",
        "Repita tarefas com laços, loops, fors e whiles",
        "Mostre seus programas para seus colegas",
      ],
    },
    dificuldade: "m",
    plataforma: "Alura",
  },
  {
    title: "JavaScript I: algoritmos de ordenação",
    imagem: ICONES.AlgoritmosJavascriptI,
    linkCertificado:
      "https://cursos.alura.com.br/certificate/3d8f3f02-16c4-47b3-aaae-47a76e94d96b?lang=pt_BR",
    descricao: {
      itens: [
        "Aprenda o que são algoritmos e por que são importantes",
        "Veja como utilizamos algoritmos no dia a dia",
        "Entenda como extrair a lógica do algoritmo e traduzi-la em código",
        "Veja mais de uma forma de resolver um mesmo problema com algoritmos diferentes",
        "Utilize algoritmos em conjunto para resolver um problema de programação",
        "Aprenda os conceitos básicos para a análise de complexidade de algoritmos",
      ],
    },
    dificuldade: "m",
    plataforma: "Alura",
  },
  {
    // eslint-disable-next-line no-script-url
    title: "JavaScript: Arrays",
    imagem: ICONES.JavascriptArrays,
    linkCertificado:
      "https://cursos.alura.com.br/certificate/291bfec0-ad97-43c6-8b9e-2ca6858dd7d8?lang=pt_BR",
    descricao: {
      itens: [
        "Compreenda o que são arrays e porque são importantes",
        "Altere arrays com os métodos do JS",
        "Entenda o que são laços de repetição e como usá-los",
        "Modifique arrays utilizando métodos do JS moderno (ES6 em diante)",
        "Conheça o spread operator e como o JS entende referências de arrays",
        "Pratique com os conceitos básicos e adquira conhecimentos sólidos",
      ],
    },
    dificuldade: "m",
    plataforma: "Alura",
  },
  {
    title:
      // eslint-disable-next-line no-script-url
      "JavaScript: classes e heranças no desenvolvimento de aplicações com orientação a objetos",
    imagem: ICONES.JavascriptOrientacaoObjetos,
    linkCertificado:
      "https://cursos.alura.com.br/certificate/c6a62b62-b62a-4f89-86fa-85955e74c1c7?lang=pt_BR",
    descricao: {
      itens: [
        "Compreenda o que são arrays e porque são importantes",
        "Altere arrays com os métodos do JS",
        "Entenda o que são laços de repetição e como usá-los",
        "Modifique arrays utilizando métodos do JS moderno (ES6 em diante)",
        "Conheça o spread operator e como o JS entende referências de arrays",
        "Pratique com os conceitos básicos e adquira conhecimentos sólidos",
      ],
    },
    dificuldade: "m",
    plataforma: "Alura",
  },
  {
    // eslint-disable-next-line no-script-url
    title: "JavaScript: explorando a linguagem",
    imagem: ICONES.JavascriptIntroducao,
    linkCertificado:
      "https://cursos.alura.com.br/certificate/955f0207-30b6-4525-b01e-b6924adab8c4?lang=pt_BR",
    descricao: {
      itens: [
        "Execute código JS em sua máquina",
        "Aprenda a usar o VSCode e seu Debbuger",
        "Saiba como funciona variáveis, controle de fluxo, condicionais e laços de repetição",
        "Conheças os tipos básicos dentro do JS",
      ],
    },
    dificuldade: "m",
    plataforma: "Alura",
  },
  {
    // eslint-disable-next-line no-script-url
    title: "JavaScript: interfaces e Herança em Orientação a Objetos",
    imagem: ICONES.JavascriptInterface,
    linkCertificado:
      "https://cursos.alura.com.br/certificate/d34aecce-e873-4264-991c-d989531cacd0?lang=pt_BR",
    descricao: {
      itens: [
        "Aprofunde seus conhecimentos em Orientação a objetos",
        'Saiba o que é o "DuckType"',
        "Entenda quando e como usar herança dentro de seus projetos",
        "Conheça boas práticas de programação",
        "Veja código JavaScript moderno que você pode utilizar em seus projetos",
      ],
    },
    dificuldade: "m",
    plataforma: "Alura",
  },
  {
    // eslint-disable-next-line no-script-url
    title: "JavaScript: manipulando o DOM",
    imagem: ICONES.JavascriptManipulandoDOM,
    linkCertificado:
      "https://cursos.alura.com.br/certificate/a9fbe142-54b3-4ee8-8ce0-b49837d72c9c?lang=pt_BR",
    descricao: {
      itens: [
        "Entenda a interação do JavaScript com HTML e CSS.",
        "Utilize o JavaScript em uma página real",
        "Aprenda a tornar uma página dinâmica",
        "Manipule dados, eventos e elementos com JavaScript",
        "Entenda como o JavaScript trabalha",
        "Construa robôs para salvar o planeta Terra de uma invasão alienígena",
        "Explore, crie e declare funções no JavaScript",
      ],
    },
    dificuldade: "m",
    plataforma: "Alura",
  },
  {
    // eslint-disable-next-line no-script-url
    title: "JavaScript: objetos",
    imagem: ICONES.JavascriptObjetos,
    linkCertificado:
      "https://cursos.alura.com.br/certificate/9a05559a-6542-4013-84bc-c74abfdb5836?lang=pt_BR",
    descricao: {
      itens: [
        "Aprenda o que são objetos e como manipula-los",
        "Entenda o que são propriedades e métodos de um objeto",
        "Veja como acessar dados em um objeto, alterar e adicionar com métodos do JS",
        "Aprenda a utilizar o formato JSON",
      ],
    },
    dificuldade: "m",
    plataforma: "Alura",
  },
  {
    // eslint-disable-next-line no-script-url
    title: "JavaScript: programação orientada a objetos",
    imagem: ICONES.JavascriptPassosProgramacaoOrientadaObjetos,
    linkCertificado:
      "https://cursos.alura.com.br/certificate/02311b7d-5ad1-4b99-8f42-4dcb19e79555?lang=pt_BR",
    descricao: {
      itens: [
        "Aprenda os conceitos principais da orientação a objetos",
        "Entenda como o JavaScript lida com a OO através de funções e protótipos",
        "Veja os princípios de classe, objeto e herança",
        "Descubra o que é o encapsulamento e por que é importante",
        "Entenda o polimorfismo com exemplos",
        "Analise seu código de acordo com os padrões do SOLID",
      ],
    },
    dificuldade: "m",
    plataforma: "Alura",
  },
  {
    // eslint-disable-next-line no-script-url
    title: "JavaScript: programando a Orientação a Objetos",
    imagem: ICONES.JavascritptOrientacaoObjetos,
    linkCertificado:
      "https://cursos.alura.com.br/certificate/98a9a654-3547-41dd-9d79-dbcc92cc43c3?lang=pt_BR",
    descricao: {
      itens: [
        "Aprenda os conceitos principais da orientação a objetos",
        "Entenda como o JavaScript lida com a OO através de funções e protótipos",
        "Veja os princípios de classe, objeto e herança",
        "Descubra o que é o encapsulamento e por que é importante",
        "Entenda o polimorfismo com exemplos",
        "Analise seu código de acordo com os padrões do SOLID",
      ],
    },
    dificuldade: "m",
    plataforma: "Alura",
  },
  {
    // eslint-disable-next-line no-script-url
    title: "JavaScript: tipos, variáveis e funções",
    imagem: ICONES.FundamentosJavascript,
    linkCertificado:
      "https://cursos.alura.com.br/certificate/98a9a654-3547-41dd-9d79-dbcc92cc43c3?lang=pt_BR",
    descricao: {
      itens: [
        "Aprenda os conceitos principais da orientação a objetos",
        "Entenda como o JavaScript lida com a OO através de funções e protótipos",
        "Veja os princípios de classe, objeto e herança",
        "Descubra o que é o encapsulamento e por que é importante",
        "Entenda o polimorfismo com exemplos",
        "Analise seu código de acordo com os padrões do SOLID",
      ],
    },
    dificuldade: "m",
    plataforma: "Alura",
  },
  {
    // eslint-disable-next-line no-script-url
    title: "Layouts Responsivos: trabalhando com layouts mobile",
    imagem: ICONES.MobileFirstLayoutsResponsivos,
    linkCertificado:
      "https://cursos.alura.com.br/certificate/f1f29b6d-6002-4f0f-a419-c63c2e59671c?lang=pt_BR",
    descricao: {
      itens: [
        "Entenda o processo de desenvolvimento de páginas web.",
        "Conheça o Emmet, ferramenta para agilizar a escrita de códigos.",
        "Melhore a manutenção de códigos com variáveis CSS.",
        "Escreva códigos semânticos que ajudam na acessibilidade e SEO.",
        "Aprenda a lidar com adaptação de diferentes layouts.",
        "Aprimore seu conhecimento de responsividade.",
      ],
    },
    dificuldade: "m",
    plataforma: "Alura",
  },
  {
    // eslint-disable-next-line no-script-url
    title:
      "Lógica de programação: comece em lógica com o jogo Pong e JavaScript",
    imagem: ICONES.PongJavascript,
    linkCertificado:
      "https://cursos.alura.com.br/certificate/7b19bf6f-4dd0-4d15-ae25-6742708fd498?lang=pt_BR",
    descricao: {
      itens: [
        "Desenvolva um jogo do zero em duas linguagens de programação diferentes",
        "Dê seus primeiros passos no mundo do Javascript",
        "Aprenda a trabalhar com variáveis e funções",
        "Crie um jogo completo, com animações, controles, sons e placar",
        "Saiba como utilizar em seus projetos um código compartilhado no Github",
      ],
    },
    dificuldade: "m",
    plataforma: "Alura",
  },
  {
    // eslint-disable-next-line no-script-url
    title: "Lógica de programação: laços e listas com JavaScript",
    imagem: ICONES.JavascriptListasLacos,
    linkCertificado:
      "https://cursos.alura.com.br/certificate/93cdd54a-69fb-461b-9d80-d84e369b4131?lang=pt_BR",
    descricao: {
      itens: [
        "Crie um jogo do zero, com animações, pontuação e sons",
        "Saiba como adicionar imagens no P5 Js",
        "Aprenda na prática como usar listas (arrays)",
        "Entenda como evitar código duplicado com laços de repetição",
        "Desenvolva sua lógica de programação",
      ],
    },
    dificuldade: "m",
    plataforma: "Alura",
  },
  {
    // eslint-disable-next-line no-script-url
    title: "Node.js: API Rest com Express e MongoDB",
    imagem: ICONES.NodePrimeiraApiExpress,
    linkCertificado:
      "https://cursos.alura.com.br/certificate/93cdd54a-69fb-461b-9d80-d84e369b4131?lang=pt_BR",
    descricao: {
      itens: [
        "Aprenda a criar uma API do zero, seguindo o estilo arquitetural REST",
        "Entenda como as requisições HTTP funcionam",
        "Conheça o framework Express, utilizado para desenvolver aplicações robustas e escaláveis",
        "Conecte sua API com um banco de dados MongoDB",
        "Crie buscas por campos específicos na API",
      ],
    },
    dificuldade: "m",
    plataforma: "Alura",
  },
  {
    // eslint-disable-next-line no-script-url
    title: "Node.js: criando sua primeira biblioteca",
    imagem: ICONES.NodejsCriandoPrimeiraBiblioteca,
    linkCertificado:
      "https://cursos.alura.com.br/certificate/ae21031b-0c0c-4cc9-963a-9880b8b3644b?lang=pt_BR",
    descricao: {
      itens: [
        "Aprenda a importar e utilizar código de repositórios de código aberto",
        "Entenda o que são as promessas e como trabalhar com código assíncrono em Node.js",
        "Escreva suas primeiras expressões regulares e veja como utilizá-las para resolver problemas",
        "Crie seus próprios comandos para serem executados no terminal",
        "Use as bibliotecas mais recentes do Node.js para fazer requisições HTTP e manejar respostas",
      ],
    },
    dificuldade: "m",
    plataforma: "Alura",
  },
  {
    // eslint-disable-next-line no-script-url
    title: "Python: começando com a linguagem",
    imagem: ICONES.PythonIntroducaoALinguagem,
    linkCertificado:
      "https://cursos.alura.com.br/certificate/a2ef0806-959e-4a07-b059-ee7c3ff70747?lang=pt_BR",
    descricao: {
      itens: [
        "Aprenda Python 3 na prática",
        "Use PyCharm para desenvolver",
        "Crie um jogo para aprender os recursos fundamentais do Python 3",
        "Rode o seu código em qualquer lugar",
      ],
    },
    dificuldade: "m",
    plataforma: "Alura",
  },
  {
    // eslint-disable-next-line no-script-url
    title: "Python: avançando na linguagem",
    imagem: ICONES.Python3AvancandoNaLinguagem,
    linkCertificado:
      "https://cursos.alura.com.br/certificate/ae21031b-0c0c-4cc9-963a-9880b8b3644b?lang=pt_BR",
    descricao: {
      itens: [
        "Entenda mais como funciona esta linguagem popular",
        "Organize seu código com funções.js",
        "Lide com diferentes estruturas de dados",
        "Conhece as List comprehensions",
        "Trabalhe com arquivos",
      ],
    },
    dificuldade: "m",
    plataforma: "Alura",
  },
  {
    // eslint-disable-next-line no-script-url
    title: "Python: entendendo a Orientação a Objetos",
    imagem: ICONES.Python3IntroOrientacaoObjetos,
    linkCertificado:
      "https://cursos.alura.com.br/certificate/224f150d-6705-4632-8443-d2fcfdfa170f?lang=pt_BR",
    descricao: {
      itens: [
        "Aprenda o paradigma OO com Python 3",
        "Aplique Orientação a objetos com atributos, métodos e classes",
        "Veja como usar propriedades",
        "Entenda encapsulamento e coesão",
        "Saiba quando deixar o seu método privado ou público"
      ],
    },
    dificuldade: "m",
    plataforma: "Alura",
  },
  {
    // eslint-disable-next-line no-script-url
    title: "Python: avançando na orientação a objetos",
    imagem: ICONES.Python3AvancandoNaOrientacaoAObjetos,
    linkCertificado:
      "https://cursos.alura.com.br/certificate/ae21031b-0c0c-4cc9-963a-9880b8b3644b?lang=pt_BR",
    descricao: {
      itens: [
        "Entenda o que é Duck Typing e para que serve",
        "Crie classes abstratas e use herança múltipla",
        "Aprenda sobre o modelo de dados do Python",
        "Conheça os Mixin e Extensão de classes",
        "Saiba a diferença entre __str__ e __repr__",
      ],
    },
    dificuldade: "m",
    plataforma: "Alura",
  },


];

export default certificados;
