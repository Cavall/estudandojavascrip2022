//Criando objeto a partir do objeto vazio
const produto1 = {};
console.log(produto1); // vai imprimir chaves vazias
//incluindo par de chaves e valores
produto1.nome = 'Notebook Ads';
produto1.preco = 4779.70;
console.log(produto1)

//cliente objeto com pares de chave e valor
const produto2 = {
    nome : 'Descktop Pentium',
    preco : 7995.00,
    localizacao  : {
        corredor : 'vermelho',
        prateleira : 7 ,
        coluna : 5
     }
    
}
console.log(produto2);
console.log(typeof produto2);
console.log(typeof produto2.localizacao);