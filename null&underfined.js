console.log(`No JavaScript eh importante entender que os conceitos de atribuicao 
por refencia e por valor sao distintos. Isto eh causam efeitos diferentes`)
console.log(`---------------------------------------------------`)
console.log(`Atribuicao por referencia aponta para um endereco de memoria.
Mais de uma variavel podem apontar para um mesmo endereco da memoria do computador.
As modificacoes na variavel podem ser verificadas de qualquer variavel que aponte para essa memoria.`);
console.log(`----------------------------------------------------`)
console.log(`Na atribuicao por valor, o valor de uma variavel eh repassado para outra variavel que permanece num endereco de memoria diferente.
Com isso os valores de ambas podem ser modificados e nao serem os mesmos. `)
console.log(`----------------------------------------------------`)

let valor; //variavel nao inicializada
console.log(valor);
console.log(`----------------------------------------------------`)
valor = null;
console.log(valor);
//console.log(valor.toString());//TypeError: Cannot read properties of null (reading 'toString')
console.log(`----------------------------------------------------`)
const produto3 = {};
console.log(produto3);
console.log(produto3.preco); //aqui preco sera apontado com undefined
produto3.preco = null;
console.log(produto3.preco); //aqui preco sera null
produto3.preco = 4.97;
console.log(produto3.preco); // eh possivel atribuir valor ao preco, porque
//o produto existe e esta refereciado e variavel preco dentro do produto
console.log(produto3, typeof produto3) //dados do objeto produto