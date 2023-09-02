import { renderizarCatagolo } from "./src/cartaoProduto";
import { inicializarFiltros } from "./src/filtrosCatagolo";
import { atualizarPrecoCarrinho, inicializarCarrinho, renderizarProdutosCarrinho } from "./src/menuCarrinho";



renderizarCatagolo();
inicializarCarrinho();
renderizarProdutosCarrinho();
atualizarPrecoCarrinho();
inicializarFiltros(); 
