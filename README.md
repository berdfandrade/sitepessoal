# Site Pessoal 
Meu site pessoal feito em React! Aqui eu conto a minha história na programação e também mostro minhas habilidades e projetos de forma criativa!
Este é o repositório do projeto principal do site. O projeto foi construído utilizando o React e a biblioteca de componentes Chakra UI. O site possui várias páginas, incluindo a página inicial, páginas de habilidades, projetos, sobre e certificações. O roteamento é gerenciado por meio do React Router.

![793shots_so](https://github.com/berdfandrade/sitepessoal/assets/96706881/555cc84f-71c5-4dca-bf73-714b771cd29a)

## Dependências

Certifique-se de ter as seguintes dependências instaladas para executar o projeto:

- React: A biblioteca JavaScript para construir interfaces de usuário.
- React Router: Uma biblioteca para lidar com o roteamento de páginas no React.
- Chakra UI: Um framework de componentes de interface de usuário para React.

Para instalar as dependências, você pode executar o seguinte comando no terminal:

```shell
npm install react react-dom react-router-dom @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

- **componentes**: Este diretório contém os componentes reutilizáveis que são utilizados nas páginas.
- **componentes/BotaoDarkMode**: Este diretório contém os componentes relacionados ao botão de tema escuro.
- **componentes/HomePage**: Este diretório contém os componentes relacionados à página inicial.
- **componentes/PaginaHabilidades**: Este diretório contém os componentes relacionados à página de habilidades.
- **componentes/PaginaProjetos**: Este diretório contém os componentes relacionados à página de projetos.
- **componentes/PaginaSobre**: Este diretório contém os componentes relacionados à página sobre.
- **componentes/PaginaCertificacoes**: Este diretório contém os componentes relacionados à página de certificações.
- **index.js**: Este arquivo é o ponto de entrada do aplicativo e renderiza o componente raiz `App`.
- **App.js**: Este arquivo contém o componente `App` que define as rotas e renderiza as diferentes páginas do site.

## Uso

Para executar o projeto, você pode usar o seguinte comando no terminal:

```shell
npm start
```

Isso iniciará o servidor de desenvolvimento e abrirá o site no seu navegador. Você poderá visualizar o site e navegar pelas diferentes páginas.

## Personalização do Tema

O tema do site é personalizado e é fornecido pelo componente `Tema` localizado em `componentes/BotaoDarkMode/Tema.js`. Você pode fazer alterações nesse arquivo para personalizar as cores e os estilos do tema do site.

## Rotas

As rotas do site são gerenciadas pelo React Router. Aqui estão as rotas definidas no componente `App`:

- `/`: Rota da página inicial.
- `/habilidades`: Rota da página de habilidades.
- `/projetos`: Rota da página de projetos.
- `/sobre`: Rota da página sobre.
- `/certificacoes`: Rota da página de certificações.

Cada rota é mapeada para o componente correspondente que será renderizado quando a rota for acessada.

