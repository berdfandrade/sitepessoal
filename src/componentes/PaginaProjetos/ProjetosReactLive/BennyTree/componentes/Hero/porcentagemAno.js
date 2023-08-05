function calcularPorcentagemCompletadaAno() {
  const dataReferencia = new Date();
  dataReferencia.setMonth(0);
  dataReferencia.setDate(15);
  dataReferencia.setHours(0, 0, 0, 0);

  const hoje = new Date();
  const diff = hoje - dataReferencia;
  const diffEmDias = Math.floor(diff / (1000 * 60 * 60 * 24));

  const porcentagem = (diffEmDias / 365) * 100;
  const porcentagemCompletada = Math.min(porcentagem, 100);

  return porcentagemCompletada.toFixed(2);
}

export default calcularPorcentagemCompletadaAno;
