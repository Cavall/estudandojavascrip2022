console.log('No javascprit, runtime browser, o objeto glogal eh o Window');

var a = "O que sou"
//console.log(window.a) 
//nao executa porque nao estamos no browser
//Diretamente no browser vai retornar "O que sou"
//porque no browser var eh escopo global

console.log(this.a) //retorna undefined porque nao estamos no browser
//no browser retornaria a string esperada

console.log("evite compatilhar variaves no escopo global")

console.log ("Um modo de fugir do aspecto global eh criando objetos")

let pessoa = {nome: 'Antonio', responder: function() {return `Eu sou ${this.nome}`}}

console.log(pessoa.responder());
console.log(pessoa.nome);
//console.log(this.pessoa.nome); so funciona no browser porque la o escopo
//eh global

//pessoa.verificarEscopo = function() {return this === window};
//pessoa.verificarEscopo()

//AGORA NO ESCOPO DO VS CODE ....AULA DE NODE...temos que conhecer module do node

let a7 = 7;  //local
global.b = 29; //global
this.c = 77; //no node cada arquivo representa um module
this.d = false
this.e = 'testando'

console.log(a7);
console.log(global.b);
console.log(this.c);
console.log(module.exports.c);
console.log(module.exports === this);
console.log(module.exports); //vai aparecer um objeto

//NAO FACA ISSO..sem var e sem let
maluca = 9; //vai ficar disponivel geral
console.log(global.maluca) 


//RESUMO DA AULA
console.log(`EM QUAL RUNTIME EU ESTOU...NECESSARIO SABER SEMPRE`)