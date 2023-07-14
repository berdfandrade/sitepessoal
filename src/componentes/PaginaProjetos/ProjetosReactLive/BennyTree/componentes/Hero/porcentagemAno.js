function calcularPorcentagemCompletadaAno() {
    const dataReferencia = new Date();
    dataReferencia.setMonth(0); // Mês de janeiro (0-11)
    dataReferencia.setDate(15); // Dia 15
    dataReferencia.setHours(0, 0, 0, 0); // Define a hora para meia-noite
  
    const hoje = new Date();
    const diff = hoje - dataReferencia; // Diferença em milissegundos
    const diffEmDias = Math.floor(diff / (1000 * 60 * 60 * 24)); // Diferença em dias
  
    const porcentagem = (diffEmDias / 365) * 100; // Porcentagem em relação a um ano
    const porcentagemCompletada = Math.min(porcentagem, 100); // Limita a porcentagem em 100%
  
    return porcentagemCompletada.toFixed(2); // Retorna a porcentagem completada com 2 casas decimais
  }
  
  // Exemplo de uso
//   const porcentagemCompletadaAno = calcularPorcentagemCompletadaAno();
//   console.log(`Hoje é ${new Date().toLocaleDateString()}`);
//   console.log(`Já foi completado aproximadamente ${porcentagemCompletadaAno}% do ano.`);

export default calcularPorcentagemCompletadaAno