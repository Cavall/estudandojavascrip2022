console.log(`De acordo com os padrões ECMAScript, no Java Script existe somente um tipo numérico.
Eh O double-precision 64-bit binary format IEEE 754 value (número entre -(253 -1) e 253 -1). 
Não existe um tipo específico para inteiros. 
Além de poderem representar números de ponto-flutuante, o tipo number possui três valores simbólicos:
 +Infinity, -Infinity, e NaN (não numérico).`);

 console.log(Number.MAX_VALUE); //constante maximo valor
 console.log(+0 === -0);
 console.log(42/0); //Infinity eh o resultado
 console.log(42/-0); //-Infinity eh o resultado
 console.log(42/+0); //+Infinity eh o resultado

 //funcoes disponiveis para esse tipo de dado number com chamada por .
 const altura1 = 2.0;
 const altura2 = Number(2.29787); //STRING CONVERTIDA number
 console.log(Number.isInteger(altura1)); //2.0 eh inteiro
 console.log(Number.isInteger(altura2), typeof altura2);
 console.log(altura2.toFixed(1)); //determinado saida com x numeros apos ponto
 console.log(altura2.toString(2)); //retorna string em binario

 console.log(typeof altura2); //eh number com n minusculo...tipo primitivo
 console.log( typeof Number); //eh uma function com N MAISCULO