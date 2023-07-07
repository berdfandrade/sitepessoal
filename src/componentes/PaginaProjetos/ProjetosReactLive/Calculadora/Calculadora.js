import { useState, useEffect } from "react";
import {
  Button,
  Container,
  Grid,
  VStack,
  Box,
  Text,
} from "@chakra-ui/react";

function Calculadora() {
  const [valorDisplay, setValorDisplay] = useState("0");
  const [primeiroOperando, setPrimeiroOperando] = useState(null);
  const [operador, setOperador] = useState(null);
  const [aguardandoSegundoOperando, setAguardandoSegundoOperando] =
    useState(false);

  const inserirDigito = (digito) => {
    if (aguardandoSegundoOperando) {
      setValorDisplay(String(digito));
      setAguardandoSegundoOperando(false);
    } else {
      setValorDisplay((prevValor) =>
        prevValor === "0" ? String(digito) : prevValor + digito
      );
    }
  };

  const inserirDecimal = () => {
    if (!valorDisplay.includes(".")) {
      setValorDisplay((prevValor) => prevValor + ".");
    }
  };

  const limparDisplay = () => {
    setValorDisplay("0");
    setPrimeiroOperando(null);
    setOperador(null);
    setAguardandoSegundoOperando(false);
  };

  const realizarOperacao = (proximoOperador) => {
    const valorInput = parseFloat(valorDisplay);

    if (primeiroOperando === null) {
      setPrimeiroOperando(valorInput);
    } else if (operador) {
      const resultado = calcular(primeiroOperando, valorInput, operador);
      setValorDisplay(String(resultado));
      setPrimeiroOperando(resultado);
    }

    setAguardandoSegundoOperando(true);
    setOperador(proximoOperador);
  };

  const calcular = (primeiroOperando, segundoOperando, operador) => {
    switch (operador) {
      case "+":
        return primeiroOperando + segundoOperando;
      case "-":
        return primeiroOperando - segundoOperando;
      case "*":
        return primeiroOperando * segundoOperando;
      case "/":
        return primeiroOperando / segundoOperando;
      default:
        return segundoOperando;
    }
  };

  const handleKeyDown = (event) => {
    const { key } = event;
    if (/[0-9]/.test(key)) {
      inserirDigito(Number(key));
    } else if (key === ".") {
      inserirDecimal();
    } else if (key === "+" || key === "-" || key === "*" || key === "/") {
      realizarOperacao(key);
    } else if (key === "Enter") {
      realizarOperacao("=");
    } else if (key === "Escape") {
      limparDisplay();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <Container item="sm">
      <VStack spacing={6}>
        <Box
          bg="blackAlpha.600"
          width={250}
          p={4}
          border={"2px solid gray"}
          borderRadius="md"
        >
          <Text textAlign="right" fontSize={valorDisplay.length >= 10 ? 18 : valorDisplay.length >= 15 ? 12   : 30}>
            {valorDisplay}
          </Text>

          <Grid templateColumns="repeat(4, 1fr)" gap={2}>
            <Button onClick={() => inserirDigito(7)}>7</Button>
            <Button onClick={() => inserirDigito(8)}>8</Button>
            <Button onClick={() => inserirDigito(9)}>9</Button>
            <Button onClick={() => realizarOperacao("/")}>÷</Button>
            <Button onClick={() => inserirDigito(4)}>4</Button>
            <Button onClick={() => inserirDigito(5)}>5</Button>
            <Button onClick={() => inserirDigito(6)}>6</Button>
            <Button onClick={() => realizarOperacao("*")}>*</Button>
            <Button onClick={() => inserirDigito(1)}>1</Button>
            <Button onClick={() => inserirDigito(2)}>2</Button>
            <Button onClick={() => inserirDigito(3)}>3</Button>
            <Button onClick={() => realizarOperacao("-")}>-</Button>
            <Button onClick={() => inserirDigito(0)}>0</Button>
            <Button onClick={inserirDecimal}>.</Button>
            <Button onClick={() => realizarOperacao("+")}>+</Button>
            <Button bg={"orange.300"} onClick={limparDisplay}>
              C
            </Button>
            <Button bg={"red.300"}onClick={() => realizarOperacao("=")}>=</Button>
          </Grid>
        </Box>
      </VStack>
    </Container>
  );
}

export default Calculadora;
  