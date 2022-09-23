console.log(`Hoisting ou icamento no javascript so acontece com a var.`);

console.log('com var a= ', a);
//var a;
var a= 7;
console.log('a apos atribuicao na palavra var = ', a);


//Com let nao ocorre o icamento ou hoisting
//console.log('com let = ', b); esse codigo da erro com o let abaixo
let b = 9;
console.log(b);