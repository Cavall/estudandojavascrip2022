//concatenacao sem template
const nome = "Antonio";
console.log("Ola " + nome + "!!!");

//concatenacao com template
console.log(`Ola Sr.
${nome}!!!`);

//concatenacao com templates e com expressoes
console.log(`2+2 = ${8-4}`);

//concatenaco com templates e function
const modifica = texto => texto.toUpperCase();
console.log(modifica('minusculo'));
console.log(`Ei... Tome ${modifica('cuidado')}!!`);