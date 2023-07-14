const frases = [
    // Frases de Breaking Bad
    "I'm the one who knocks.",
    "Say my name.",
    "I am the danger.",
    "I did it for me.",
    "Yeah, science!",
    "I'm in the empire business.",
    "Tread lightly.",
    "No more half-measures.",
    "Yeah, bitch! Magnets!",
    "I'm not in danger, Skyler. I am the danger.",
  
    // Frases de Naruto
    "Acredite!",
    "Eu nunca volto atrás na minha palavra. Esse é o meu caminho ninja!",
    "Um verdadeiro herói não é medido pelo tamanho de sua força, mas pela força de seu coração.",
    "Quando um homem aprende a amar, ele deve suportar o risco do ódio.",
    "Eu não vou mais fugir... Eu não vou mais voltar atrás na minha palavra... esse é o meu jeito ninja!",
    "Dattebayo!",
    "O trabalho árduo não vale nada para aqueles que não acreditam em si mesmos.",
    "Eu quero ficar com você. De agora em diante, quero passar todos e cada um dos meus dias até morrer com você, e somente você.",
    "A diferença entre a estupidez e o gênio é que o gênio tem seus limites.",
    "Aqueles que quebram as regras são lixo, mas aqueles que abandonam seus amigos são piores do que lixo.",
  
    // Mais frases de Breaking Bad
    "I'm in the empire business.",
    "I'm the cook.",
    "It's not over until I say it's over.",
    "We're done when I say we're done.",
    "I did it for me. I liked it. I was good at it. And I was really... I was alive.",
    "All hail the king.",
    "Jesse, you asked me if I was in the meth business or the money business. Neither. I'm in the empire business.",
    "We're going to make a lot of money together.",
    "You know exactly who I am. Say my name.",
    "You clearly don't know who you're talking to, so let me clue you in. I am not in danger, Skyler. I am the danger."
  ];
  

  function fraseAleatoria (arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

export {frases, fraseAleatoria}