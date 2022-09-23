//MEMORIZANDO ESCOPO PARA VARIAVEIS DECLARADAS COM let

console.log(`Variaveis declaradas com let tem escopo global, de bloco e de funcao.
Se declarada numa funcao dentro de um bloco...Ele procura na funcao, depois no bloco e 
depois fora do bloco...vejamos: `);

let numero = 1;

{
    let numero = 2;
    console.log('Dentro do bloco = ', numero);
}
console.log('Fora do bloco = ', numero);

function imprimeNumero() {
    numero = 3;
    console.log('Dentro da function = ', numero);
}
imprimeNumero();