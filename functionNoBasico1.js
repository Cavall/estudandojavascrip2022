console.log(`Funcao sem retorno, com saida no console`);
function imprimirSoma (a, b) {
    console.log(a + b);
}
//chamando a funcao com argumentos diversos
imprimirSoma(7, 3);
imprimirSoma(7);
imprimirSoma(2, 7, 9, 22);
imprimirSoma();

console.log(`Funcao com retorno`)
function somando(x, y=1){
    return x + y;
}
console.log(somando(3, 7))
console.log(somando(5)); //aqui eh 6 porque y ja foi inicializado com 1 por padrao
console.log(somando());