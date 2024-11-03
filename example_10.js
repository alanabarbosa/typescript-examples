"use strict";
class Produto {
    nome;
    cor;
    price;
    constructor(nome, cor, price) {
        this.nome = nome,
            this.cor = cor,
            this.price = price;
    }
}
console.log(new Produto("Celular", "Preto", 50.0));
console.log(new Produto("Computador", "Branco", 1350.0));
console.log(new Produto("iPad", "Cinza", 6750.0));
