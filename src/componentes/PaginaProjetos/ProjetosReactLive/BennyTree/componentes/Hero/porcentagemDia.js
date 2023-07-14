function calcularPorcentagemDiaPassado() {
    const dataAtual = new Date();
    const horaAtual = dataAtual.getHours();
    const minutoAtual = dataAtual.getMinutes();
    const segundoAtual = dataAtual.getSeconds();
  
    const totalSegundosDia = 24 * 60 * 60; // Total de segundos em um dia (24 horas * 60 minutos * 60 segundos)
    const segundosPassados = horaAtual * 60 * 60 + minutoAtual * 60 + segundoAtual; // Total de segundos passados desde meia-noite
  
    const porcentagemPassada = (segundosPassados / totalSegundosDia) * 100;
  
    return Math.floor(porcentagemPassada) // Retorna a porcentagem formatada com duas casas decimais
  }
  
  // Exemplo de uso:
  const porcentagemDiaPassado = calcularPorcentagemDiaPassado();
  console.log(`Porcentagem do dia já passado: ${porcentagemDiaPassado}`);
  
export default calcularPorcentagemDiaPassado