//Usando operador destruct e valores padaro com Arrays

function numeroAleatorio ([min = 0, max = 500]) {
    if (min > max) {
        [min, max] = [max, min];
    }
    const resultado = Math.random() * (max - min) + min;
    return Math.floor(resultado);
}

console.log(numeroAleatorio([100 , 50]));
console.log(numeroAleatorio([97]));
console.log(numeroAleatorio([ , 4]));
console.log(numeroAleatorio([]));