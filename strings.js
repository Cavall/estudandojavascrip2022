console.log(`O tipo String em JavaScript é usado para representar dados textuais. 
Isto é um conjunto de "elementos" de valores de 16-bits unsigned integer. 
Cada elemento na string ocupa uma posição na string. 
O primeiro elemento está no índice 0, o próximo no índice 1, e assim por diante. 
O comprimento de uma string é o número de elementos nela.`)
console.log(`Strings sao delimitadas por aspas simples, aspas duplas ou, quando templates, por crases.`);

console.log(`O objeto global String é um construtor para strings, ou uma sequência de caracteres.`)


let string1 = "EuXsouYumaZString"
console.log(string1, "...do tipo..." , typeof string1);

console.log(string1.charAt(5));
console.log(string1.charAt(8));
console.log(string1.length);
console.log(string1.charCodeAt(3)) //Unicode
console.log(string1.indexOf("Z"));
console.log(string1.substring(6, 11));
console.log("Descobri ".concat(string1).concat("!!!"));
console.log(string1.replace("X", " ").replace("Y", " ").replace("Z", " "));


//Transformando uma String em uma Array com split
console.log("Ana, Maria, Fernanda".split(","));


console.log("24"/3);  //aqqui vai dividir
console.log("3" + 9); //aqui vai concatenar e nao multiplicar