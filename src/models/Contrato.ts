class Contrato {

  constructor(private id: string,
              private clienteId: number,
              private data: string, 
              private valorTotal: number, 
              private valorEntrada: number, 
              private valorFinanciado: number) {}
  
  getId() { return this.id };
  getClienteId() { return this.clienteId };
  getData() { return this.data };
  getValorTotal() { return this.valorTotal };
  getValorEntrada() { return this.valorEntrada };
  getValorFinanciado() { return this.valorFinanciado };

}

export { Contrato };