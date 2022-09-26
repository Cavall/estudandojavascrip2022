//Basico de destruct
console.log(`A sintaxe de atribuição via desestruturação (destructuring assignment)
é uma expressão JavaScript que possibilita extrair dados de arrays ou objetos em variáveis distintas.`)

console.log(`SINTAXE 1:`)
//atribuido valores para diversas variaveis
let a, b, c;
[ a, b, c] = [1,2,3];
console.log(a, b,c)
console.log(typeof a);

console.log(`SINTAXE 2:`);
//Outra forma de atribuicao

let x, y, z; //as variaves tem que ser declaradas antes da atribuicao
({x, y, z } = {x :1, y:10, z: 30 });
console.log(x, y, z);
console.log(typeof z);

let oQueEh = [2,3,4,5,6,7];
console.log(`oQueeh eh: `, typeof oQueEh);
//usando destruct para acessar membros da array 
let [elemento1, elemento2] = oQueEh; //EM ARRAY USAMOS COLCHETES
console.log(elemento1, elemento2, typeof elemento2) ;

//Criando um objeto e extraindo seus atributos/dados
const pessoa = {
    nome : 'Antonio',
    idade : 63,
    endereco: {
        logradouro : 'Rua da Felicidade',
        numero : 27,
        cep : 2306070
    }
}
console.log(pessoa, typeof pessoa);

const {nome: nm , idade: id} = pessoa; //EM OBJETOS USAMOS CHAVES
console.log(nm ,  id);
const { endereco : { logradouro: end, numero: nmr} } = pessoa;
console.log(end, nmr, typeof pessoa.endereco);

