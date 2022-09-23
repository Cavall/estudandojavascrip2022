//Usando var

for (var i = 1; i < 10; i++){
    console.log(i);
}
console.log('Usando var verificamos que seu escopo eh global e acessivel fora do loop for');
console.log("i, fora do loop, com var = ", i);

//Usando let
for (let a = 1; a < 10; a++) {
    console.log(a);
}
console.log('Usando let verificamos que seu escopo aqui eh de bloco e nao esta acessivel fora do loop for');
//console.log(a); a variavel let a nao eh acessivel fora do loop