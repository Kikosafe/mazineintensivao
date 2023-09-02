const catalogoProdutos = document.getElementById("container-produto");

function exibirTodos() {
    const produtosEscondidos = Array.from(catalogoProdutos.getElementsByClassName("hidden"));

    for(const produto of produtosEscondidos) {
        produto.classList.remove("hidden");
    }
}

function esconderLuuba() {
    exibirTodos();
    const produtosLuuba = Array.from(catalogoProdutos.getElementsByClassName("luuba"));

    for (const produto of produtosLuuba) {
        produto.classList.add("hidden"); 
    }
}

function esconderDub() {
    exibirTodos();
    const produtosDub = Array.from(catalogoProdutos.getElementsByClassName("dub"));

    for (const produto of produtosDub) {
        produto.classList.add("hidden"); 
    }
}

export function inicializarFiltros() {
    document.getElementById("exibir-todos").addEventListener("click", exibirTodos);

    document.getElementById("exibir-luuba").addEventListener("click", esconderDub);

    document.getElementById("exibir-dub").addEventListener("click", esconderLuuba);
    
    

    
}