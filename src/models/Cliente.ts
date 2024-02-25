class Cliente {

  constructor(private id: string, private nome: string) {}

  getId(): string { return this.id; }

  getNome(): string { return this.nome; }

}

export { Cliente };