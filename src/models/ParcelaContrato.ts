class ParcelaContrato {

  constructor(private id: number,
              private contratoId: string,
              private valorVencimento: number,
              private dataVencimento: string,
              private dataUltimoPagamento: string,
              private totalPago: number,
              private capitalAberto: number) {}

  getId() { return this.id };
  getContratoId() { return this.contratoId };
  getValorVencimento() { return this.valorVencimento };
  getDataVencimento() { return this.dataVencimento };
  getDataUltimoPagamento() { return this.dataUltimoPagamento };
  getTotalPago() { return this.totalPago };
  getCapitalAberto() { return this.capitalAberto };

}

export { ParcelaContrato };