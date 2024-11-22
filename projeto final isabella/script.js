let totalCarrinho = 0;
function adicionarAoCarrinho(preco) 
{
    totalCarrinho += preco; // Adiciona o preço do produto ao total do carrinho
    document.getElementById('totalCarrinho').innerText = totalCarrinho.toFixed(2); // Atualiza o total no carrinho
}