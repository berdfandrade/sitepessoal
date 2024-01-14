// import {Text, Box, Progress} from "@chakra-ui/react"

const username = 'berdfandrade';

fetch(`https://api.github.com/users/${username}/repos`)
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Erro ao carregar os dados');
  })
  .then((data) => {
    const owner = data[0].owner

    console.log(`Total de commits: ${owner}`);
  })
  .catch((error) => {
    console.error(error);
  });