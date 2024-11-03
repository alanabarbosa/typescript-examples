interface Produto {
    nome: string;
    preco: number;
    descricao: string;
    garantia: string;
    seguroAcidentes: boolean;
    empresaFabricante: { 
        nome: string;
        fundacao: number;
        pais: string;
    };
    empresaMontadora: { 
        nome: string;
        fundacao: number;
        pais: string;
    };    
}

const fetchProdutos = async (): Promise<Produto> => {
    const response = await fetch("https://api.origamid.dev/json/notebook.json");
    
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    
    const data: Produto = await response.json();

    return data;
}

const exibirDetalhes = async () => {
    const produto = await fetchProdutos();
    const container = document.getElementById('produtos');

    if (container) {
        container.innerHTML = `
            <h2>Produto</h2>
            <p>Nome: ${produto.nome}</p>
            <p>Preço: R$ ${produto.preco}</p>
            <p>Descrição: ${produto.descricao}</p>
            <p>Garantia: ${produto.garantia}</p>
            <p>Seguro Acidente: ${produto.seguroAcidentes ? "Possui" : "Não possui"}</p>
            <h3>Empresa Fabricante</h3>
            <p>Nome: ${produto.empresaFabricante.nome}</p>
            <p>Fundação: ${produto.empresaFabricante.fundacao}</p>
            <p>País: ${produto.empresaFabricante.pais}</p>
            <h3>Empresa Moontadora</h3>
            <p>Nome: ${produto.empresaMontadora.nome}</p>
            <p>Fundação: ${produto.empresaMontadora.fundacao}</p>
            <p>País: ${produto.empresaMontadora.pais}</p>            
        `;
    }
}

exibirDetalhes();
