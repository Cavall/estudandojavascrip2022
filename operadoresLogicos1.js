//Vamos ver, com javascript, as tabelas verdades e aplica-las em um exemplo

console.log(`Na tabela verdade para o operador And (&&), o resultado sera true se todas as condicoes forem verdadeiras `);
console.log(`Na tabela verdade para o operador Or (||), o resultado sera true se alguma das condicoes forem verdadeiras 
e sera false se todas as condicoes forem false`);
console.log(`Na tabela verdade para o operador XOr Exclusivo (X||), o resultado sera true se as condicoes forem antagonicas(contrarias)
e false se ambas condicoes forem iguais, entao false e false resultara false e
true e true resultara false`);
console.log(`A negacao logica (usa se !) inverte a condicao...se true retorna false e se false
retorna true`)

//EXEMPLO
console.log(`Vamos a um exemplo pratico...Um vendedor pretende vender dois produtos.
Caso consiga vender os dois, ele compra um carro, viaja para a praia e comemora o resultado. Caso venda
somente o produto 1, ele nao compra o carro, mas viaja para a praia e comemora o resultado. Caso venda somente
o produto 2, Ele nao compra o carro, ele nao viaja para a praia, mas comemora a venda. Caso nao venda nenhum dos produtos, 
ele nao compra o carro, nao viaja e e nao comemora os resultados`)


function vendas (produto1, produto2) {
    const compraCarro = produto1 && produto2
    const viajaPraia = (produto1 && produto2) || produto1
    const comemoraVenda = produto1 || produto2
    const decepciondo = !comemoraVenda;
    return {compraCarro, viajaPraia, comemoraVenda, decepciondo}
    }

console.log(vendas (true, true));
console.log(vendas (true, false));
console.log(vendas (false, true));
console.log(vendas (false, false));


