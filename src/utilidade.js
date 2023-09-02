export const catalogo = [{
    id: "1",
    nome: "Rick Holy",
    marca: "Wubba-DuB",
    preco: 50,
    nomeArquivoImagem:"Product-1.png", 
    dub: true,
}, 
{
    id: "2",
    nome: "Rick And Morty",
    marca: "DuB-Wubba",
    preco: 60,
    nomeArquivoImagem:"Product-2.png",
    dub:false
},
{
    id: "3",
    nome: "Rick Floyd",
    marca: "Wubba",
    preco: 70,
    nomeArquivoImagem:"Product-3.png",
    dub: false,
},
{
    id: "4",
    nome: "Bad Boys",
    marca: "DuB",
    preco: 80,
    nomeArquivoImagem:"Product-4.png",
    dub: false,
},
{
    id: "5",
    nome: "Rick Psicodelico",
    marca: "Luuba",
    preco: 90,
    nomeArquivoImagem:"Product-5.png",
    dub: false,
},
{
    id: "6",
    nome: "Morty Psicodelico",
    marca: "Luuba-DuB",
    preco: 100,
    nomeArquivoImagem:"Product-6.png",
    dub: true,
},
{
    id: "7",
    nome: "Turma do Rick",
    marca: "DuB-Luuba",
    preco: 110,
    nomeArquivoImagem:"Product-7.png",
    dub: true,
},
{
    id: "8",
    nome: "Psico Rick And Morty",
    marca: "DuB-DuB",
    preco: 120,
    nomeArquivoImagem:"Product-8.png",
    dub: true,
},
];

export function salvarLocalStorage(chave, informacao) {
    localStorage.setItem(chave, JSON.stringify(informacao));
}

export function LerLocalStorage(chave) {
    return JSON.parse(localStorage.getItem(chave));
}

export function apagarDoLocalStorage(chave) {
    localStorage.removeItem(chave);
}

export function desenharProdutoNoCarrinhoSimples(idProduto, idContainerHtml, quantidadeProduto) {
    const produto = catalogo.find((p) => p.id === idProduto);
    const containerProdutosCarrinho = document.getElementById(idContainerHtml);
    
    const elementoArticle = document.createElement("article");
    const articleClasses = ["flex", "bg-stone-200", "rounded-lg", "p-1", "relative", "mb-2", "w-96"]
    
    for (const articleClass of articleClasses){
        elementoArticle.classList.add(articleClass)
    }
    const cartaoProdutoCarrinho = `
        <img src="./assets/img/${produto.nomeArquivoImagem}" alt="Carrinho: ${produto.nome}" class="h-24 rounded-lg">
        <div class="p-2 flex flex-col justify-between">
        <p class="text-slate-900 text-sm">${produto.nome}</p>
        <p class="text-slate-400 text-sm">Tamanho: 40x20</p>
        <p class="text-green-700 text-lg">$${produto.preco}</p>
        </div>
        <div class='flex text-slate-950 items-end absolute bottom-0 right-2 text-lg'>
            <p id='quantidade-${produto.id}'class='ml-2'>${quantidadeProduto}</p>
        </div>`;
    elementoArticle.innerHTML = cartaoProdutoCarrinho;
    containerProdutosCarrinho.appendChild(elementoArticle);
}