console.log(`Armazenando uma funcao em uma variavel`);
const imprimirSoma = function (a, b) {
    console.log(a + b)
}
imprimirSoma(3, 7); //veja que a variavel assumiu a funcao

console.log(`Armazenando uma funcao arrow em uma variavel: `);
const soma = (x, y ) => {
    return x +y;
}
console.log(soma(3, 7));

console.log(`Armazenando um funcao arrow simplificada em uma variavel: `)
const subtracao = (a, b) => a - b;
console.log(subtracao(20, 13));

console.log(`Armazenando um funcao arrow ainda mais simplificada em uma variavel: `)
const imprimirSaida = a => console.log(a);
imprimirSaida(`Que legal`);