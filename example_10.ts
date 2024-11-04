class Produto {
    nome: string;
    protected cor: string;
    private price: number;
    constructor(nome: string, cor: string, price: number) {
        this.nome = nome,
        this.cor = cor,
        this.price = price
    }
}

console.log(new Produto("Celular", "Preto", 50.0));
console.log(new Produto("Computador", "Branco", 1350.0));
console.log(new Produto("iPad", "Cinza", 6750.0));