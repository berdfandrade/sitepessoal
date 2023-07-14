import React, { useEffect, useState } from 'react';

function TerminalWriter({ frase }) {
  const [texto, setTexto] = useState('');
  const [apagando, setApagando] = useState(false);
  const delay = 100; // Atraso entre cada letra (em milissegundos)

  useEffect(() => {
    let index = 0;
    let apagandoFrase = false;

    function escreverLetra() {
      if (!apagandoFrase) {
        if (index < frase.length) {
          const letra = frase.charAt(index);
          setTexto((textoAnterior) => textoAnterior + letra);
          index++;
        } else {
          apagandoFrase = true;
          setTimeout(escreverLetra, delay * 3); // Atraso antes de começar a apagar
          return;
        }
      } else {
        if (index >= 0) {
          setTexto((textoAnterior) => textoAnterior.slice(0, -1));
          index--;
        } else {
          apagandoFrase = false;
          return;
        }
      }

      setTimeout(escreverLetra, delay);
    }

    escreverLetra();
  }, [frase]);

  return (
    <div>
      <pre>{texto}</pre>
    </div>
  );
}

export default TerminalWriter;
