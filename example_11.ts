const fetchVendas = async () => {
    const response = await fetch("https://api.origamid.dev/json/vendas.json");
    const data = await response.json();
    somarVendas(data);
}

fetchVendas();

interface ProdutoDetalhes {
    marca: string,
    cor: string
}

type Venda = [string, number, string, ProdutoDetalhes];

const somarVendas = (vendas: Venda[]) => {
    const total = vendas.reduce((anterior, atual) => anterior + atual[1], 0);
    const vendasContainer = document.querySelector("#vendas");
    if (vendasContainer) vendasContainer.innerHTML = `<p>Total de vendas: ${total}</p>`;
}