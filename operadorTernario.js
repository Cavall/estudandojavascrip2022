const resultado1 = nota => nota >= 7.5 ? "Aprovado" : "Reprovado";
console.log(resultado1(7.9));
console.log(resultado1(6.9));


//o operador ternario acima equivale a function anonima abaixo
//atribuida aa constante resultado2
const resultado2 = function (nota){
    //let nota;
    if (nota >= 7) {
        return 'Aprovado';
    }
    return "Reprovado";
}

console.log(resultado2(8))
console.log(resultado2(5))


