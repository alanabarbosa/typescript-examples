interface Carro {
    nome: string,
    cor: string,
    quantidade: number,
}

const carro1 = {
    nome: "BMW",
    cor: "Branco",
    quantidade: 10,
}

const carro2 = {
    nome: "Ferrari",
    cor: "Vermelho",
    quantidade: 5,
}

const mostrarQuantidade = (carro: Carro) => console.log(carro.quantidade + 20);

mostrarQuantidade(carro1);
mostrarQuantidade(carro2);