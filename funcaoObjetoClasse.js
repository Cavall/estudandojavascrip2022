//Objetos e classes sao funcoes
//Objetose classes criadas com new sao objetos derivados de funcoes


console.log(typeof Object); //Objeto eh function
console.log(typeof new Object); //Agora eh object

const Cliente = function(){}; //criei uma function
console.log(typeof Cliente); //Cliente eh function
console.log(typeof new Cliente); //Agora Cliente eh object

class Produto {}; //apos ES 2015
console.log(typeof Produto); //Produto eh function
console.log(typeof new Produto) //Agora Produto eh object
