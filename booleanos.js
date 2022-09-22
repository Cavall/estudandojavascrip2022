//Resultados verdadeiros
console.log("Os boolean com resultados verdadeiros: ")
isHappy = true;
console.log(isHappy);
isHappy = 1;
console.log(isHappy); //aqui isHappy eh 1
console.log(!!isHappy);
console.log(!!3);
console.log(!!-1);
console.log(!!" ");
console.log(!!'texto');
console.log(!!Infinity);
console.log(!!(isHappy = true));
console.log(!!-Infinity);


console.log("Os boolean com resultados FALSOS: ")
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isHappy = false));

//Em operandos logicos
console.log(`Agora com operador logico ou: `);
console.log(!!('' || null || 0 || NaN));
console.log(!!('' || null || 0 || '279'));

//Agora algo diferente da linguagem
let nome = "";
console.log(nome || "Nome vazio ou desconhecido");
nome = 'Antonio';
console.log(nome || "Nome vazio ou desconhecido");