console.log('No javascript = eh operador de atribuicao');
console.log('No javascript == eh operador relacional que compara somente valores');
console.log(`No javascript ===  eh operador relacional quer compara tipo e valores...
=== Eh conhecido como operador relacional estritamente igual`);
console.log('------------------------------------------------------');
console.log(`Vejamos exemplos com operadores relacionais que sempre retornam true ou false:`)
console.log('01)', '5' == 5); //aqui comparamos uma string com um number ...vai dar true
console.log('02)', '5' === 5); //aqui comparamos uma string com um number ...vai dar false
console.log('03)', '5' != 5); //aqui comparamos uma string com um number ...vai dar false
console.log('04)', '5' !== 5); //aqui comparamos uma string com um number ...vai dar true


console.log('05)', '5' < 3); //aqui comparamos uma string com um number ...vai dar false
console.log('06)', '5' > 3); //aqui comparamos uma string com um number ...vai dar true
console.log('07)', '5' <= 3); //aqui comparamos uma string com um number ...vai dar false
console.log('08)', '5' >= 3); //aqui comparamos uma string com um number ...vai dar true
console.log('09)', 5 > 3); //aqui comparamos number com number...vai dar true

//Vejamos relacionais com objetos
const data1 = new Date(0) //criamos uma referencia para data1
console.log (data1);
const data2 = new Date(0) //criamos uma referencia ou ponteiro para data2
console.log (data2);
console.log('10)', data1 === data2) //comparamos extritamente os endereco das memorias...vai dar false
console.log('11)', data1 == data2) //comparamos os enderecos das memorias...vai dar false
// Mas se compararmos os atributos do objeto o que acontece?
console.log("12", data1.getTime == data2.getTime); //os dados tem mesmo tipo e mesmo valor ...vai dar true
console.log("13", data1.getTime === data2.getTime); //os dados tem mesmo tipo e mesmo valor ...vai dar true

console.log(`Aconselha-se usar === e !== para evitarmos problemas com os tipos`)