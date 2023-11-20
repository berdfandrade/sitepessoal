import * as GI from "react-icons/gi";
import * as BI from "react-icons/bi";

import {
  Grid,
  Flex,
  Progress,
  Icon,
  Text,
  Center,
} from "@chakra-ui/react";

function IconHabilidade({ icone, nome, progresso, descricao, cor }) {
  return (
    <Flex flexDirection="column">
      <Center flexDirection={"column"}>
        <Icon color={cor ? cor : null} boxSize={"50px"} as={icone} />
        <Text mb={1} justifyContent={"center"}>
          {nome}
        </Text>

        <Progress
          size={"sm"}
          w="90px"
          borderRadius={"full"}
          value={progresso ? progresso : 20}
          colorScheme={
            progresso <= 20 ? "red" : progresso <= 40 ? "orange" : "blue"
          }
        />
        <Text mt={2} maxW={"90%"} fontSize={"xs"}>
          {descricao}
        </Text>
      </Center>
    </Flex>
  );
}

function GridHabilidades() {
  return (
    <Flex direction="column" align="center" mt={4}>
      <Grid
        maxWidth="90%"
        templateColumns="repeat(2, 1fr)"
        gap={3}
        autoRows="minmax(120px, auto)"
      >
        <IconHabilidade
          nome={"Intelligence"}
          descricao={"Ability to speak intelligently"}
          icone={GI.GiBrain}
          progresso={70}
        />
        <IconHabilidade
          nome={"Love"}
          icone={GI.GiHeartBattery}
          progresso={5}
          descricao={"Love skills"}
        />
        <IconHabilidade
          nome={"Social"}
          icone={GI.GiTalk}
          progresso={50}
          descricao={"Social skills"}
        />
        <IconHabilidade
          nome={"Drums"}
          descricao={"Drumming skills"}
          icone={GI.GiDrumKit}
          progresso={89}
        />
        <IconHabilidade
          nome={"Party"}
          descricao={"Party skills!"}
          icone={GI.GiPartyHat}
          progresso={70}
        />
        <IconHabilidade
          nome={"Running"}
          icone={GI.GiRunningShoe}
          progresso={70}
          descricao={"Running skills"}
        />

        <IconHabilidade
          nome={"Criativity"}
          icone={GI.GiFluffyCloud}
          progresso={100}
          descricao={"Criative skills"}
        />
        <IconHabilidade
          nome={"Griding"}
          icone={GI.GiMuscleUp}
          progresso={80}
          descricao={"Griding skills"}
        />
        <IconHabilidade
          nome={"Physical"}
          icone={GI.GiMuscularTorso}
          progresso={60}
          descricao={"Body health"}
        />
        <IconHabilidade
          nome={"Memory"}
          icone={BI.BiMemoryCard}
          progresso={40}
          descricao={"Remembering skills"}
        />
        <IconHabilidade
          nome={"Logical reasoning"}
          icone={GI.GiAbacus}
          progresso={20}
          descricao={"Problem solving skills"}
        />
        <IconHabilidade
          nome={"Code"}
          icone={GI.GiComputing}
          progresso={82}
          descricao={"Programming skills"}
        />
        <IconHabilidade
          nome={"Aesthetics"}
          icone={GI.GiEyeTarget}
          progresso={60}
          descricao={"Apuração de senso estético"}
        />
        <IconHabilidade
          nome={"Humor"}
          icone={GI.GiChicken}
          progresso={90}
          descricao={"Sense of humor"}
        />
        <IconHabilidade
          nome={"Movies"}
          icone={GI.GiFilmProjector}
          progresso={70}
          descricao={"Movie knowledge"}
        />
        <IconHabilidade
          nome={"Animes"}
          icone={GI.GiNinjaHeroicStance}
          progresso={70}
          descricao={"Anime knowledge"}
        />
        <IconHabilidade
          nome={"Music"}
          icone={GI.GiMusicalNotes}
          progresso={70}
          descricao={"Knowledge about music "}
        />
        <IconHabilidade
          nome={"Football"}
          icone={GI.GiSoccerBall}
          progresso={30}
          descricao={"Football skills"}
        />
        <IconHabilidade
          nome={"Coffee"}
          icone={GI.GiCoffeeCup}
          progresso={100}
          descricao={"Coffee consumption"}
        />
        <IconHabilidade
          nome={"Driking"}
          icone={GI.GiDrinking}
          progresso={60}
          descricao={"Alcohol consumption"}
        />
        <IconHabilidade
          nome={"Smoking"}
          icone={GI.GiCigarette}
          progresso={1}
          descricao={"Smoking"}
        />
        <IconHabilidade
          nome={"Irony"}
          icone={GI.GiCardJoker}
          progresso={70}
          descricao={"Irony usage"}
        />
      </Grid>
    </Flex>
  );
}

export default GridHabilidades;
